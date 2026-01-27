/** Chunk was on web.js **/
/** chunk id: 146655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk87664 = require("./87664.js"),
  Chunk517164 = require("./517164.js"),
  Chunk20805 = require("./20805.js"),
  Chunk83971 = require("./83971.js"),
  Chunk583846 = require("./583846.js"),
  Chunk890330 = require("./890330.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk290863 = require("./290863.js"),
  Chunk977997 = require("./977997.js"),
  Chunk840907 = require("./840907.js"),
  Chunk652215 = require("./652215.js");
let E = [],
  y = [];

function b(e) {
  let {
    recentActivityTabEnabled: t
  } = (0, m.s)({
    location: "useUserProfileActivity"
  }), n = (0, a.bG)([f.default], () => f.default.getId() === e), b = (0, o.A)(e), O = (0, a.bG)([_.A], () => _.A.getActivities(e)), v = (0, a.bG)([s.A], () => n || t ? s.A.getUserOutbox(e) : true), A = (0, a.bG)([h.A], () => h.A.getVoiceStateForUser(e)), I = (0, a.bG)([p.A], () => p.A.getChannel(null == A ? true : A.channelId)), S = (0, d.v)("UserProfileActivity", I), T = (0, r.useMemo)(() => O.filter(e => {
    let {
      type: t
    } = e;
    return t === g.$pd.HANG_STATUS ? S : t !== g.$pd.CUSTOM_STATUS
  }), [O, S]), {
    live: C,
    recent: N
  } = (0, r.useMemo)(() => {
    let e = (0, i.uniqWith)(T, (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name),
      t = null == v ? true : v.entries.filter(t => !(0, u.Hd)(t) && ((0, l.Tq)(t) ? t.extra.entries.length > 0 && !e.some(e => null != e && (0, c.qb)(t, e)) : (0, l.Lf)(t) ? !e.some(e => null != e && (0, c.SU)(t, e)) : (0, l.$R)(t)));
    return {
      live: 0 === e.length ? E : e,
      recent: null == t || 0 === t.length ? y : t
    }
  }, [T, null == v ? true : v.entries]);
  return {
    live: C,
    recent: N,
    stream: b,
    outbox: v
  }
}