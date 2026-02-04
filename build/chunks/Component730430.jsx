/** Chunk was on 88474 **/
/** chunk id: 730430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk806246 = require("./806246.js"),
  Chunk378570 = require("./378570.js"),
  Chunk383501 = require("./383501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
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
}

function m(e) {
  let {
    variant: t = "active",
    size: n = "sm",
    hangStatusChannel: m,
    onAction: g,
    userId: y
  } = e, h = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["variant", "size", "hangStatusChannel", "onAction", "userId"]), b = (0, i.bG)([c.A], () => c.A.getChannelId() === m.id);
  return (0, r.jsx)(l.Button, p({
    text: b ? f.intl.string(f.t.BXxdl7) : f.intl.string(f.t["9C444m"]),
    onClick: () => {
      var e, t;
      null == g || g(), a.default.selectVoiceChannel(m.id), (0, s.iN)(m.id), u.default.track(d.HAw.HANG_STATUS_CTA_CLICKED, (e = p({
        source: "UserProfilePopout"
      }, (0, o.A)(m.id)), t = t = {
        other_user_id: y,
        cta_type: b ? "open" : "join"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e))
    },
    variant: t,
    size: n,
    fullWidth: true
  }, h))
}