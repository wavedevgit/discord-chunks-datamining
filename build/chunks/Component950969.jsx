/** Chunk was on 83546 **/
/** chunk id: 950969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk358230 = require("./358230.js"),
  Chunk18998 = require("./18998.jsx"),
  Chunk220444 = require("./220444.js"),
  Chunk569471 = require("./569471.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk9156 = require("./9156.js"),
  Chunk451478 = require("./451478.js");

function h(e) {
  let t = u.Z.getChannel(e);
  return null != t && null != t.getGuildId() && !(t.isThread() ? c.Z.isMuted(t.id) : p.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, s.d)(t)
}

function g(e) {
  let t = u.Z.getChannel(e);
  if (null == t) returnfalse;
  let n = t.getGuildId();
  if (null == n) returnfalse;
  let r = p.ZP.isGuildCollapsed(n),
    i = p.ZP.isChannelMuted(n, t.id);
  return (!r || !i) && d.ZP.getMentionCount(e) > 0
}
let m = Chunk647438.forwardRef(function(e, t) {
  var n, i, {
      guildId: s,
      guildChannels: c,
      guildChannelsVersion: u
    } = e,
    d = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["guildId", "guildChannels", "guildChannelsVersion"]);
  let p = (0, o.T)(s, c, u, {
      withVoiceChannels: false
    }, {
      ignoreRecents: true
    }),
    m = (0, l.e7)([f.Z], () => f.Z.isFocused());
  return (0, r.jsx)(a.Z, (n = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    ref: t
  }, d), i = i = {
    isUnread: h,
    isMentioned: g,
    items: p,
    animate: m
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
  }), n))
})