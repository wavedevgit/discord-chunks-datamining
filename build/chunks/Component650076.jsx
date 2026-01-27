/** Chunk was on 20941 **/
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
    state: m,
    executeStateUpdate: f
  } = (0, o.At)(e, null != d ? {
    type: t,
    value: d
  } : true), p = l.useMemo(() => (null == m ? true : m.type) === t ? m.value : null, [m, t]), h = null != p, b = l.useMemo(() => n.map(e => ({
    name: e.label,
    value: e.value,
    desc: e.description
  })), [n]), g = e => {
    f({
      type: t,
      value: e
    })
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.z6M, {
      options: b,
      value: null != p ? p : "",
      onChange: g,
      required: a
    }), !a && (0, r.jsx)("div", {
      className: i()(u.H, {
        [u.d]: !h
      }),
      "aria-hidden": !h,
      children: (0, r.jsx)(s.Button, {
        text: c.intl.string(c.t["5uAtZN"]),
        variant: "secondary",
        size: "sm",
        onClick: () => g(null)
      })
    })]
  })
}