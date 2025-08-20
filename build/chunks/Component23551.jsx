/** Chunk was on web.js **/
/** chunk id: 23551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    className: i,
    innerClassName: h,
    onConnect: m
  } = e, g = (0, l.ZP)();

  function E(e) {
    let t = c.Z.get(e);
    (0, d.Z)({
      platformType: t.type,
      location: "Friends List"
    }), f.default.track(_.rMx.ACCOUNT_LINK_STEP, {
      previous_step: "desktop connections",
      current_step: "desktop oauth",
      platform_type: t.type
    })
  }
  let b = c.Z.get((0, u.rR)(n));
  return (0, r.jsx)(s.ua7, {
    text: b.name,
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: c
      } = e;
      return (0, r.jsx)("div", {
        className: a()(p.wrapper, i),
        children: (0, r.jsx)(s.tEY, {
          children: (0, r.jsx)("button", {
            onMouseEnter: l,
            onMouseLeave: c,
            className: a()(p.inner, h),
            type: "button",
            disabled: t,
            style: {
              backgroundImage: "url('".concat((0, o.wj)(g) ? b.icon.darkSVG : b.icon.lightSVG, "')")
            },
            onClick: null != m ? m : () => E(n),
            "aria-label": b.name
          })
        })
      })
    }
  })
}