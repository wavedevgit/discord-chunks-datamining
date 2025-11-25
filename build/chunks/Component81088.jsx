/** Chunk was on 22002 **/
/** chunk id: 81088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ko: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js");

function s(e) {
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
}
require("./481060.js"), require("./612853.jsx"), require("./482151.js");
let o = e => {
  var t, n, {
    onClick: o,
    loading: a,
    disabled: c,
    text: u,
    tooltipText: d
  } = e;
  let p = s({
      variant: "active",
      type: "submit",
      "data-testid": "submitButton",
      text: u
    }, function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["onClick", "loading", "disabled", "text", "tooltipText"])),
    b = (0, r.jsx)(i.zxk, (t = s({}, p), n = n = {
      onClick: o,
      loading: a,
      disabled: c,
      text: u
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t));
  return null != d ? (0, r.jsx)(l.u, {
    text: d,
    asContainer: true,
    children: b
  }) : b
}