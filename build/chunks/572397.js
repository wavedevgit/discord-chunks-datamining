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
    let e = (0, i.e7)([d.Z], () => d.Z.gradientPreset),
      t = (0, i.e7)([s.ZP], () => s.ZP.useSystemTheme === _.KW.ON),
      [n, a] = (0, r.useState)(t);
    return (0, r.useEffect)(() => {
      null == e && a(t)
    }, [e, t]), (0, r.useCallback)(() => {
      null != e && ((0, u.kj)(), n && (0, o.hi)(_.KW.ON))
    }, [e, n])
  },
  m = () => {
    let {
      previewPaneVariant: e
    } = (0, i.cj)([d.Z], () => ({
      previewPaneVariant: d.Z.isPreview ? p.h1.FREE : p.h1.PREMIUM_STANDARD
    })), t = (0, i.e7)([l.Z], () => {
      var e;
      let t = null == (e = l.Z.settings.appearance) ? true : e.theme;
      return "default ".concat(t === a.Q2.LIGHT ? f.BRd.LIGHT : f.BRd.DARK)
    });
    return (0, r.useCallback)(n => {
      c.default.track(n, {
        preview_pane_variant: e,
        original_theme: t
      })
    }, [e, t])
  }