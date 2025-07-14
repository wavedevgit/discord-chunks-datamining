/** Chunk was on 85449 **/
n.d(t, {
  Z: () => p
}), n(953529);
var i = n(255367);
n(73800);
var r = n(120356),
  o = n.n(r),
  a = n(481060),
  c = n(158638),
  l = n(709586),
  d = n(267642),
  s = n(981631),
  _ = n(388032),
  f = n(721641);
let p = e => {
  let t, n, r, {
      guildFeature: p,
      guild: u,
      className: m,
      hideTooltip: b = !1,
      tooltipPosition: g = "left",
      onClick: v
    } = e,
    h = u.features.has(p),
    y = (0, c.AR)(u.id, "GuildSettingsBoostPerks"),
    j = (0, d._p)(p);
  return !h && p === s.oNc.VANITY_URL && y ? null : (h ? (null != j && (r = _.intl.string(_.t.hUgjyM)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      className: f.unlockedIcon
    }), (0, i.jsx)(a.X6q, {
      variant: "eyebrow",
      className: f.description,
      children: _.intl.string(_.t["0O+87u"])
    })]
  })) : (null != j && (r = _.intl.string(_.t.L2wYYm)), t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      className: f.icon
    }), (0, i.jsx)(a.X6q, {
      variant: "eyebrow",
      className: f.description,
      children: null != j && (0, d.e9)(j)
    })]
  })), n = b || null == r ? (0, i.jsx)("div", {
    className: o()(f.availabilityIndicator, m),
    children: t
  }) : (0, i.jsx)(a.ua7, {
    position: g,
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
        className: o()(f.availabilityIndicator, m),
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
  }), null == v || h) ? n : (0, i.jsx)(a.P3F, {
    onClick: v,
    className: f.clickable,
    children: n
  })
}