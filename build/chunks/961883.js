/** Chunk was on 46952 **/
/** chunk id: 961883, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $V: () => v,
  $k: () => k,
  aG: () => L,
  mO: () => M,
  v8: () => C
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk575593 = require("./575593.js"),
  Chunk398590 = require("./398590.js"),
  Chunk954921 = require("./954921.jsx"),
  Chunk590547 = require("./590547.jsx"),
  Chunk87719 = require("./87719.js"),
  Chunk309635 = require("./309635.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk318346 = require("./318346.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk975571 = require("./975571.js"),
  Chunk993408 = require("./993408.js"),
  Chunk442759 = require("./442759.js"),
  Chunk158216 = require("./158216.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk22104 = require("./22104.js"),
  Chunk985018 = require("./985018.jsx");
let P = t => null != t ? T.intl.format(T.t["4kp0AB"], {
    itemName: t
  }) : null,
  k = t => {
    let {
      product: e,
      overrideTitle: n,
      isVariantsGroupEnabled: i,
      shouldShowPromotionalExperience: r,
      productName: l,
      itemConsumed: a,
      rentalDuration: s
    } = t;
    if (null != n) return n;
    if (null != s) return 3 === s ? T.intl.string(T.t["5Gltxj"]) : 7 === s ? T.intl.string(T.t.UpxLQN) : T.intl.string(T.t.sYO0Wl);
    if (m.Dp.ORB_PROFILE_BADGE === e.skuId) return T.intl.string(S.default.nvaTQq);
    if (m.Dp.FRACTIONAL_PREMIUM === e.skuId)
      if (a) return T.intl.string(T.t.t0xkSB);
      else return T.intl.string(T.t.g5W1g8);
    if (i && !r) return T.intl.string(T.t.IMffmm);
    else return T.intl.formatToPlainString(T.t.YNaxMp, {
      itemName: l
    })
  },
  C = t => {
    let {
      product: e,
      overrideDescription: n,
      productName: i,
      shouldShowPromotionalExperience: r,
      promotionalRewardCollectedText: l,
      itemConsumed: a,
      isFractionalPremiumActive: u,
      expiresAt: d,
      isRental: o = false
    } = t;
    if (null != n) return n;
    if (o && null != d) return T.intl.format(T.t["HQjw+I"], {
      itemName: i,
      date: d
    });
    if (m.Dp.ORB_PROFILE_BADGE === e.skuId) return T.intl.string(S.default.UnPGii);
    if (m.Dp.FRACTIONAL_PREMIUM === e.skuId) {
      let t = T.intl.formatToPlainString(T.t.Cz1G97, {
        days: 3
      });
      return a ? T.intl.format(T.t.bhLChO, {
        helpCenterLink: g.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: d
      }) : u ? T.intl.string(T.t.fBmhE9) : T.intl.format(T.t["1ZBX4E"], {
        helpCenterLink: g.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
    if (e.type === s.R.BUNDLE) {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, I.yW)(e);
      return T.intl.format(T.t.fXw44U, {
        itemOneName: t,
        itemTwoName: n
      })
    }
    return e.type === s.R.AVATAR_DECORATION && r && null != l ? l : P(i)
  },
  L = t => {
    let {
      product: e,
      onClose: n,
      analyticsLocations: i,
      hasRequiredProductItems: r,
      handleUseNow: l,
      isApplying: y,
      openProfileSettings: g,
      itemConsumed: E
    } = t, I = [];
    if (m.Dp.ORB_PROFILE_BADGE === e.skuId) I.push({
      text: T.intl.string(S.default.yfwZuy),
      variant: "primary",
      onClick: () => {
        n(), A._.dispatch(_.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: T.intl.string(T.t.H57f41),
      variant: "secondary",
      onClick: () => {
        n(), (0, b.Y)({
          pageType: _.liQ.SHOP_ORBS_TAB,
          sectionType: _.JJy.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: _.ZSU.CTA_TO_QUEST_HOME
        }), (0, O.navigateToQuestHome)()
      }
    });
    else if (m.Dp.FRACTIONAL_PREMIUM === e.skuId) E ? I.push({
      text: T.intl.string(T.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: T.intl.string(T.t.ERKK6v),
      variant: "primary",
      onClick: () => {
        (0, p.x)(n)
      }
    }) : I.push({
      text: T.intl.string(T.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: T.intl.string(T.t["Jr6N+s"]),
      variant: "primary",
      onClick: () => {
        (0, f.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL, {
          section: _.nc_.SUBSCRIPTIONS
        }), n()
      }
    });
    else {
      let [t] = e.items;
      I.push({
        text: T.intl.string(T.t["2p2aYz"]),
        variant: r ? "secondary" : "primary",
        onClick: () => {
          if (n(), (0, u.jH)(), null == g || g(), e.type === s.R.AVATAR_DECORATION) {
            a()(t.type === s.R.AVATAR_DECORATION, "product type and item type are the same"), (0, d.L)({
              initialSelectedDecoration: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === s.R.PROFILE_EFFECT) {
            a()(t.type === s.R.PROFILE_EFFECT, "product type and item type are the same"), (0, c.W)({
              initialSelectedEffect: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === s.R.NAMEPLATE) {
            a()(t.type === s.R.NAMEPLATE, "product type and item type are the same"), (0, o.p)({
              initialSelectedNameplate: t,
              analyticsLocations: i
            });
            return
          }
        }
      })
    }
    return r && I.push({
      text: T.intl.string(T.t.MAS7uK),
      variant: "primary",
      onClick: l,
      loading: y
    }), I
  },
  v = (t, e) => {
    let n = i.useMemo(() => (0, E.V6)(t.type, t.skuId), [t.type, t.skuId]);
    return i.useEffect(() => {
      y.default.track(_.HAw.OPEN_MODAL, {
        type: _.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  M = (t, e) => {
    let n = i.useRef(new r.OH),
      l = (0, i.useRef)(null),
      [a, s] = i.useState(null),
      u = (0, R.AB)({
        purchaseType: e,
        skuId: t.skuId
      });
    return {
      environment: n.current,
      modalRef: l,
      confettiCanvas: a,
      setConfettiCanvas: s,
      customConfettiDisplayOptions: u
    }
  }