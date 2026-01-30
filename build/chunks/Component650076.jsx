/** Chunk was on 49559 **/
/** chunk id: 650076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk141482 = require("./141482.js");

function d(e) {
  let {
    type: t,
    options: n,
    required: a
  } = e, d = l.useMemo(() => {
    var e;
    return null == (e = n.find(e => e.default)) ? true : e.value
  }, [n]), {
    state: p,
    executeStateUpdate: m
  } = (0, s.At)(e, null != d ? {
    type: t,
    value: d
  } : true), f = l.useMemo(() => (null == p ? true : p.type) === t ? p.value : null, [p, t]), O = null != f, b = l.useMemo(() => n.map(e => ({
    name: e.label,
    value: e.value,
    desc: e.description
  })), [n]), y = e => {
    m({
      type: t,
      value: e
    })
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.z6M, {
      options: b,
      value: null != f ? f : "",
      onChange: y,
      required: a
    }), !a && (0, r.jsx)("div", {
      className: i()(u.H, {
        [u.d]: !O
      }),
      "aria-hidden": !O,
      children: (0, r.jsx)(o.Button, {
        text: c.intl.string(c.t["5uAtZN"]),
        variant: "secondary",
        size: "sm",
        onClick: () => y(null)
      })
    })]
  })
}