/** Chunk was on 7384 **/
/** chunk id: 190014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function x(e) {
  let {
    ingress: t,
    guildId: n
  } = e, c = o.iH.useSetting().includes(n), p = r.useCallback(e => {
    let i = (0, l.rr)();
    e ? i.delete(n) : i.add(n), o.iH.updateSetting([...i]), s.default.track(f.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: m.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);
  return n === h.T ? null : (0, i.jsx)(d.U, {
    setting: g.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    children: (0, i.jsx)(u.Z, {
      title: b.intl.string(b.t["T+nevL"]),
      value: !c,
      onChange: p,
      note: b.intl.format(b.t.jXKQCg, {
        helpdeskArticle: a.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS)
      })
    })
  })
}

function _(e) {
  let {
    ingress: t = p.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, r = (0, c.is)();
  return (0, i.jsx)(x, {
    ingress: t,
    guildId: null != n ? n : r
  })
}