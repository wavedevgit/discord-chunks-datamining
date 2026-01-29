/** Chunk was on 20725 **/
/** chunk id: 224415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d,
  r: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk541702 = require("./541702.js"),
  Chunk309632 = require("./309632.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk222823 = require("./222823.js"),
  Chunk461012 = require("./461012.js");

function c(e) {
  return (0, r.bG)([a.A], () => {
    var t, n, r;
    let l;
    return t = a.A.settings.guilds, null != (l = null != e ? null == t || null == (r = t.guilds[e]) || null == (n = r.mobileRedesignChannelListSettings) ? true : n.messagePreviews : null) && s.AB.has(l.value) ? l.value : s.wT.getSetting()
  })
}

function d(e, t) {
  let {
    unread: n,
    disabled: s
  } = t, a = c(e.guild_id), d = (0, r.bG)([o.Ay], () => null != e && o.Ay.hasUnread(e.id)), p = (0, l.A)(e), m = s || p || a === u.P.NONE || a === u.P.UNREADS && !(null != n ? n : d);
  return (0, i.A)(e, m)
}