/** Chunk was on 61879 **/
/** chunk id: 802426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk795338 = require("./795338.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk333669 = require("./333669.js");

function d(e) {
  var t, n, {
      modalConfig: d,
      markAsDismissed: p
    } = e,
    u = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["modalConfig", "markAsDismissed"]);
  let b = o.useCallback(e => {
    d.onPrimaryClick(e), p(i.L.TAKE_ACTION)
  }, [d, p]);
  return (0, r.jsxs)(a.Y0X, (t = function(e) {
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
    className: l.modal,
    size: a.CgR.DYNAMIC
  }, u), n = n = {
    parentComponent: "GuildPowerupRollbackModal",
    children: [(0, r.jsx)(a.hzk, {
      className: l.modalContentContainer,
      scrollbarType: "none",
      children: (0, r.jsxs)("div", {
        className: l.container,
        children: [(0, r.jsx)(s.g, {}), (0, r.jsxs)("div", {
          className: l.contentContainer,
          children: [(0, r.jsx)(a.X6q, {
            variant: "heading-xl/extrabold",
            children: d.firstHeader
          }), (0, r.jsx)(a.X6q, {
            variant: "heading-xl/extrabold",
            children: d.secondHeader
          }), (0, r.jsx)(a.Text, {
            tag: "span",
            className: l.description,
            variant: "text-sm/normal",
            children: d.firstBody
          }), (0, r.jsx)(a.Text, {
            tag: "span",
            className: l.description,
            variant: "text-sm/normal",
            children: d.secondBody
          }), (0, r.jsx)(a.Text, {
            tag: "span",
            className: l.description,
            variant: "text-sm/normal",
            children: d.thirdBody
          }), (0, r.jsxs)("div", {
            className: l.buttonContainer,
            children: [(0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: l.button,
              children: (0, r.jsx)(a.zxk, {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oK"]),
                onClick: u.onClose
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: l.button,
              children: (0, r.jsx)(a.zxk, {
                variant: "primary",
                text: d.primaryButtonText,
                onClick: b
              })
            })]
          })]
        })]
      })
    }), (0, r.jsx)(a.olH, {
      className: l.close,
      onClick: u.onClose
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}