/** Chunk was on 82124 **/
/** chunk id: 271172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk622822 = require("./622822.js"),
  Chunk986035 = require("./986035.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk698194 = require("./698194.js");

function g(e) {
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
  var t, n;
  let {
    guild: l,
    channelId: a
  } = e, o = (0, d.kH)(l), {
    modalType: h
  } = o, m = function(e, t) {
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
  }(o, ["modalType"]), b = i.useCallback(() => {
    null != l && s.Z.nsfwReturnToSafety(l.id)
  }, [l]), y = i.useCallback(() => {
    null != l && s.Z.nsfwAgree(l.id)
  }, [l]), v = i.useCallback(() => {
    c.Z.showAgeVerificationGetStartedModal({
      entryPoint: u.cU.NSFW_GUILD
    })
  }, []), O = (t = g({}, m), n = n = {
    guildId: null == l ? true : l.id,
    channelId: a,
    disagreement: f.intl.string(f.t["/g10LC"])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t);
  switch (h) {
    case u.it.NSFW_CHANNEL_AGE_VERIFY:
    case u.it.GUILD_LARGE_SERVER:
      return (0, r.jsx)(p.Z, g({
        onAgree: v,
        onDisagree: b,
        modalType: h
      }, O));
    default:
      return (0, r.jsx)(p.Z, g({
        onAgree: y,
        onDisagree: b,
        modalType: h
      }, O))
  }
}
let b = function(e) {
  let {
    guild: t,
    channelId: n,
    className: l
  } = e, s = i.useRef(null);
  return i.useEffect(() => {
    let {
      current: e
    } = s;
    null == e || e.scrollToBottom()
  }, []), (0, r.jsx)(o.Den, {
    ref: s,
    className: h.scroller,
    children: (0, r.jsx)("div", {
      className: a()(l, h.wrapper),
      children: (0, r.jsx)(m, {
        guild: t,
        channelId: n
      })
    })
  })
}