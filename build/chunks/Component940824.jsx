/** Chunk was on web.js **/
/** chunk id: 940824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk335131 = require("./335131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk698311 = require("./698311.js");
let _ = e => {
  let {
    onClose: t
  } = e, {
    analyticsLocations: n
  } = (0, s.ZP)(), _ = () => {
    t(), (0, l.uL)(u.Z5c.COLLECTIBLES_SHOP), (0, c.mK)({
      analyticsSource: o.Z.PREMIUM_PAYMENT_MODAL,
      analyticsLocations: n
    }), (0, a.xf)()
  };
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)("div", {
      className: f.iconBackground,
      children: (0, r.jsx)(i.EOn, {
        size: "custom",
        width: 20,
        height: 20,
        color: i.TVs.colors.WHITE
      })
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: d.intl.format(d.t.twSHte, {
        checkItOut: e => (0, r.jsx)(i.P3F, {
          className: f.link,
          onClick: _,
          children: e
        })
      })
    })]
  })
}