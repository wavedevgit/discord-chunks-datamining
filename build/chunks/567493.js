/** Chunk was on web.js **/
/** chunk id: 567493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KF: () => m,
  hQ: () => g,
  im: () => p
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk661869 = require("./661869.js"),
  Chunk876215 = require("./876215.js"),
  Chunk884439 = require("./884439.js"),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk158776 = require("./158776.js"),
  Chunk709054 = require("./709054.js"),
  Chunk107866 = require("./107866.js"),
  Chunk206583 = require("./206583.js");
let _ = (e, t) => {
  let n = e.filter(e => null != e.activity.application_id && f.yh.includes(e.activity.application_id)),
    r = t.filter(e => null != e.activity.application_id && f.yh.includes(e.activity.application_id));
  if (n.length !== r.length) returnfalse;
  let i = new Set(n.map(e => "".concat(e.userId, "-").concat(e.activity.session_id, "-").concat(e.activity.application_id))),
    o = new Set(r.map(e => "".concat(e.userId, "-").concat(e.activity.session_id, "-").concat(e.activity.application_id)));
  if (i.size !== o.size) returnfalse;
  for (let e of i)
    if (!o.has(e)) returnfalse;
  returntrue
};

function p(e) {
  let t = (0, s.e7)([c.Z], () => null != e && f.Hw.includes(e) ? f.yh.flatMap(e => c.Z.getAllApplicationActivities(e)) : [], [e], _);
  return r.useMemo(() => null == e || 0 === t.length ? [] : h(e, t), [e, t])
}

function h(e, t) {
  if (!f.Hw.includes(e)) return [];
  let n = [];
  return t.forEach(t => {
    var r, s, c;
    let d = t.userId;
    if (null == d || !l.ZP.isMember(e, d) || null == t.activity.application_id || "" === t.activity.name) return;
    let f = null != (c = null != (s = null == (r = t.activity.timestamps) ? true : r.start) ? s : t.activity.created_at) ? c : Date.now(),
      _ = {
        id: u.default.fromTimestamp(f),
        author_id: d,
        author_type: i.i.USER,
        content_type: o.s.PLAYED_GAME,
        participants: [d],
        expires_at: new Date(Date.now() + 3e5).toISOString(),
        traits: [{
          type: a.N.IS_LIVE,
          is_live: true
        }, {
          type: a.N.DURATION_SECONDS,
          duration_seconds: Math.floor((Date.now() - f) / 1e3)
        }],
        extra: {
          type: "gamescom_demo_content_extra",
          game_name: t.activity.name,
          application_id: t.activity.application_id,
          is_gamescom_demo_content: true
        }
      };
    n.push(_)
  }), n
}

function m(e) {
  return "gamescom_demo_content_extra" === e.extra.type
}

function g(e, t) {
  return (0, d.C)(e, t)
}