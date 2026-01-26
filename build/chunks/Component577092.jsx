/** Chunk was on 39048 **/
/** chunk id: 577092, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk336934 = require("./336934.js"),
  Chunk212245 = require("./212245.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk721923 = require("./721923.jsx"),
  Chunk212637 = require("./212637.jsx"),
  Chunk931991 = require("./931991.js"),
  Chunk942975 = require("./942975.js"),
  Chunk434564 = require("./434564.js"),
  Chunk363487 = require("./363487.js"),
  Chunk954571 = require("./954571.js"),
  Chunk473145 = require("./473145.js"),
  Chunk740816 = require("./740816.js"),
  Chunk285732 = require("./285732.jsx"),
  Chunk395405 = require("./395405.jsx"),
  Chunk175471 = require("./175471.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk568065 = require("./568065.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk65146 = require("./65146.js");
let T = e => {
    let {
      children: t,
      currentGuildTier: n,
      guildStickers: i,
      tier: l
    } = e, s = n < l, a = (0, _.Cp)(l);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Heading, {
        color: "text-strong",
        variant: "heading-md/semibold",
        children: t
      }), !s && (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: S.intl.format(S.t.ZLoNtm, {
          numTotal: a,
          numAvailable: (0, _.yA)(i, l)
        })
      })]
    })
  },
  C = () => (0, r.jsx)("div", {
    className: I.Yf,
    children: (0, r.jsx)("img", {
      className: I.d4,
      alt: S.intl.string(S.t.wl4ntJ),
      src: n(415358)
    })
  }),
  P = e => {
    let {
      guild: t
    } = e, {
      location: i
    } = (0, u.p)(), {
      canCreateExpressions: l
    } = (0, f.nr)(t);
    return (0, r.jsx)(c.Button, {
      variant: "primary",
      size: "sm",
      text: S.intl.string(S.t.O1REe1),
      onClick: () => {
        j.default.track(E.HAw.OPEN_MODAL, {
          type: E.JJy.CREATE_STICKER_MODAL,
          location: i
        }), (e => {
          let {
            guildId: t
          } = e;
          (0, c.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("29143"), n.e("27382")]).then(n.bind(n, 445002));
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
  w = e => {
    let {
      guild: t
    } = e, l = (0, O.A)(t.id), {
      analyticsLocations: u
    } = (0, g.Ay)(), j = (0, b.A)(t.id), w = t.features.has(E.GuildFeatures.MORE_STICKERS) ? E.TVA.TIER_3 : t.premiumTier, R = t.features.has(E.GuildFeatures.MORE_STICKERS) ? E.M2T[E.TVA.TIER_3] : j, D = (0, x.A)(t.id);
    if (i.useEffect(() => {
        window.dispatchEvent(new Event("resize"))
      }, [l]), "success" !== l.status) return (0, r.jsx)(c.y$y, {});
    let G = l.stickers,
      L = [{
        tier: E.TVA.NONE,
        title: (0, r.jsx)(T, {
          guildStickers: G,
          currentGuildTier: w,
          tier: E.TVA.NONE,
          children: S.intl.string(S.t.tfVXhP)
        })
      }, {
        tier: E.TVA.TIER_1,
        title: (0, r.jsx)(T, {
          guildStickers: G,
          currentGuildTier: w,
          tier: E.TVA.TIER_1,
          children: S.intl.string(S.t.nzXtaS)
        })
      }, {
        tier: E.TVA.TIER_2,
        title: (0, r.jsx)(T, {
          guildStickers: G,
          currentGuildTier: w,
          tier: E.TVA.TIER_2,
          children: S.intl.string(S.t["h33/uW"])
        })
      }, {
        tier: E.TVA.TIER_3,
        title: (0, r.jsx)(T, {
          guildStickers: G,
          currentGuildTier: w,
          tier: E.TVA.TIER_3,
          children: S.intl.string(S.t.BfF6ED)
        })
      }];
    return (0, r.jsx)(y.A, {
      tiers: L,
      renderTier: e => {
        var i;
        let l, g, {
            isAnimatedTo: b,
            onSetRef: x,
            tier: O,
            tiers: y,
            tierIndex: T
          } = e,
          {
            canCreateExpressions: L,
            canManageGuildExpression: k
          } = (0, f.ie)(t),
          M = y[T - 1],
          U = null != M ? (0, _.aG)(M.tier) : 0,
          B = (0, _.aG)(O.tier, t),
          F = (0, _.Cp)(O.tier),
          H = G.slice(U, B),
          V = H.length > 0,
          K = w < O.tier,
          z = (i = G.length, i < (0, _.aG)(E.TVA.NONE) ? E.TVA.NONE : i < (0, _.aG)(E.TVA.TIER_1) ? E.TVA.TIER_1 : i < (0, _.aG)(E.TVA.TIER_2) ? E.TVA.TIER_2 : i < (0, _.aG)(E.TVA.TIER_3) || null != t && t.features.has(E.GuildFeatures.MORE_STICKERS) && i < d.K.MAX_STICKER_SLOTS ? E.TVA.TIER_3 : E.TVA.NONE),
          W = L && !K && z === O.tier && B !== H.length,
          Y = W || H.length > 0,
          X = B - U,
          J = n(415358),
          Z = F - H.length,
          Q = W ? Math.min(5 - (H.length + 0) % 5, Z) : 0,
          q = [];
        for (let e = 0; e < Q; e++) q.push((0, r.jsx)(C, {}, "placeholder-".concat(e)));
        let $ = t.premiumTier < O.tier && j >= E.M2T[O.tier],
          ee = S.intl.string(S.t.dtFw5c),
          et = () => {
            var e, n;
            let r;
            return e = Math.max(1, E.M2T[O.tier] - j), n = O.tier, r = null, void(n === E.TVA.TIER_1 ? r = E.AnalyticsObjectTypes.TIER_1 : n === E.TVA.TIER_2 ? r = E.AnalyticsObjectTypes.TIER_2 : n === E.TVA.TIER_3 && (r = E.AnalyticsObjectTypes.TIER_3), (0, p.A)({
              analyticsLocations: u,
              analyticsLocation: {
                page: E.liQ.GUILD_SETTINGS,
                section: E.JJy.GUILD_SETTINGS_STICKERS,
                object: E.ZSU.BOOST_LEVEL_UPSELL_BUTTON,
                objectType: r
              },
              guildId: t.id,
              totalNumberOfSlotsToAssign: e
            }))
          },
          en = false;
        $ && (D ? (et = () => {
          let e = N.a8[O.tier];
          null != e && (0, h.Qh)(t.id, e)
        }, ee = S.intl.string(S.t.g7lkrU), t.premiumTier + 1 !== O.tier && (en = true, l = S.intl.string(S.t.mTMkY2))) : (en = true, l = S.intl.string(S.t.hwPEJR)));
        let er = z === T + 1 && z > w,
          ei = W || er || T > w;
        return er ? g = (0, r.jsx)(m.A, {
          guild: t,
          size: o.$n.Sizes.SMALL,
          color: o.$n.Colors.GREEN,
          buttonText: S.intl.string(S.t.Vbkh2l),
          targetBoostedGuildTier: w + 1,
          analyticsLocation: {
            page: E.liQ.GUILD_SETTINGS,
            section: E.JJy.GUILD_SETTINGS_STICKERS,
            object: E.ZSU.BOOST_UPSELL_NEXT_LEVEL_HEADER,
            objectType: (0, _.k1)(O.tier)
          }
        }) : W && (g = (0, r.jsx)(P, {
          guild: t
        })), (0, r.jsxs)(A.A, {
          subscriptionCount: R,
          tier: O,
          onSetRef: x,
          isAnimatedTo: b,
          hasBottomMargin: T !== y.length - 1,
          withCardBody: !Y,
          headerButton: g,
          showHeaderLockStatus: ei,
          guildId: t.id,
          children: [Y && (0, r.jsxs)("div", {
            className: I.Vg,
            children: [H.map(e => (0, r.jsx)(v.A, {
              isDisabled: K,
              sticker: e,
              canManageSticker: k(e)
            }, e.id)), q]
          }), !K && !W && 0 === H.length && (0, r.jsx)("div", {
            className: s()(I.Rm, I.MC),
            children: (0, r.jsx)(c.Text, {
              variant: "text-md/normal",
              color: "text-default",
              children: S.intl.string(S.t.lqwv0J)
            })
          }), K && !V && (0, r.jsxs)("div", {
            className: I.Rm,
            children: [(0, r.jsx)("img", {
              alt: S.intl.string(S.t.BAhswr),
              className: I.Tg,
              src: J
            }), (0, r.jsx)(c.Text, {
              className: I.nN,
              variant: "text-md/normal",
              color: "text-default",
              children: O.tier === E.TVA.TIER_1 ? S.intl.formatToPlainString(S.t.psMYux, {
                numAdditional: X
              }) : S.intl.formatToPlainString(S.t.bLykEe, {
                numAdditional: X,
                numTotal: B
              })
            }), (0, r.jsx)(a.m, {
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
        }, O.tier)
      }
    })
  }