/** Chunk was on 88474 **/
/** chunk id: 556445, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk562153 = require("./562153.js"),
  Chunk353411 = require("./353411.js");

function s(e) {
  let {
    activity: t,
    user: n,
    channelId: s,
    guildId: c,
    source: u,
    size: d = "sm",
    variant: f = "secondary",
    onAction: p
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["activity", "user", "channelId", "guildId", "source", "size", "variant", "onAction"]), {
    tooltip: g,
    loading: y,
    disabled: h,
    onClick: b
  } = (0, o.J$)(t, n, u, a.Ay.getNickname(c, s, n));
  return (0, r.jsx)(i.m, {
    text: g,
    children: (0, r.jsx)(l.K0, function(e) {
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
      icon: l.J2m,
      size: d,
      variant: f,
      onClick: () => {
        null == p || p(), b()
      },
      disabled: h,
      loading: y,
      "aria-label": null != g ? g : t.name
    }, m))
  })
}