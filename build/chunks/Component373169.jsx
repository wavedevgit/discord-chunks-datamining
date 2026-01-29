/** Chunk was on 2827 **/
/** chunk id: 373169, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => g
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

function g() {
  let e = (0, l.bG)([o.default], () => o.default.locale),
    [t, g] = i.useState(e),
    A = i.useMemo(() => (0, _.getAvailableLocales)().map(e => {
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
          children: _.intl.string(e.localizedName)
        })
      }
    }), []),
    f = i.useCallback(e => {
      g(e), m.nextTick(() => {
        a.Ay.updateLocale(e), (0, s.OoC)(d.USER_SETTINGS_MODAL_KEY) && (0, d.openUserSettings)(c.X.LANGUAGE_AND_TIME_PANEL, {
          section: u.nc_.LANGUAGE
        })
      })
    }, []);
  return (0, r.jsx)(s.ZiE, {
    selectionMode: "single",
    label: _.intl.string(_.t["mx+sp7"]),
    description: _.intl.string(_.t.rTPlcq),
    value: t,
    options: A,
    onSelectionChange: f
  })
}