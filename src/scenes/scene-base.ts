import { ComponentBase } from "../components/component-base";
import { Game } from "../game";

export abstract class SceneBase {
  public game: Game;
  public components: ComponentBase[];

  constructor(game: Game) {
    this.game = game;
    this.components = [];
  }

  public updateComponents() {
    for (const component of this.components) {
      component.update();
    }
  }

  abstract update(): any;
}
