/** Chunk was on 77870 **/
/** chunk id: 388096, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk789906 = require("./789906.js");

function u(e) {
  let {
    defaultValue: t,
    onChange: n
  } = e, [i, u] = l.useState(t), d = s()(), p = s()().add(365, "days"), h = e => {
    e.isValid() && u(e)
  };
  return l.useEffect(() => {
    null == n || n(i)
  }, [i, n]), (0, r.jsxs)(a.BJc, {
    direction: "horizontal",
    gap: 16,
    className: c.i,
    children: [(0, r.jsx)("div", {
      className: c.f,
      children: (0, r.jsx)(a.J3s, {
        required: true,
        label: o.intl.string(o.t.pSZKvM),
        value: i,
        onSelect: h,
        minDate: d,
        maxDate: p,
        disabled: false
      })
    }), (0, r.jsx)("div", {
      className: c.f,
      children: (0, r.jsx)(a.czz, {
        label: o.intl.string(o.t.GOmEb8),
        required: true,
        value: i,
        onChange: h,
        hideValue: false,
        disabled: false
      })
    })]
  })
}