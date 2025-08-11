/** Chunk was on 53961 **/
/** chunk id: 402979, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  var t, r, {
      guild: u
    } = e,
    f = function(e, t) {
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
    }(e, ["guild"]);
  let s = u.id,
    b = o.useCallback(() => {
      c.Z.leaveGuild(s, true)
    }, [s]);
  return <i.ConfirmModal{...t = function(e) {
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
    header: l.intl.formatToPlainString(l.t["1GX6Pz"], {
      name: u.name
    }),
    confirmText: u.features.has(a.oNc.HUB) ? l.intl.string(l.t.Dv8gFR) : l.intl.string(l.t.J2TBi4),
    cancelText: l.intl.string(l.t["ETE/oK"]),
    onConfirm: b
  }, f), r = r = {
    children: (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: u.features.has(a.oNc.HUB) ? l.intl.format(l.t.ZHTXVF, {
        name: u.name
      }) : l.intl.format(l.t.ZEXC0t, {
        name: u.name
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
  }), t} />
}