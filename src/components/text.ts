import { Game } from "../game";
import { ComponentBase } from "./component-base";

type TextConstructor = {
  game: Game;
  text?: string;
  font?: string;
  color?: string;
  x?: number;
  y?: number;
};

export class Text extends ComponentBase {
  public text: string;
  public font: string;
  public color: string;
  public x: number;
  public y: number;

  constructor({
    game,
    text = "",
    font = "30px Arial",
    color = "black",
    x = 0,
    y = 0,
  }: TextConstructor) {
    super(game);
    this.text = text;
    this.font = font;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  update() {
    this.context.font = this.font;
    this.context.fillStyle = this.color;
    this.context.fillText(this.text, 10, 50);
  }
}
