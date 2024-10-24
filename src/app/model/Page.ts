import { Block } from "./Block";

export class Page {
  id: number;
  title: string;
  blocks: Block<any>[] = [];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  public getBlock(blockId: number): Block<any> | undefined {
    const filtered = this.blocks.filter(b => b.id == blockId);
    if (filtered.length == 0) {
      return undefined;
    }
    return filtered[0];
  }

  public withBlock(block: Block<any>): Page {
    const newPage = new Page(this.id, this.title);
    newPage.blocks = [...this.blocks, block];
    return newPage;
  }

  public withUpdatedBlock<T>(block: Block<T>, callback: (current: T) => T): Page {
    const newPage = new Page(this.id, this.title);
    newPage.blocks = this.blocks.map(b => {
      if (b.id !== block.id) {
        return b;
      }
      // this is a very dirty hack but I don't care at the moment
      const newBlock = {} as Block<T>;
      newBlock.id = b.id;
      newBlock.order = b.order;
      newBlock.type = b.type;
      newBlock.props = callback(b.props);
      return newBlock;
    });
    return newPage;
  }
}