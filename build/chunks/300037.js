/** Chunk was on 53485 **/
n.d(t, {
  Z: () => x
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(399606),
  l = n(481060),
  o = n(975298),
  c = n(565138),
  d = n(623624),
  u = n(678558),
  m = n(430824),
  g = n(709586),
  p = n(267642),
  h = n(981631),
  f = n(474936),
  N = n(388032),
  b = n(794605);
let x = function(e) {
  let {
    className: t,
    guildId: n,
    boostingVariant: i
  } = e, x = (0, a.e7)([m.Z], () => m.Z.getGuild(n), [n]), {
    fractionalState: _
  } = (0, o.Z)(), E = _ === f.a$.FP_ONLY;
  return null == x ? (0, r.jsx)("div", {
    className: s()(t, b.guildContainer),
    children: (0, r.jsx)("div", {
      className: b.guildInfoContainer,
      children: (0, r.jsx)(l.Text, {
        variant: "text-lg/bold",
        children: N.NW.string(N.t["6Kwwur"])
      })
    })
  }) : (0, r.jsxs)("div", {
    className: s()(t, b.guildContainer),
    children: [(0, r.jsx)(c.Z, {
      className: b.__invalid_guildIcon,
      guild: x,
      size: c.Z.Sizes.LARGER
    }), (0, r.jsxs)("div", {
      className: b.guildInfoContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/bold",
        children: x.name
      }), (0, r.jsxs)("div", {
        className: b.guildBoostStatsContainer,
        children: [(0, r.jsx)(g.Z, {
          className: b.guildBoostBadge,
          width: 16,
          height: 16
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: N.NW.format(N.t["pob/cH"], {
            subscriptions: x.premiumSubscriberCount
          })
        }), (0, r.jsx)("div", {
          className: b.separator
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: (0, p.nW)(x.premiumTier, {
            useLevels: !1
          })
        })]
      })]
    }), i ? (0, r.jsx)(u.Z, {
      guild: x,
      analyticsLocation: {
        page: h.ZY5.GUILD_BOOSTING_USER_SETTINGS,
        section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: h.qAy.BUTTON_CTA,
        objectType: h.Qqv.BUY
      },
      pauseAnimation: !0,
      size: l.zxk.Sizes.MEDIUM,
      color: l.zxk.Colors.PRIMARY,
      buttonText: N.NW.string(N.t.aBHecH),
      disabled: E
    }) : (0, r.jsx)(l.zxk, {
      color: l.zxk.Colors.PRIMARY,
      onClick: () => {
        (0, d.f)({
          guildId: x.id,
          location: {
            section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      },
      size: l.zxk.Sizes.MEDIUM,
      disabled: E,
      children: N.NW.string(N.t.KLOhbG)
    })]
  })
}