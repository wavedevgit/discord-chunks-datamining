/** Chunk was on 75708 **/
/** chunk id: 935147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk175756 = require("./175756.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk402567 = require("./402567.js"),
  Chunk629654 = require("./629654.jsx"),
  Chunk53691 = require("./53691.jsx"),
  Chunk165583 = require("./165583.jsx"),
  Chunk267717 = require("./267717.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk350327 = require("./350327.js"),
  Chunk996073 = require("./996073.js"),
  Chunk25990 = require("./25990.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296810 = require("./296810.jsx"),
  Chunk433411 = require("./433411.jsx"),
  Chunk532432 = require("./532432.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk134795 = require("./134795.jsx"),
  Chunk513901 = require("./513901.jsx"),
  Chunk451392 = require("./451392.jsx"),
  Chunk490220 = require("./490220.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk23821 = require("./23821.js");

function V(e) {
  var t, n;
  let {
    user: V,
    isVisible: G,
    shouldShow: F
  } = e, H = I.ZP.isPremium(V), {
    pendingAvatar: z,
    pendingThemeColors: W,
    tryItOutThemeColors: Y,
    tryItOutAvatar: K,
    tryItOutBanner: q,
    tryItOutProfileEffectId: X,
    tryItOutAvatarDecoration: J
  } = (0, s.cj)([S.Z], () => {
    var e, t;
    let n = S.Z.getAllPending(),
      i = S.Z.getErrors();
    return e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, n, S.Z.getAllTryItOut()), t = t = {
      errors: i
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
  }), Q = (0, g.Z)(X), {
    preset: $,
    onShuffle: ee
  } = (0, b.Z)(), et = r.useRef(null);
  (0, v.Z)(et, M.Y_.TRY_IT_OUT);
  let {
    analyticsLocations: en,
    newestAnalyticsLocation: ei,
    sourceAnalyticsLocations: er
  } = (0, c.ZP)(o.Z.USER_SETTINGS_TRY_OUT_PREMIUM), es = e => {
    if (e) {
      if ((0, l.I5)(K), (0, O.z5)(Y), (0, O.ho)(q), null != J) {
        let e = u.Z.getProduct(J.skuId);
        null != e && (0, p.G1)(e) ? (0, d.fK)(e.skuId).then(() => (0, l.cV)(J)) : null != m.Z.getPurchase(J.skuId) && (0, l.cV)(J)
      }
      T.default.track(k.rMx.TRY_IT_OUT_PRESET_SELECTED, {
        preset: $
      })
    }
  };
  r.useEffect(() => {
    G && T.default.track(k.rMx.PREMIUM_UPSELL_VIEWED, {
      type: L.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: k.ZY5.USER_SETTINGS
      },
      location_stack: er
    })
  }, [er, V, G]);
  let ea = (null == (n = (0, f.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === L.Si.TIER_2,
    el = (0, h.Ng)(),
    eo = (0, h.Wp)(el, L.Si.TIER_2);
  return F ? <c.Gt value={en}><P.Z ref={et} className={U.tryItOutSection} type={P.Y.PREMIUM} isShown={true} hasBackground={true}>{<N.Z layoutClassName={U.tryItOutLayout} profilePreviewTitle={(0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(a.SrA, {
            size: "md",
            color: "currentColor",
            className: U.premiumIcon
          }), B.intl.string(B.t.gMlDNT)]
        })} profilePreview={(0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(x.Z, {
            preset: $,
            onShuffle: ee
          }), (0, i.jsx)(w.Z, {
            user: V
          })]
        })}><div className={U.editor}>{<div>{<a.X6q variant={"heading-xl/extrabold"}>{B.intl.string(B.t["2zGdAQ"])}</a.X6q>}{<a.Text className={U.description} variant={"text-sm/normal"}>{B.intl.string(B.t.xeEC29)}</a.Text>}</div>}{<Z.Z className={U.customizationSection} user={V} pendingAvatarSrc={(0, C.SD)({
              userId: V.id,
              image: null != K ? K : z
            })} pendingColors={null != Y ? Y : W} onThemeColorsChange={O.rf} showPremiumIcon={false} preventDisabled={true} />}{<R.Z className={U.customizationSection} isTryItOutFlow={true} showRemoveBannerButton={null != q} onBannerChange={O.f4} showPremiumIcon={false} />}{<A.Z className={U.customizationSection} isTryItOutFlow={true} onAvatarChange={O.c_} showRemoveAvatarButton={false} changeAvatarButtonText={B.intl.string(B.t["7z0D1d"])} sectionTitle={B.intl.string(B.t.vtFfPT)} />}{<y.Z isTryItOutFlow={true} className={U.customizationSection} user={V} sectionTitle={B.intl.string(B.t["7v0T9P"])} />}{<D.Z className={U.customizationSection} isTryItOutFlow={true} initialSelectedEffectId={Q} user={V} sectionTitle={B.intl.string(B.t.wR5wOj)} />}{!ea && <a.Text variant={"text-sm/normal"}>{B.intl.string(B.t["smo74+"])}</a.Text>}</div></N.Z>}{!ea && <_.p onSubscribeModalClose={es} className={U.floatingUpsell} showUpsell={true} text={B.intl.format(B.t.TmfgIy, {
          onClick: () => {
            (0, E.y)({
              analyticsSource: ei,
              onSubscribeFinish: es
            })
          }
        })} button={H ? B.intl.string(B.t.AfRWIy) : eo ? B.intl.formatToPlainString(B.t.bkQ4bG, {
          percent: null == el ? true : el.discount.amount
        }) : B.intl.string(B.t.pj0XBA)} position={"inline"} showShadow={false} />}{ea && <div>{<div className={U.premiumTier2Divider} />}{<j.ZP type={L.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL} subscriptionTier={L.Si.TIER_2} />}</div>}</P.Z></c.Gt> : null
}