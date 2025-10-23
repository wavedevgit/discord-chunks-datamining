/** Chunk was on 64982 **/
/** chunk id: 145499, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk926491 = require("./926491.js"),
  Chunk909707 = require("./909707.js"),
  Chunk863562 = require("./863562.jsx"),
  Chunk399829 = require("./399829.jsx"),
  Chunk428862 = require("./428862.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk535396 = require("./535396.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk486217 = require("./486217.js");
let w = e => {
    let {
      children: t,
      currentGuildTier: n,
      guildStickers: i,
      tier: l
    } = e, a = n < l, s = (0, _.ig)(l);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: t
      }), !a && (0, r.jsx)(d.Text, {
        variant: "text-xs/normal",
        children: T.intl.format(T.t.ZLoNtm, {
          numTotal: s,
          numAvailable: (0, _.Qi)(i, l)
        })
      })]
    })
  },
  Z = () => (0, Chunk951288.jsx)("div", {
    className: Chunk486217.placeholderCard,
    children: (0, Chunk951288.jsx)("img", {
      className: Chunk486217.placeholderImg,
      alt: Chunk388032.intl.string(Chunk388032.t.wl4ntJ),
      src: require("./872732.js")
    })
  }),
  R = e => {
    let {
      guild: t
    } = e, {
      location: i
    } = (0, g.O)(), {
      canCreateExpressions: l
    } = (0, h.XJ)(t);
    return (0, r.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: T.intl.string(T.t.O1REe1),
      onClick: () => {
        v.default.track(I.rMx.OPEN_MODAL, {
          type: I.jXE.CREATE_STICKER_MODAL,
          location: i
        }), (e => {
          let {
            guildId: t
          } = e;
          (0, d.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("93626"), n.e("34765")]).then(n.bind(n, 136735));
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
  D = e => {
    let {
      guild: t
    } = e, {
      isLoading: l
    } = (0, O.Z)(t.id), g = (0, s.e7)([C.Z], () => {
      var e;
      return null != (e = C.Z.getStickersByGuildId(t.id)) ? e : []
    }, [t]), {
      analyticsLocations: v
    } = (0, m.ZP)(), D = (0, x.Z)(t.id), A = t.features.has(I.GuildFeatures.MORE_STICKERS) ? I.Eu4.TIER_3 : t.premiumTier, L = t.features.has(I.GuildFeatures.MORE_STICKERS) ? I.oCV[I.Eu4.TIER_3] : D, k = (0, j.Z)(t.id);
    if (i.useEffect(() => {
        window.dispatchEvent(new Event("resize"))
      }, [g]), l) return (0, r.jsx)(d.$jN, {});
    let G = [{
      tier: I.Eu4.NONE,
      title: (0, r.jsx)(w, {
        guildStickers: g,
        currentGuildTier: A,
        tier: I.Eu4.NONE,
        children: T.intl.string(T.t.tfVXhP)
      })
    }, {
      tier: I.Eu4.TIER_1,
      title: (0, r.jsx)(w, {
        guildStickers: g,
        currentGuildTier: A,
        tier: I.Eu4.TIER_1,
        children: T.intl.string(T.t.nzXtaS)
      })
    }, {
      tier: I.Eu4.TIER_2,
      title: (0, r.jsx)(w, {
        guildStickers: g,
        currentGuildTier: A,
        tier: I.Eu4.TIER_2,
        children: T.intl.string(T.t["h33/uW"])
      })
    }, {
      tier: I.Eu4.TIER_3,
      title: (0, r.jsx)(w, {
        guildStickers: g,
        currentGuildTier: A,
        tier: I.Eu4.TIER_3,
        children: T.intl.string(T.t.BfF6ED)
      })
    }];
    return (0, r.jsx)(E.Z, {
      tiers: G,
      renderTier: e => {
        var i;
        let l, s, {
            isAnimatedTo: m,
            onSetRef: x,
            tier: j,
            tiers: C,
            tierIndex: O
          } = e,
          {
            canCreateExpressions: E,
            canManageGuildExpression: w
          } = (0, h.Gw)(t),
          G = C[O - 1],
          M = null != G ? (0, _.A3)(G.tier) : 0,
          U = (0, _.A3)(j.tier, t),
          B = (0, _.ig)(j.tier),
          F = g.slice(M, U),
          H = F.length > 0,
          W = A < j.tier,
          z = (i = g.length, i < (0, _.A3)(I.Eu4.NONE) ? I.Eu4.NONE : i < (0, _.A3)(I.Eu4.TIER_1) ? I.Eu4.TIER_1 : i < (0, _.A3)(I.Eu4.TIER_2) ? I.Eu4.TIER_2 : i < (0, _.A3)(I.Eu4.TIER_3) || null != t && t.features.has(I.GuildFeatures.MORE_STICKERS) && i < u.D.MAX_STICKER_SLOTS ? I.Eu4.TIER_3 : I.Eu4.NONE),
          V = E && !W && z === j.tier && U !== F.length,
          K = V || F.length > 0,
          Y = U - M,
          q = n(872732),
          X = B - F.length,
          J = V ? Math.min(5 - (F.length + 0) % 5, X) : 0,
          Q = [];
        for (let e = 0; e < J; e++) Q.push((0, r.jsx)(Z, {}, "placeholder-".concat(e)));
        let $ = t.premiumTier < j.tier && D >= I.oCV[j.tier],
          ee = T.intl.string(T.t.dtFw5c),
          et = () => {
            var e, n;
            let r;
            return e = Math.max(1, I.oCV[j.tier] - D), n = j.tier, r = null, void(n === I.Eu4.TIER_1 ? r = I.AnalyticsObjectTypes.TIER_1 : n === I.Eu4.TIER_2 ? r = I.AnalyticsObjectTypes.TIER_2 : n === I.Eu4.TIER_3 && (r = I.AnalyticsObjectTypes.TIER_3), (0, f.Z)({
              analyticsLocations: v,
              analyticsLocation: {
                page: I.ZY5.GUILD_SETTINGS,
                section: I.jXE.GUILD_SETTINGS_STICKERS,
                object: I.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                objectType: r
              },
              guildId: t.id,
              totalNumberOfSlotsToAssign: e
            }))
          },
          en = false;
        $ && (k ? (et = () => {
          let e = S.Cp[j.tier];
          null != e && (0, b.H6)(t.id, e)
        }, ee = T.intl.string(T.t.g7lkrU), t.premiumTier + 1 !== j.tier && (en = true, l = T.intl.string(T.t.mTMkY2))) : (en = true, l = T.intl.string(T.t.hwPEJR)));
        let er = z === O + 1 && z > A,
          ei = V || er || O > A;
        return er ? s = (0, r.jsx)(p.Z, {
          guild: t,
          size: c.zx.Sizes.SMALL,
          color: c.zx.Colors.GREEN,
          buttonText: T.intl.string(T.t.Vbkh2l),
          targetBoostedGuildTier: A + 1,
          analyticsLocation: {
            page: I.ZY5.GUILD_SETTINGS,
            section: I.jXE.GUILD_SETTINGS_STICKERS,
            object: I.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
            objectType: (0, _.ge)(j.tier)
          }
        }) : V && (s = (0, r.jsx)(R, {
          guild: t
        })), (0, r.jsxs)(N.Z, {
          subscriptionCount: L,
          tier: j,
          onSetRef: x,
          isAnimatedTo: m,
          hasBottomMargin: O !== C.length - 1,
          withCardBody: !K,
          headerButton: s,
          showHeaderLockStatus: ei,
          guildId: t.id,
          children: [K && (0, r.jsxs)("div", {
            className: P.grid,
            children: [F.map(e => (0, r.jsx)(y.Z, {
              isDisabled: W,
              sticker: e,
              canManageSticker: w(e)
            }, e.id)), Q]
          }), !W && !V && 0 === F.length && (0, r.jsx)("div", {
            className: a()(P.emptyTierWrapper, P.unusedTierWrapper),
            children: (0, r.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: T.intl.string(T.t.lqwv0J)
            })
          }), W && !H && (0, r.jsxs)("div", {
            className: P.emptyTierWrapper,
            children: [(0, r.jsx)("img", {
              alt: T.intl.string(T.t.BAhswr),
              className: P.emptyTierImage,
              src: q
            }), (0, r.jsx)(d.Text, {
              className: P.unlockTierCtaHeading,
              variant: "text-md/normal",
              color: "header-secondary",
              children: j.tier === I.Eu4.TIER_1 ? T.intl.formatToPlainString(T.t.psMYux, {
                numAdditional: Y
              }) : T.intl.formatToPlainString(T.t.bLykEe, {
                numAdditional: Y,
                numTotal: U
              })
            }), (0, r.jsx)(o.u, {
              text: l,
              shouldShow: en,
              children: (0, r.jsx)(d.Button, {
                variant: "active",
                text: ee,
                disabled: en,
                onClick: et
              })
            })]
          })]
        }, j.tier)
      }
    })
  }