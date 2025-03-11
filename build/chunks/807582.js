/** Chunk was on 31226 **/
n.d(t, {
  Z: () => s
}), n(266796);
var o = n(200651);
n(192379);
var i = n(120356),
  r = n.n(i),
  a = n(481060),
  l = n(709586),
  c = n(267642),
  d = n(388032),
  _ = n(523963);
let s = e => {
  let t, n, i, {
      guildFeature: s,
      guild: p,
      className: f,
      hideTooltip: u = !1,
      tooltipPosition: m = "left",
      onClick: g
    } = e,
    b = p.hasFeature(s),
    v = (0, c._p)(s);
  return (b ? (null != v && (i = d.NW.string(d.t.hUgjyM)), t = (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(l.Z, {
      className: _.unlockedIcon
    }), (0, o.jsx)(a.X6q, {
      variant: "eyebrow",
      className: _.description,
      children: d.NW.string(d.t["0O+87u"])
    })]
  })) : (null != v && (i = d.NW.string(d.t.L2wYYm)), t = (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(l.Z, {
      className: _.icon
    }), (0, o.jsx)(a.X6q, {
      variant: "eyebrow",
      className: _.description,
      children: null != v && (0, c.e9)(v)
    })]
  })), n = u || null == i ? (0, o.jsx)("div", {
    className: r()(_.availabilityIndicator, f),
    children: t
  }) : (0, o.jsx)(a.ua7, {
    position: m,
    text: i,
    children: e => {
      var n, i;
      return (0, o.jsx)("div", (n = function(e) {
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
      }({}, e), i = i = {
        className: r()(_.availabilityIndicator, f),
        children: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n.push.apply(n, o)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  }), null == g || b) ? n : (0, o.jsx)(a.P3F, {
    onClick: g,
    className: _.clickable,
    children: n
  })
}