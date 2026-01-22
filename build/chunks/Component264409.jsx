/** Chunk was on 97492 **/
/** chunk id: 264409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk211170 = require("./211170.js");

function d(e) {
  let {
    guild: t,
    show: n,
    active: l,
    onAnimationStart: d,
    onAnimationRest: f
  } = e, p = {}, h = {};
  p.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)", h.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
  let b = (0, o.rdh)(s.A.unsafe_rawColors.BRAND_500).hex(),
    g = (0, o.rdh)(s.A.unsafe_rawColors.PRIMARY_630).hex();
  l && null == t.icon && (p.backgroundColor = b, h.backgroundColor = g);
  let m = (0, o.pnh)(n, {
    from: p,
    enter: h,
    leave: p,
    config: {
      duration: 100
    },
    onStart: d,
    onRest: f
  });
  return (0, r.jsx)(r.Fragment, {
    children: m((e, n, l) => n && (0, r.jsx)("div", {
      className: u.qc,
      children: (0, r.jsx)("div", {
        className: i()(u.MJ, u.L0),
        style: {
          margin: 0
        },
        children: (0, r.jsx)(a.animated.div, {
          className: u.NG,
          style: e,
          children: (0, r.jsx)("div", {
            className: u.qJ,
            children: (0, r.jsx)("div", {
              className: u.jg,
              children: (0, r.jsx)(c.A, {
                guild: t,
                size: c.A.Sizes.SMOL,
                className: u.VL
              })
            })
          })
        })
      })
    }, l.key))
  })
}