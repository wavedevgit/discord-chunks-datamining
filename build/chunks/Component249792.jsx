/** Chunk was on 10023 **/
/** chunk id: 249792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk636606 = require("./636606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk855031 = require("./855031.js");

function d(e) {
  let {
    guild: t,
    show: n,
    active: i,
    onAnimationStart: d,
    onAnimationRest: p
  } = e, h = {}, f = {};
  h.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)", f.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
  let g = (0, s.dQu)(a.Z.unsafe_rawColors.BRAND_500).hex(),
    m = (0, s.dQu)(a.Z.unsafe_rawColors.PRIMARY_630).hex();
  i && null == t.icon && (h.backgroundColor = g, f.backgroundColor = m);
  let b = (0, s.Yzy)(n, {
    from: h,
    enter: f,
    leave: h,
    config: {
      duration: 100
    },
    onStart: d,
    onRest: p
  });
  return (0, r.jsx)(r.Fragment, {
    children: b((e, n, i) => n && (0, r.jsx)("div", {
      className: u.folderGroup,
      children: (0, r.jsx)("div", {
        className: l()(u.folderHeader, u.folderHeaderSmall),
        style: {
          margin: 0
        },
        children: (0, r.jsx)(o.animated.div, {
          className: u.folderDragPreview,
          style: e,
          children: (0, r.jsx)("div", {
            className: u.folderPreviewWrapper,
            children: (0, r.jsx)("div", {
              className: u.folderPreview,
              children: (0, r.jsx)(c.Z, {
                guild: t,
                size: c.Z.Sizes.SMOL,
                className: u.folderPreviewGuildIcon
              })
            })
          })
        })
      })
    }, i.key))
  })
}