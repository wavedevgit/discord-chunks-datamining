/** Chunk was on web.js **/
/** chunk id: 585253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk100527 = require("./100527.js"),
  Chunk480086 = require("./480086.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    activity: t,
    onAction: n
  } = e, {
    themeType: d
  } = (0, s.z)(), f = null == t ? true : t.application_id, _ = d === c.lY.MODAL_V2 ? a.Z.USER_PROFILE_MODAL : a.Z.USER_PROFILE_POPOUT, p = (0, o.u)(f, _);
  return null == p ? null : d === c.lY.MODAL_V2 ? (0, r.jsx)(l.tG, {
    icon: p.icon,
    text: u.intl.string(p.labelKey),
    size: i.Ph.TINY,
    themeColor: "secondary",
    onClick: p.openLink
  }) : (0, r.jsx)(l.tG, {
    icon: p.icon,
    text: u.intl.string(p.labelKey),
    size: i.Ph.SMALL,
    fullWidth: true,
    themeColor: "secondary",
    onClick: p.openLink
  })
}