/** Chunk was on 80388 **/
/** chunk id: 885377, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./321073.js");
var n, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk672709 = require("./672709.js"),
  o = ((n = o || {}).UPGRADE = "UPGRADE", n.CANCEL = "CANCEL", n.UNVERIFIED = "UNVERIFIED", n.UNCLAIMED = "UNCLAIMED", n.GRANDFATHERED = "GRANDFATHERED", n);
let s = {
    UPGRADE: "imageUpgrade",
    CANCEL: "imageCancel",
    UNVERIFIED: "imageUnverified",
    UNCLAIMED: "imageUnclaimed",
    GRANDFATHERED: "imageCancel"
  },
  p = e => {
    var t, r;
    let {
      children: n,
      premiumModalType: o,
      primary: p,
      secondary: u
    } = e, b = function(e, t) {
      if (null == e) return {};
      var r, n, c, i = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (c = 0, r = Reflect.ownKeys(e); c < r.length; c++) n = r[c], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }
      if (i = function(e, t) {
          if (null == e) return {};
          var r, n, c = {},
            i = Object.getOwnPropertyNames(e);
          for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
          return c
        }(e, t), Object.getOwnPropertySymbols)
        for (c = 0, r = Object.getOwnPropertySymbols(e); c < r.length; c++) n = r[c], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, ["children", "premiumModalType", "primary", "secondary"]), f = i.useMemo(() => {
      let e = [];
      return null != u && e.push({
        variant: "secondary",
        text: u.label,
        onClick: u.onClick
      }), null != p && e.push({
        variant: "primary",
        text: p.label,
        onClick: p.onClick
      }), e
    }, [p, u]);
    return (0, c.jsxs)(l.Modal, (t = function(e) {
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
      actions: f,
      children: [(0, c.jsx)("div", {
        className: a[s[o]]
      }), (0, c.jsx)("div", {
        className: a.message,
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
p.Types = o;
let u = p