'use client';

import { AccountCircle, ThumbUp, Title } from "@mui/icons-material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { BlockSelectRequest } from "../hooks/block/BlockSelectRequest";
import { useAppState } from "../hooks/StateProvider";
import { BlockType } from "../model/Block";

export function PageBlockList() {
  const { state, dispatch } = useAppState();

  const pageBlocks = state.getCurrentPage().blocks
  const blockSelect = (blockId: number) => {
    const block = state.getBlock(blockId)
    if (block != undefined) {
      dispatch(new BlockSelectRequest(block))
    }
  }

  return (
    <Box sx={{ padding: 2 }}>
      <List>
        {pageBlocks.map(block => {
          if (block.type == BlockType.BLOCK_HEADER) {
            return (
              <ListItemButton key={block.id} onClick={() => blockSelect(block.id)}>
                <ListItemIcon>
                  <Title />
                </ListItemIcon>
                Header
              </ListItemButton>
            );
          } else if (block.type == BlockType.BLOCK_AVATAR) {
            return (
              <ListItemButton key={block.id} onClick={() => blockSelect(block.id)}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                Avatar
              </ListItemButton>
            );
          } else if (block.type == BlockType.BLOCK_SOCIAL_NETWORKS) {
            return (
              <ListItemButton key={block.id} onClick={() => blockSelect(block.id)}>
                <ListItemIcon>
                  <ThumbUp />
                </ListItemIcon>
                Social Networks
              </ListItemButton>
            )
          } else {
            return (
              <ListItem key={block.id} onClick={() => blockSelect(block.id)}>
                Unknown block of type {block.type}, update PageBlockList
              </ListItem>
            )
          }
        })}
      </List>
    </Box>
  );
}