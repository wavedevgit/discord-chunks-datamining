/** Chunk was on 97492 **/
/** chunk id: 815213, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk310953 = require("./310953.js"),
  Chunk173860 = require("./173860.jsx"),
  Chunk455234 = require("./455234.js"),
  Chunk152007 = require("./152007.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk543465 = require("./543465.js"),
  Chunk531685 = require("./531685.js");

function h(e) {
  let t = u.A.getChannel(e);
  return null != t && null != t.getGuildId() && !(t.isThread() ? c.A.isMuted(t.id) : f.Ay.isChannelMuted(t.getGuildId(), t.id)) && (0, o.Y)(t)
}

function b(e) {
  let t = u.A.getChannel(e);
  if (null == t) returnfalse;
  let n = t.getGuildId();
  if (null == n) returnfalse;
  let r = f.Ay.isGuildCollapsed(n),
    l = f.Ay.isChannelMuted(n, t.id);
  return (!r || !l) && d.Ay.getMentionCount(e) > 0
}
let g = Chunk64700.forwardRef(function(e, t) {
  var n, l;
  let [o, ...c] = [e, t], {
    guildId: u,
    guildChannels: d,
    guildChannelsVersion: f
  } = o, g = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(o, ["guildId", "guildChannels", "guildChannelsVersion"]), [m] = c, A = (0, a.W)(u, d, f, {
    withVoiceChannels: false
  }, {
    ignoreRecents: true
  }), y = (0, i.bG)([p.A], () => p.A.isFocused());
  return (0, r.jsx)(s.A, (n = function(e) {
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
    ref: m
  }, g), l = l = {
    isUnread: h,
    isMentioned: b,
    items: A,
    animate: y
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(l)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
  }), n))
})