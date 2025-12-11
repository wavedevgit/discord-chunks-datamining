/** Chunk was on 26494 **/
/** chunk id: 562715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk367907 = require("./367907.js"),
  Chunk298692 = require("./298692.js"),
  Chunk626135 = require("./626135.js"),
  Chunk826380 = require("./826380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  var t, n;
  let {
    connection: f,
    guildId: g,
    location: j
  } = e, x = (0, a.ZP)(), v = null != (n = null != f.provider_id ? null == (t = c.Z.get(f.provider_id)) ? true : t.name : null) ? n : h.intl.string(h.t.NzCoRx), {
    hasConnection: y,
    canConnect: b,
    startConnection: C,
    loading: O
  } = (0, u.B)(f.provider_id), Z = i.useCallback(async () => {
    var e, t, n;
    d.default.track(p.rMx.GUILD_ONBOARDING_CONNECTION_CLICKED, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({}, (0, s.hH)(g)), n = n = {
      connection_type: "provider",
      provider_id: null != (e = f.provider_id) ? e : true,
      location: j
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), await C(j)
  }, [C, g, f.provider_id, j]), w = i.useMemo(() => {
    if (null != f.provider_id) {
      let e = c.Z.get(f.provider_id),
        t = (null == e ? true : e.icon) != null ? (0, r.wj)(x) ? e.icon.darkPNG : e.icon.lightPNG : null;
      if (null != t) return (0, l.jsx)("img", {
        src: t,
        alt: v,
        width: 40,
        height: 40
      })
    }
    return (0, l.jsx)(o.xPt, {
      size: "custom",
      width: 40,
      height: 40,
      color: "currentColor"
    })
  }, [f.provider_id, x, v]);
  return (0, l.jsx)(m.Z, {
    displayName: v,
    description: f.description,
    icon: w,
    isLoading: O,
    isConnected: y,
    canConnect: b,
    onConnect: Z
  })
}