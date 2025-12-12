/** Chunk was on web.js **/
/** chunk id: 301812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk626135 = require("./626135.js"),
  Chunk88658 = require("./88658.js"),
  Chunk695346 = require("./695346.js"),
  Chunk639814 = require("./639814.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk703115 = require("./703115.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk736530 = require("./736530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418924 = require("./418924.js");

function E(e) {
  let {
    ingress: t,
    guildId: n
  } = e, l = s.SE.useSetting().includes(n), f = i.useCallback(e => {
    let r = (0, o._o)();
    e ? r.delete(n) : r.add(n), s.SE.updateSetting([...r]), a.default.track(m.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: d.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);
  return n === _.T ? null : (0, r.jsx)(c.U, {
    setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
    children: (0, r.jsx)(u.ZP, {
      title: h.intl.string(g.default.WhdCGP),
      value: !l,
      onChange: f,
      note: h.intl.string(g.default.UQ9RHJ)
    })
  })
}

function b(e) {
  let {
    ingress: t = f.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, l.is)();
  return (0, r.jsx)(E, {
    ingress: t,
    guildId: null != n ? n : i
  })
}