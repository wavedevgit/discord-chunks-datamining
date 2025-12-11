/** Chunk was on 70871 **/
/** chunk id: 225525, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk841183 = require("./841183.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk323964 = require("./323964.js");

function u(t) {
  var e, r, {
      avatarId: u,
      storageHash: f,
      avatarDescription: b,
      onConfirmDelete: p,
      onClose: y
    } = t,
    d = function(t, e) {
      if (null == t) return {};
      var r, n, a = function(t, e) {
        if (null == t) return {};
        var r, n, a = {},
          o = Object.keys(t);
        for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (a[r] = t[r]);
        return a
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++) r = o[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
      }
      return a
    }(t, ["avatarId", "storageHash", "avatarDescription", "onConfirmDelete", "onClose"]);
  let [O, v] = a.useState(false), {
    avatarSrc: j,
    eventHandlers: g
  } = (0, c.Z)({
    avatarId: u,
    storageHash: f,
    size: i.EFr.SIZE_120
  }), {
    onMouseEnter: m,
    onMouseLeave: h
  } = g, x = a.useCallback(async () => {
    v(true);
    try {
      await p()
    } catch (t) {} finally {
      v(false)
    }
    y()
  }, [p, y]);
  return (0, n.jsx)(o.u_l, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = r[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({
    size: "sm",
    title: s.intl.string(s.t.rfaLTH),
    subtitle: s.intl.string(s.t.EKmxKc),
    actions: [{
      text: s.intl.string(s.t["ETE/oC"]),
      variant: "secondary",
      onClick: y,
      disabled: O
    }, {
      text: s.intl.string(s.t.Lh0uyy),
      variant: "critical-primary",
      onClick: x,
      loading: O
    }],
    onClose: y
  }, d), r = r = {
    children: (0, n.jsxs)("div", {
      className: l.modalContent,
      children: [(0, n.jsx)("div", {
        onMouseEnter: m,
        onMouseLeave: h,
        className: l.avatarContainer,
        children: (0, n.jsx)("img", {
          src: j,
          alt: b,
          className: l.avatar
        })
      }), (0, n.jsx)(i.Text, {
        variant: "eyebrow",
        color: "text-feedback-positive",
        children: s.intl.string(s.t["2Ld8DM"])
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        children: s.intl.string(s.t.Oe0xqt)
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e))
}