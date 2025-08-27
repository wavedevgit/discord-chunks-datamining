/** Chunk was on web.js **/
/** chunk id: 369566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk545957 = require("./545957.js"),
  Chunk353647 = require("./353647.js"),
  Chunk26033 = require("./26033.js"),
  Chunk180335 = require("./180335.js"),
  Chunk561308 = require("./561308.js"),
  Chunk314897 = require("./314897.js"),
  Chunk158776 = require("./158776.js"),
  Chunk9161 = require("./9161.js"),
  Chunk981631 = require("./981631.js");
let h = [],
  m = [];

function g(e) {
  let {
    recentActivityTabEnabled: t
  } = (0, _.O)({
    location: "useUserProfileActivity"
  }), n = (0, a.e7)([d.default], () => d.default.getId() === e), g = (0, o.Z)(e), E = (0, a.e7)([f.Z], () => f.Z.getActivities(e)), b = (0, a.e7)([s.Z], () => n || t ? s.Z.getUserOutbox(e) : true), {
    live: y,
    recent: O
  } = (0, r.useMemo)(() => {
    let e = (0, i.uniqWith)(E.filter(e => {
        let {
          type: t
        } = e;
        return t !== p.IIU.CUSTOM_STATUS
      }), (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name),
      t = null == b ? true : b.entries.filter(t => !(0, u.Jg)(t) && ((0, l.dU)(t) ? t.extra.entries.length > 0 && !e.some(e => null != e && (0, c.pB)(t, e)) : (0, l.y0)(t) ? !e.some(e => null != e && (0, c.RL)(t, e)) : (0, l.Rh)(t)));
    return {
      live: 0 === e.length ? h : e,
      recent: null == t || 0 === t.length ? m : t
    }
  }, [E, null == b ? true : b.entries]);
  return {
    live: y,
    recent: O,
    stream: g,
    outbox: b
  }
}