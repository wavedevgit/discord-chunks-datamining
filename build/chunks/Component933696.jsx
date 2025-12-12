/** Chunk was on 84509 **/
/** chunk id: 933696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk769615 = require("./769615.js");

function u(e) {
  var {
    onClose: t,
    source: n
  } = e, u = function(e, t) {
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
  }(e, ["onClose", "source"]);
  let b = l.intl.format(l.t.WMO9po, {
    onAndMore: function() {
      t(), (0, o.z)()
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
    artURL: f.Z,
    type: a.cd.PREMIUM_GUILD_IDENTITY_MODAL,
    title: l.intl.string(l.t.kOEBKP),
    body: b,
    glowUp: b,
    analyticsSource: n,
    analyticsLocation: {
      section: i.jXE.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
      object: i.qAy.BUTTON_CTA
    },
    onClose: t
  }, u))
}