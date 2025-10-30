/** Chunk was on 95017 **/
/** chunk id: 257785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => d,
  Z9: () => u,
  wl: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk451429 = require("./451429.js");

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
      children: [n, null != l ? (0, a.jsx)(o.P3F, {
        tag: "span",
        className: c.copyPropertyButton,
        onClick: () => (0, s.JG)(l, () => d(true)),
        children: i ? (0, a.jsx)(o.kmB, {
          color: "currentColor",
          size: "sm"
        }) : (0, a.jsx)(o.TIy, {
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
  return (0, a.jsx)(o.FZ5, {
    checked: t
  })
}