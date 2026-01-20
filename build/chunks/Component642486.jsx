/** Chunk was on web.js **/
/** chunk id: 642486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk706454 = require("./706454.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk889139 = require("./889139.js"),
  Chunk444675 = require("./444675.js");

function h() {
  let e = (0, a.e7)([l.default], () => l.default.locale),
    [t, h] = i.useState(e),
    m = i.useMemo(() => (0, f.getAvailableLocales)().map(e => {
      let t;
      try {
        t = n(621287)("./".concat(e.value, ".png"))
      } catch (e) {
        t = n(1474)
      }
      return {
        id: e.value,
        value: e.value,
        label: e.name,
        leading: (0, r.jsx)("div", {
          className: p.flag,
          "aria-hidden": true,
          children: (0, r.jsx)("img", {
            alt: "",
            src: t,
            className: p.flagImage
          })
        }),
        trailing: (0, r.jsx)("span", {
          className: p.localizedName,
          children: f.intl.string(e.localizedName)
        })
      }
    }), []),
    g = i.useCallback(e => {
      h(e), _.nextTick(() => {
        s.ZP.updateLocale(e), (0, o.Mr3)(u.USER_SETTINGS_MODAL_KEY) && (0, u.openUserSettings)(c.n.LANGUAGE_AND_TIME_PANEL, {
          section: d.oAB.LANGUAGE
        })
      })
    }, []);
  return (0, r.jsx)(o.VcW, {
    selectionMode: "single",
    label: f.intl.string(f.t["mx+sp7"]),
    description: f.intl.string(f.t.rTPlcq),
    value: t,
    options: m,
    onSelectionChange: g
  })
}