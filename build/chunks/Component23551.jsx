/** Chunk was on 30202 **/
/** chunk id: 23551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk122021 = require("./122021.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk391475 = require("./391475.js");
let h = e => {
  let {
    disabled: t = false,
    type: n,
    className: r,
    innerClassName: h,
    onConnect: f
  } = e, b = (0, o.ZP)(), x = c.Z.get((0, d.rR)(n));
  return (0, i.jsx)(l.ua7, {
    text: x.name,
    children: e => {
      let {
        onMouseEnter: o,
        onMouseLeave: d
      } = e;
      return (0, i.jsx)("div", {
        className: s()(g.wrapper, r),
        children: (0, i.jsx)(l.tEY, {
          children: (0, i.jsx)("button", {
            onMouseEnter: o,
            onMouseLeave: d,
            className: s()(g.inner, h),
            type: "button",
            disabled: t,
            style: {
              backgroundImage: "url('".concat((0, a.wj)(b) ? x.icon.darkSVG : x.icon.lightSVG, "')")
            },
            onClick: null != f ? f : () => (function(e) {
              let t = c.Z.get(e);
              (0, u.Z)({
                platformType: t.type,
                location: "Friends List"
              }), m.default.track(p.rMx.ACCOUNT_LINK_STEP, {
                previous_step: "desktop connections",
                current_step: "desktop oauth",
                platform_type: t.type
              })
            })(n),
            "aria-label": x.name
          })
        })
      })
    }
  })
}