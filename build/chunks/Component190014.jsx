/** Chunk was on web.js **/
/** chunk id: 190014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk933554 = require("./933554.js");

function E(e) {
  let {
    ingress: t,
    guildId: n
  } = e, l = s.iH.useSetting().includes(n), f = i.useCallback(e => {
    let r = (0, o.rr)();
    e ? r.delete(n) : r.add(n), s.iH.updateSetting([...r]), a.default.track(h.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: d.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);
  return n === p.T ? null : (0, r.jsx)(c.U, {
    setting: _.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    children: (0, r.jsx)(u.Z, {
      title: m.intl.string(g.default.khuuzs),
      value: !l,
      onChange: f,
      note: m.intl.string(g.default["8EWsJy"])
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