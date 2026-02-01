/** Chunk was on 88474 **/
/** chunk id: 834425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk729937 = require("./729937.js"),
  Chunk307600 = require("./307600.js"),
  Chunk998218 = require("./998218.js");

function o(e) {
  let {
    activity: t,
    user: n,
    variant: o = "secondary",
    onAction: c
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["activity", "user", "variant", "onAction"]);
  if ((null == t ? true : t.buttons) == null || t.buttons.length < 1) return null;
  async function d(e, t, n) {
    try {
      let r = await (0, i.yb)(e, t);
      if (r.button_urls.length <= n) return;
      let l = r.button_urls[n];
      if ("string" != typeof l) return;
      let o = s.A.safeParseWithQuery(l);
      if (null == o || null == o.protocol || null == o.hostname) return;
      (0, a.h)({
        href: s.A.format(o),
        trusted: false
      })
    } catch (e) {}
  }
  return (0, r.jsx)(r.Fragment, {
    children: t.buttons.map((e, i) => (0, r.jsx)(l.Button, function(e) {
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
      text: e,
      variant: o,
      size: "sm",
      fullWidth: true,
      onClick: () => {
        null == c || c(), d(t, n.id, i)
      }
    }, u), "customButton-".concat(i)))
  })
}