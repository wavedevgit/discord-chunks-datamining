/** Chunk was on web.js **/
/** chunk id: 299846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk20805 = require("./20805.js"),
  Chunk327098 = require("./327098.js");

function s(e) {
  var t, n, s, l, c;
  let u = (0, r.bG)([i.default], () => i.default.getUser(e.author_id)),
    {
      activity: d,
      embeddedActivity: f
    } = (0, o.A)(e);
  if (null == d) return {
    isRich: false,
    appName: (0, a.zD)(e) ? e.extra.game_name : true,
    user: u,
    activity: true,
    embeddedActivity: true,
    state: true,
    details: true,
    party: true
  };
  let p = (null == (n = d.assets) ? true : n.large_image) != null || (null == (s = d.assets) ? true : s.small_image) != null,
    _ = (null == (l = d.assets) ? true : l.large_text) != null || (null == (c = d.assets) ? true : c.small_text) != null,
    h = null != (t = d.name) ? t : "game_name" in e.extra ? e.extra.game_name : true,
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