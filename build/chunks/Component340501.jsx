/** Chunk was on 30025 **/
/** chunk id: 340501, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk622822 = require("./622822.js"),
  Chunk986035 = require("./986035.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk950660 = require("./950660.js");

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
  } = e, s = (0, u.kH)(l), {
    modalType: f
  } = s, m = function(e, t) {
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
  }(s, ["modalType"]), b = i.useCallback(() => {
    null != l && o.Z.nsfwReturnToSafety(l.id)
  }, [l]), _ = i.useCallback(() => {
    null != l && o.Z.nsfwAgree(l.id)
  }, [l]), y = i.useCallback(() => {
    c.Z.showAgeVerificationGetStartedModal({
      entryPoint: d.cU.NSFW_GUILD
    })
  }, []), x = (t = g({}, m), n = n = {
    guildId: null == l ? true : l.id,
    channelId: a,
    disagreement: h.intl.string(h.t["/g10LC"])
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
  switch (f) {
    case d.it.NSFW_CHANNEL_AGE_VERIFY:
    case d.it.GUILD_LARGE_SERVER:
      return (0, r.jsx)(p.Z, g({
        onAgree: y,
        onDisagree: b,
        modalType: f
      }, x));
    default:
      return (0, r.jsx)(p.Z, g({
        onAgree: _,
        onDisagree: b,
        modalType: f
      }, x))
  }
}
let b = function(e) {
  let {
    guild: t,
    channelId: n,
    className: l
  } = e, o = i.useRef(null);
  return i.useEffect(() => {
    let {
      current: e
    } = o;
    null == e || e.scrollToBottom()
  }, []), (0, r.jsx)(s.Den, {
    ref: o,
    className: f.scroller,
    children: (0, r.jsx)("div", {
      className: a()(l, f.wrapper),
      children: (0, r.jsx)(m, {
        guild: t,
        channelId: n
      })
    })
  })
}