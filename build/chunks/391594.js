/** Chunk was on 30141 **/
/** chunk id: 391594, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $0: () => M,
  Xw: () => C,
  cf: () => L,
  f1: () => N,
  ys: () => v
}), require("./314940.js"), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
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
  Chunk553680 = require("./553680.js"),
  Chunk388032 = require("./388032.jsx");
let k = t => null != t ? _.intl.format(_.t["4kp0AB"], {
    itemName: t
  }) : null,
  C = t => {
    let {
      product: e,
      overrideTitle: n,
      isVariantsGroupEnabled: i,
      shouldShowPromotionalExperience: r,
      productName: l,
      itemConsumed: a
    } = t;
    if (null != n) return n;
    if (R.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(T.default.nvaTQq);
    if (R.Vt.FRACTIONAL_PREMIUM === e.skuId)
      if (a) return _.intl.string(_.t.t0xkSB);
      else return _.intl.string(_.t.g5W1g8);
    if (i && !r) return _.intl.string(_.t.IMffmm);
    return _.intl.formatToPlainString(_.t.YNaxMp, {
      itemName: l
    })
  },
  v = t => {
    let {
      product: e,
      overrideDescription: n,
      productName: i,
      shouldShowPromotionalExperience: r,
      promotionalRewardCollectedText: l,
      itemConsumed: a,
      isFractionalPremiumActive: o,
      expiresAt: d
    } = t;
    if (null != n) return n;
    if (R.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(T.default.UnPGii);
    if (R.Vt.FRACTIONAL_PREMIUM !== e.skuId) return (0, s.EQ)(null == e ? true : e.type).with(u.Z.BUNDLE, () => {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, m.Ws)(e);
      return _.intl.format(_.t.fXw44U, {
        itemOneName: t,
        itemTwoName: n
      })
    }).with(u.Z.AVATAR_DECORATION, () => r && null != l ? l : k(i)).otherwise(() => k(i));
    {
      let t = _.intl.formatToPlainString(_.t.Cz1G97, {
        days: 3
      });
      return a ? _.intl.format(_.t.bhLChO, {
        helpCenterLink: g.Z.getArticleURL(S.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: d
      }) : o ? _.intl.string(_.t.fBmhE9) : _.intl.format(_.t["1ZBX4E"], {
        helpCenterLink: g.Z.getArticleURL(S.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
  },
  L = t => {
    let {
      product: e,
      onClose: n,
      analyticsLocations: i,
      hasRequiredProductItems: r,
      handleUseNow: l,
      isApplying: s,
      openProfileSettings: A,
      itemConsumed: g
    } = t, I = [];
    if (R.Vt.ORB_PROFILE_BADGE === e.skuId) I.push({
      text: _.intl.string(T.default.yfwZuy),
      variant: "primary",
      onClick: () => {
        n(), E.S.dispatch(S.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: _.intl.string(_.t.H57f41),
      variant: "secondary",
      onClick: () => {
        n(), (0, y.Y)({
          pageType: S.ZY5.SHOP_ORBS_TAB,
          sectionType: S.jXE.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: S.qAy.CTA_TO_QUEST_HOME
        }), (0, O.navigateToQuestHome)()
      }
    });
    else if (R.Vt.FRACTIONAL_PREMIUM === e.skuId) g ? I.push({
      text: _.intl.string(_.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: _.intl.string(_.t.ERKK6v),
      variant: "primary",
      onClick: () => {
        (0, p.$)(n)
      }
    }) : I.push({
      text: _.intl.string(_.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: _.intl.string(_.t["Jr6N+s"]),
      variant: "primary",
      onClick: () => {
        (0, b.openUserSettings)(f.n.SUBSCRIPTIONS_PANEL, {
          section: S.oAB.SUBSCRIPTIONS
        }), n()
      }
    });
    else {
      let [t] = e.items;
      I.push({
        text: _.intl.string(_.t["2p2aYz"]),
        variant: r ? "secondary" : "primary",
        onClick: () => {
          if (n(), (0, o.xf)(), null == A || A(), e.type === u.Z.AVATAR_DECORATION) {
            a()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, d.ps)({
              initialSelectedDecoration: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === u.Z.PROFILE_EFFECT) {
            a()(t.type === u.Z.PROFILE_EFFECT, "product type and item type are the same"), (0, h.H)({
              initialSelectedEffect: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === u.Z.NAMEPLATE) {
            a()(t.type === u.Z.NAMEPLATE, "product type and item type are the same"), (0, c.f)({
              initialSelectedNameplate: t,
              analyticsLocations: i
            });
            return
          }
        }
      })
    }
    return r && I.push({
      text: _.intl.string(_.t.MAS7uK),
      variant: "primary",
      onClick: l,
      loading: s
    }), I
  },
  N = (t, e) => {
    let n = i.useMemo(() => (0, I.jm)(t.type, t.skuId), [t.type, t.skuId]);
    return i.useEffect(() => {
      A.default.track(S.rMx.OPEN_MODAL, {
        type: S.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  M = (t, e) => {
    let n = i.useRef(new r.qA),
      l = (0, i.useRef)(null),
      [a, s] = i.useState(null),
      u = (0, P.UY)({
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