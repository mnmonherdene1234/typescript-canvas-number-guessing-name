import { ScenesManager } from "./scenes-manager";
import { MenuScene } from "./scenes/menu-scene";

type GameConstructor = {
  width?: number;
  height?: number;
  gameSpeed?: number;
  isRunning?: boolean;
};

export class Game {
  public canvas: HTMLCanvasElement;
  public scenesManager: ScenesManager;
  public gameSpeed: number;
  public isRunning: boolean;

  constructor({
    width = 800,
    height = 600,
    gameSpeed = 30,
    isRunning = true,
  }: GameConstructor) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.scenesManager = new ScenesManager(new MenuScene(this));
    this.gameSpeed = gameSpeed;
    this.isRunning = isRunning;
    this.update();
    document.body.append(this.canvas);
  }

  private async update() {
    while (true) {
      if (this.isRunning) {
        this.scenesManager.update();

        await new Promise((resolve) => setTimeout(resolve, this.gameSpeed));
      }
    }
  }
}
