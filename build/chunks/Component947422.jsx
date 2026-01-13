/** Chunk was on 37194 **/
/** chunk id: 947422, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk666075 = require("./666075.js"),
  Chunk787068 = require("./787068.js");
let s = t => {
  let {
    text: e,
    icon: r,
    foreground: o
  } = t;
  return (0, n.jsxs)("div", {
    className: l.bulletContainer,
    children: [(0, n.jsx)("div", {
      className: l.iconContainer,
      children: (0, n.jsx)(r, {
        color: null != o ? o : "currentColor",
        className: l.bulletIcon,
        size: "custom",
        height: 40,
        width: 40
      })
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-default",
      className: l.bulletText,
      children: e
    })]
  })
};

function u(t) {
  var e, r, {
      transitionState: l,
      onClose: u
    } = t,
    b = function(t, e) {
      if (null == t) return {};
      var r, n, o = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
          i = Object.keys(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
        return o
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
      }
      return o
    }(t, ["transitionState", "onClose"]);
  return (0, n.jsxs)(o.ExpressiveModal, (e = function(t) {
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
  }({}, b), r = r = {
    graphic: {
      type: "image",
      src: a.Z
    },
    title: c.intl.string(c.t.UVuXCs),
    onClose: u,
    transitionState: l,
    actions: [{
      text: c.intl.string(c.t.obLqZ8),
      variant: "primary",
      onClick: u
    }],
    children: [(0, n.jsx)(s, {
      text: c.intl.string(c.t.sBDfo6),
      icon: i.nRN,
      foreground: "var(--icon-feedback-critical)"
    }), (0, n.jsx)(s, {
      text: c.intl.string(c.t.x58YtH),
      icon: i.gkL
    }), (0, n.jsx)(s, {
      text: c.intl.string(c.t.XtVqla),
      icon: i.V9
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