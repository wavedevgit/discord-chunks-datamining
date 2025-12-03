/** Chunk was on 53961 **/
/** chunk id: 402979, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var {
    guild: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["guild"]);
  let c = t.id,
    f = i.useCallback(() => {
      l.Z.leaveGuild(c, true)
    }, [c]);
  return (0, n.jsx)(a.ConfirmModal, function(e) {
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
    title: u.intl.formatToPlainString(u.t["1GX6P/"], {
      name: t.name
    }),
    subtitle: t.features.has(o.GuildFeatures.HUB) ? u.intl.format(u.t.ZHTXVD, {
      name: t.name
    }) : u.intl.format(u.t.ZEXC0r, {
      name: t.name
    }),
    confirmText: t.features.has(o.GuildFeatures.HUB) ? u.intl.string(u.t.Dv8gFT) : u.intl.string(u.t.J2TBi3),
    onConfirm: f
  }, r))
}