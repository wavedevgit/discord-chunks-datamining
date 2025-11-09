/** Chunk was on 50642 **/
/** chunk id: 353077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk675374 = require("./675374.js");

function u(e) {
  let {
    defaultValue: t,
    onChange: n
  } = e, [l, u] = r.useState(t), d = a()(), p = a()().add(365, "days"), h = e => {
    e.isValid() && u(e)
  };
  return r.useEffect(() => {
    null == n || n(l)
  }, [l, n]), (0, i.jsxs)(o.Kqy, {
    direction: "horizontal",
    gap: 16,
    className: c.wrapper,
    children: [(0, i.jsx)("div", {
      className: c.column,
      children: (0, i.jsx)(o.Wrb, {
        required: true,
        label: s.intl.string(s.t.pSZKvM),
        value: l,
        onSelect: h,
        minDate: d,
        maxDate: p,
        disabled: false
      })
    }), (0, i.jsx)("div", {
      className: c.column,
      children: (0, i.jsx)(o.MGJ, {
        label: s.intl.string(s.t.GOmEb8),
        required: true,
        value: l,
        onChange: h,
        hideValue: false,
        disabled: false
      })
    })]
  })
}