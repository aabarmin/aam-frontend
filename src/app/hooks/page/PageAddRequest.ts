import { Page } from "@/app/model/Page";
import { StateChangeRequest, StateChangeRequestType } from "../StateChangeRequest";

export class PageAddRequest implements StateChangeRequest {
  type: StateChangeRequestType;
  page: Page;

  constructor(page: Page) {
    this.type = StateChangeRequestType.PAGE_ADD;
    this.page = page;
  }
}