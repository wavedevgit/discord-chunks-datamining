/** Chunk was on 30141 **/
/** chunk id: 391594, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $0: () => B,
  Xw: () => R,
  cf: () => L,
  f1: () => D,
  ys: () => C
}), require("./314940.js"), require("./539854.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js"),
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
let k = t => null != t ? _.intl.format(_.t["4kp0AA"], {
    itemName: t
  }) : null,
  R = t => {
    let {
      product: e,
      pairedProduct: n,
      overrideTitle: r,
      isVariantsGroupEnabled: i,
      shouldShowPromotionalExperience: l,
      productName: a,
      pairedProductName: s,
      itemConsumed: o
    } = t;
    if (null != r) return r;
    if (T.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(S.default.nvaTQk);
    if (T.Vt.FRACTIONAL_PREMIUM === e.skuId)
      if (o) return _.intl.string(_.t.t0xkSE);
      else return _.intl.string(_.t.g5W1g4);
    if (null != n) return _.intl.formatToPlainString(new Date < T.a$ ? _.t.BhGU09 : _.t.Jfv5Qk, {
      purchased_item: a,
      suggested_item: s
    });
    if (i && !l) return _.intl.string(_.t.IMffmp);
    else return _.intl.formatToPlainString(_.t.YNaxMj, {
      itemName: a
    })
  },
  C = t => {
    let {
      product: e,
      pairedProduct: n,
      overrideDescription: r,
      productName: i,
      pairedProductName: l,
      shouldShowPromotionalExperience: a,
      promotionalRewardCollectedText: u,
      itemConsumed: c,
      isFractionalPremiumActive: d,
      expiresAt: p
    } = t;
    if (null != r) return r;
    if (T.Vt.ORB_PROFILE_BADGE === e.skuId) return _.intl.string(S.default.UnPGio);
    if (T.Vt.FRACTIONAL_PREMIUM === e.skuId) {
      let t = _.intl.formatToPlainString(_.t["Cz1G9/"], {
        days: 3
      });
      return c ? _.intl.format(_.t.bhLChI, {
        helpCenterLink: v.Z.getArticleURL(j.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: p
      }) : d ? _.intl.string(_.t.fBmhEx) : _.intl.format(_.t["1ZBX4O"], {
        helpCenterLink: v.Z.getArticleURL(j.BhN.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
    if (null != n) return _.intl.format(new Date < T.a$ ? _.t["1jBC0t"] : _.t.qSrp39, {
      purchased_item: i,
      suggested_item: l
    });
    return (0, s.EQ)(null == e ? true : e.type).with(o.Z.BUNDLE, () => {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, E.Ws)(e);
      return _.intl.format(_.t.fXw44e, {
        itemOneName: t,
        itemTwoName: n
      })
    }).with(o.Z.AVATAR_DECORATION, () => a && null != u ? u : k(i)).otherwise(() => k(i))
  },
  L = t => {
    let {
      product: e,
      pairedProduct: n,
      onClose: r,
      analyticsLocations: i,
      hasRequiredProductItems: l,
      handleUseNow: s,
      isApplying: P,
      variantsReturnStyle: v,
      openProfileSettings: A,
      itemConsumed: E
    } = t, I = [];
    if (T.Vt.ORB_PROFILE_BADGE === e.skuId) I.push({
      text: _.intl.string(S.default.yfwZu7),
      variant: "primary",
      onClick: () => {
        r(), m.S.dispatch(j.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: _.intl.string(_.t["H57f4+"]),
      variant: "secondary",
      onClick: () => {
        r(), (0, h.Y)({
          pageType: j.ZY5.SHOP_ORBS_TAB,
          sectionType: j.jXE.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: j.qAy.CTA_TO_QUEST_HOME
        }), (0, g.navigateToQuestHome)()
      }
    });
    else if (T.Vt.FRACTIONAL_PREMIUM === e.skuId) E ? I.push({
      text: _.intl.string(_.t.cpT0Cg),
      variant: "secondary",
      onClick: r
    }, {
      text: _.intl.string(_.t.ERKK6u),
      variant: "primary",
      onClick: () => {
        (0, y.$)(r)
      }
    }) : I.push({
      text: _.intl.string(_.t.cpT0Cg),
      variant: "secondary",
      onClick: r
    }, {
      text: _.intl.string(_.t["Jr6N+v"]),
      variant: "primary",
      onClick: () => {
        d.Z.open(j.oAB.SUBSCRIPTIONS, null, {}), r()
      }
    });
    else if (null != n) I.push({
      text: _.intl.string(_.t.ouo4FB),
      variant: "secondary",
      icon: u.OgN,
      onClick: t => {
        t.stopPropagation(), (0, O.Z)({
          skuId: n.skuId,
          isGift: true,
          giftingOrigin: w.Wt.SHOP_PAGE,
          analyticsLocations: i,
          variantsReturnStyle: v,
          onClose: t => {
            t && r()
          }
        })
      }
    });
    else {
      let [t] = e.items;
      I.push({
        text: _.intl.string(_.t["2p2aY2"]),
        variant: l ? "secondary" : "primary",
        onClick: () => {
          if (r(), (0, c.xf)(), null == A || A(), e.type === o.Z.AVATAR_DECORATION) {
            a()(t.type === o.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, p.ps)({
              initialSelectedDecoration: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === o.Z.PROFILE_EFFECT) {
            a()(t.type === o.Z.PROFILE_EFFECT, "product type and item type are the same"), (0, b.H)({
              initialSelectedEffectId: t.id,
              analyticsLocations: i
            });
            return
          }
          if (e.type === o.Z.NAMEPLATE) {
            a()(t.type === o.Z.NAMEPLATE, "product type and item type are the same"), (0, f.f)({
              initialSelectedNameplate: t,
              analyticsLocations: i
            });
            return
          }
        }
      })
    }
    return l && I.push({
      text: _.intl.string(_.t.MAS7uL),
      variant: "primary",
      onClick: s,
      loading: P
    }), I
  },
  D = (t, e) => {
    let n = r.useMemo(() => (0, A.jm)(t.type, t.skuId), [t.type, t.skuId]);
    return r.useEffect(() => {
      P.default.track(j.rMx.OPEN_MODAL, {
        type: j.jXE.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  B = (t, e) => {
    let n = r.useRef(new i.qA),
      l = (0, r.useRef)(null),
      [a, s] = r.useState(null),
      o = (0, I.UY)({
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