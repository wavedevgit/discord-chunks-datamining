/** Chunk was on 83759 **/
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
  return (0, r.bG)([o.A], () => {
    var t, n, r;
    let l;
    return t = o.A.settings.guilds, null != (l = null != e ? null == t || null == (r = t.guilds[e]) || null == (n = r.mobileRedesignChannelListSettings) ? true : n.messagePreviews : null) && a.AB.has(l.value) ? l.value : a.wT.getSetting()
  })
}

function d(e, t) {
  let {
    unread: n,
    disabled: a
  } = t, o = c(e.guild_id), d = (0, r.bG)([s.Ay], () => null != e && s.Ay.hasUnread(e.id)), p = (0, l.A)(e), m = a || p || o === u.P.NONE || o === u.P.UNREADS && !(null != n ? n : d);
  return (0, i.A)(e, m)
}