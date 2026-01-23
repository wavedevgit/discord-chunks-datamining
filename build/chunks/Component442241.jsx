/** Chunk was on 86618 **/
/** chunk id: 442241, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk216705 = require("./216705.js");

function p(e) {
  var t, r;
  let {
    modalConfig: p,
    markAsDismissed: f
  } = e, u = function(e, t) {
    if (null == e) return {};
    var r, n, o, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["modalConfig", "markAsDismissed"]), y = o.useCallback(e => {
    var t;
    null == (t = p.onPrimaryClick) || t.call(p, e), f(i.i.TAKE_ACTION)
  }, [p, f]), d = [p.firstHeader, p.secondHeader].filter(Boolean).join(" "), b = [{
    variant: "secondary",
    text: l.intl.string(l.t["ETE/oC"]),
    onClick: u.onClose
  }, ...null != p.primaryButtonText ? [{
    variant: "primary",
    text: p.primaryButtonText,
    onClick: y
  }] : []];
  return (0, n.jsx)(a.Modal, (t = function(e) {
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
  }({}, u), r = r = {
    title: d,
    actions: b,
    size: "md",
    children: (0, n.jsx)("div", {
      className: s.kL,
      children: (0, n.jsxs)("div", {
        className: s.hQ,
        children: [(0, n.jsx)(c.Text, {
          tag: "span",
          className: s.h_,
          variant: "text-sm/normal",
          children: p.firstBody
        }), (0, n.jsx)(c.Text, {
          tag: "span",
          className: s.h_,
          variant: "text-sm/normal",
          children: p.secondBody
        }), (0, n.jsx)(c.Text, {
          tag: "span",
          className: s.h_,
          variant: "text-sm/normal",
          children: p.thirdBody
        })]
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