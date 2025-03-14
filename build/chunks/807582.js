/** Chunk was on 55166 **/
n.d(t, {
  Z: () => _
}), n(266796);
var i = n(200651);
n(192379);
var r = n(120356),
  o = n.n(r),
  a = n(481060),
  l = n(709586),
  c = n(267642),
  d = n(388032),
  s = n(523963);
let _ = e => {
  let t, n, r, {
      guildFeature: _,
      guild: f,
      className: p,
      hideTooltip: u = !1,
      tooltipPosition: m = "left",
      onClick: g
    } = e,
    v = f.hasFeature(_),
    b = (0, c._p)(_);
  return (v ? (null != b && (r = d.NW.string(d.t.hUgjyM)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      className: s.unlockedIcon
    }), (0, i.jsx)(a.X6q, {
      variant: "eyebrow",
      className: s.description,
      children: d.NW.string(d.t["0O+87u"])
    })]
  })) : (null != b && (r = d.NW.string(d.t.L2wYYm)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      className: s.icon
    }), (0, i.jsx)(a.X6q, {
      variant: "eyebrow",
      className: s.description,
      children: null != b && (0, c.e9)(b)
    })]
  })), n = u || null == r ? (0, i.jsx)("div", {
    className: o()(s.availabilityIndicator, p),
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
        className: o()(s.availabilityIndicator, p),
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
  }), null == g || v) ? n : (0, i.jsx)(a.P3F, {
    onClick: g,
    className: s.clickable,
    children: n
  })
}