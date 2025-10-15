/** Chunk was on 87624 **/
/** chunk id: 391594, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $0: () => Z,
  Xw: () => v,
  cf: () => P,
  f1: () => N,
  ys: () => S
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
  Chunk339756 = require("./339756.js"),
  Chunk388032 = require("./388032.jsx");
let k = t => null != t ? g.intl.format(g.t["4kp0AB"], {
    itemName: t
  }) : null,
  v = t => {
    let {
      product: e,
      overrideTitle: n,
      isVariantsGroupEnabled: i,
      shouldShowPromotionalExperience: r,
      productName: l,
      itemConsumed: a
    } = t;
    if (null != n) return n;
    if (L.Vt.ORB_PROFILE_BADGE === e.skuId) return g.intl.string(b.default.nvaTQq);
    if (L.Vt.FRACTIONAL_PREMIUM === e.skuId)
      if (a) return g.intl.string(g.t.t0xkSB);
      else return g.intl.string(g.t.g5W1g8);
    if (i && !r) return g.intl.string(g.t.IMffmm);
    return g.intl.formatToPlainString(g.t.YNaxMp, {
      itemName: l
    })
  },
  S = t => {
    let {
      product: e,
      overrideDescription: n,
      productName: i,
      shouldShowPromotionalExperience: r,
      promotionalRewardCollectedText: l,
      itemConsumed: a,
      isFractionalPremiumActive: d,
      expiresAt: o
    } = t;
    if (null != n) return n;
    if (L.Vt.ORB_PROFILE_BADGE === e.skuId) return g.intl.string(b.default.UnPGii);
    if (L.Vt.FRACTIONAL_PREMIUM !== e.skuId) return (0, s.EQ)(null == e ? true : e.type).with(u.Z.BUNDLE, () => {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, _.Ws)(e);
      return g.intl.format(g.t.fXw44U, {
        itemOneName: t,
        itemTwoName: n
      })
    }).with(u.Z.AVATAR_DECORATION, () => r && null != l ? l : k(i)).otherwise(() => k(i));
    {
      let t = g.intl.formatToPlainString(g.t.Cz1G97, {
        days: 3
      });
      return a ? g.intl.format(g.t.bhLChO, {
        helpCenterLink: I.Z.getArticleURL(m.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: o
      }) : d ? g.intl.string(g.t.fBmhE9) : g.intl.format(g.t["1ZBX4E"], {
        helpCenterLink: I.Z.getArticleURL(m.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
  },
  P = t => {
    let {
      product: e,
      onClose: n,
      analyticsLocations: i,
      hasRequiredProductItems: r,
      handleUseNow: l,
      isApplying: s,
      openProfileSettings: C,
      itemConsumed: I
    } = t, R = [];
    if (L.Vt.ORB_PROFILE_BADGE === e.skuId) R.push({
      text: g.intl.string(b.default.yfwZuy),
      variant: "primary",
      onClick: () => {
        n(), T.S.dispatch(m.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: g.intl.string(g.t.H57f41),
      variant: "secondary",
      onClick: () => {
        n(), (0, O.Y)({
          pageType: m.ZY5.SHOP_ORBS_TAB,
          sectionType: m.jXE.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: m.qAy.CTA_TO_QUEST_HOME
        }), (0, E.navigateToQuestHome)()
      }
    });
    else if (L.Vt.FRACTIONAL_PREMIUM === e.skuId) I ? R.push({
      text: g.intl.string(g.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: g.intl.string(g.t.ERKK6v),
      variant: "primary",
      onClick: () => {
        (0, p.$)(n)
      }
    }) : R.push({
      text: g.intl.string(g.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: g.intl.string(g.t["Jr6N+s"]),
      variant: "primary",
      onClick: () => {
        (0, A.openUserSettings)(f.n.SUBSCRIPTIONS_PANEL, {
          section: m.oAB.SUBSCRIPTIONS
        }), n()
      }
    });
    else {
      let [t] = e.items;
      R.push({
        text: g.intl.string(g.t["2p2aYz"]),
        variant: r ? "secondary" : "primary",
        onClick: () => {
          if (n(), (0, d.xf)(), null == C || C(), e.type === u.Z.AVATAR_DECORATION) {
            a()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, o.ps)({
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
    return r && R.push({
      text: g.intl.string(g.t.MAS7uK),
      variant: "primary",
      onClick: l,
      loading: s
    }), R
  },
  N = (t, e) => {
    let n = i.useMemo(() => (0, R.jm)(t.type, t.skuId), [t.type, t.skuId]);
    return i.useEffect(() => {
      C.default.track(m.rMx.OPEN_MODAL, {
        type: m.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  Z = (t, e) => {
    let n = i.useRef(new r.qA),
      l = (0, i.useRef)(null),
      [a, s] = i.useState(null),
      u = (0, y.UY)({
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