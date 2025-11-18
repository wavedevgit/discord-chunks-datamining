/** Chunk was on 10023 **/
/** chunk id: 932711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk821020 = require("./821020.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    children: t
  } = e, {
    notificationCenterVariant: n
  } = (0, l.pN)({
    location: "NotificationsInboxTooltip"
  }), a = n === l.jP.LEGACY ? o.intl.string(o.t.GSmTKJ) : o.intl.string(o.t.HcoRu0);
  return (0, r.jsx)(i.u, {
    spacing: 12,
    position: "right",
    text: a,
    children: (0, r.jsx)("div", {
      children: t
    })
  })
}