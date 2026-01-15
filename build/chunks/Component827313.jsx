/** Chunk was on web.js **/
/** chunk id: 827313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk531301 = require("./531301.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk42959 = require("./42959.js");

function p(e) {
  let {
    userId: t,
    isVisible: n,
    onOpenProfile: i
  } = e, {
    note: p
  } = (0, c.Z)(t), _ = null != p && "" !== p, h = _ ? s.hH0 : s.Wos, m = _ ? d.intl.string(d.t["gs+qcM"]) : d.intl.string(d.t["1ZZtts"]), g = _ ? p : d.intl.string(d.t["1ZZtts"]), {
    trackUserProfileAction: E
  } = (0, l.KZ)(), b = () => {
    E({
      action: "PRESS_ADD_NOTE"
    }), null == i || i({
      tabSection: u.oh.USER_INFO,
      scrollTarget: u.Tb.NOTE
    })
  };
  return (0, r.jsx)(o.u, {
    asContainer: true,
    text: g,
    children: (0, r.jsx)(s.P3F, {
      "aria-label": m,
      onClick: b,
      className: a()(f.button, n && f.visible),
      children: (0, r.jsx)(h, {
        size: "xs",
        color: "currentColor"
      })
    })
  })
}