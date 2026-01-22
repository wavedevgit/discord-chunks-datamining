/** Chunk was on web.js **/
/** chunk id: 373169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk773669 = require("./773669.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk58477 = require("./58477.js"),
  Chunk72290 = require("./72290.js");

function h() {
  let e = (0, a.bG)([l.default], () => l.default.locale),
    [t, h] = i.useState(e),
    m = i.useMemo(() => (0, f.getAvailableLocales)().map(e => {
      let t;
      try {
        t = n(579832)("./".concat(e.value, ".png"))
      } catch (e) {
        t = n(432706)
      }
      return {
        id: e.value,
        value: e.value,
        label: e.name,
        leading: (0, r.jsx)("div", {
          className: p.Jt,
          "aria-hidden": true,
          children: (0, r.jsx)("img", {
            alt: "",
            src: t,
            className: p.Eb
          })
        }),
        trailing: (0, r.jsx)("span", {
          className: p.hI,
          children: f.intl.string(e.localizedName)
        })
      }
    }), []),
    g = i.useCallback(e => {
      h(e), _.nextTick(() => {
        o.Ay.updateLocale(e), (0, s.OoC)(u.USER_SETTINGS_MODAL_KEY) && (0, u.openUserSettings)(c.X.LANGUAGE_AND_TIME_PANEL, {
          section: d.nc_.LANGUAGE
        })
      })
    }, []);
  return (0, r.jsx)(s.ZiE, {
    selectionMode: "single",
    label: f.intl.string(f.t["mx+sp7"]),
    description: f.intl.string(f.t.rTPlcq),
    value: t,
    options: m,
    onSelectionChange: g
  })
}