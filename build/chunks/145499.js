/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => B
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  A = n(274136),
  c = n(2052),
  d = n(906732),
  u = n(678558),
  g = n(852679),
  f = n(357156),
  m = n(626135),
  p = n(267642),
  h = n(268350),
  C = n(926491),
  b = n(386937),
  v = n(316350),
  x = n(863562),
  N = n(981631),
  j = n(388032),
  E = n(800488);
let I = (e, t) => e < (0, p.A3)(N.Eu4.NONE) ? N.Eu4.NONE : e < (0, p.A3)(N.Eu4.TIER_1) ? N.Eu4.TIER_1 : e < (0, p.A3)(N.Eu4.TIER_2) ? N.Eu4.TIER_2 : e < (0, p.A3)(N.Eu4.TIER_3) || null != t && t.hasFeature(N.oNc.MORE_STICKERS) && e < A.D.MAX_STICKER_SLOTS ? N.Eu4.TIER_3 : N.Eu4.NONE,
  O = e => {
    let {
      children: t,
      currentGuildTier: n,
      guildStickers: i,
      tier: s
    } = e, a = n < s, l = (0, p.ig)(s);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.X6q, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: t
      }), !a && (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: j.NW.format(j.t.ZLoNtr, {
          numTotal: l,
          numAvailable: (0, p.Qi)(i, s)
        })
      })]
    })
  },
  y = e => {
    let {
      guildId: t
    } = e;
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("93626"), n.e("58665")]).then(n.bind(n, 136735));
      return n => (0, r.jsx)(e, function(e) {
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
      }({
        guildId: t
      }, n))
    })
  },
  w = () => (0, r.jsx)("div", {
    className: E.placeholderCard,
    children: (0, r.jsx)("img", {
      className: E.placeholderImg,
      alt: j.NW.string(j.t.wl4ntL),
      src: n(872732)
    })
  }),
  P = e => {
    let {
      guild: t
    } = e, {
      location: n
    } = (0, c.O)(), {
      canCreateExpressions: i
    } = (0, f.XJ)(t);
    return (0, r.jsx)(o.zxk, {
      size: o.zxk.Sizes.SMALL,
      color: o.zxk.Colors.BRAND,
      onClick: () => {
        m.default.track(N.rMx.OPEN_MODAL, {
          type: N.jXE.CREATE_STICKER_MODAL,
          location: n
        }), y({
          guildId: t.id
        })
      },
      disabled: !i,
      children: j.NW.string(j.t.O1REe3)
    })
  },
  B = e => {
    let {
      guild: t
    } = e, [s, A] = i.useState(!0), c = (0, l.e7)([C.Z], () => {
      var e;
      return null !== (e = C.Z.getStickersByGuildId(t.id)) && void 0 !== e ? e : []
    }, [t]), {
      analyticsLocations: m
    } = (0, d.ZP)(), y = t.hasFeature(N.oNc.MORE_STICKERS) ? N.Eu4.TIER_3 : t.premiumTier, B = t.hasFeature(N.oNc.MORE_STICKERS) ? (0, p.vn)(t.id)[N.Eu4.TIER_3] : t.premiumSubscriberCount;
    if (i.useEffect(() => {
        let e = !1;
        return (async () => {
          A(!0), await (0, h.pk)(t.id), e || A(!1)
        })(), () => {
          e = !0
        }
      }, [t]), i.useEffect(() => {
        window.dispatchEvent(new Event("resize"))
      }, [c]), s) return (0, r.jsx)(o.$jN, {});
    let D = (e, n) => {
        let r = null;
        n === N.Eu4.TIER_1 ? r = N.Qqv.TIER_1 : n === N.Eu4.TIER_2 ? r = N.Qqv.TIER_2 : n === N.Eu4.TIER_3 && (r = N.Qqv.TIER_3), (0, g.Z)({
          analyticsLocations: m,
          analyticsLocation: {
            page: N.ZY5.GUILD_SETTINGS,
            section: N.jXE.GUILD_SETTINGS_STICKERS,
            object: N.qAy.BOOST_LEVEL_UPSELL_BUTTON,
            objectType: r
          },
          guildId: t.id,
          totalNumberOfSlotsToAssign: e
        })
      },
      T = [{
        tier: N.Eu4.NONE,
        title: (0, r.jsx)(O, {
          guildStickers: c,
          currentGuildTier: y,
          tier: N.Eu4.NONE,
          children: j.NW.string(j.t.tfVXhI)
        })
      }, {
        tier: N.Eu4.TIER_1,
        title: (0, r.jsx)(O, {
          guildStickers: c,
          currentGuildTier: y,
          tier: N.Eu4.TIER_1,
          children: j.NW.string(j.t.nzXtaW)
        })
      }, {
        tier: N.Eu4.TIER_2,
        title: (0, r.jsx)(O, {
          guildStickers: c,
          currentGuildTier: y,
          tier: N.Eu4.TIER_2,
          children: j.NW.string(j.t["h33/ub"])
        })
      }, {
        tier: N.Eu4.TIER_3,
        title: (0, r.jsx)(O, {
          guildStickers: c,
          currentGuildTier: y,
          tier: N.Eu4.TIER_3,
          children: j.NW.string(j.t.BfF6EB)
        })
      }];
    return (0, r.jsx)(b.Z, {
      tiers: T,
      renderTier: e => {
        let i, {
            isAnimatedTo: s,
            onSetRef: l,
            tier: A,
            tiers: d,
            tierIndex: g
          } = e,
          {
            canCreateExpressions: m,
            canManageGuildExpression: h
          } = (0, f.Gw)(t),
          C = d[g - 1],
          b = null != C ? (0, p.A3)(C.tier) : 0,
          O = (0, p.A3)(A.tier, t),
          T = (0, p.ig)(A.tier),
          S = c.slice(b, O),
          L = S.length > 0,
          R = y < A.tier,
          Q = I(c.length, t),
          W = m && !R && Q === A.tier && O !== S.length,
          Z = W || S.length > 0,
          k = O - b,
          M = n(872732),
          _ = T - S.length,
          G = W ? Math.min(5 - (S.length + 0) % 5, _) : 0,
          F = [];
        for (let e = 0; e < G; e++) F.push((0, r.jsx)(w, {}, "placeholder-".concat(e)));
        let U = Q === g + 1 && Q > y,
          H = W || U || g > y;
        return U ? i = (0, r.jsx)(u.Z, {
          guild: t,
          size: o.zxk.Sizes.SMALL,
          color: o.zxk.Colors.GREEN,
          buttonText: j.NW.string(j.t.Vbkh2t),
          targetBoostedGuildTier: y + 1,
          analyticsLocation: {
            page: N.ZY5.GUILD_SETTINGS,
            section: N.jXE.GUILD_SETTINGS_STICKERS,
            object: N.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
            objectType: (0, p.ge)(A.tier)
          }
        }) : W && (i = (0, r.jsx)(P, {
          guild: t
        })), (0, r.jsxs)(v.Z, {
          subscriptionCount: B,
          tier: A,
          onSetRef: l,
          isAnimatedTo: s,
          hasBottomMargin: g !== d.length - 1,
          withCardBody: !Z,
          headerButton: i,
          showHeaderLockStatus: H,
          guildId: t.id,
          children: [Z && (0, r.jsxs)("div", {
            className: E.grid,
            children: [S.map(e => (0, r.jsx)(x.Z, {
              isDisabled: R,
              sticker: e,
              canManageSticker: h(e)
            }, e.id)), F]
          }), !R && !W && 0 === S.length && (0, r.jsx)("div", {
            className: a()(E.emptyTierWrapper, E.unusedTierWrapper),
            children: (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: j.NW.string(j.t.lqwv0N)
            })
          }), R && !L && (0, r.jsxs)("div", {
            className: E.emptyTierWrapper,
            children: [(0, r.jsx)("img", {
              alt: j.NW.string(j.t.BAhsws),
              className: E.emptyTierImage,
              src: M
            }), (0, r.jsx)(o.Text, {
              className: E.unlockTierCtaHeading,
              variant: "text-md/normal",
              color: "header-secondary",
              children: A.tier === N.Eu4.TIER_1 ? j.NW.formatToPlainString(j.t.psMYu7, {
                numAdditional: k
              }) : j.NW.formatToPlainString(j.t.bLykER, {
                numAdditional: k,
                numTotal: O
              })
            }), (0, r.jsx)(o.zxk, {
              color: o.zxk.Colors.GREEN,
              onClick: () => D((0, p.vn)(t.id)[A.tier] - t.premiumSubscriberCount, A.tier),
              children: j.NW.string(j.t.dtFw5e)
            })]
          })]
        }, A.tier)
      }
    })
  }