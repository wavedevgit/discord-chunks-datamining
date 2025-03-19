/** Chunk was on 13965 **/
n.d(t, {
  default: () => O
}), n(47120), n(266796);
var r = n(200651),
  o = n(192379),
  c = n(119617),
  s = n(442837),
  a = n(481060),
  i = n(607070),
  l = n(530618),
  f = n(372654),
  u = n(535396),
  p = n(367123),
  b = n(388032),
  d = n(841174),
  m = n(942570);

function j(e) {
  let {
    powerup: t
  } = e;
  switch (t.type) {
    case u.Us.LEVEL:
      return (0, r.jsx)("img", {
        alt: "",
        src: m
      });
    case u.Us.PERK:
      return (0, r.jsx)("img", {
        alt: "",
        src: "",
        className: d.exampleImage
      })
  }
}

function O(e) {
  var t, n, {
      powerup: u
    } = e,
    m = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          c = Object.keys(e);
        for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (r = 0; r < c.length; r++) n = c[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["powerup"]);
  let O = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
    g = o.useRef(null),
    y = o.useRef(new c.qA),
    [x, h] = o.useState(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.O_, {
      ref: h,
      className: d.confettiCanvas,
      environment: y.current
    }), (0, r.jsxs)(a.Y0X, (t = function(e) {
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
      className: d.modal,
      size: a.CgR.DYNAMIC
    }, m), n = n = {
      children: [(0, r.jsx)(a.hzk, {
        className: d.modalContentContainer,
        scrollbarType: "none",
        children: (0, r.jsxs)("div", {
          className: d.container,
          ref: g,
          children: [(0, r.jsx)(j, {
            powerup: u
          }), (0, r.jsxs)("div", {
            className: d.contentContainer,
            children: [(0, r.jsx)(a.X6q, {
              variant: "heading-xl/extrabold",
              children: b.NW.formatToPlainString(p.Z.lFuOFB, {
                perkName: u.title
              })
            }), (0, r.jsx)(a.Text, {
              className: d.description,
              variant: "text-sm/normal",
              children: b.NW.formatToPlainString(p.Z.y3wHoq, {
                perkName: u.title
              })
            }), (0, r.jsx)(a.zxk, {
              className: d.button,
              onClick: m.onClose,
              children: b.NW.string(p.Z["g5Ds6+"])
            })]
          })]
        })
      }), (0, r.jsx)(a.olH, {
        className: d.close,
        onClick: m.onClose
      }), !O && (0, r.jsx)(l.Z, {
        confettiTarget: g.current,
        confettiCanvas: x,
        sprites: (0, f.vK)()
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
    }), t))]
  })
}