/** Chunk was on 22661 **/
/** chunk id: 296289, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk625651 = require("./625651.jsx"),
  Chunk905551 = require("./905551.js"),
  Chunk162190 = require("./162190.js"),
  Chunk160589 = require("./160589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk535684 = require("./535684.js");

function d(e) {
  var {
    guildId: t,
    gameInstance: n
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["guildId", "gameInstance"]);
  let [b, f] = a.useState(false), [m, p] = a.useState(true), g = (0, c.Z)(n.gameId, "cover");
  return (0, r.jsx)(o.f, function(e) {
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
    size: "sm",
    title: n.name,
    body: (0, r.jsx)("div", {
      className: u.imageContainer,
      children: (0, r.jsx)("img", {
        alt: "",
        src: null != g ? g : "",
        className: u.image
      })
    }),
    warningText: s.intl.string(l.default.ukbS3E),
    acknowledgementText: s.intl.string(l.default.xjRtF9),
    isLoading: b,
    error: m,
    onDeactivate: () => {
      p(true), f(true), (0, i.s9)(t, n.planId, n.entitlementId).then(() => {
        d.onClose()
      }).catch(e => {
        var t;
        p(null != (t = e.body.message) ? t : e.message)
      }).finally(() => {
        f(false)
      })
    }
  }, d))
}