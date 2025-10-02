/** Chunk was on 29679 **/
/** chunk id: 145499, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk663494 = require("./663494.js");

function P(e) {
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
}
let w = e => {
    let {
      children: t,
      currentGuildTier: n,
      guildStickers: i,
      tier: l
    } = e, s = n < l, a = (0, v.ig)(l);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.X6q, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: t
      }), !s && (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: S.intl.format(S.t.ZLoNtr, {
          numTotal: a,
          numAvailable: (0, v.Qi)(i, l)
        })
      })]
    })
  },
  R = () => (0, Chunk951288.jsx)("div", {
    className: Chunk663494.placeholderCard,
    children: (0, Chunk951288.jsx)("img", {
      className: Chunk663494.placeholderImg,
      alt: Chunk388032.intl.string(Chunk388032.t.wl4ntL),
      src: require("./872732.js")
    })
  }),
  Z = e => {
    let {
      guild: t
    } = e, {
      location: i
    } = (0, u.O)(), {
      canCreateExpressions: l
    } = (0, f.XJ)(t);
    return (0, r.jsx)(c.zxk, {
      variant: "primary",
      size: "sm",
      text: S.intl.string(S.t.O1REe3),
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
            return n => (0, r.jsx)(e, P({
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
    } = (0, O.Z)(t.id), u = (0, a.e7)([_.Z], () => {
      var e;
      return null != (e = _.Z.getStickersByGuildId(t.id)) ? e : []
    }, [t]), {
      analyticsLocations: j
    } = (0, m.ZP)(), D = (0, b.Z)(t.id), A = t.features.has(E.oNc.MORE_STICKERS) ? E.Eu4.TIER_3 : t.premiumTier, L = t.features.has(E.oNc.MORE_STICKERS) ? E.oCV[E.Eu4.TIER_3] : D, k = (0, x.Z)(t.id);
    if (i.useEffect(() => {
        window.dispatchEvent(new Event("resize"))
      }, [u]), l) return (0, r.jsx)(c.$jN, {});
    let G = [{
      tier: E.Eu4.NONE,
      title: (0, r.jsx)(w, {
        guildStickers: u,
        currentGuildTier: A,
        tier: E.Eu4.NONE,
        children: S.intl.string(S.t.tfVXhI)
      })
    }, {
      tier: E.Eu4.TIER_1,
      title: (0, r.jsx)(w, {
        guildStickers: u,
        currentGuildTier: A,
        tier: E.Eu4.TIER_1,
        children: S.intl.string(S.t.nzXtaW)
      })
    }, {
      tier: E.Eu4.TIER_2,
      title: (0, r.jsx)(w, {
        guildStickers: u,
        currentGuildTier: A,
        tier: E.Eu4.TIER_2,
        children: S.intl.string(S.t["h33/ub"])
      })
    }, {
      tier: E.Eu4.TIER_3,
      title: (0, r.jsx)(w, {
        guildStickers: u,
        currentGuildTier: A,
        tier: E.Eu4.TIER_3,
        children: S.intl.string(S.t.BfF6EB)
      })
    }];
    return (0, r.jsx)(C.Z, {
      tiers: G,
      renderTier: e => {
        var i;
        let l, a, {
            isAnimatedTo: m,
            onSetRef: b,
            tier: x,
            tiers: _,
            tierIndex: O
          } = e,
          {
            canCreateExpressions: C,
            canManageGuildExpression: w
          } = (0, f.Gw)(t),
          G = _[O - 1],
          M = null != G ? (0, v.A3)(G.tier) : 0,
          U = (0, v.A3)(x.tier, t),
          B = (0, v.ig)(x.tier),
          F = u.slice(M, U),
          H = F.length > 0,
          z = A < x.tier,
          V = (i = u.length, i < (0, v.A3)(E.Eu4.NONE) ? E.Eu4.NONE : i < (0, v.A3)(E.Eu4.TIER_1) ? E.Eu4.TIER_1 : i < (0, v.A3)(E.Eu4.TIER_2) ? E.Eu4.TIER_2 : i < (0, v.A3)(E.Eu4.TIER_3) || null != t && t.features.has(E.oNc.MORE_STICKERS) && i < d.D.MAX_STICKER_SLOTS ? E.Eu4.TIER_3 : E.Eu4.NONE),
          W = C && !z && V === x.tier && U !== F.length,
          K = W || F.length > 0,
          Y = U - M,
          q = n(872732),
          X = B - F.length,
          J = W ? Math.min(5 - (F.length + 0) % 5, X) : 0,
          Q = [];
        for (let e = 0; e < J; e++) Q.push((0, r.jsx)(R, {}, "placeholder-".concat(e)));
        let $ = t.premiumTier < x.tier && D >= E.oCV[x.tier],
          ee = S.intl.string(S.t.dtFw5e),
          et = () => {
            var e, n;
            let r;
            return e = Math.max(1, E.oCV[x.tier] - D), n = x.tier, r = null, void(n === E.Eu4.TIER_1 ? r = E.Qqv.TIER_1 : n === E.Eu4.TIER_2 ? r = E.Qqv.TIER_2 : n === E.Eu4.TIER_3 && (r = E.Qqv.TIER_3), (0, p.Z)({
              analyticsLocations: j,
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
        $ && (k ? (et = () => {
          let e = I.Cp[x.tier];
          null != e && (0, h.H6)(t.id, e)
        }, ee = S.intl.string(S.t.g7lkra), t.premiumTier + 1 !== x.tier && (en = true, l = S.intl.string(S.t.mTMkY2))) : (en = true, l = S.intl.string(S.t.hwPEJS)));
        let er = V === O + 1 && V > A,
          ei = W || er || O > A;
        return er ? a = (0, r.jsx)(g.Z, {
          guild: t,
          size: o.zx.Sizes.SMALL,
          color: o.zx.Colors.GREEN,
          buttonText: S.intl.string(S.t.Vbkh2t),
          targetBoostedGuildTier: A + 1,
          analyticsLocation: {
            page: E.ZY5.GUILD_SETTINGS,
            section: E.jXE.GUILD_SETTINGS_STICKERS,
            object: E.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
            objectType: (0, v.ge)(x.tier)
          }
        }) : W && (a = (0, r.jsx)(Z, {
          guild: t
        })), (0, r.jsxs)(N.Z, {
          subscriptionCount: L,
          tier: x,
          onSetRef: b,
          isAnimatedTo: m,
          hasBottomMargin: O !== _.length - 1,
          withCardBody: !K,
          headerButton: a,
          showHeaderLockStatus: ei,
          guildId: t.id,
          children: [K && (0, r.jsxs)("div", {
            className: T.grid,
            children: [F.map(e => (0, r.jsx)(y.Z, {
              isDisabled: z,
              sticker: e,
              canManageSticker: w(e)
            }, e.id)), Q]
          }), !z && !W && 0 === F.length && (0, r.jsx)("div", {
            className: s()(T.emptyTierWrapper, T.unusedTierWrapper),
            children: (0, r.jsx)(c.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: S.intl.string(S.t.lqwv0N)
            })
          }), z && !H && (0, r.jsxs)("div", {
            className: T.emptyTierWrapper,
            children: [(0, r.jsx)("img", {
              alt: S.intl.string(S.t.BAhsws),
              className: T.emptyTierImage,
              src: q
            }), (0, r.jsx)(c.Text, {
              className: T.unlockTierCtaHeading,
              variant: "text-md/normal",
              color: "header-secondary",
              children: x.tier === E.Eu4.TIER_1 ? S.intl.formatToPlainString(S.t.psMYu7, {
                numAdditional: Y
              }) : S.intl.formatToPlainString(S.t.bLykER, {
                numAdditional: Y,
                numTotal: U
              })
            }), (0, r.jsx)(c.ua7, {
              tooltipClassName: T.tooltip,
              text: l,
              shouldShow: en,
              children: e => {
                var t, n;
                return (0, r.jsx)(c.zxk, (t = P({
                  variant: "active",
                  text: ee
                }, e), n = n = {
                  disabled: en,
                  onClick: et
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(n)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t))
              }
            })]
          })]
        }, x.tier)
      }
    })
  }