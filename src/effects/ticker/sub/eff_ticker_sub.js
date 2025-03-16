//

export default class eff_ticker_sub {
  constructor(props) {
    Object.assign(this, props);

    this.width = this.eff_spec.urect.width;
    this.height = this.eff_spec.urect.height;
    this.output = createGraphics(width, height);
    // console.log('width', this.width);

    // this.display_single_date = this.most_lost_ndays != 0;

    // dynamic import - .
    import('./sub/init.js')
      .then((module) => {
        // console.log('eff_ticker module', module);
        this.init();
      })
      .catch((err) => {
        console.log('eff_ticker err', err);
      });
  }
  init() {
    console.log('eff_ticker_sub init');
  }
  prepareOutput() {
    console.log('eff_ticker prepareOutput stub');
  }
}
