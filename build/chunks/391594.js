/** Chunk was on 87624 **/
/** chunk id: 391594, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $0: () => Z,
  Xw: () => N,
  cf: () => x,
  f1: () => U,
  ys: () => B
}), require("./314940.js"), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk318110 = require("./318110.jsx"),
  Chunk333867 = require("./333867.jsx"),
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
  Chunk474936 = require("./474936.js"),
  Chunk505855 = require("./505855.js"),
  Chunk388032 = require("./388032.jsx");
let v = t => null != t ? b.intl.format(b.t["4kp0AA"], {
    itemName: t
  }) : null,
  N = t => {
    let {
      product: e,
      pairedProduct: n,
      overrideTitle: i,
      isVariantsGroupEnabled: r,
      shouldShowPromotionalExperience: l,
      productName: a,
      pairedProductName: s,
      itemConsumed: o
    } = t;
    if (null != i) return i;
    if (k.Vt.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(S.default.nvaTQk);
    if (k.Vt.FRACTIONAL_PREMIUM === e.skuId)
      if (o) return b.intl.string(b.t.t0xkSE);
      else return b.intl.string(b.t.g5W1g4);
    if (null != n) return b.intl.formatToPlainString(new Date < k.a$ ? b.t.BhGU09 : b.t.Jfv5Qk, {
      purchased_item: a,
      suggested_item: s
    });
    if (r && !l) return b.intl.string(b.t.IMffmp);
    else return b.intl.formatToPlainString(b.t.YNaxMj, {
      itemName: a
    })
  },
  B = t => {
    let {
      product: e,
      pairedProduct: n,
      overrideDescription: i,
      productName: r,
      pairedProductName: l,
      shouldShowPromotionalExperience: a,
      promotionalRewardCollectedText: u,
      itemConsumed: d,
      isFractionalPremiumActive: c,
      expiresAt: p
    } = t;
    if (null != i) return i;
    if (k.Vt.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(S.default.UnPGio);
    if (k.Vt.FRACTIONAL_PREMIUM === e.skuId) {
      let t = b.intl.formatToPlainString(b.t["Cz1G9/"], {
        days: 3
      });
      return d ? b.intl.format(b.t.bhLChI, {
        helpCenterLink: g.Z.getArticleURL(P.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: p
      }) : c ? b.intl.string(b.t.fBmhEx) : b.intl.format(b.t["1ZBX4O"], {
        helpCenterLink: g.Z.getArticleURL(P.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
    if (null != n) return b.intl.format(new Date < k.a$ ? b.t["1jBC0t"] : b.t.qSrp39, {
      purchased_item: r,
      suggested_item: l
    });
    return (0, s.EQ)(null == e ? true : e.type).with(o.Z.BUNDLE, () => {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, R.Ws)(e);
      return b.intl.format(b.t.fXw44e, {
        itemOneName: t,
        itemTwoName: n
      })
    }).with(o.Z.AVATAR_DECORATION, () => a && null != u ? u : v(r)).otherwise(() => v(r))
  },
  x = t => {
    let {
      product: e,
      pairedProduct: n,
      onClose: i,
      analyticsLocations: r,
      hasRequiredProductItems: l,
      handleUseNow: s,
      isApplying: I,
      variantsReturnStyle: g,
      openProfileSettings: m,
      itemConsumed: R
    } = t, L = [];
    if (k.Vt.ORB_PROFILE_BADGE === e.skuId) L.push({
      text: b.intl.string(S.default.yfwZu7),
      variant: "primary",
      onClick: () => {
        i(), T.S.dispatch(P.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: b.intl.string(b.t["H57f4+"]),
      variant: "secondary",
      onClick: () => {
        i(), (0, _.Y)({
          pageType: P.ZY5.SHOP_ORBS_TAB,
          sectionType: P.jXE.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: P.qAy.CTA_TO_QUEST_HOME
        }), (0, C.navigateToQuestHome)()
      }
    });
    else if (k.Vt.FRACTIONAL_PREMIUM === e.skuId) R ? L.push({
      text: b.intl.string(b.t.cpT0Cg),
      variant: "secondary",
      onClick: i
    }, {
      text: b.intl.string(b.t.ERKK6u),
      variant: "primary",
      onClick: () => {
        (0, h.$)(i)
      }
    }) : L.push({
      text: b.intl.string(b.t.cpT0Cg),
      variant: "secondary",
      onClick: i
    }, {
      text: b.intl.string(b.t["Jr6N+v"]),
      variant: "primary",
      onClick: () => {
        (0, O.openUserSettings)(A.n.SUBSCRIPTIONS_PANEL, {
          section: P.oAB.SUBSCRIPTIONS
        }), i()
      }
    });
    else if (null != n) L.push({
      text: b.intl.string(b.t.ouo4FB),
      variant: "secondary",
      icon: u.OgN,
      onClick: t => {
        t.stopPropagation(), (0, f.Z)({
          skuId: n.skuId,
          isGift: true,
          giftingOrigin: y.Wt.SHOP_PAGE,
          analyticsLocations: r,
          variantsReturnStyle: g,
          onClose: t => {
            t && i()
          }
        })
      }
    });
    else {
      let [t] = e.items;
      L.push({
        text: b.intl.string(b.t["2p2aY2"]),
        variant: l ? "secondary" : "primary",
        onClick: () => {
          if (i(), (0, d.xf)(), null == m || m(), e.type === o.Z.AVATAR_DECORATION) {
            a()(t.type === o.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, c.ps)({
              initialSelectedDecoration: t,
              analyticsLocations: r
            });
            return
          }
          if (e.type === o.Z.PROFILE_EFFECT) {
            a()(t.type === o.Z.PROFILE_EFFECT, "product type and item type are the same"), (0, E.H)({
              initialSelectedEffectId: t.id,
              analyticsLocations: r
            });
            return
          }
          if (e.type === o.Z.NAMEPLATE) {
            a()(t.type === o.Z.NAMEPLATE, "product type and item type are the same"), (0, p.f)({
              initialSelectedNameplate: t,
              analyticsLocations: r
            });
            return
          }
        }
      })
    }
    return l && L.push({
      text: b.intl.string(b.t.MAS7uL),
      variant: "primary",
      onClick: s,
      loading: I
    }), L
  },
  U = (t, e) => {
    let n = i.useMemo(() => (0, m.jm)(t.type, t.skuId), [t.type, t.skuId]);
    return i.useEffect(() => {
      I.default.track(P.rMx.OPEN_MODAL, {
        type: P.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
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
      o = (0, L.UY)({
        purchaseType: e,
        skuId: t.skuId
      });
    return {
      environment: n.current,
      modalRef: l,
      confettiCanvas: a,
      setConfettiCanvas: s,
      customConfettiDisplayOptions: o
    }
  }