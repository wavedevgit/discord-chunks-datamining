/** Chunk was on 54400 **/
/** chunk id: 831895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699758 = require("./699758.js"),
  Chunk913338 = require("./913338.jsx"),
  Chunk388032 = require("./388032.jsx");

function C(e) {
  let {
    defaultCategory: t,
    onCategoryChange: n,
    className: C
  } = e, [d, c] = i.useState(t), p = i.useMemo(() => [{
    name: o.intl.string(o.t["6Zuiv7"]),
    value: s.KN.Trick,
    key: "Trick",
    icon: (0, r.jsx)(l.yDF, {
      size: "sm",
      color: "currentColor"
    })
  }, {
    name: o.intl.string(o.t["2UeOlZ"]),
    value: s.KN.Treat,
    key: "Treat",
    icon: (0, r.jsx)(l.sq, {
      size: "sm",
      color: "currentColor"
    })
  }], []), u = i.useCallback(e => {
    c(e.value), n(e.value)
  }, [n]);
  return (0, r.jsx)(a.w, {
    className: C,
    options: p,
    value: d,
    onChange: u
  })
}