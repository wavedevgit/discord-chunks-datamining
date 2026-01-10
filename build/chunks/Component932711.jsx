/** Chunk was on 81985 **/
/** chunk id: 932711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk821020 = require("./821020.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    children: t
  } = e, {
    notificationCenterVariant: n
  } = (0, l.pN)({
    location: "NotificationsInboxTooltip"
  }), o = n === l.jP.LEGACY ? a.intl.string(a.t.GSmTKJ) : a.intl.string(a.t.HcoRu0);
  return (0, r.jsx)(i.u, {
    spacing: 12,
    position: "right",
    text: o,
    children: (0, r.jsx)("div", {
      children: t
    })
  })
}