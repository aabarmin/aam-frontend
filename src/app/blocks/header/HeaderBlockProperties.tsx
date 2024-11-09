import { BlockUpdatePropsRequest } from "@/app/hooks/block/BlockUpdatePropsRequest";
import { useAppState } from "@/app/hooks/StateProvider";
import { updateBlock } from "@/lib/client/blockActions";
import { FormatAlignCenter, FormatAlignLeft, FormatAlignRight } from "@mui/icons-material";
import { FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { z } from "zod";
import { BlockManagement } from "../components/BlockManagement";
import { HeaderAlignment, HeaderBlock, HeaderBlockProps, HeaderLevel } from "./HeaderBlock";

type FormState = {
  errors?: {
    level?: string[],
    alignment?: string[],
    text?: string[]
  }
} | undefined;

export function HeaderBlockProperties(block: HeaderBlock) {
  const validatinonScheme = z.object({
    level: z.string(),
    alignment: z.string(),
    text: z.string().min(3)
  });
  const [validation, setValidation] = useState<FormState>();
  const { state, dispatch } = useAppState();
  const [isLoading, setLoading] = useState(false);
  const [form, setFormData] = useState(({
    level: block.props.level,
    alignment: block.props.alignment,
    text: block.props.text
  }));
  const handleInput = (field: string, value: string | HeaderLevel | HeaderAlignment | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  }
  const saveBlock = () => {
    const props = new HeaderBlockProps()
    props.alignment = HeaderAlignment[form['alignment'] as keyof typeof HeaderAlignment]
    props.level = HeaderLevel[form['level'] as keyof typeof HeaderLevel]
    props.text = form['text']
    setLoading(true);

    const validationResult = validatinonScheme.safeParse(props);
    if (!validationResult.success) {
      setLoading(false);
      setValidation({
        errors: validationResult.error.flatten().fieldErrors
      });
      return;
    }
    setValidation(undefined);

    updateBlock(block, props).then(() => {
      setLoading(false);
      dispatch(new BlockUpdatePropsRequest(
        block,
        () => props
      ))
    })
  }
  const resetBlock = () => {
    setFormData({
      level: block.props.level,
      alignment: block.props.alignment,
      text: block.props.text
    })
  }
  useEffect(() => { resetBlock() }, [state]); // dirty hack but I don't care now

  return (
    <Stack spacing={2}>
      <Box sx={{
        display: 'flex',
        gap: 2
      }}
      >
        <Button
          variant="outlined"
          disabled={isLoading}
          onClick={resetBlock}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={saveBlock}
          disabled={isLoading}>
          Save
        </Button>
        <BlockManagement
          block={block}
          setLoading={setLoading}
          disabled={isLoading} />
      </Box>

      {isLoading && <LinearProgress />}

      <Typography>
        Level:
      </Typography>

      <Select
        placeholder="Header level"
        value={form['level']}
        onChange={(e: SelectChangeEvent) => handleInput('level', e.target.value)}>
        <MenuItem value={HeaderLevel.H1}>Level 1</MenuItem>
        <MenuItem value={HeaderLevel.H2}>Level 2</MenuItem>
        <MenuItem value={HeaderLevel.H3}>Level 3</MenuItem>
      </Select>
      {validation?.errors?.level && (
        <FormHelperText error>
          {validation.errors.level.join(', ')}
        </FormHelperText>
      )}

      <Typography>
        Alignment:
      </Typography>

      <ToggleButtonGroup
        exclusive
        onChange={(e, v) => handleInput('alignment', v)}
        disabled={isLoading}
        value={form['alignment']}>
        <ToggleButton value={HeaderAlignment.LEFT}>
          <FormatAlignLeft />
        </ToggleButton>
        <ToggleButton value={HeaderAlignment.CENTER}>
          <FormatAlignCenter />
        </ToggleButton>
        <ToggleButton value={HeaderAlignment.RIGHT}>
          <FormatAlignRight />
        </ToggleButton>
      </ToggleButtonGroup>
      {validation?.errors?.alignment && (
        <FormHelperText error>
          {validation.errors.alignment.join(', ')}
        </FormHelperText>
      )}

      <TextField
        disabled={isLoading}
        label="Text"
        onChange={(e) => handleInput('text', e.target.value)}
        error={!!validation?.errors?.text}
        helperText={validation?.errors?.text?.join(', ')}
        value={form['text']}
      />
    </Stack>
  );
}