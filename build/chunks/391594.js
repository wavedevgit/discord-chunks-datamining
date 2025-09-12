/** Chunk was on 87624 **/
/** chunk id: 391594, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $0: () => x,
  Xw: () => v,
  cf: () => B,
  f1: () => Z,
  ys: () => N
}), require("./314940.js"), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk230711 = require("./230711.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk318110 = require("./318110.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk642619 = require("./642619.jsx"),
  Chunk110560 = require("./110560.jsx"),
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
  Chunk456003 = require("./456003.js"),
  Chunk388032 = require("./388032.jsx");
let S = t => null != t ? b.intl.format(b.t["4kp0AA"], {
    itemName: t
  }) : null,
  v = t => {
    let {
      product: e,
      pairedProduct: n,
      overrideTitle: i,
      isVariantsGroupEnabled: r,
      shouldShowPromotionalExperience: l,
      productName: a,
      pairedProductName: s,
      itemConsumed: u
    } = t;
    if (null != i) return i;
    if (k.Vt.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(y.default.nvaTQk);
    if (k.Vt.FRACTIONAL_PREMIUM === e.skuId)
      if (u) return b.intl.string(b.t.t0xkSE);
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
  N = t => {
    let {
      product: e,
      pairedProduct: n,
      overrideDescription: i,
      productName: r,
      pairedProductName: l,
      shouldShowPromotionalExperience: a,
      promotionalRewardCollectedText: o,
      itemConsumed: d,
      isFractionalPremiumActive: c,
      expiresAt: p
    } = t;
    if (null != i) return i;
    if (k.Vt.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(y.default.UnPGio);
    if (k.Vt.FRACTIONAL_PREMIUM === e.skuId) {
      let t = b.intl.formatToPlainString(b.t["Cz1G9/"], {
        days: 3
      });
      return d ? b.intl.format(b.t.bhLChI, {
        helpCenterLink: T.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: p
      }) : c ? b.intl.string(b.t.fBmhEx) : b.intl.format(b.t["1ZBX4O"], {
        helpCenterLink: T.Z.getArticleURL(L.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
    if (null != n) return b.intl.format(new Date < k.a$ ? b.t["1jBC0t"] : b.t.qSrp39, {
      purchased_item: r,
      suggested_item: l
    });
    return (0, s.EQ)(null == e ? true : e.type).with(u.Z.BUNDLE, () => {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, g.Ws)(e);
      return b.intl.format(b.t.fXw44e, {
        itemOneName: t,
        itemTwoName: n
      })
    }).with(u.Z.AVATAR_DECORATION, () => a && null != o ? o : S(r)).otherwise(() => S(r))
  },
  B = t => {
    let {
      product: e,
      pairedProduct: n,
      onClose: i,
      analyticsLocations: r,
      hasRequiredProductItems: l,
      handleUseNow: s,
      isApplying: _,
      variantsReturnStyle: T,
      openProfileSettings: m,
      itemConsumed: g
    } = t, R = [];
    if (k.Vt.ORB_PROFILE_BADGE === e.skuId) R.push({
      text: b.intl.string(y.default.yfwZu7),
      variant: "primary",
      onClick: () => {
        i(), I.S.dispatch(L.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: b.intl.string(b.t["H57f4+"]),
      variant: "secondary",
      onClick: () => {
        i(), (0, O.Y)({
          pageType: L.ZY5.SHOP_ORBS_TAB,
          sectionType: L.jXE.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: L.qAy.CTA_TO_QUEST_HOME
        }), (0, A.navigateToQuestHome)()
      }
    });
    else if (k.Vt.FRACTIONAL_PREMIUM === e.skuId) g ? R.push({
      text: b.intl.string(b.t.cpT0Cg),
      variant: "secondary",
      onClick: i
    }, {
      text: b.intl.string(b.t.ERKK6u),
      variant: "primary",
      onClick: () => {
        (0, E.$)(i)
      }
    }) : R.push({
      text: b.intl.string(b.t.cpT0Cg),
      variant: "secondary",
      onClick: i
    }, {
      text: b.intl.string(b.t["Jr6N+v"]),
      variant: "primary",
      onClick: () => {
        c.Z.open(L.oAB.SUBSCRIPTIONS, null, {}), i()
      }
    });
    else if (null != n) R.push({
      text: b.intl.string(b.t.ouo4FB),
      variant: "secondary",
      icon: o.OgN,
      onClick: t => {
        t.stopPropagation(), (0, h.Z)({
          skuId: n.skuId,
          isGift: true,
          giftingOrigin: P.Wt.SHOP_PAGE,
          analyticsLocations: r,
          variantsReturnStyle: T,
          onClose: t => {
            t && i()
          }
        })
      }
    });
    else {
      let [t] = e.items;
      R.push({
        text: b.intl.string(b.t["2p2aY2"]),
        variant: l ? "secondary" : "primary",
        onClick: () => {
          if (i(), (0, d.xf)(), null == m || m(), e.type === u.Z.AVATAR_DECORATION) {
            a()(t.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, p.ps)({
              initialSelectedDecoration: t,
              analyticsLocations: r
            });
            return
          }
          if (e.type === u.Z.PROFILE_EFFECT) {
            a()(t.type === u.Z.PROFILE_EFFECT, "product type and item type are the same"), (0, C.H)({
              initialSelectedEffectId: t.id,
              analyticsLocations: r
            });
            return
          }
          if (e.type === u.Z.NAMEPLATE) {
            a()(t.type === u.Z.NAMEPLATE, "product type and item type are the same"), (0, f.f)({
              initialSelectedNameplate: t,
              analyticsLocations: r
            });
            return
          }
        }
      })
    }
    return l && R.push({
      text: b.intl.string(b.t.MAS7uL),
      variant: "primary",
      onClick: s,
      loading: _
    }), R
  },
  Z = (t, e) => {
    let n = i.useMemo(() => (0, m.jm)(t.type, t.skuId), [t.type, t.skuId]);
    return i.useEffect(() => {
      _.default.track(L.rMx.OPEN_MODAL, {
        type: L.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  x = (t, e) => {
    let n = i.useRef(new r.qA),
      l = (0, i.useRef)(null),
      [a, s] = i.useState(null),
      u = (0, R.UY)({
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