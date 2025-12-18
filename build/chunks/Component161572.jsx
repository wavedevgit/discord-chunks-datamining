/** Chunk was on web.js **/
/** chunk id: 161572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk522558 = require("./522558.js"),
  Chunk441623 = require("./441623.js"),
  Chunk718108 = require("./718108.jsx"),
  Chunk837411 = require("./837411.js"),
  Chunk705556 = require("./705556.jsx"),
  Chunk955418 = require("./955418.jsx"),
  Chunk155493 = require("./155493.js");

function p(e) {
  let {
    user: t,
    guildId: n,
    channelId: p,
    onClose: _,
    appContext: m,
    disableAutoFocus: h = false
  } = e, g = (0, c.Z)(t.id, n), E = (0, o.i)(a.Z.USER_PROFILE_POPOUT), b = (0, i.e7)([s.ZP], () => s.ZP.canShowProfilePopoutGiftIntents(t.id), [t.id]), y = E && b;
  return (0, r.jsxs)("div", {
    className: f.footer,
    children: [g && (0, r.jsxs)(r.Fragment, {
      children: [y && (0, r.jsx)(l.W, {
        profileUserId: t.id
      }), (0, r.jsx)(d.Z, {
        user: t,
        guildId: n,
        channelId: p,
        onClose: _,
        disableAutoFocus: h,
        upsell: y
      })]
    }), !g && (0, r.jsx)(u.Z, {
      user: t,
      guildId: n,
      onClose: _,
      fullWidth: true,
      appContext: m
    })]
  })
}