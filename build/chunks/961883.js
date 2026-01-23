/** Chunk was on 95481 **/
/** chunk id: 961883, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $V: () => P,
  $k: () => g,
  aG: () => N,
  mO: () => B,
  v8: () => S
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
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
let k = t => null != t ? b.intl.format(b.t["4kp0AB"], {
    itemName: t
  }) : null,
  g = t => {
    let {
      product: e,
      overrideTitle: n,
      isVariantsGroupEnabled: i,
      shouldShowPromotionalExperience: r,
      productName: l,
      itemConsumed: s,
      rentalDuration: a
    } = t;
    if (null != n) return n;
    if (null != a) return 3 === a ? b.intl.string(b.t["5Gltxj"]) : 7 === a ? b.intl.string(b.t.UpxLQN) : b.intl.string(b.t.sYO0Wl);
    if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(T.default.nvaTQq);
    if (L.Dp.FRACTIONAL_PREMIUM === e.skuId)
      if (s) return b.intl.string(b.t.t0xkSB);
      else return b.intl.string(b.t.g5W1g8);
    if (i && !r) return b.intl.string(b.t.IMffmm);
    else return b.intl.formatToPlainString(b.t.YNaxMp, {
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
      itemConsumed: s,
      isFractionalPremiumActive: d,
      expiresAt: u,
      isRental: p = false
    } = t;
    if (null != n) return n;
    if (p && null != u) return b.intl.format(b.t["HQjw+I"], {
      itemName: i,
      date: u
    });
    if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(T.default.UnPGii);
    if (L.Dp.FRACTIONAL_PREMIUM === e.skuId) {
      let t = b.intl.formatToPlainString(b.t.Cz1G97, {
        days: 3
      });
      return s ? b.intl.format(b.t.bhLChO, {
        helpCenterLink: I.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
        duration: t,
        expirationDate: u
      }) : d ? b.intl.string(b.t.fBmhE9) : b.intl.format(b.t["1ZBX4E"], {
        helpCenterLink: I.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
        duration: t
      })
    }
    if (e.type === a.R.BUNDLE) {
      let {
        itemOneName: t,
        itemTwoName: n
      } = (0, C.yW)(e);
      return b.intl.format(b.t.fXw44U, {
        itemOneName: t,
        itemTwoName: n
      })
    }
    return e.type === a.R.AVATAR_DECORATION && r && null != l ? l : k(i)
  },
  N = t => {
    let {
      product: e,
      onClose: n,
      analyticsLocations: i,
      hasRequiredProductItems: r,
      handleUseNow: l,
      isApplying: f,
      openProfileSettings: I,
      itemConsumed: R
    } = t, C = [];
    if (L.Dp.ORB_PROFILE_BADGE === e.skuId) C.push({
      text: b.intl.string(T.default.yfwZuy),
      variant: "primary",
      onClick: () => {
        n(), _._.dispatch(m.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {})
      }
    }, {
      text: b.intl.string(b.t.H57f41),
      variant: "secondary",
      onClick: () => {
        n(), (0, A.Y)({
          pageType: m.liQ.SHOP_ORBS_TAB,
          sectionType: m.JJy.ORBS_BADGE_REDEMPTION_MODAL,
          ctaObject: m.ZSU.CTA_TO_QUEST_HOME
        }), (0, h.navigateToQuestHome)()
      }
    });
    else if (L.Dp.FRACTIONAL_PREMIUM === e.skuId) R ? C.push({
      text: b.intl.string(b.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: b.intl.string(b.t.ERKK6v),
      variant: "primary",
      onClick: () => {
        (0, o.x)(n)
      }
    }) : C.push({
      text: b.intl.string(b.t.cpT0Cq),
      variant: "secondary",
      onClick: n
    }, {
      text: b.intl.string(b.t["Jr6N+s"]),
      variant: "primary",
      onClick: () => {
        (0, O.openUserSettings)(E.X.SUBSCRIPTIONS_PANEL, {
          section: m.nc_.SUBSCRIPTIONS
        }), n()
      }
    });
    else {
      let [t] = e.items;
      C.push({
        text: b.intl.string(b.t["2p2aYz"]),
        variant: r ? "secondary" : "primary",
        onClick: () => {
          if (n(), (0, d.jH)(), null == I || I(), e.type === a.R.AVATAR_DECORATION) {
            s()(t.type === a.R.AVATAR_DECORATION, "product type and item type are the same"), (0, u.L)({
              initialSelectedDecoration: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === a.R.PROFILE_EFFECT) {
            s()(t.type === a.R.PROFILE_EFFECT, "product type and item type are the same"), (0, c.W)({
              initialSelectedEffect: t,
              analyticsLocations: i
            });
            return
          }
          if (e.type === a.R.NAMEPLATE) {
            s()(t.type === a.R.NAMEPLATE, "product type and item type are the same"), (0, p.p)({
              initialSelectedNameplate: t,
              analyticsLocations: i
            });
            return
          }
        }
      })
    }
    return r && C.push({
      text: b.intl.string(b.t.MAS7uK),
      variant: "primary",
      onClick: l,
      loading: f
    }), C
  },
  P = (t, e) => {
    let n = i.useMemo(() => (0, R.V6)(t.type, t.skuId), [t.type, t.skuId]);
    return i.useEffect(() => {
      f.default.track(m.HAw.OPEN_MODAL, {
        type: m.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
        location_stack: e,
        sku_id: t.skuId,
        product_type: n
      })
    }, [e, t.skuId, t.items, n]), {
      productType: n
    }
  },
  B = (t, e) => {
    let n = i.useRef(new r.OH),
      l = (0, i.useRef)(null),
      [s, a] = i.useState(null),
      d = (0, y.AB)({
        purchaseType: e,
        skuId: t.skuId
      });
    return {
      environment: n.current,
      modalRef: l,
      confettiCanvas: s,
      setConfettiCanvas: a,
      customConfettiDisplayOptions: d
    }
  }