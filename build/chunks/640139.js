/** Chunk was on 78718 **/
n.d(t, {
  default: () => l
}), n(47120), n(266796);
var r = n(200651),
  o = n(192379),
  s = n(481060),
  i = n(969867),
  a = n(656659);

function l(e) {
  var t, n, {
      guildId: l,
      powerup: c
    } = e,
    d = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["guildId", "powerup"]);
  let [u, p] = o.useState(void 0);
  return (0, r.jsxs)(s.Y0X, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({
    className: a.modal,
    size: s.CgR.DYNAMIC
  }, d), n = n = {
    children: [(0, r.jsxs)(s.hzk, {
      className: a.modalContentContainer,
      scrollbarType: "none",
      children: [(0, r.jsxs)("div", {
        className: a.sidebar,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: "",
          className: a.powerupImage
        }), (0, r.jsxs)("div", {
          className: a.contentContainer,
          children: [(0, r.jsx)(s.X6q, {
            variant: "heading-xl/extrabold",
            children: c.title
          }), (0, r.jsx)(s.Text, {
            className: a.description,
            variant: "text-sm/normal",
            children: c.description
          }), null != u && (0, r.jsx)(s.Text, {
            className: a.error,
            color: "status-danger",
            variant: "text-sm/semibold",
            children: u
          }), (0, r.jsx)(i.Z, {
            className: a.footer,
            guildId: l,
            powerup: c,
            onError: p
          })]
        })]
      }), (0, r.jsx)("div", {
        className: a.exampleImage,
        children: (0, r.jsx)("img", {
          alt: "",
          src: ""
        })
      })]
    }), (0, r.jsx)(s.olH, {
      className: a.close,
      onClick: d.onClose
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