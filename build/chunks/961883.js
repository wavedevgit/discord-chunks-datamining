/** Chunk was on 95481 **/
/** chunk id: 961883, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $V: () => v,
  $k: () => j,
  aG: () => k,
  mO: () => T,
  v8: () => S
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
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
let L = t => null != t ? C.intl.format(C.t["4kp0AB"], {
    itemName: t
  }) : null,
  j = t => {
    let {
      product: e,
      overrideTitle: n,
      isVariantsGroupEnabled: r,
      shouldShowPromotionalExperience: i,
      productName: a,
      itemConsumed: l,
      rentalDuration: s
    } = t;
    if (null != n) return n;
    if (null != s) return 3 === s ? C.intl.string(C.t["5Gltxj"]) : 7 === s ? C.intl.string(C.t.UpxLQN) : C.intl.string(C.t.sYO0Wl);
    if (I.Dp.ORB_PROFILE_BADGE === e.skuId) return C.intl.string(R.default.nvaTQq);
    if (I.Dp.FRACTIONAL_PREMIUM === e.skuId)
      if (l) return C.intl.string(C.t.t0xkSB);
      else return C.intl.string(C.t.g5W1g8);
    if (r && !i) return C.intl.string(C.t.IMffmm);
    else return C.intl.formatToPlainString(C.t.YNaxMp, {
      itemName: a
    })
  },
  S = t => {
    let {
      product: e,
      overrideDescription: n,
      productName: r,
      shouldShowPromotionalExperience: i,
      promotionalRewardCollectedText: a,
      itemConsumed: l,
      isFractionalPremiumActive: o,
      expiresAt: c,
      isRental: u = false
    } = t;
    if (null != n) return n;
    if (u && null != c) return C.intl.format(C.t["HQjw+I"], {
      itemName: r,
      date: c
    });
    if (I.Dp.ORB_PROFILE_BADGE === e.skuId) return C.intl.string(R.default.UnPGii);
    if (I.Dp.FRACTIONAL_PREMIUM === e.skuId) {
      let t = C.intl.formatToPlainString(C.t.Cz1G97, {
        days: 3
      });
      return l ? C.intl.format(C.t.bhLChO, {
        helpCenterLink: m.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: c
      }) : o ? C.intl.string(C.t.fBmhE9) : C.intl.format(C.t["1ZBX4E"], {
        helpCenterLink: m.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
    if (e.type === s.R.BUNDLE) {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, A.yW)(e);
      return C.intl.format(C.t.fXw44U, {
        itemOneName: t,
        itemTwoName: n
      })
    }
    return e.type === s.R.AVATAR_DECORATION && i && null != a ? a : L(r)
  },
  k = t => {
    let {
      product: e,
      onClose: n,
      analyticsLocations: r,
      hasRequiredProductItems: i,
      handleUseNow: a,
      isApplying: h,
      openProfileSettings: m,
      itemConsumed: g
    } = t, A = [];
    if (I.Dp.ORB_PROFILE_BADGE === e.skuId) A.push({
      text: C.intl.string(R.default.yfwZuy),
      variant: "primary",
      onClick: () => {
        n(), E._.dispatch(_.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: C.intl.string(C.t.H57f41),
      variant: "secondary",
      onClick: () => {
        n(), (0, b.Y)({
          pageType: _.liQ.SHOP_ORBS_TAB,
          sectionType: _.JJy.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: _.ZSU.CTA_TO_QUEST_HOME
        }), (0, O.navigateToQuestHome)()
      }
    });
    else if (I.Dp.FRACTIONAL_PREMIUM === e.skuId) g ? A.push({
      text: C.intl.string(C.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: C.intl.string(C.t.ERKK6v),
      variant: "primary",
      onClick: () => {
        (0, p.x)(n)
      }
    }) : A.push({
      text: C.intl.string(C.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: C.intl.string(C.t["Jr6N+s"]),
      variant: "primary",
      onClick: () => {
        (0, y.openUserSettings)(f.X.SUBSCRIPTIONS_PANEL, {
          section: _.nc_.SUBSCRIPTIONS
        }), n()
      }
    });
    else {
      let [t] = e.items;
      A.push({
        text: C.intl.string(C.t["2p2aYz"]),
        variant: i ? "secondary" : "primary",
        onClick: () => {
          if (n(), (0, o.jH)(), null == m || m(), e.type === s.R.AVATAR_DECORATION) {
            l()(t.type === s.R.AVATAR_DECORATION, "product type and item type are the same"), (0, c.L)({
              initialSelectedDecoration: t,
              analyticsLocations: r
            });
            return
          }
          if (e.type === s.R.PROFILE_EFFECT) {
            l()(t.type === s.R.PROFILE_EFFECT, "product type and item type are the same"), (0, d.W)({
              initialSelectedEffect: t,
              analyticsLocations: r
            });
            return
          }
          if (e.type === s.R.NAMEPLATE) {
            l()(t.type === s.R.NAMEPLATE, "product type and item type are the same"), (0, u.p)({
              initialSelectedNameplate: t,
              analyticsLocations: r
            });
            return
          }
        }
      })
    }
    return i && A.push({
      text: C.intl.string(C.t.MAS7uK),
      variant: "primary",
      onClick: a,
      loading: h
    }), A
  },
  v = (t, e) => {
    let n = r.useMemo(() => (0, g.V6)(t.type, t.skuId), [t.type, t.skuId]);
    return r.useEffect(() => {
      h.default.track(_.HAw.OPEN_MODAL, {
        type: _.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  T = (t, e) => {
    let n = r.useRef(new i.OH),
      a = (0, r.useRef)(null),
      [l, s] = r.useState(null),
      o = (0, P.AB)({
        purchaseType: e,
        skuId: t.skuId
      });
    return {
      environment: n.current,
      modalRef: a,
      confettiCanvas: l,
      setConfettiCanvas: s,
      customConfettiDisplayOptions: o
    }
  }