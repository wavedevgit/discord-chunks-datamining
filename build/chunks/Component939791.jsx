/** Chunk was on 32493 **/
/** chunk id: 939791, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk13245 = require("./13245.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  var {
    url: e,
    onClose: n
  } = t, s = function(t, e) {
    if (null == t) return {};
    var n, r, i = function(t, e) {
      if (null == t) return {};
      var n, r, i = {},
        l = Object.keys(t);
      for (r = 0; r < l.length; r++) n = l[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      for (r = 0; r < l.length; r++) n = l[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
    }
    return i
  }(t, ["url", "onClose"]);
  let [u, b] = i.useState(false), f = i.useCallback(() => {
    u && o.Z.disableExternalLinkAlert(), a.ZP.send("OPEN_EXTERNAL_URL", e), n()
  }, [u, e, n]);
  return (0, r.jsx)(l.Modal, function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), r.forEach(function(e) {
        var r;
        r = n[e], e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = r
      })
    }
    return t
  }({
    onClose: n,
    size: "md",
    title: c.intl.string(c.t.WLx4F6),
    subtitle: c.intl.string(c.t.H8O1TK),
    actionBarInput: (0, r.jsx)(l.XZJ, {
      checked: u,
      onChange: t => b(t),
      label: c.intl.string(c.t.IwqGhU),
      labelType: "secondary"
    }),
    actions: [{
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: n,
      variant: "secondary"
    }, {
      text: c.intl.string(c.t["3PatSz"]),
      onClick: f,
      variant: "primary"
    }]
  }, s))
}