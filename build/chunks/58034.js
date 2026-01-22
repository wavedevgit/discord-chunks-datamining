/** Chunk was on web.js **/
/** chunk id: 58034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => m,
  Z: () => h
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk973654 = require("./973654.js"),
  Chunk964404 = require("./964404.js"),
  Chunk617617 = require("./617617.js"),
  Chunk954571 = require("./954571.js"),
  Chunk823459 = require("./823459.js"),
  Chunk47671 = require("./47671.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk185928 = require("./185928.js");
let h = () => {
    let e = (0, i.bG)([d.A], () => d.A.gradientPreset),
      t = (0, i.bG)([o.Ay], () => o.Ay.useSystemTheme === _.Q_.ON),
      [n, a] = (0, r.useState)(t);
    return (0, r.useEffect)(() => {
      null == e && a(t)
    }, [e, t]), (0, r.useCallback)(() => {
      null == e || ((0, u.S8)(), n && (0, s.k7)(_.Q_.ON))
    }, [e, n])
  },
  m = () => {
    let {
      previewPaneVariant: e
    } = (0, i.cf)([d.A], () => ({
      previewPaneVariant: d.A.isPreview ? p.tz.FREE : p.tz.PREMIUM_STANDARD
    })), t = (0, i.bG)([l.A], () => {
      var e;
      let t = null == (e = l.A.settings.appearance) ? true : e.theme;
      return "default ".concat(t === a.Sx.LIGHT ? f.NJ8.LIGHT : f.NJ8.DARK)
    });
    return (0, r.useCallback)(n => {
      c.default.track(n, {
        preview_pane_variant: e,
        original_theme: t
      })
    }, [e, t])
  }