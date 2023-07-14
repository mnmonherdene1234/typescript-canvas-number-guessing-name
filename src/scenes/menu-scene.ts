import { Text } from "../components/text";
import { Game } from "../game";
import { SceneBase } from "./scene-base";

export class MenuScene extends SceneBase {
  constructor(game: Game) {
    super(game);

    const text = new Text({ game: game, text: "Why?", color: "red" });
    this.components.push(text);
  }

  start() {}

  update() {}
}
