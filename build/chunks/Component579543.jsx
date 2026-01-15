/** Chunk was on web.js **/
/** chunk id: 579543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk952164 = require("./952164.js"),
  Chunk758371 = require("./758371.js"),
  Chunk994339 = require("./994339.js"),
  Chunk89219 = require("./89219.jsx"),
  Chunk23015 = require("./23015.jsx");

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
  } = e, g = !(0, s.Z)(h, f, n.id), E = (0, o.dQ)(n.name, null == (t = f.activity) ? true : t.type, g), b = i.useMemo(() => {
    if (null != h) return () => (0, a.aG)(h)
  }, [h]);
  return g ? (0, r.jsx)(l.Z, {
    application: n,
    message: f,
    header: E,
    onClickContent: b,
    onView: p,
    guildId: m
  }) : (0, r.jsx)(c.Z, {
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