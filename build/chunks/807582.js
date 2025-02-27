/** Chunk was on 77032 **/
n.d(t, {
  Z: () => s
}), n(266796);
var i = n(200651);
n(192379);
var o = n(120356),
  r = n.n(o),
  a = n(481060),
  l = n(709586),
  c = n(267642),
  _ = n(388032),
  d = n(523963);
let s = e => {
  let t, n, o, {
      guildFeature: s,
      guild: p,
      className: f,
      hideTooltip: m = !1,
      tooltipPosition: u = "left",
      onClick: g
    } = e,
    b = p.hasFeature(s),
    v = (0, c._p)(s);
  return (b ? (null != v && (o = _.NW.string(_.t.hUgjyM)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      className: d.unlockedIcon
    }), (0, i.jsx)(a.X6q, {
      variant: "eyebrow",
      className: d.description,
      children: _.NW.string(_.t["0O+87u"])
    })]
  })) : (null != v && (o = _.NW.string(_.t.L2wYYm)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      className: d.icon
    }), (0, i.jsx)(a.X6q, {
      variant: "eyebrow",
      className: d.description,
      children: null != v && (0, c.e9)(v)
    })]
  })), n = m || null == o ? (0, i.jsx)("div", {
    className: r()(d.availabilityIndicator, f),
    children: t
  }) : (0, i.jsx)(a.ua7, {
    position: u,
    text: o,
    children: e => {
      var n, o;
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
      }({}, e), o = o = {
        className: r()(d.availabilityIndicator, f),
        children: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
      }), n))
    }
  }), null == g || b) ? n : (0, i.jsx)(a.P3F, {
    onClick: g,
    className: d.clickable,
    children: n
  })
}