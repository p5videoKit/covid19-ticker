//
// eff_worley

export default class eff_worley {
  static meta_props = [
    //
    { prop: 'num_prop', label: 'prop1', selection: [100, 200, 300, 400] },
  ];

  // new eff_example({message_prop1, num_prop, text_prop})
  constructor(props) {
    Object.assign(this, props);
    // console.log('eff_a_example_props props', props);
    this.points = [];
    this.frameIndex = 0;
    this.frameDelta = 1;
    this.initGraphics();
    this.initPoints();
  }
  initGraphics() {
    this.output = createGraphics(100, 100);
    console.log('eff_worley initGraphics width, height', width, height);
  }
  initPoints() {
    let points = this.points;
    let w = 100;
    let h = 100;
    for (let i = 0; i < 20; i++) {
      let x = random(w);
      let y = random(h);
      let z = random(w);
      points[i] = { x, y, z };
      // points[i] = createVector(random(width), random(height), random(width));
    }
  }
  prepareOutput() {
    // console.log('eff_example prepareOutput text_prop', this.text_prop);
    let { output } = this;
    this.updateLayer(output);
  }

  updateLayer(layer) {
    let points = this.points;
    layer.loadPixels();
    let w = layer.width;
    let h = layer.height;
    this.frameIndex += this.frameDelta;
    if (this.frameIndex >= w || this.frameIndex < 0) {
      this.frameDelta = this.frameDelta * -1;
      this.frameIndex += this.frameDelta;
    }
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        let distances = [];
        for (let i = 0; i < points.length; i++) {
          let v = points[i];
          let z = this.frameIndex;
          // let z = frameCount % w;
          let d = dist(x, y, z, v.x, v.y, v.z);
          distances[i] = d;
        }
        let sorted = sort(distances);

        // let r = map(sorted[0], 0, 150, 0, 255);
        // let g = map(sorted[1], 0, 50, 255, 0);
        // let b = map(sorted[2], 0, 200, 255, 0);

        // bright heart
        let r = map(sorted[0], 0, 50, 0, 255);
        let g = map(sorted[1], 0, 50, 0, 255);
        let b = map(sorted[2], 0, 50, 0, 255);

        let index = (x + y * w) * 4;
        layer.pixels[index + 0] = r;
        layer.pixels[index + 1] = g;
        layer.pixels[index + 2] = b;
        layer.pixels[index + 3] = 255;
      }
    }
    layer.updatePixels();
  }
}
