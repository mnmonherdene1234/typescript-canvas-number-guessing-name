import { SceneBase } from "./scenes/scene-base";

export class ScenesManager {
  public scene: SceneBase;
  constructor(scene: SceneBase) {
    this.scene = scene;
  }

  update() {
    if (this.scene) {
      this.scene.updateComponents();
      this.scene.update();
    }
  }
}
