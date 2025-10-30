/** Chunk was on 13873 **/
/** chunk id: 817608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk216572 = require("./216572.js"),
  Chunk262746 = require("./262746.jsx"),
  Chunk211640 = require("./211640.jsx"),
  Chunk436355 = require("./436355.jsx"),
  Chunk214110 = require("./214110.jsx");

function f(e) {
  let {
    channel: t,
    message: n,
    snapshot: f
  } = e, {
    moderatorReport: h
  } = f, m = null == h ? true : h.reported_user_id, g = (0, l.e7)([o.default], () => null != m ? o.default.getUser(m) : null), b = (0, l.e7)([a.Z], () => a.Z.getGuild(t.guild_id));
  (0, s.Cv)(n);
  let _ = (0, c.Z)({
      channel: t,
      user: g,
      guild: b
    }),
    y = (0, d.Z)({
      channel: t,
      user: g,
      guild: b
    }),
    C = [(0, u.Z)({
      channel: t,
      message: n,
      user: g,
      guild: b
    }), _, y, (0, p.Z)({
      channel: t,
      user: g,
      guild: b
    })].filter(e => null != e);
  return t.isModeratorReportChannel() && 0 !== C.length ? (0, r.jsx)(r.Fragment, {
    children: C.map((e, t) => (0, r.jsx)(i.Fragment, {
      children: e
    }, t))
  }) : null
}

function h(e) {
  let {
    message: t,
    channel: n
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.messageSnapshots.map((e, i) => (0, r.jsx)(f, {
      channel: n,
      message: t,
      snapshot: e
    }, i))
  })
}