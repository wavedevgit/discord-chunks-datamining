/** Chunk was on 97492 **/
/** chunk id: 522556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk323073 = require("./323073.js"),
  Chunk506164 = require("./506164.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk635510 = require("./635510.js");

function b(e) {
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

function g(e) {
  var t, n;
  let {
    guild: i,
    channelId: a
  } = e, s = (0, d.k$)(i), {
    modalType: h
  } = s, g = function(e, t) {
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
  }(s, ["modalType"]), m = l.useCallback(() => {
    null != i && o.A.nsfwReturnToSafety(i.id)
  }, [i]), A = l.useCallback(() => {
    null != i && o.A.nsfwAgree(i.id)
  }, [i]), y = l.useCallback(() => {
    c.A.showAgeVerificationGetStartedModal({
      entryPoint: u.q1.NSFW_GUILD
    })
  }, []), O = (t = b({}, g), n = n = {
    guildId: null == i ? true : i.id,
    channelId: a,
    disagreement: p.intl.string(p.t["/g10LC"])
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
    case u.A5.NSFW_CHANNEL_AGE_VERIFY:
    case u.A5.GUILD_LARGE_SERVER:
      return (0, r.jsx)(f.A, b({
        onAgree: y,
        onDisagree: m,
        modalType: h
      }, O));
    default:
      return (0, r.jsx)(f.A, b({
        onAgree: A,
        onDisagree: m,
        modalType: h
      }, O))
  }
}
let m = function(e) {
  let {
    guild: t,
    channelId: n,
    className: i
  } = e, o = l.useRef(null);
  return l.useEffect(() => {
    let {
      current: e
    } = o;
    null == e || e.scrollToBottom()
  }, []), (0, r.jsx)(s.T7Y, {
    ref: o,
    className: h.X,
    children: (0, r.jsx)("div", {
      className: a()(i, h.i),
      children: (0, r.jsx)(g, {
        guild: t,
        channelId: n
      })
    })
  })
}