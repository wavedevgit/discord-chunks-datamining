/** Chunk was on 9753 **/
/** chunk id: 536189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk172710 = require("./172710.js"),
  Chunk456060 = require("./456060.js"),
  Chunk659051 = require("./659051.js"),
  Chunk798899 = require("./798899.jsx"),
  Chunk829963 = require("./829963.jsx");

function u(e) {
  var t;
  let {
    application: n,
    currentUserPresenceActivity: u,
    hideParty: d,
    message: p,
    onView: m,
    partyStatusElement: f,
    presenceActivity: g,
    guildId: _
  } = e, h = !(0, s.A)(g, p, n.id), b = (0, a.n$)(n.name, null == (t = p.activity) ? true : t.type, h), y = i.useMemo(() => {
    if (null != g) return () => (0, l.Mp)(g)
  }, [g]);
  return h ? (0, r.jsx)(o.A, {
    application: n,
    message: p,
    header: b,
    onClickContent: y,
    onView: m,
    guildId: _
  }) : (0, r.jsx)(c.A, {
    application: n,
    message: p,
    header: b,
    presenceActivity: g,
    hideParty: d,
    partyStatusElement: f,
    currentUserPresenceActivity: u,
    onClickContent: y,
    onView: m,
    guildId: _
  })
}