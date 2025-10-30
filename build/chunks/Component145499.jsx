/** Chunk was on 29679 **/
/** chunk id: 145499, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk274136 = require("./274136.js"),
  Chunk2052 = require("./2052.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk678558 = require("./678558.jsx"),
  Chunk852679 = require("./852679.jsx"),
  Chunk357156 = require("./357156.js"),
  Chunk713081 = require("./713081.js"),
  Chunk151494 = require("./151494.js"),
  Chunk639777 = require("./639777.js"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk155133 = require("./155133.js"),
  Chunk863562 = require("./863562.jsx"),
  Chunk399829 = require("./399829.jsx"),
  Chunk428862 = require("./428862.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk535396 = require("./535396.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk663494 = require("./663494.js");
let T = e => {
    let {
      children: t,
      currentGuildTier: n,
      guildStickers: i,
      tier: l
    } = e, a = n < l, s = (0, v.ig)(l);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: t
      }), !a && (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: I.intl.format(I.t.ZLoNtm, {
          numTotal: s,
          numAvailable: (0, v.Qi)(i, l)
        })
      })]
    })
  },
  P = () => (0, Chunk951288.jsx)("div", {
    className: Chunk663494.placeholderCard,
    children: (0, Chunk951288.jsx)("img", {
      className: Chunk663494.placeholderImg,
      alt: Chunk388032.intl.string(Chunk388032.t.wl4ntJ),
      src: require("./872732.js")
    })
  }),
  w = e => {
    let {
      guild: t
    } = e, {
      location: i
    } = (0, u.O)(), {
      canCreateExpressions: l
    } = (0, f.XJ)(t);
    return (0, r.jsx)(c.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.O1REe1),
      onClick: () => {
        j.default.track(E.rMx.OPEN_MODAL, {
          type: E.jXE.CREATE_STICKER_MODAL,
          location: i
        }), (e => {
          let {
            guildId: t
          } = e;
          (0, c.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("93626"), n.e("72997")]).then(n.bind(n, 136735));
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
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({
              guildId: t
            }, n))
          })
        })({
          guildId: t.id
        })
      },
      disabled: !l
    })
  },
  Z = e => {
    let {
      guild: t
    } = e, l = (0, _.Z)(t.id), {
      analyticsLocations: u
    } = (0, g.ZP)(), j = (0, b.Z)(t.id), Z = t.features.has(E.GuildFeatures.MORE_STICKERS) ? E.Eu4.TIER_3 : t.premiumTier, R = t.features.has(E.GuildFeatures.MORE_STICKERS) ? E.oCV[E.Eu4.TIER_3] : j, D = (0, x.Z)(t.id);
    if (i.useEffect(() => {
        window.dispatchEvent(new Event("resize"))
      }, [l]), "success" !== l.status) return (0, r.jsx)(c.$jN, {});
    let A = l.stickers,
      L = [{
        tier: E.Eu4.NONE,
        title: (0, r.jsx)(T, {
          guildStickers: A,
          currentGuildTier: Z,
          tier: E.Eu4.NONE,
          children: I.intl.string(I.t.tfVXhP)
        })
      }, {
        tier: E.Eu4.TIER_1,
        title: (0, r.jsx)(T, {
          guildStickers: A,
          currentGuildTier: Z,
          tier: E.Eu4.TIER_1,
          children: I.intl.string(I.t.nzXtaS)
        })
      }, {
        tier: E.Eu4.TIER_2,
        title: (0, r.jsx)(T, {
          guildStickers: A,
          currentGuildTier: Z,
          tier: E.Eu4.TIER_2,
          children: I.intl.string(I.t["h33/uW"])
        })
      }, {
        tier: E.Eu4.TIER_3,
        title: (0, r.jsx)(T, {
          guildStickers: A,
          currentGuildTier: Z,
          tier: E.Eu4.TIER_3,
          children: I.intl.string(I.t.BfF6ED)
        })
      }];
    return (0, r.jsx)(O.Z, {
      tiers: L,
      renderTier: e => {
        var i;
        let l, g, {
            isAnimatedTo: b,
            onSetRef: x,
            tier: _,
            tiers: O,
            tierIndex: T
          } = e,
          {
            canCreateExpressions: L,
            canManageGuildExpression: k
          } = (0, f.Gw)(t),
          G = O[T - 1],
          M = null != G ? (0, v.A3)(G.tier) : 0,
          U = (0, v.A3)(_.tier, t),
          B = (0, v.ig)(_.tier),
          F = A.slice(M, U),
          H = F.length > 0,
          W = Z < _.tier,
          z = (i = A.length, i < (0, v.A3)(E.Eu4.NONE) ? E.Eu4.NONE : i < (0, v.A3)(E.Eu4.TIER_1) ? E.Eu4.TIER_1 : i < (0, v.A3)(E.Eu4.TIER_2) ? E.Eu4.TIER_2 : i < (0, v.A3)(E.Eu4.TIER_3) || null != t && t.features.has(E.GuildFeatures.MORE_STICKERS) && i < d.D.MAX_STICKER_SLOTS ? E.Eu4.TIER_3 : E.Eu4.NONE),
          V = L && !W && z === _.tier && U !== F.length,
          K = V || F.length > 0,
          Y = U - M,
          q = n(872732),
          X = B - F.length,
          J = V ? Math.min(5 - (F.length + 0) % 5, X) : 0,
          Q = [];
        for (let e = 0; e < J; e++) Q.push((0, r.jsx)(P, {}, "placeholder-".concat(e)));
        let $ = t.premiumTier < _.tier && j >= E.oCV[_.tier],
          ee = I.intl.string(I.t.dtFw5c),
          et = () => {
            var e, n;
            let r;
            return e = Math.max(1, E.oCV[_.tier] - j), n = _.tier, r = null, void(n === E.Eu4.TIER_1 ? r = E.AnalyticsObjectTypes.TIER_1 : n === E.Eu4.TIER_2 ? r = E.AnalyticsObjectTypes.TIER_2 : n === E.Eu4.TIER_3 && (r = E.AnalyticsObjectTypes.TIER_3), (0, p.Z)({
              analyticsLocations: u,
              analyticsLocation: {
                page: E.ZY5.GUILD_SETTINGS,
                section: E.jXE.GUILD_SETTINGS_STICKERS,
                object: E.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                objectType: r
              },
              guildId: t.id,
              totalNumberOfSlotsToAssign: e
            }))
          },
          en = false;
        $ && (D ? (et = () => {
          let e = N.Cp[_.tier];
          null != e && (0, h.H6)(t.id, e)
        }, ee = I.intl.string(I.t.g7lkrU), t.premiumTier + 1 !== _.tier && (en = true, l = I.intl.string(I.t.mTMkY2))) : (en = true, l = I.intl.string(I.t.hwPEJR)));
        let er = z === T + 1 && z > Z,
          ei = V || er || T > Z;
        return er ? g = (0, r.jsx)(m.Z, {
          guild: t,
          size: o.zx.Sizes.SMALL,
          color: o.zx.Colors.GREEN,
          buttonText: I.intl.string(I.t.Vbkh2l),
          targetBoostedGuildTier: Z + 1,
          analyticsLocation: {
            page: E.ZY5.GUILD_SETTINGS,
            section: E.jXE.GUILD_SETTINGS_STICKERS,
            object: E.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
            objectType: (0, v.ge)(_.tier)
          }
        }) : V && (g = (0, r.jsx)(w, {
          guild: t
        })), (0, r.jsxs)(y.Z, {
          subscriptionCount: R,
          tier: _,
          onSetRef: x,
          isAnimatedTo: b,
          hasBottomMargin: T !== O.length - 1,
          withCardBody: !K,
          headerButton: g,
          showHeaderLockStatus: ei,
          guildId: t.id,
          children: [K && (0, r.jsxs)("div", {
            className: S.grid,
            children: [F.map(e => (0, r.jsx)(C.Z, {
              isDisabled: W,
              sticker: e,
              canManageSticker: k(e)
            }, e.id)), Q]
          }), !W && !V && 0 === F.length && (0, r.jsx)("div", {
            className: a()(S.emptyTierWrapper, S.unusedTierWrapper),
            children: (0, r.jsx)(c.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: I.intl.string(I.t.lqwv0J)
            })
          }), W && !H && (0, r.jsxs)("div", {
            className: S.emptyTierWrapper,
            children: [(0, r.jsx)("img", {
              alt: I.intl.string(I.t.BAhswr),
              className: S.emptyTierImage,
              src: q
            }), (0, r.jsx)(c.Text, {
              className: S.unlockTierCtaHeading,
              variant: "text-md/normal",
              color: "header-secondary",
              children: _.tier === E.Eu4.TIER_1 ? I.intl.formatToPlainString(I.t.psMYux, {
                numAdditional: Y
              }) : I.intl.formatToPlainString(I.t.bLykEe, {
                numAdditional: Y,
                numTotal: U
              })
            }), (0, r.jsx)(s.u, {
              text: l,
              shouldShow: en,
              children: (0, r.jsx)(c.Button, {
                variant: "active",
                text: ee,
                disabled: en,
                onClick: et
              })
            })]
          })]
        }, _.tier)
      }
    })
  }