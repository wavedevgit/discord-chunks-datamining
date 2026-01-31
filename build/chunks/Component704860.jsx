/** Chunk was on 17534 **/
/** chunk id: 704860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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
    moderatorReport: g
  } = p, f = null == g ? true : g.reported_user_id, m = (0, i.bG)([a.default], () => null != f ? a.default.getUser(f) : null), b = (0, i.bG)([s.A], () => s.A.getGuild(t.guild_id));
  (0, o.ml)(n);
  let A = (0, c.A)({
      channel: t,
      user: m,
      guild: b
    }),
    y = (0, d.A)({
      channel: t,
      user: m,
      guild: b
    }),
    O = [(0, u.A)({
      channel: t,
      message: n,
      user: m,
      guild: b
    }), A, y, (0, h.A)({
      channel: t,
      user: m,
      guild: b
    })].filter(e => null != e);
  return t.isModeratorReportChannel() && 0 !== O.length ? (0, r.jsx)(r.Fragment, {
    children: O.map((e, t) => (0, r.jsx)(l.Fragment, {
      children: e
    }, t))
  }) : null
}

function g(e) {
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