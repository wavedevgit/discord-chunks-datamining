/** Chunk was on web.js **/
/** chunk id: 848674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk70730 = require("./70730.js"),
  Chunk275759 = require("./275759.js"),
  Chunk423998 = require("./423998.jsx"),
  Chunk570287 = require("./570287.js"),
  Chunk822775 = require("./822775.jsx"),
  Chunk784886 = require("./784886.jsx"),
  Chunk183959 = require("./183959.js");

function p(e) {
  let {
    user: t,
    guildId: n,
    channelId: p,
    onClose: _,
    appContext: h,
    disableAutoFocus: m = false
  } = e, g = (0, c.A)(t.id, n), E = (0, o.p)(a.A.USER_PROFILE_POPOUT), y = (0, i.bG)([s.Ay], () => s.Ay.canShowProfilePopoutGiftIntents(t.id), [t.id]), b = E && y;
  return (0, r.jsxs)("div", {
    className: f.qr,
    children: [g && (0, r.jsxs)(r.Fragment, {
      children: [b && (0, r.jsx)(l.O, {
        profileUserId: t.id
      }), (0, r.jsx)(d.A, {
        user: t,
        guildId: n,
        channelId: p,
        onClose: _,
        disableAutoFocus: m,
        upsell: b
      })]
    }), !g && (0, r.jsx)(u.A, {
      user: t,
      guildId: n,
      onClose: _,
      fullWidth: true,
      appContext: h
    })]
  })
}