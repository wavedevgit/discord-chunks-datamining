/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => I
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(100527),
  l = n(906732),
  o = n(623624),
  c = n(372444),
  A = n(852679),
  d = n(926491),
  u = n(145499),
  g = n(424218),
  f = n(267642),
  m = n(63063),
  p = n(999382),
  h = n(981631),
  C = n(611480),
  b = n(388032),
  v = n(47104);
let x = {
    page: h.ZY5.GUILD_SETTINGS,
    section: h.jXE.GUILD_SETTINGS_STICKERS,
    object: h.qAy.BOOSTING_BANNER
  },
  N = e => {
    let {
      guild: t
    } = e, {
      analyticsLocations: n
    } = (0, l.ZP)(), i = (0, f.vn)(t.id)[h.Eu4.TIER_1] - t.premiumSubscriberCount;
    return (0, r.jsxs)("div", {
      className: v.upsellContainer,
      children: [(0, r.jsx)(s.X6q, {
        className: v.upsellHeader,
        variant: "heading-xl/semibold",
        children: b.NW.string(b.t.hzCkys)
      }), (0, r.jsx)(s.Text, {
        className: v.upsellDescription,
        variant: "text-md/normal",
        children: b.NW.string(b.t.jcesAA)
      }), (0, r.jsxs)("div", {
        className: v.upsellButtons,
        children: [(0, r.jsx)(s.zxk, {
          className: v.upsellButtonPrimary,
          innerClassName: v.upsellButton,
          color: s.zxk.Colors.WHITE,
          onClick: () => (0, A.Z)({
            analyticsLocations: n,
            analyticsLocation: x,
            guildId: t.id,
            totalNumberOfSlotsToAssign: i
          }),
          children: b.NW.string(b.t.Q5dbTk)
        }), (0, r.jsx)(s.zxk, {
          innerClassName: v.upsellButton,
          color: s.zxk.Colors.WHITE,
          onClick: () => (0, o.f)({
            guildId: t.id,
            location: {
              section: h.jXE.GUILD_SETTINGS_STICKERS
            }
          }),
          children: b.NW.string(b.t.hvVgAQ)
        })]
      })]
    })
  },
  j = () => (0, r.jsxs)(s.hjN, {
    title: b.NW.string(b.t["9N2OWF"]),
    children: [(0, r.jsx)(s.R94, {
      type: s.geA.DESCRIPTION,
      children: b.NW.format(b.t.hxLvi4, {
        fileSize: (0, g.IC)(C.Ht, {
          useKibibytes: !0
        })
      })
    }), (0, r.jsx)(s.R94, {
      type: s.geA.DESCRIPTION,
      children: b.NW.format(b.t.UBj0aW, {
        articleUrl: m.Z.getArticleURL(h.BhN.STICKERS_UPLOAD)
      })
    })]
  }),
  E = e => {
    let t, n, i, {
        guild: s,
        guildStickers: a
      } = e,
      l = s.premiumTier,
      o = (0, f.Qi)(a, l),
      A = (0, f.FZ)(l, s.id),
      d = (0, f.A3)(l),
      u = a.length;
    return null == A || l === h.Eu4.TIER_3 || o > 0 ? null : (u > d ? (t = b.NW.formatToPlainString(b.t.ZtAY1d, {
      level: A
    }), n = b.NW.formatToPlainString(b.t["13hOWl"], {
      level: A
    }), i = h.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = b.NW.string(b.t.zT9Sxc), n = b.NW.formatToPlainString(b.t.YaW9wM, {
      level: A,
      numAdditional: (0, f.ig)(A)
    }), i = h.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(c.Z, {
      header: t,
      text: n,
      guild: s,
      analyticsLocation: {
        page: h.ZY5.GUILD_SETTINGS,
        section: h.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, f.ge)(A)
      }
    }))
  },
  I = () => {
    let e = (0, i.e7)([p.Z], () => p.Z.getGuild()),
      t = (0, i.e7)([d.Z], () => {
        var t;
        return null != e && null !== (t = d.Z.getStickersByGuildId(e.id)) && void 0 !== t ? t : []
      }, [e]),
      {
        analyticsLocations: n
      } = (0, l.ZP)(a.Z.STICKERS);
    if (null == e) return null;
    let o = e.premiumTier !== h.Eu4.NONE || t.length > 0;
    return (0, r.jsx)(l.Gt, {
      value: n,
      children: (0, r.jsxs)(s.hjN, {
        title: b.NW.string(b.t.R5nQkZ),
        tag: s.RB0.H1,
        children: [o ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)(E, {
            guild: e,
            guildStickers: t
          }), (0, r.jsx)(j, {})]
        }) : (0, r.jsx)(N, {
          guild: e
        }), (0, r.jsx)(s.$i$, {
          className: v.divider
        }), (0, r.jsx)(u.Z, {
          guild: e
        })]
      })
    })
  }