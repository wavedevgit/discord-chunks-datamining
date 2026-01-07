/** Chunk was on web.js **/
/** chunk id: 642486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
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
  let e = (0, a.e7)([c.default], () => c.default.locale),
    [t, h] = i.useState(e),
    g = i.useMemo(() => (0, p.getAvailableLocales)().map(e => ({
      value: e.value,
      label: e.name,
      localizedName: p.intl.string(e.localizedName)
    })), []),
    E = i.useCallback(e => {
      let t, i = null == e ? true : e.value;
      if (null == i) return null;
      try {
        t = n(621287)("./".concat(i, ".png"))
      } catch (e) {
        t = n(1474)
      }
      return (0, r.jsx)("div", {
        className: _.flag,
        "aria-hidden": true,
        children: (0, r.jsx)("img", {
          alt: "",
          src: t,
          className: _.flagImage
        })
      })
    }, []),
    b = i.useCallback(e => {
      h(e), m.nextTick(() => {
        l.ZP.updateLocale(e), (0, s.Mr3)(d.USER_SETTINGS_MODAL_KEY) && (0, d.openUserSettings)(u.n.LANGUAGE_AND_TIME_PANEL, {
          section: f.oAB.LANGUAGE
        })
      })
    }, []);
  return (0, r.jsx)(o.d, {
    label: p.intl.string(p.t["mx+sp7"]),
    description: p.intl.string(p.t.rTPlcq),
    value: t,
    options: g,
    onChange: b,
    renderOptionPrefix: E,
    renderOptionSuffix: e => (0, r.jsx)("span", {
      className: _.localizedName,
      children: null == e ? true : e.localizedName
    })
  })
}