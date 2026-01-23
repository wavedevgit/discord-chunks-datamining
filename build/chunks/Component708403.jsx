/** Chunk was on 22477 **/
/** chunk id: 708403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HY: () => m,
  OA: () => d,
  mA: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk957565 = require("./957565.js"),
  Chunk661251 = require("./661251.js");

function d(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("dl", {
    className: i()(c.qo, t),
    children: n
  })
}
let u = e => {
  let {
    name: t,
    children: n,
    copyValue: r
  } = e, [i, d] = l.useState(false);
  return l.useEffect(() => {
    if (i) {
      let e = setTimeout(() => d(false), 1e3);
      return () => clearTimeout(e)
    }
  }, [i]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: c.Bz,
      children: t
    }), (0, a.jsxs)("dd", {
      className: c.Nw,
      children: [n, null != r ? (0, a.jsx)(s.DUT, {
        tag: "span",
        className: c.nH,
        onClick: () => (0, o.C)(r, () => d(true)),
        children: i ? (0, a.jsx)(s.Uzd, {
          color: "currentColor",
          size: "sm"
        }) : (0, a.jsx)(s.TdU, {
          color: "currentColor",
          size: "sm"
        })
      }) : null]
    })]
  })
};

function m(e) {
  let {
    value: t
  } = e;
  return (0, a.jsx)(s.P7L, {
    checked: t
  })
}