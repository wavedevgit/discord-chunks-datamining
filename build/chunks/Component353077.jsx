/** Chunk was on 82124 **/
/** chunk id: 353077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk772487 = require("./772487.js");

function u(e) {
  let {
    defaultValue: t,
    onChange: n
  } = e, [l, u] = i.useState(t), d = a()(), p = a()().add(365, "days"), f = e => {
    e.isValid() && u(e)
  };
  return i.useEffect(() => {
    null == n || n(l)
  }, [l, n]), (0, r.jsxs)(o.Kqy, {
    direction: "horizontal",
    gap: 16,
    className: c.wrapper,
    children: [(0, r.jsx)("div", {
      className: c.column,
      children: (0, r.jsx)(o.Wrb, {
        required: true,
        label: s.intl.string(s.t.pSZKvM),
        value: l,
        onSelect: f,
        minDate: d,
        maxDate: p,
        disabled: false
      })
    }), (0, r.jsx)("div", {
      className: c.column,
      children: (0, r.jsx)(o.MGJ, {
        label: s.intl.string(s.t.GOmEb8),
        required: true,
        value: l,
        onChange: f,
        hideValue: false,
        disabled: false
      })
    })]
  })
}