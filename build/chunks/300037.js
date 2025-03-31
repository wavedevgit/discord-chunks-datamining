/** Chunk was on 13323 **/
n.d(t, {
  Z: () => _
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
  m = n(124570),
  g = n(430824),
  p = n(594174),
  h = n(709586),
  f = n(267642),
  N = n(981631),
  b = n(388032),
  x = n(574210);
let _ = function(e) {
  let {
    className: t,
    guildId: n,
    boostingVariant: i
  } = e, _ = (0, a.e7)([g.Z], () => g.Z.getGuild(n), [n]), E = (0, a.e7)([p.default], () => p.default.getCurrentUser()), {
    fractionalState: j
  } = (0, o.Z)(), O = (0, m.y)("guild_boosting_setting_guild_info_card", E, j);
  return null == _ ? (0, r.jsx)("div", {
    className: s()(t, x.guildContainer),
    children: (0, r.jsx)("div", {
      className: x.guildInfoContainer,
      children: (0, r.jsx)(l.Text, {
        variant: "text-lg/bold",
        children: b.NW.string(b.t["6Kwwur"])
      })
    })
  }) : (0, r.jsxs)("div", {
    className: s()(t, x.guildContainer),
    children: [(0, r.jsx)(c.Z, {
      className: x.__invalid_guildIcon,
      guild: _,
      size: c.Z.Sizes.LARGER
    }), (0, r.jsxs)("div", {
      className: x.guildInfoContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/bold",
        children: _.name
      }), (0, r.jsxs)("div", {
        className: x.guildBoostStatsContainer,
        children: [(0, r.jsx)(h.Z, {
          className: x.guildBoostBadge,
          width: 16,
          height: 16
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: b.NW.format(b.t["pob/cH"], {
            subscriptions: _.premiumSubscriberCount
          })
        }), (0, r.jsx)("div", {
          className: x.separator
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: (0, f.nW)(_.premiumTier, {
            useLevels: !1
          })
        })]
      })]
    }), i ? (0, r.jsx)(u.Z, {
      guild: _,
      analyticsLocation: {
        page: N.ZY5.GUILD_BOOSTING_USER_SETTINGS,
        section: N.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: N.qAy.BUTTON_CTA,
        objectType: N.Qqv.BUY
      },
      pauseAnimation: !0,
      size: l.zxk.Sizes.MEDIUM,
      color: l.zxk.Colors.PRIMARY,
      buttonText: b.NW.string(b.t.aBHecH),
      disabled: O
    }) : (0, r.jsx)(l.zxk, {
      color: l.zxk.Colors.PRIMARY,
      onClick: () => {
        (0, d.f)({
          guildId: _.id,
          location: {
            section: N.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      },
      size: l.zxk.Sizes.MEDIUM,
      disabled: O,
      children: b.NW.string(b.t.KLOhbG)
    })]
  })
}