//

function videoKit_setup() {
  //
  videoKit = p5videoKit_init(videoKit_config);

  videoKit.save_canvas_handler = save_canvas_handler;

  videoKit.import_effect = import_effect;
}

let videoKit_config = {
  // effects for import, will appear at top of the effect menu

  // an EFFECT can have many PROPERTIES specific to the effect
  // for example canvas size, color, cell size,
  // to see this, choose "circle" in Effect1 and Effect2,
  // then choose different properties like number of circles per frame
  // or the video source

  // the "effects" array creates a pull-down menu
  // which offers a first selection of effects added to the VideoKit library,
  // you could add some more !!!!

  effects: [
    { label: 'a_example_props', import_path: 'effects/eff_a_example_props.js' },
    { label: 'eff_simplex', import_path: 'effects/eff_simplex.js' },
    { label: 'eff_worley', import_path: 'effects/eff_worley.js' },
    { label: 'ticker', import_path: 'effects/ticker/eff_ticker.js', ui_label: 'ticker' },
  ],

  // settings for import, will appear in the settings menu

  // SETTINGS will load a save .json file with predefined values
  // for all the settings associated with the effect
  // "settings" is an array of

  settings: [{ label: 'videoKit', import_path: 'settings/videoKit.json' }],
};

function ui_log(...args) {
  console.log(...args);
}

function ui_verbose(...args) {
  // console.log(...args);
}

// --
// for debugging
let a_import_err;

// eff_meta
// { label, import_path, factory, index }

//
// importing of effects must be done outside of the library with this call-back
//
function import_effect(eff_meta) {
  console.log('import_effect label', eff_meta.label);
  console.log('import_effect import_path', eff_meta.import_path);
  return new Promise((resolve, reject) => {
    import('./' + eff_meta.import_path)
      .then((module) => {
        console.log('import_effect label', eff_meta.label, 'module', module);
        resolve(module.default);
      })
      .catch((err) => {
        console.log('import_effect label', eff_meta.label, '\n err', err);
        a_import_err = err;
        reject(err);
      });
  });
}
