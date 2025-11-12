/** Chunk was on web.js **/
/** chunk id: 369566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk545957 = require("./545957.js"),
  Chunk353647 = require("./353647.js"),
  Chunk26033 = require("./26033.js"),
  Chunk180335 = require("./180335.js"),
  Chunk561308 = require("./561308.js"),
  Chunk741570 = require("./741570.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk158776 = require("./158776.js"),
  Chunk979651 = require("./979651.js"),
  Chunk9161 = require("./9161.js"),
  Chunk981631 = require("./981631.js");
let E = [],
  b = [];

function y(e) {
  let {
    recentActivityTabEnabled: t
  } = (0, m.O)({
    location: "useUserProfileActivity"
  }), n = (0, a.e7)([f.default], () => f.default.getId() === e), y = (0, o.Z)(e), O = (0, a.e7)([p.Z], () => p.Z.getActivities(e)), v = (0, a.e7)([s.Z], () => n || t ? s.Z.getUserOutbox(e) : true), I = (0, a.e7)([h.Z], () => h.Z.getVoiceStateForUser(e)), T = (0, a.e7)([_.Z], () => _.Z.getChannel(null == I ? true : I.channelId)), S = (0, d.E)("UserProfileActivity", T), A = (0, r.useMemo)(() => O.filter(e => {
    let {
      type: t
    } = e;
    return t === g.IIU.HANG_STATUS ? S : t !== g.IIU.CUSTOM_STATUS
  }), [O, S]), {
    live: C,
    recent: N
  } = (0, r.useMemo)(() => {
    let e = (0, i.uniqWith)(A, (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name),
      t = null == v ? true : v.entries.filter(t => !(0, u.Jg)(t) && ((0, l.dU)(t) ? t.extra.entries.length > 0 && !e.some(e => null != e && (0, c.pB)(t, e)) : (0, l.y0)(t) ? !e.some(e => null != e && (0, c.RL)(t, e)) : (0, l.Rh)(t)));
    return {
      live: 0 === e.length ? E : e,
      recent: null == t || 0 === t.length ? b : t
    }
  }, [A, null == v ? true : v.entries]);
  return {
    live: C,
    recent: N,
    stream: y,
    outbox: v
  }
}