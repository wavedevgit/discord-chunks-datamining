/** Chunk was on 82124 **/
/** chunk id: 817608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = f, g = null == h ? true : h.reported_user_id, m = (0, l.e7)([o.default], () => null != g ? o.default.getUser(g) : null), b = (0, l.e7)([a.Z], () => a.Z.getGuild(t.guild_id));
  (0, s.Cv)(n);
  let y = (0, c.Z)({
      channel: t,
      user: m,
      guild: b
    }),
    v = (0, d.Z)({
      channel: t,
      user: m,
      guild: b
    }),
    O = [(0, u.Z)({
      channel: t,
      message: n,
      user: m,
      guild: b
    }), y, v, (0, p.Z)({
      channel: t,
      user: m,
      guild: b
    })].filter(e => null != e);
  return t.isModeratorReportChannel() && 0 !== O.length ? (0, r.jsx)(r.Fragment, {
    children: O.map((e, t) => (0, r.jsx)(i.Fragment, {
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