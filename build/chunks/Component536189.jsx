/** Chunk was on web.js **/
/** chunk id: 536189, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    message: f,
    onView: p,
    partyStatusElement: _,
    presenceActivity: h,
    guildId: m
  } = e, g = !(0, o.A)(h, f, n.id), E = (0, s.n$)(n.name, null == (t = f.activity) ? true : t.type, g), b = i.useMemo(() => {
    if (null != h) return () => (0, a.Mp)(h)
  }, [h]);
  return g ? (0, r.jsx)(l.A, {
    application: n,
    message: f,
    header: E,
    onClickContent: b,
    onView: p,
    guildId: m
  }) : (0, r.jsx)(c.A, {
    application: n,
    message: f,
    header: E,
    presenceActivity: h,
    hideParty: d,
    partyStatusElement: _,
    currentUserPresenceActivity: u,
    onClickContent: b,
    onView: p,
    guildId: m
  })
}