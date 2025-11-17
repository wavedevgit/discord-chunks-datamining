/** Chunk was on web.js **/
/** chunk id: 572397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => h,
  q: () => m
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk781391 = require("./781391.js"),
  Chunk740492 = require("./740492.js"),
  Chunk581883 = require("./581883.js"),
  Chunk626135 = require("./626135.js"),
  Chunk238302 = require("./238302.js"),
  Chunk514361 = require("./514361.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk874893 = require("./874893.js");
let h = () => {
    let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset),
      t = (0, Chunk442837.e7)([Chunk740492.ZP], () => Chunk740492.ZP.useSystemTheme === Chunk874893.KW.ON),
      [n, a] = (0, Chunk473749.useState)(exports);
    return (0, Chunk473749.useEffect)(() => {
      null == module && Chunk524437(exports)
    }, [module, exports]), (0, Chunk473749.useCallback)(() => {
      null != module && ((0, Chunk238302.kj)(), require && (0, Chunk781391.hi)(Chunk874893.KW.ON))
    }, [module, require])
  },
  m = () => {
    let {
      previewPaneVariant: e
    } = (0, Chunk442837.cj)([Chunk514361.Z], () => ({
      previewPaneVariant: Chunk514361.Z.isPreview ? Chunk474936.h1.FREE : Chunk474936.h1.PREMIUM_STANDARD
    })), t = (0, Chunk442837.e7)([Chunk581883.Z], () => {
      var e;
      let t = null == (e = Chunk581883.Z.settings.appearance) ? true : module.theme;
      return "default ".concat(exports === Chunk524437.Q2.LIGHT ? Chunk981631.BRd.LIGHT : Chunk981631.BRd.DARK)
    });
    return (0, Chunk473749.useCallback)(n => {
      c.default.track(n, {
        preview_pane_variant: e,
        original_theme: t
      })
    }, [module, exports])
  }