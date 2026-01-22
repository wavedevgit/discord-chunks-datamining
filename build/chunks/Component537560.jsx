/** Chunk was on 42945 **/
/** chunk id: 537560, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk997509 = require("./997509.js"),
  Chunk985018 = require("./985018.jsx");
let a = e => {
  let {
    name: t,
    guildId: r,
    onClose: a
  } = e, u = function(e, t) {
    if (null == e) return {};
    var r, n, l, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          o = Object.getOwnPropertyNames(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    return o
  }(e, ["name", "guildId", "onClose"]), s = l.useCallback(() => {
    null == a || a(), i.A.leaveGuild(r)
  }, [r, a]), p = l.useMemo(() => [{
    variant: "secondary",
    text: c.intl.string(c.t.J2TBi3),
    onClick: s
  }, {
    text: c.intl.string(c.t.TyCVIq),
    onClick: a
  }], [s, a]);
  return (0, n.jsx)(o.Modal, function(e) {
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
    title: c.intl.string(c.t.aCAiGl),
    subtitle: c.intl.format(c.t["4cJV9S"], {
      serverName: t
    }),
    actions: p,
    onClose: a
  }, u))
}