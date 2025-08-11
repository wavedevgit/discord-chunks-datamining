/** Chunk was on web.js **/
/** chunk id: 817608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk216572 = require("./216572.js"),
  Chunk262746 = require("./262746.jsx"),
  Chunk211640 = require("./211640.jsx"),
  Chunk436355 = require("./436355.jsx"),
  Chunk214110 = require("./214110.jsx");

function _(e) {
  let {
    channel: t,
    message: n,
    snapshot: _
  } = e, {
    moderatorReport: p
  } = _, h = null == p ? true : p.reported_user_id, m = (0, o.e7)([s.default], () => null != h ? s.default.getUser(h) : null), g = (0, o.e7)([a.Z], () => a.Z.getGuild(t.guild_id));
  (0, l.Cv)(n);
  let E = (0, c.Z)({
      channel: t,
      user: m,
      guild: g
    }),
    b = (0, d.Z)({
      channel: t,
      user: m,
      guild: g
    }),
    y = [(0, u.Z)({
      channel: t,
      message: n,
      user: m,
      guild: g
    }), E, b, (0, f.Z)({
      channel: t,
      user: m,
      guild: g
    })].filter(e => null != e);
  return t.isModeratorReportChannel() && 0 !== y.length ? <r.Fragment>{y.map((e, t) => (0, r.jsx)(i.Fragment, {
      children: e
    }, t))}</r.Fragment> : null
}

function p(e) {
  let {
    message: t,
    channel: n
  } = e;
  return <r.Fragment>{t.messageSnapshots.map((e, i) => (0, r.jsx)(_, {
      channel: n,
      message: t,
      snapshot: e
    }, i))}</r.Fragment>
}