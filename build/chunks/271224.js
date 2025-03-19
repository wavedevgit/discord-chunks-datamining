/** Chunk was on 99014 **/
n.d(t, {
  default: () => u
}), n(47120);
var o = n(200651),
  r = n(192379),
  s = n(481060),
  a = n(17622),
  c = n(969867),
  i = n(790053),
  l = n(942570);

function u(e) {
  var t, n, {
      guildId: u,
      powerup: d
    } = e,
    b = function(e, t) {
      if (null == e) return {};
      var n, o, r = function(e, t) {
        if (null == e) return {};
        var n, o, r = {},
          s = Object.keys(e);
        for (o = 0; o < s.length; o++) n = s[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (o = 0; o < s.length; o++) n = s[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["guildId", "powerup"]);
  let [p, m] = r.useState(void 0);
  return (0, o.jsxs)(s.Y0X, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), o.forEach(function(t) {
        var o;
        o = n[t], t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = o
      })
    }
    return e
  }({
    className: i.modal,
    size: s.CgR.DYNAMIC
  }, b), n = n = {
    children: [(0, o.jsxs)(s.hzk, {
      className: i.modalContentContainer,
      scrollbarType: "none",
      children: [(0, o.jsx)("img", {
        alt: "",
        src: l,
        className: i.boostImage
      }), (0, o.jsxs)("div", {
        className: i.contentContainer,
        children: [(0, o.jsx)(s.X6q, {
          variant: "heading-xl/extrabold",
          children: d.title
        }), (0, o.jsx)(a.Z, {
          powerup: d
        }), null != p && (0, o.jsx)(s.Text, {
          color: "status-danger",
          variant: "text-sm/semibold",
          children: p
        }), (0, o.jsx)(c.Z, {
          className: i.footer,
          guildId: u,
          powerup: d,
          onError: m
        })]
      })]
    }), (0, o.jsx)(s.olH, {
      className: i.close,
      onClick: b.onClose,
      withCircleBackground: !0
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}