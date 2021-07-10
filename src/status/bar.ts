import type { Workspace } from "obsidian";
import { VIEW_TYPE_STATS } from "src/constants";

export class StatusBar {
  private statusBarEl: HTMLElement;

  constructor(statusBarEl: HTMLElement, workspace: Workspace) {
    this.statusBarEl = statusBarEl;

    this.statusBarEl.addClass("bwc-status-bar");
    this.statusBarEl.addEventListener("click", (e) => {
      workspace.setActiveLeaf(
        workspace.getLeavesOfType(VIEW_TYPE_STATS)[0],
        false,
        true
      );
    });
  }

  displayText(text: string) {
    this.statusBarEl.setText(text);
  }
}
