/** Chunk was on 97492 **/
/** chunk id: 704860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk715757 = require("./715757.js"),
  Chunk254143 = require("./254143.jsx"),
  Chunk778983 = require("./778983.jsx"),
  Chunk841362 = require("./841362.jsx"),
  Chunk285745 = require("./285745.jsx");

function p(e) {
  let {
    channel: t,
    message: n,
    snapshot: p
  } = e, {
    moderatorReport: h
  } = p, b = null == h ? true : h.reported_user_id, g = (0, i.bG)([s.default], () => null != b ? s.default.getUser(b) : null), m = (0, i.bG)([a.A], () => a.A.getGuild(t.guild_id));
  (0, o.ml)(n);
  let A = (0, c.A)({
      channel: t,
      user: g,
      guild: m
    }),
    y = (0, d.A)({
      channel: t,
      user: g,
      guild: m
    }),
    O = [(0, u.A)({
      channel: t,
      message: n,
      user: g,
      guild: m
    }), A, y, (0, f.A)({
      channel: t,
      user: g,
      guild: m
    })].filter(e => null != e);
  return t.isModeratorReportChannel() && 0 !== O.length ? (0, r.jsx)(r.Fragment, {
    children: O.map((e, t) => (0, r.jsx)(l.Fragment, {
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
    children: t.messageSnapshots.map((e, l) => (0, r.jsx)(p, {
      channel: n,
      message: t,
      snapshot: e
    }, l))
  })
}