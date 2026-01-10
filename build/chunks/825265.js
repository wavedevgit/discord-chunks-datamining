/** Chunk was on 83772 **/
/** chunk id: 825265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => c,
  Z: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk636850 = require("./636850.js"),
  Chunk514576 = require("./514576.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk306680 = require("./306680.js"),
  Chunk85746 = require("./85746.js");

function c(e) {
  return (0, r.e7)([a.Z], () => (function(e, t) {
    var n, r;
    let l = null != t ? null == e || null == (r = e.guilds[t]) || null == (n = r.mobileRedesignChannelListSettings) ? true : n.messagePreviews : null;
    return null != l && s.lL.has(l.value) ? l.value : s.Gp.getSetting()
  })(a.Z.settings.guilds, e))
}

function d(e, t) {
  let {
    unread: n,
    disabled: s
  } = t, a = c(e.guild_id), d = (0, r.e7)([o.ZP], () => null != e && o.ZP.hasUnread(e.id)), m = (0, l.Z)(e), f = s || m || a === u.Z.NONE || a === u.Z.UNREADS && !(null != n ? n : d);
  return (0, i.Z)(e, f)
}