/** Chunk was on 17869 **/
/** chunk id: 704860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
    moderatorReport: f
  } = p, m = null == f ? true : f.reported_user_id, g = (0, i.bG)([s.default], () => null != m ? s.default.getUser(m) : null), A = (0, i.bG)([a.A], () => a.A.getGuild(t.guild_id));
  (0, o.ml)(n);
  let b = (0, c.A)({
      channel: t,
      user: g,
      guild: A
    }),
    _ = (0, d.A)({
      channel: t,
      user: g,
      guild: A
    }),
    y = [(0, u.A)({
      channel: t,
      message: n,
      user: g,
      guild: A
    }), b, _, (0, h.A)({
      channel: t,
      user: g,
      guild: A
    })].filter(e => null != e);
  return t.isModeratorReportChannel() && 0 !== y.length ? (0, l.jsx)(l.Fragment, {
    children: y.map((e, t) => (0, l.jsx)(r.Fragment, {
      children: e
    }, t))
  }) : null
}

function f(e) {
  let {
    message: t,
    channel: n
  } = e;
  return (0, l.jsx)(l.Fragment, {
    children: t.messageSnapshots.map((e, r) => (0, l.jsx)(p, {
      channel: n,
      message: t,
      snapshot: e
    }, r))
  })
}