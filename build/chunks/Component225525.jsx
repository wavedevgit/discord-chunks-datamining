/** Chunk was on 70871 **/
/** chunk id: 225525, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk841183 = require("./841183.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk848000 = require("./848000.js");

function f(t) {
  var e, r, {
      avatarId: f,
      storageHash: u,
      avatarDescription: p,
      onConfirmDelete: b,
      onClose: y
    } = t,
    d = function(t, e) {
      if (null == t) return {};
      var r, n, o = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
          a = Object.keys(t);
        for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
        return o
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
      }
      return o
    }(t, ["avatarId", "storageHash", "avatarDescription", "onConfirmDelete", "onClose"]);
  let [O, m] = o.useState(false), {
    avatarSrc: v,
    eventHandlers: j
  } = (0, c.Z)({
    avatarId: f,
    storageHash: u,
    size: i.EFr.SIZE_120
  }), {
    onMouseEnter: g,
    onMouseLeave: x
  } = j;
  return (0, n.jsxs)(i.ConfirmModal, (e = function(t) {
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
    bodyClassName: l.modalContent,
    header: s.intl.string(s.t.rfaLTH),
    confirmText: s.intl.string(s.t.Lh0uyy),
    cancelText: s.intl.string(s.t["ETE/oC"]),
    confirmButtonColor: a.zx.Colors.RED,
    loading: O,
    onConfirm: async () => {
      m(true);
      try {
        await b()
      } catch (t) {} finally {
        m(false)
      }
      y()
    },
    onClose: y
  }, d), r = r = {
    children: [(0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      children: s.intl.string(s.t.EKmxKc)
    }), (0, n.jsx)("div", {
      onMouseEnter: g,
      onMouseLeave: x,
      className: l.avatarContainer,
      children: (0, n.jsx)("img", {
        src: v,
        alt: p,
        className: l.avatar
      })
    }), (0, n.jsx)(i.Text, {
      variant: "eyebrow",
      color: "text-feedback-positive",
      children: s.intl.string(s.t["2Ld8DM"])
    }), (0, n.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: s.intl.string(s.t.Oe0xqt)
    })]
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