/** Chunk was on 69417 **/
/** chunk id: 233787, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => p
}), require("./539854.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk792791 = require("./792791.js"),
  o = ((n = o || {}).UPGRADE = "UPGRADE", n.CANCEL = "CANCEL", n.UNVERIFIED = "UNVERIFIED", n.UNCLAIMED = "UNCLAIMED", n.GRANDFATHERED = "GRANDFATHERED", n);
let s = {
    UPGRADE: "imageUpgrade",
    CANCEL: "imageCancel",
    UNVERIFIED: "imageUnverified",
    UNCLAIMED: "imageUnclaimed",
    GRANDFATHERED: "imageCancel"
  },
  u = e => {
    var t, r, {
        children: n,
        premiumModalType: o,
        primary: u,
        secondary: p
      } = e,
      b = function(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
          if (null == e) return {};
          var r, n, i = {},
            a = Object.keys(e);
          for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
      }(e, ["children", "premiumModalType", "primary", "secondary"]);
    let m = a.useMemo(() => {
      let e = [];
      return null != p && e.push({
        variant: "secondary",
        text: p.label,
        onClick: p.onClick
      }), null != u && e.push({
        variant: "primary",
        text: u.label,
        onClick: u.onClick
      }), e
    }, [u, p]);
    return (0, i.jsxs)(c.Modal, (t = function(e) {
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
    }({}, b), r = r = {
      actions: m,
      children: [(0, i.jsx)("div", {
        className: l[s[o]]
      }), (0, i.jsx)("div", {
        className: l.message,
        children: n
      })]
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
  };
u.Types = o;
let p = u