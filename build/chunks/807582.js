/** Chunk was on 85449 **/
n.d(t, {
  Z: () => f
}), n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
  o = n.n(i),
  a = n(481060),
  c = n(158638),
  l = n(267642),
  s = n(981631),
  d = n(388032),
  _ = n(721641);
let f = e => {
  let t, n, i, {
      guildFeature: f,
      guild: p,
      className: u,
      hideTooltip: m = !1,
      tooltipPosition: b = "left",
      onClick: g
    } = e,
    v = p.features.has(f),
    h = (0, c.AR)(p.id, "GuildSettingsBoostPerks"),
    y = (0, l._p)(f);
  return !v && f === s.oNc.VANITY_URL && h ? null : (v ? (null != y && (i = d.intl.string(d.t.hUgjyM)), t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.$Eu, {
      color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: _.unlockedIcon
    }), (0, r.jsx)(a.X6q, {
      variant: "eyebrow",
      className: _.description,
      children: d.intl.string(d.t["0O+87u"])
    })]
  })) : (null != y && (i = d.intl.string(d.t.L2wYYm)), t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.$Eu, {
      color: "currentColor",
      className: _.icon
    }), (0, r.jsx)(a.X6q, {
      variant: "eyebrow",
      className: _.description,
      children: null != y && (0, l.e9)(y)
    })]
  })), n = m || null == i ? (0, r.jsx)("div", {
    className: o()(_.availabilityIndicator, u),
    children: t
  }) : (0, r.jsx)(a.ua7, {
    position: b,
    text: i,
    children: e => {
      var n, i;
      return (0, r.jsx)("div", (n = function(e) {
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
      }({}, e), i = i = {
        className: o()(_.availabilityIndicator, u),
        children: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  }), null == g || v) ? n : (0, r.jsx)(a.P3F, {
    onClick: g,
    className: _.clickable,
    children: n
  })
}