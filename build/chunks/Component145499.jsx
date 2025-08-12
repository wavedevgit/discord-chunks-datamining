/** Chunk was on 5533 **/
/** chunk id: 145499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk553264 = require("./553264.jsx"),
  Chunk399829 = require("./399829.jsx"),
  Chunk428862 = require("./428862.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk535396 = require("./535396.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk825541 = require("./825541.js");

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
let w = (e, t) => e < (0, v.A3)(I.Eu4.NONE) ? I.Eu4.NONE : e < (0, v.A3)(I.Eu4.TIER_1) ? I.Eu4.TIER_1 : e < (0, v.A3)(I.Eu4.TIER_2) ? I.Eu4.TIER_2 : e < (0, v.A3)(I.Eu4.TIER_3) || null != t && t.features.has(I.oNc.MORE_STICKERS) && e < d.D.MAX_STICKER_SLOTS ? I.Eu4.TIER_3 : I.Eu4.NONE,
  R = e => {
    let {
      children: t,
      currentGuildTier: n,
      guildStickers: i,
      tier: l
    } = e, a = n < l, s = (0, v.ig)(l);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.X6q, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: t
      }), !a && (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: S.intl.format(S.t.ZLoNtr, {
          numTotal: s,
          numAvailable: (0, v.Qi)(i, l)
        })
      })]
    })
  },
  Z = e => {
    let {
      guildId: t
    } = e;
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("93626"), n.e("151")]).then(n.bind(n, 136735));
      return n => (0, r.jsx)(e, P({
        guildId: t
      }, n))
    })
  },
  D = () => (0, Chunk255367.jsx)("div", {
    className: Chunk825541.placeholderCard,
    children: (0, Chunk255367.jsx)("img", {
      className: Chunk825541.placeholderImg,
      alt: Chunk388032.intl.string(Chunk388032.t.wl4ntL),
      src: require("./872732.js")
    })
  }),
  A = e => {
    let {
      guild: t
    } = e, {
      location: n
    } = (0, u.O)(), {
      canCreateExpressions: i
    } = (0, h.XJ)(t);
    return (0, r.jsx)(c.zxk, {
      variant: "primary",
      size: "sm",
      text: S.intl.string(S.t.O1REe3),
      onClick: () => {
        j.default.track(I.rMx.OPEN_MODAL, {
          type: I.jXE.CREATE_STICKER_MODAL,
          location: n
        }), Z({
          guildId: t.id
        })
      },
      disabled: !i
    })
  },
  k = e => {
    let {
      guild: t
    } = e, {
      isLoading: l
    } = (0, O.Z)(t.id), d = (0, s.e7)([_.Z], () => {
      var e;
      return null != (e = _.Z.getStickersByGuildId(t.id)) ? e : []
    }, [t]), {
      analyticsLocations: u
    } = (0, m.ZP)(), j = (0, b.Z)(t.id), Z = t.features.has(I.oNc.MORE_STICKERS) ? I.Eu4.TIER_3 : t.premiumTier, k = t.features.has(I.oNc.MORE_STICKERS) ? I.oCV[I.Eu4.TIER_3] : j, L = (0, x.Z)(t.id);
    if (i.useEffect(() => {
        window.dispatchEvent(new Event("resize"))
      }, [d]), l) return (0, r.jsx)(c.$jN, {});
    let M = (e, n) => {
        let r = null;
        n === I.Eu4.TIER_1 ? r = I.Qqv.TIER_1 : n === I.Eu4.TIER_2 ? r = I.Qqv.TIER_2 : n === I.Eu4.TIER_3 && (r = I.Qqv.TIER_3), (0, p.Z)({
          analyticsLocations: u,
          analyticsLocation: {
            page: I.ZY5.GUILD_SETTINGS,
            section: I.jXE.GUILD_SETTINGS_STICKERS,
            object: I.qAy.BOOST_LEVEL_UPSELL_BUTTON,
            objectType: r
          },
          guildId: t.id,
          totalNumberOfSlotsToAssign: e
        })
      },
      G = [{
        tier: I.Eu4.NONE,
        title: (0, r.jsx)(R, {
          guildStickers: d,
          currentGuildTier: Z,
          tier: I.Eu4.NONE,
          children: S.intl.string(S.t.tfVXhI)
        })
      }, {
        tier: I.Eu4.TIER_1,
        title: (0, r.jsx)(R, {
          guildStickers: d,
          currentGuildTier: Z,
          tier: I.Eu4.TIER_1,
          children: S.intl.string(S.t.nzXtaW)
        })
      }, {
        tier: I.Eu4.TIER_2,
        title: (0, r.jsx)(R, {
          guildStickers: d,
          currentGuildTier: Z,
          tier: I.Eu4.TIER_2,
          children: S.intl.string(S.t["h33/ub"])
        })
      }, {
        tier: I.Eu4.TIER_3,
        title: (0, r.jsx)(R, {
          guildStickers: d,
          currentGuildTier: Z,
          tier: I.Eu4.TIER_3,
          children: S.intl.string(S.t.BfF6EB)
        })
      }];
    return (0, r.jsx)(C.Z, {
      tiers: G,
      renderTier: e => {
        let i, l, {
            isAnimatedTo: s,
            onSetRef: u,
            tier: m,
            tiers: p,
            tierIndex: b
          } = e,
          {
            canCreateExpressions: x,
            canManageGuildExpression: _
          } = (0, h.Gw)(t),
          O = p[b - 1],
          C = null != O ? (0, v.A3)(O.tier) : 0,
          R = (0, v.A3)(m.tier, t),
          G = (0, v.ig)(m.tier),
          U = d.slice(C, R),
          B = U.length > 0,
          F = Z < m.tier,
          H = w(d.length, t),
          z = x && !F && H === m.tier && R !== U.length,
          W = z || U.length > 0,
          V = R - C,
          Y = n(872732),
          K = G - U.length,
          q = z ? Math.min(5 - (U.length + 0) % 5, K) : 0,
          X = [];
        for (let e = 0; e < q; e++) X.push((0, r.jsx)(D, {}, "placeholder-".concat(e)));
        let Q = t.premiumTier < m.tier && j >= I.oCV[m.tier],
          J = S.intl.string(S.t.dtFw5e),
          $ = () => M(Math.max(1, I.oCV[m.tier] - j), m.tier),
          ee = false;
        Q && (L ? ($ = () => {
          let e = E.Cp[m.tier];
          null != e && (0, f.H6)(t.id, e)
        }, J = S.intl.string(S.t.g7lkra), t.premiumTier + 1 !== m.tier && (ee = true, i = S.intl.string(S.t.mTMkY2))) : (ee = true, i = S.intl.string(S.t.hwPEJS)));
        let et = H === b + 1 && H > Z,
          en = z || et || b > Z;
        return et ? l = (0, r.jsx)(g.Z, {
          guild: t,
          size: o.zx.Sizes.SMALL,
          color: o.zx.Colors.GREEN,
          buttonText: S.intl.string(S.t.Vbkh2t),
          targetBoostedGuildTier: Z + 1,
          analyticsLocation: {
            page: I.ZY5.GUILD_SETTINGS,
            section: I.jXE.GUILD_SETTINGS_STICKERS,
            object: I.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
            objectType: (0, v.ge)(m.tier)
          }
        }) : z && (l = (0, r.jsx)(A, {
          guild: t
        })), (0, r.jsxs)(N.Z, {
          subscriptionCount: k,
          tier: m,
          onSetRef: u,
          isAnimatedTo: s,
          hasBottomMargin: b !== p.length - 1,
          withCardBody: !W,
          headerButton: l,
          showHeaderLockStatus: en,
          guildId: t.id,
          children: [W && (0, r.jsxs)("div", {
            className: T.grid,
            children: [U.map(e => (0, r.jsx)(y.Z, {
              isDisabled: F,
              sticker: e,
              canManageSticker: _(e)
            }, e.id)), X]
          }), !F && !z && 0 === U.length && (0, r.jsx)("div", {
            className: a()(T.emptyTierWrapper, T.unusedTierWrapper),
            children: (0, r.jsx)(c.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: S.intl.string(S.t.lqwv0N)
            })
          }), F && !B && (0, r.jsxs)("div", {
            className: T.emptyTierWrapper,
            children: [(0, r.jsx)("img", {
              alt: S.intl.string(S.t.BAhsws),
              className: T.emptyTierImage,
              src: Y
            }), (0, r.jsx)(c.Text, {
              className: T.unlockTierCtaHeading,
              variant: "text-md/normal",
              color: "header-secondary",
              children: m.tier === I.Eu4.TIER_1 ? S.intl.formatToPlainString(S.t.psMYu7, {
                numAdditional: V
              }) : S.intl.formatToPlainString(S.t.bLykER, {
                numAdditional: V,
                numTotal: R
              })
            }), (0, r.jsx)(c.ua7, {
              tooltipClassName: T.tooltip,
              text: i,
              shouldShow: ee,
              children: e => {
                var t, n;
                return (0, r.jsx)(c.zxk, (t = P({
                  variant: "active",
                  text: J
                }, e), n = n = {
                  disabled: ee,
                  onClick: $
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
        }, m.tier)
      }
    })
  }