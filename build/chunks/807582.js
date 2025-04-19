/** Chunk was on 85449 **/
n.d(t, {
  Z: () => _
}), n(953529);
var i = n(200651);
n(192379);
var r = n(120356),
  o = n.n(r),
  a = n(481060),
  l = n(709586),
  c = n(267642),
  d = n(388032),
  s = n(721641);
let _ = e => {
  let t, n, r, {
      guildFeature: _,
      guild: p,
      className: f,
      hideTooltip: u = !1,
      tooltipPosition: m = "left",
      onClick: b
    } = e,
    v = p.hasFeature(_),
    g = (0, c._p)(_);
  return (v ? (null != g && (r = d.intl.string(d.t.hUgjyM)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      className: s.unlockedIcon
    }), (0, i.jsx)(a.X6q, {
      variant: "eyebrow",
      className: s.description,
      children: d.intl.string(d.t["0O+87u"])
    })]
  })) : (null != g && (r = d.intl.string(d.t.L2wYYm)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      className: s.icon
    }), (0, i.jsx)(a.X6q, {
      variant: "eyebrow",
      className: s.description,
      children: null != g && (0, c.e9)(g)
    })]
  })), n = u || null == r ? (0, i.jsx)("div", {
    className: o()(s.availabilityIndicator, f),
    children: t
  }) : (0, i.jsx)(a.ua7, {
    position: m,
    text: r,
    children: e => {
      var n, r;
      return (0, i.jsx)("div", (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i
          })
        }
        return e
      }({}, e), r = r = {
        className: o()(s.availabilityIndicator, f),
        children: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  }), null == b || v) ? n : (0, i.jsx)(a.P3F, {
    onClick: b,
    className: s.clickable,
    children: n
  })
}