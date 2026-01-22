/** Chunk was on 30582 **/
/** chunk id: 613429, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk684013 = require("./684013.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    url: t,
    onClose: r
  } = e, s = function(e, t) {
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
  }(e, ["url", "onClose"]), [u, p] = l.useState(false), b = l.useCallback(() => {
    u && i.A.disableExternalLinkAlert(), a.Ay.send("OPEN_EXTERNAL_URL", t), r()
  }, [u, t, r]);
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
    onClose: r,
    size: "md",
    title: c.intl.string(c.t.WLx4F6),
    subtitle: c.intl.string(c.t.H8O1TK),
    actionBarInput: (0, n.jsx)(o.Sc0, {
      checked: u,
      onChange: e => p(e),
      label: c.intl.string(c.t.IwqGhU),
      labelType: "secondary"
    }),
    actions: [{
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: r,
      variant: "secondary"
    }, {
      text: c.intl.string(c.t["3PatSz"]),
      onClick: b,
      variant: "primary"
    }]
  }, s))
}