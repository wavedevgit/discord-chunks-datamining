/** Chunk was on 6043 **/
/** chunk id: 257785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => d,
  Z9: () => u,
  wl: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk663618 = require("./663618.js");

function d(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("dl", {
    className: i()(c.properties, t),
    children: n
  })
}
let u = e => {
  let {
    name: t,
    children: n,
    copyValue: l
  } = e, [i, d] = r.useState(false);
  return r.useEffect(() => {
    if (i) {
      let e = setTimeout(() => d(false), 1e3);
      return () => clearTimeout(e)
    }
  }, [i]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: c.propertyName,
      children: t
    }), (0, a.jsxs)("dd", {
      className: c.propertyValue,
      children: [n, null != l ? (0, a.jsx)(s.P3F, {
        tag: "span",
        className: c.copyPropertyButton,
        onClick: () => (0, o.JG)(l, () => d(true)),
        children: i ? (0, a.jsx)(s.kmB, {
          color: "currentColor",
          size: "sm"
        }) : (0, a.jsx)(s.TIy, {
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
  return (0, a.jsx)(s.FZ5, {
    checked: t
  })
}