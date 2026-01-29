/** Chunk was on 1113 **/
/** chunk id: 264409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
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
    onAnimationRest: h
  } = e, p = {}, g = {};
  p.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)", g.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
  let f = (0, o.rdh)(a.A.unsafe_rawColors.BRAND_500).hex(),
    m = (0, o.rdh)(a.A.unsafe_rawColors.PRIMARY_630).hex();
  l && null == t.icon && (p.backgroundColor = f, g.backgroundColor = m);
  let b = (0, o.pnh)(n, {
    from: p,
    enter: g,
    leave: p,
    config: {
      duration: 100
    },
    onStart: d,
    onRest: h
  });
  return (0, r.jsx)(r.Fragment, {
    children: b((e, n, l) => n && (0, r.jsx)("div", {
      className: u.qc,
      children: (0, r.jsx)("div", {
        className: i()(u.MJ, u.L0),
        style: {
          margin: 0
        },
        children: (0, r.jsx)(s.animated.div, {
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