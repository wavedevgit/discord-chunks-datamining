/** Chunk was on 87624 **/
/** chunk id: 391594, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $0: () => B,
  Xw: () => L,
  cf: () => N,
  f1: () => S,
  ys: () => k
}), require("./314940.js"), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
  Chunk505855 = require("./505855.js"),
  Chunk388032 = require("./388032.jsx");
let P = t => null != t ? v.intl.format(v.t["4kp0AA"], {
    itemName: t
  }) : null,
  L = t => {
    let {
      product: e,
      overrideTitle: n,
      isVariantsGroupEnabled: i,
      shouldShowPromotionalExperience: r,
      productName: l,
      itemConsumed: s
    } = t;
    if (null != n) return n;
    if (b.Vt.ORB_PROFILE_BADGE === e.skuId) return v.intl.string(_.default.nvaTQk);
    if (b.Vt.FRACTIONAL_PREMIUM === e.skuId)
      if (s) return v.intl.string(v.t.t0xkSE);
      else return v.intl.string(v.t.g5W1g4);
    if (i && !r) return v.intl.string(v.t.IMffmp);
    return v.intl.formatToPlainString(v.t.YNaxMj, {
      itemName: l
    })
  },
  k = t => {
    let {
      product: e,
      overrideDescription: n,
      productName: i,
      shouldShowPromotionalExperience: r,
      promotionalRewardCollectedText: l,
      itemConsumed: s,
      isFractionalPremiumActive: o,
      expiresAt: d
    } = t;
    if (null != n) return n;
    if (b.Vt.ORB_PROFILE_BADGE === e.skuId) return v.intl.string(_.default.UnPGio);
    if (b.Vt.FRACTIONAL_PREMIUM !== e.skuId) return (0, a.EQ)(null == e ? true : e.type).with(u.Z.BUNDLE, () => {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, g.Ws)(e);
      return v.intl.format(v.t.fXw44e, {
        itemOneName: t,
        itemTwoName: n
      })
    }).with(u.Z.AVATAR_DECORATION, () => r && null != l ? l : P(i)).otherwise(() => P(i));
    {
      let t = v.intl.formatToPlainString(v.t["Cz1G9/"], {
        days: 3
      });
      return s ? v.intl.format(v.t.bhLChI, {
        helpCenterLink: m.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: d
      }) : o ? v.intl.string(v.t.fBmhEx) : v.intl.format(v.t["1ZBX4O"], {
        helpCenterLink: m.Z.getArticleURL(R.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
  },
  N = t => {
    let {
      product: e,
      onClose: n,
      analyticsLocations: i,
      hasRequiredProductItems: r,
      handleUseNow: l,
      isApplying: a,
      openProfileSettings: T,
      itemConsumed: m
    } = t, C = [];
    if (b.Vt.ORB_PROFILE_BADGE === e.skuId) C.push({
      text: v.intl.string(_.default.yfwZu7),
      variant: "primary",
      onClick: () => {
        n(), O.S.dispatch(R.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: v.intl.string(v.t["H57f4+"]),
      variant: "secondary",
      onClick: () => {
        n(), (0, y.Y)({
          pageType: R.ZY5.SHOP_ORBS_TAB,
          sectionType: R.jXE.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: R.qAy.CTA_TO_QUEST_HOME
        }), (0, h.navigateToQuestHome)()
      }
    });
    else if (b.Vt.FRACTIONAL_PREMIUM === e.skuId) m ? C.push({
      text: v.intl.string(v.t.cpT0Cg),
      variant: "secondary",
      onClick: n
    }, {
      text: v.intl.string(v.t.ERKK6u),
      variant: "primary",
      onClick: () => {
        (0, f.$)(n)
      }
    }) : C.push({
      text: v.intl.string(v.t.cpT0Cg),
      variant: "secondary",
      onClick: n
    }, {
      text: v.intl.string(v.t["Jr6N+v"]),
      variant: "primary",
      onClick: () => {
        (0, A.openUserSettings)(E.n.SUBSCRIPTIONS_PANEL, {
          section: R.oAB.SUBSCRIPTIONS
        }), n()
      }
    });
    else {
      let [t] = e.items;
      C.push({
        text: v.intl.string(v.t["2p2aY2"]),
        variant: r ? "secondary" : "primary",
        onClick: () => {
          if (n(), (0, o.xf)(), null == T || T(), e.type === u.Z.AVATAR_DECORATION) {
            s()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, d.ps)({
              initialSelectedDecoration: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === u.Z.PROFILE_EFFECT) {
            s()(t.type === u.Z.PROFILE_EFFECT, "product type and item type are the same"), (0, p.H)({
              initialSelectedEffect: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === u.Z.NAMEPLATE) {
            s()(t.type === u.Z.NAMEPLATE, "product type and item type are the same"), (0, c.f)({
              initialSelectedNameplate: t,
              analyticsLocations: i
            });
            return
          }
        }
      })
    }
    return r && C.push({
      text: v.intl.string(v.t.MAS7uL),
      variant: "primary",
      onClick: l,
      loading: a
    }), C
  },
  S = (t, e) => {
    let n = i.useMemo(() => (0, C.jm)(t.type, t.skuId), [t.type, t.skuId]);
    return i.useEffect(() => {
      T.default.track(R.rMx.OPEN_MODAL, {
        type: R.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  B = (t, e) => {
    let n = i.useRef(new r.qA),
      l = (0, i.useRef)(null),
      [s, a] = i.useState(null),
      u = (0, I.UY)({
        purchaseType: e,
        skuId: t.skuId
      });
    return {
      environment: n.current,
      modalRef: l,
      confettiCanvas: s,
      setConfettiCanvas: a,
      customConfettiDisplayOptions: u
    }
  }