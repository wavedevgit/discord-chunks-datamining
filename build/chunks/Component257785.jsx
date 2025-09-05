/** Chunk was on 93886 **/
/** chunk id: 257785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => u,
  Z9: () => m,
  wl: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk866403 = require("./866403.js");

function u(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("dl", {
    className: i()(d.properties, t),
    children: n
  })
}
let m = e => {
  let {
    name: t,
    children: n,
    copyValue: l
  } = e, [i, s] = r.useState(false);
  return r.useEffect(() => {
    if (i) {
      let e = setTimeout(() => s(false), 1e3);
      return () => clearTimeout(e)
    }
  }, [i]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: d.propertyName,
      children: t
    }), (0, a.jsxs)("dd", {
      className: d.propertyValue,
      children: [n, null != l ? (0, a.jsx)(o.P3F, {
        tag: "span",
        className: d.copyPropertyButton,
        onClick: () => (0, c.JG)(l, () => s(true)),
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

function x(e) {
  let {
    value: t
  } = e;
  return (0, a.jsx)(s.$q, {
    size: 16,
    value: t,
    shape: s.zV.SMALL_BOX,
    displayOnly: true
  })
}