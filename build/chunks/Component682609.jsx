/** Chunk was on 3289 **/
/** chunk id: 682609, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk330226 = require("./330226.js");

function f(e) {
  var {
    channel: t,
    onClose: n
  } = e, f = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        c = Object.keys(e);
      for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (r = 0; r < c.length; r++) n = c[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["channel", "onClose"]);
  let s = a.intl.format(a.t.AVVUse, {
    onLearnMore: function() {
      n(), (0, o.z)()
    }
  });
  return (0, r.jsx)(c.Z, function(e) {
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
    artURL: u.Z,
    type: l.cd.MESSAGE_LENGTH_UPSELL,
    title: a.intl.string(a.t.SeL3ec),
    body: s,
    glowUp: s,
    analyticsSource: {
      page: (null == t ? true : t.getGuildId()) != null ? i.ZY5.GUILD_CHANNEL : (null == t ? true : t.isGroupDM()) || (null == t ? true : t.isPrivate()) ? i.ZY5.DM_CHANNEL : null
    },
    analyticsLocation: {
      section: i.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
      object: i.qAy.BUTTON_CTA
    },
    onClose: n
  }, f))
}