/** Chunk was on 81288 **/
n.d(t, {
  Z: () => C
});
var o = n(200651);
n(192379);
var i = n(120356),
  r = n.n(i),
  a = n(442837),
  l = n(481060),
  c = n(540059),
  s = n(666188),
  d = n(372769),
  u = n(523751),
  _ = n(623624),
  g = n(290034),
  m = n(271383),
  b = n(594174),
  f = n(267642),
  p = n(981631),
  h = n(388032),
  N = n(169253);

function v(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: i
  } = e, r = (0, a.e7)([b.default, m.ZP], () => {
    let e = b.default.getCurrentUser();
    return m.ZP.isMember(t.id, null == e ? void 0 : e.id)
  }), {
    premiumTier: c,
    premiumSubscriberCount: s
  } = t;
  if (0 === s && c === p.Eu4.NONE) return null;
  let d = e => {
      e.stopPropagation(), e.preventDefault(), r && !i && (0, _.f)({
        guildId: t.id,
        location: {
          section: p.jXE.GUILD_HEADER,
          object: p.qAy.BOOST_GEM_ICON
        }
      })
    },
    u = c === p.Eu4.NONE ? h.NW.string(h.t.c2wsn5) : f.nW(c),
    v = (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)("div", {
        className: N.tierTooltipTitle,
        children: u
      }), (0, o.jsx)("div", {
        children: h.NW.format(h.t.If4iTU, {
          subscriberCount: s
        })
      })]
    });
  return (0, o.jsx)("div", {
    className: N.guildIconContainer,
    children: (0, o.jsx)(l.ua7, {
      text: v,
      position: "bottom",
      "aria-label": null != u ? u : "",
      children: e => {
        var t, i;
        return (0, o.jsx)(l.P3F, (t = function(e) {
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
          className: N.__invalid_premiumGuildIcon,
          onClick: d,
          children: (0, o.jsx)(g.Z, {
            premiumTier: c,
            iconBackgroundClassName: n ? N.boostedGuildTierIconBackgroundWithVisibleBanner : N.guildBadgeIcon,
            iconClassName: n && c !== p.Eu4.TIER_3 ? N.boostedGuildTierMutedIconWithVisibleBanner : null
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n.push.apply(n, o)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
      }
    })
  })
}

function y(e) {
  let {
    guild: t,
    disableColor: n,
    disableBoostClick: i
  } = e;
  return (0, s.Z)(t) ? (0, o.jsx)("div", {
    className: N.guildIconV2Container,
    children: (0, o.jsx)(u.Z, {
      guild: t,
      tooltipPosition: "bottom",
      tooltipColor: l.ua7.Colors.PRIMARY,
      className: r()(N.guildBadge, {
        [N.disableColor]: n
      }),
      disableBoostClick: i
    })
  }) : (0, o.jsx)("div", {
    className: N.guildIconContainer,
    children: (0, o.jsx)(d.Z, {
      guild: t,
      size: 20,
      tooltipPosition: "bottom",
      tooltipColor: l.ua7.Colors.PRIMARY,
      className: r()(N.guildBadge, {
        [N.disableColor]: n
      })
    })
  })
}

function C(e) {
  var {
    guild: t,
    disableBoostClick: n
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, o, i = function(e, t) {
      if (null == e) return {};
      var n, o, i = {},
        r = Object.keys(e);
      for (o = 0; o < r.length; o++) n = r[o], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (o = 0; o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["guild", "disableBoostClick"]);
  let r = !(0, c.Q3)("GuildHeaderGuildBadge") && i.isBannerVisible;
  return (0, s.Z)(t) ? (0, o.jsx)(y, {
    guild: t,
    disableColor: !1,
    disableBoostClick: n
  }) : t.hasFeature(p.oNc.VERIFIED) || t.hasFeature(p.oNc.PARTNERED) ? (0, o.jsx)(y, {
    guild: t,
    disableColor: !r
  }) : (0, o.jsx)(v, {
    guild: t,
    isBannerVisible: r,
    disableBoostClick: n
  })
}