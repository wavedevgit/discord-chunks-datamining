/** Chunk was on 95480 **/
/** chunk id: 275869, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk923298 = require("./923298.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  var t, r, {
      listing: u,
      transitionState: s,
      onClose: f
    } = e,
    b = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["listing", "transitionState", "onClose"]);
  return (0, n.jsx)(i.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    sku_id: u.id,
    sku_name: u.name,
    guild_id: u.guild_id,
    header: a.intl.format(a.t.avKMZo, {
      listingName: u.name
    }),
    transitionState: s,
    onClose: f
  }, b), r = r = {
    children: (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      children: a.intl.format(a.t.jkvpmk, {
        listingName: u.name,
        monetizationTermsUrl: l.Z.getArticleURL(c.BhN.CREATOR_TERMS),
        communityGuidelinesUrl: c.EYA.GUIDELINES
      })
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}