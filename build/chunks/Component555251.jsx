/** Chunk was on 48944 **/
/** chunk id: 555251, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk656925 = require("./656925.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk856367 = require("./856367.js");

function p(e) {
  var t, r;
  let {
    avatarId: p,
    storageHash: f,
    avatarDescription: u,
    onConfirmDelete: y,
    onClose: b
  } = e, O = function(e, t) {
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
  }(e, ["avatarId", "storageHash", "avatarDescription", "onConfirmDelete", "onClose"]), [d, j] = o.useState(false), {
    avatarSrc: g,
    eventHandlers: m
  } = (0, c.A)({
    avatarId: p,
    storageHash: f,
    size: i._3J.SIZE_120
  }), {
    onMouseEnter: v,
    onMouseLeave: h
  } = m, x = o.useCallback(async () => {
    j(true);
    try {
      await y()
    } catch (e) {} finally {
      j(false)
    }
    b()
  }, [y, b]);
  return (0, n.jsx)(a.aFV, (t = function(e) {
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
    size: "sm",
    title: l.intl.string(l.t.rfaLTH),
    subtitle: l.intl.string(l.t.EKmxKc),
    actions: [{
      text: l.intl.string(l.t["ETE/oC"]),
      variant: "secondary",
      onClick: b,
      disabled: d
    }, {
      text: l.intl.string(l.t.Lh0uyy),
      variant: "critical-primary",
      onClick: x,
      loading: d
    }],
    onClose: b
  }, O), r = r = {
    children: (0, n.jsxs)("div", {
      className: s.jE,
      children: [(0, n.jsx)("div", {
        onMouseEnter: v,
        onMouseLeave: h,
        className: s.H,
        children: (0, n.jsx)("img", {
          src: g,
          alt: u,
          className: s.my
        })
      }), (0, n.jsx)(i.Text, {
        variant: "eyebrow",
        color: "text-feedback-positive",
        children: l.intl.string(l.t["2Ld8DM"])
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        children: l.intl.string(l.t.Oe0xqt)
      })]
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