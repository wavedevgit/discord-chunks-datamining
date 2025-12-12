/** Chunk was on web.js **/
/** chunk id: 190014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
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
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let {
    ingress: t,
    guildId: n
  } = e, c = l.iH.useSetting().includes(n), p = i.useCallback(e => {
    let r = (0, s.rr)();
    e ? r.delete(n) : r.add(n), l.iH.updateSetting([...r]), o.default.track(h.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: f.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);
  return n === m.T ? null : (0, r.jsx)(u.U, {
    setting: _.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    children: (0, r.jsx)(d.ZP, {
      title: g.intl.string(g.t["T+nevN"]),
      value: !c,
      onChange: p,
      note: g.intl.format(g.t.jXKQCu, {
        helpdeskArticle: a.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    })
  })
}

function b(e) {
  let {
    ingress: t = p.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, c.is)();
  return (0, r.jsx)(E, {
    ingress: t,
    guildId: null != n ? n : i
  })
}