//
// eff_a_example_props - using meta_props for showing effect properties in the dashboard
//
export default class eff_a_example_props {
  static meta_props = [
    //
    // meta_props
    //  array of entries for each effect property that will be appear in the ui panel
    //  eg: { prop: 'num_prop', label: 'prop1', selection: [100, 200, 300, 400] },
    //  prop -- property name
    //  label -- optional label for property
    //  selection | slider | textInput | button -- type of ui element
    //  style -- optional style for element
    //
    { prop: 'num_prop', label: 'prop1', selection: [100, 200, 300, 400] },
    { prop: 'str_prop2', label: 'prop2', selection: ['red', 'green', 'yellow'] },
    { prop: 'textInput_prop', label: 'text1', textInput: 'Hello world!', style: 'width:40%', br: 1 },
    // br: 1 creates a line break
    { prop: 'slider1_prop', label: 'slider1', slider: { min: 0, max: 8 }, style: 'width:20%', br: 1 },
    // line break
    { prop: 'slider2_prop', label: 'slider2', slider: { min: -5, max: 5 }, style: 'width:20%', default: 5 },
    { prop: 'slider3_prop', label: 'slider3', slider: { step: 0.01 }, style: 'width:20%', br: 1 },
    // line break
    {
      prop: 'button1',
      button: (inst, aPatch) => {
        // console.log('button1_prop inst', inst, 'aPatch', aPatch);
        inst.xspeed = inst.xspeed ? 0 : 1;
        console.log('eff_a_example_props button1_prop inst.xspeed', inst.xspeed);
      },
      style: 'width:40%',
    },
    {
      label: 'button2',
      button: (inst, aPatch) => {
        // console.log('button2_prop inst', inst, 'aPatch', aPatch);
        inst.xspeed = inst.xspeed == 1 ? -1 : 1;
        console.log('eff_a_example_props button2_prop inst.xspeed', inst.xspeed);
      },
      style: 'width:40%',
    },
    // span2: { span: 'span2: ', style: 'width:10%' }, // !!@ style not taken
  ];

  // new eff_example({message_prop1, num_prop, text_prop})
  constructor(props) {
    Object.assign(this, props);
    // console.log('eff_a_example_props props', props);
    let { width, height } = this.input;
    this.output = createGraphics(width, height);
    console.log('eff_a_example_props constructor width, height', width, height);

    // xpos and ypos unit measure 0.0 to 1.0
    this.xpos = 0;
    this.ypos = 0;
    this.xspeed = 0;
    this.yspeed = 0;
  }

  prepareOutput() {
    // console.log('eff_example prepareOutput text_prop', this.text_prop);
    let { output } = this;
    let { width, height } = this.output;
    output.fill(255);
    {
      let x = 0;
      let y = height * 0.1;
      let txsize = height * 0.1;
      output.textSize(txsize);
      let txt = this.textInput_prop + ' ' + this.num_prop + ' ' + this.slider1_prop;
      output.text(txt, x, y);
    }
    {
      this.xpos += this.xspeed * 0.005;
      this.ypos += this.yspeed * 0.005;
      let wh = width * 0.5;
      let hh = height * 0.75;
      let x = Math.floor(wh + Math.sin(this.xpos) * wh);
      let y = Math.floor(hh + Math.sin(this.ypos) * hh);
      output.circle(x, y, this.num_prop);
    }
  }
}
