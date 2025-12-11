/** Chunk was on 61879 **/
/** chunk id: 802426, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30172 = require("./30172.js");

function p(e) {
  var t, r, {
      modalConfig: p,
      markAsDismissed: d
    } = e,
    u = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["modalConfig", "markAsDismissed"]);
  let f = o.useCallback(e => {
      var t;
      null == (t = p.onPrimaryClick) || t.call(p, e), d(c.L.TAKE_ACTION)
    }, [p, d]),
    b = [p.firstHeader, p.secondHeader].filter(Boolean).join(" "),
    y = [{
      variant: "secondary",
      text: s.intl.string(s.t["ETE/oC"]),
      onClick: u.onClose
    }, ...null != p.primaryButtonText ? [{
      variant: "primary",
      text: p.primaryButtonText,
      onClick: f
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
    title: b,
    actions: y,
    size: "md",
    children: (0, n.jsx)("div", {
      className: l.container,
      children: (0, n.jsxs)("div", {
        className: l.contentContainer,
        children: [(0, n.jsx)(i.Text, {
          tag: "span",
          className: l.description,
          variant: "text-sm/normal",
          children: p.firstBody
        }), (0, n.jsx)(i.Text, {
          tag: "span",
          className: l.description,
          variant: "text-sm/normal",
          children: p.secondBody
        }), (0, n.jsx)(i.Text, {
          tag: "span",
          className: l.description,
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