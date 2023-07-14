import { Game } from "../game";

export abstract class ComponentBase {
  public game: Game;
  public context: CanvasRenderingContext2D;

  constructor(game: Game) {
    this.game = game;
    this.context = this.game.canvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
  }

  abstract update(): any;
}
