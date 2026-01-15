/** Chunk was on web.js **/
/** chunk id: 797342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk26033 = require("./26033.js"),
  Chunk593294 = require("./593294.js");

function s(e) {
  var t, n, s, l, c;
  let u = (0, r.e7)([i.default], () => i.default.getUser(e.author_id)),
    {
      activity: d,
      embeddedActivity: f
    } = (0, o.Z)(e);
  if (null == d) return {
    isRich: false,
    appName: (0, a.dX)(e) ? e.extra.game_name : true,
    user: u,
    activity: true,
    embeddedActivity: true,
    state: true,
    details: true,
    party: true
  };
  let p = (null == (t = d.assets) ? true : t.large_image) != null || (null == (n = d.assets) ? true : n.small_image) != null,
    _ = (null == (s = d.assets) ? true : s.large_text) != null || (null == (l = d.assets) ? true : l.small_text) != null,
    h = null != (c = d.name) ? c : "game_name" in e.extra ? e.extra.game_name : true,
    m = d.details,
    g = d.state,
    E = d.party;
  return {
    isRich: p || _ || null != m || null != g || null != E,
    user: u,
    activity: d,
    state: g,
    details: m,
    party: E,
    appName: h,
    embeddedActivity: f
  }
}