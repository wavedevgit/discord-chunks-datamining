/** Chunk was on 34740 **/
/** chunk id: 817608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function h(e) {
  let {
    channel: t,
    message: n,
    snapshot: h
  } = e, {
    moderatorReport: f
  } = h, m = null == f ? true : f.reported_user_id, g = (0, l.e7)([o.default], () => null != m ? o.default.getUser(m) : null), b = (0, l.e7)([a.Z], () => a.Z.getGuild(t.guild_id));
  (0, s.Cv)(n);
  let y = (0, c.Z)({
      channel: t,
      user: g,
      guild: b
    }),
    C = (0, d.Z)({
      channel: t,
      user: g,
      guild: b
    }),
    v = [(0, u.Z)({
      channel: t,
      message: n,
      user: g,
      guild: b
    }), y, C, (0, p.Z)({
      channel: t,
      user: g,
      guild: b
    })].filter(e => null != e);
  return t.isModeratorReportChannel() && 0 !== v.length ? (0, i.jsx)(i.Fragment, {
    children: v.map((e, t) => (0, i.jsx)(r.Fragment, {
      children: e
    }, t))
  }) : null
}

function f(e) {
  let {
    message: t,
    channel: n
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.messageSnapshots.map((e, r) => (0, i.jsx)(h, {
      channel: n,
      message: t,
      snapshot: e
    }, r))
  })
}