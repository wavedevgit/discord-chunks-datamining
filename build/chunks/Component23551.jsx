/** Chunk was on web.js **/
/** chunk id: 23551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk122021 = require("./122021.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk341603 = require("./341603.js");
let h = e => {
  let {
    disabled: t = false,
    type: n,
    className: i,
    innerClassName: h,
    onConnect: g
  } = e, E = (0, c.ZP)();

  function b(e) {
    let t = u.Z.get(e);
    (0, f.Z)({
      platformType: t.type,
      location: "Friends List"
    }), p.default.track(_.rMx.ACCOUNT_LINK_STEP, {
      previous_step: "desktop connections",
      current_step: "desktop oauth",
      platform_type: t.type
    })
  }
  let y = u.Z.get((0, d.rR)(n));
  return (0, r.jsx)(o.u, {
    text: y.name,
    children: (0, r.jsx)("div", {
      className: a()(m.wrapper, i),
      children: (0, r.jsx)(l.tEY, {
        children: (0, r.jsx)("button", {
          className: a()(m.inner, h),
          type: "button",
          disabled: t,
          style: {
            backgroundImage: "url('".concat((0, s.wj)(E) ? y.icon.darkSVG : y.icon.lightSVG, "')")
          },
          onClick: null != g ? g : () => b(n),
          "aria-label": y.name
        })
      })
    })
  })
}