// eff_a_example_props - using meta_props for showing effect properties in the dashboard
//
export default class eff_worley {
  static meta_props = [
    //
    { prop: 'num_prop', label: 'prop1', selection: [100, 200, 300, 400] },
  ];

  // new eff_example({message_prop1, num_prop, text_prop})
  constructor(props) {
    Object.assign(this, props);
    // console.log('eff_a_example_props props', props);
    let { width, height } = this.input;
    this.output = createGraphics(width, height);
    console.log('eff_worley constructor width, height', width, height);
  }

  prepareOutput() {
    // console.log('eff_example prepareOutput text_prop', this.text_prop);
    let { output } = this;
    let { width, height } = output;
    output.fill(255);
    {
      let x = 0 + width * 0.5;
      let y = height * 0.1;
      let txsize = height * 0.1;
      output.textSize(txsize);
      let txt = this.num_prop;
      output.text(txt, x, y);
    }
  }
}
