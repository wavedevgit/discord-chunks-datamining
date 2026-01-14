/** Chunk was on 30141 **/
/** chunk id: 391594, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $0: () => N,
  Xw: () => k,
  cf: () => v,
  f1: () => L,
  ys: () => C
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk921254 = require("./921254.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
  Chunk37234 = require("./37234.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk318110 = require("./318110.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk642619 = require("./642619.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk63063 = require("./63063.js"),
  Chunk884697 = require("./884697.js"),
  Chunk328456 = require("./328456.js"),
  Chunk302800 = require("./302800.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk174572 = require("./174572.js"),
  Chunk388032 = require("./388032.jsx");
let _ = t => null != t ? T.intl.format(T.t["4kp0AB"], {
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
    if (P.Vt.ORB_PROFILE_BADGE === e.skuId) return T.intl.string(S.default.nvaTQq);
    if (P.Vt.FRACTIONAL_PREMIUM === e.skuId)
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
    if (P.Vt.ORB_PROFILE_BADGE === e.skuId) return T.intl.string(S.default.UnPGii);
    if (P.Vt.FRACTIONAL_PREMIUM === e.skuId) {
      let t = T.intl.formatToPlainString(T.t.Cz1G97, {
        days: 3
      });
      return a ? T.intl.format(T.t.bhLChO, {
        helpCenterLink: E.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: d
      }) : u ? T.intl.string(T.t.fBmhE9) : T.intl.format(T.t["1ZBX4E"], {
        helpCenterLink: E.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
    if (e.type === s.Z.BUNDLE) {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, I.Ws)(e);
      return T.intl.format(T.t.fXw44U, {
        itemOneName: t,
        itemTwoName: n
      })
    }
    return e.type === s.Z.AVATAR_DECORATION && r && null != l ? l : _(i)
  },
  v = t => {
    let {
      product: e,
      onClose: n,
      analyticsLocations: i,
      hasRequiredProductItems: r,
      handleUseNow: l,
      isApplying: y,
      openProfileSettings: E,
      itemConsumed: g
    } = t, I = [];
    if (P.Vt.ORB_PROFILE_BADGE === e.skuId) I.push({
      text: T.intl.string(S.default.yfwZuy),
      variant: "primary",
      onClick: () => {
        n(), A.S.dispatch(R.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: T.intl.string(T.t.H57f41),
      variant: "secondary",
      onClick: () => {
        n(), (0, b.Y)({
          pageType: R.ZY5.SHOP_ORBS_TAB,
          sectionType: R.jXE.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: R.qAy.CTA_TO_QUEST_HOME
        }), (0, f.navigateToQuestHome)()
      }
    });
    else if (P.Vt.FRACTIONAL_PREMIUM === e.skuId) g ? I.push({
      text: T.intl.string(T.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: T.intl.string(T.t.ERKK6v),
      variant: "primary",
      onClick: () => {
        (0, c.$)(n)
      }
    }) : I.push({
      text: T.intl.string(T.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: T.intl.string(T.t["Jr6N+s"]),
      variant: "primary",
      onClick: () => {
        (0, h.openUserSettings)(O.n.SUBSCRIPTIONS_PANEL, {
          section: R.oAB.SUBSCRIPTIONS
        }), n()
      }
    });
    else {
      let [t] = e.items;
      I.push({
        text: T.intl.string(T.t["2p2aYz"]),
        variant: r ? "secondary" : "primary",
        onClick: () => {
          if (n(), (0, u.xf)(), null == E || E(), e.type === s.Z.AVATAR_DECORATION) {
            a()(t.type === s.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, d.ps)({
              initialSelectedDecoration: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === s.Z.PROFILE_EFFECT) {
            a()(t.type === s.Z.PROFILE_EFFECT, "product type and item type are the same"), (0, p.H)({
              initialSelectedEffect: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === s.Z.NAMEPLATE) {
            a()(t.type === s.Z.NAMEPLATE, "product type and item type are the same"), (0, o.f)({
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
  L = (t, e) => {
    let n = i.useMemo(() => (0, g.jm)(t.type, t.skuId), [t.type, t.skuId]);
    return i.useEffect(() => {
      y.default.track(R.rMx.OPEN_MODAL, {
        type: R.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  N = (t, e) => {
    let n = i.useRef(new r.qA),
      l = (0, i.useRef)(null),
      [a, s] = i.useState(null),
      u = (0, m.UY)({
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