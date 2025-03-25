/** Chunk was on 78718 **/
r.d(t, {
  default: () => c
}), r(47120), r(266796);
var n = r(200651),
  o = r(192379),
  s = r(481060),
  a = r(156732),
  i = r(660397),
  l = r(656659);

function c(e) {
  var t, r, {
      guildId: c,
      powerup: u
    } = e,
    d = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          s = Object.keys(e);
        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["guildId", "powerup"]);
  let [p, b] = o.useState(void 0), m = (0, a.Z)(u);
  return (0, n.jsxs)(s.Y0X, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({
    className: l.modal,
    size: s.CgR.DYNAMIC
  }, d), r = r = {
    children: [(0, n.jsxs)(s.hzk, {
      className: l.modalContentContainer,
      scrollbarType: "none",
      children: [(0, n.jsxs)("div", {
        className: l.sidebar,
        children: [(0, n.jsx)("div", {
          className: l.powerupImageContainer,
          children: (0, n.jsx)("img", {
            className: l.powerupImage,
            alt: "",
            src: m
          })
        }), (0, n.jsxs)("div", {
          className: l.contentContainer,
          children: [(0, n.jsx)(s.X6q, {
            variant: "heading-xl/extrabold",
            children: u.title
          }), (0, n.jsx)(s.Text, {
            className: l.description,
            variant: "text-sm/normal",
            children: u.description
          }), null != p && (0, n.jsx)(s.Text, {
            className: l.error,
            color: "status-danger",
            variant: "text-sm/semibold",
            children: p
          }), (0, n.jsx)(i.ZP, {
            className: l.footer,
            guildId: c,
            powerup: u,
            onError: b
          })]
        })]
      }), (0, n.jsx)("div", {
        className: l.exampleImage,
        children: (0, n.jsx)("img", {
          alt: "",
          src: ""
        })
      })]
    }), (0, n.jsx)(s.olH, {
      className: l.close,
      onClick: d.onClose
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
}