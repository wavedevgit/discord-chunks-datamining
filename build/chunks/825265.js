/** Chunk was on 51333 **/
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
  return (0, r.e7)([o.Z], () => (function(e, t) {
    var n, r;
    let i = null != t ? null == e || null == (r = e.guilds[t]) || null == (n = r.mobileRedesignChannelListSettings) ? true : n.messagePreviews : null;
    return null != i && a.lL.has(i.value) ? i.value : a.Gp.getSetting()
  })(o.Z.settings.guilds, e))
}

function d(e, t) {
  let {
    unread: n,
    disabled: a
  } = t, o = c(e.guild_id), d = (0, r.e7)([s.ZP], () => null != e && s.ZP.hasUnread(e.id)), f = (0, i.Z)(e), p = a || f || o === u.Z.NONE || o === u.Z.UNREADS && !(null != n ? n : d);
  return (0, l.Z)(e, p)
}