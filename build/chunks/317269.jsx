/** Chunk was on 84992 **/
/** chunk id: 317269, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  TB: () => _,
  VY: () => j,
  ZP: () => v
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16084 = require("./16084.js"),
  Chunk987209 = require("./987209.js"),
  Chunk563132 = require("./563132.js"),
  Chunk179118 = require("./179118.jsx"),
  Chunk912788 = require("./912788.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk335105 = require("./335105.js"),
  Chunk741245 = require("./741245.js"),
  Chunk783017 = require("./783017.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk106772 = require("./106772.js");

function E(t) {
  let e, {
      planId: n,
      startingPremiumSubscriptionPlanId: s,
      paymentSourceType: l
    } = t,
    [C, c] = (0, r.Wu)([o.Z], () => [o.Z.get(s), o.Z.get(n)]);
  if (a()(null != C && null != c, "Missing startingPlan or newPlan"), N.Y1.indexOf(s) < N.Y1.indexOf(n)) switch (n) {
      case N.Xh.PREMIUM_MONTH_TIER_1:
        e = T.intl.string(T.t.knvOV1), p.X7u.has(null != l ? l : p.HeQ.UNKNOWN) && (e = T.intl.format(T.t.o6hBiY, {}));
        break;
      case N.Xh.PREMIUM_MONTH_TIER_2:
        e = T.intl.string(T.t.f8Dqur), p.X7u.has(null != l ? l : p.HeQ.UNKNOWN) && (e = T.intl.format(T.t.A4THYm, {}));
        break;
      case N.Xh.PREMIUM_YEAR_TIER_1:
        e = T.intl.string(T.t.YZd5r6), p.X7u.has(null != l ? l : p.HeQ.UNKNOWN) && (e = T.intl.format(T.t.MHAxpK, {}));
        break;
      case N.Xh.PREMIUM_YEAR_TIER_2:
        e = T.intl.formatToPlainString(T.t["M/Lknp"], {
          numFreeGuildSubscriptions: N.cb
        }), p.X7u.has(null != l ? l : p.HeQ.UNKNOWN) && (e = T.intl.format(T.t.mULxLS, {
          numFreeGuildSubscriptions: N.cb
        }));
        break;
      case N.Xh.PREMIUM_3_MONTH_TIER_2:
      case N.Xh.PREMIUM_6_MONTH_TIER_2:
        e = T.intl.string(T.t.aaCoW1);
        break;
      case N.Xh.PREMIUM_MONTH_TIER_0:
      case N.Xh.PREMIUM_YEAR_TIER_0:
        e = T.intl.string(T.t["XEoQ7+"]);
        break;
      default:
        throw Error("Unexpected planId: ".concat(n))
    } else if (C.skuId === N.Si.TIER_2 && c.skuId === N.Si.TIER_1) e = T.intl.string(T.t.PNX4ND);
    else switch (c.skuId) {
      case N.Si.TIER_0:
        e = T.intl.string(T.t["XEoQ7+"]);
        break;
      case N.Si.TIER_1:
        e = T.intl.string(T.t.nLI1Ki);
        break;
      case N.Si.TIER_2:
        e = 1 !== C.intervalCount ? T.intl.string(T.t.qSZZVF) : T.intl.string(T.t.RNjcNj);
        break;
      default:
        throw Error("Unexpected skuId: ".concat(c.skuId))
    }
  return <div className={I.text}>{e}</div>
}

function v(t) {
  let e, n, {
      planId: l,
      enableNoPaymentTrial: d,
      startingPremiumSubscriptionPlanId: L,
      onClose: H,
      followupSKUInfo: v,
      isDowngrade: _,
      hideClose: j,
      postSuccessGuild: R,
      paymentSourceType: P,
      startingFractionalPremiumEndsAt: U
    } = t,
    {
      enablePremiumBrandRefresh: b,
      isDisplayingWowMomentConfirmation: k
    } = (0, u.JL)(),
    {
      theme: w
    } = (0, C.TCT)(),
    A = (0, r.e7)([M.Z], () => null != v ? M.Z.get(v.id) : null),
    O = (0, Z.qH)(U);
  s.useEffect(() => {
    if (null == v || null != A) return;
    let {
      applicationId: t,
      id: e
    } = v;
    (0, c.$N)(t, e).catch(p.VqG)
  }, [v, A]);
  let S = t => t.skuId === N.Si.TIER_0 ? p.X7u.has(null != P ? P : p.HeQ.UNKNOWN) ? T.intl.format(T.t.o6hBiY, {}) : T.intl.string(T.t["AGf/yc"]) : t.skuId === N.Si.TIER_1 ? p.X7u.has(null != P ? P : p.HeQ.UNKNOWN) ? T.intl.format(T.t.o6hBiY, {}) : T.intl.string(T.t.knvOV1) : p.X7u.has(null != P ? P : p.HeQ.UNKNOWN) ? T.intl.format(T.t.A4THYm, {}) : d ? T.intl.string(T.t["g52y/v"]) : T.intl.string(T.t.aTUr3d);
  if (null != A) e = <div className={I.text}>{T.intl.format(T.t.tsQOs7, {
      skuName: A.name
    })}</div>;
  else if (O && !_) {
    let t = o.Z.get(l);
    a()(null != t, "Missing plan"), t.skuId === N.Si.TIER_0 ? e = <div className={I.text}>{<p>{T.intl.string(T.t.L9lcGx)}</p>}{<p>{T.intl.format(T.t.EoDFuL, {
          helpCenterLink: h.Z.getArticleURL(p.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })}</p>}</div> : (t.skuId === N.Si.TIER_1 || t.skuId === N.Si.TIER_2) && (e = <div className={I.text}>{<p>{T.intl.string(T.t.UPpbPz)}</p>}{<p>{T.intl.format(T.t.EoDFuL, {
          helpCenterLink: h.Z.getArticleURL(p.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })}</p>}</div>)
  } else if (null != L) e = <E planId={l} startingPremiumSubscriptionPlanId={L} />;
  else if (null != R) {
    let t = o.Z.get(l);
    a()(null != t, "Missing plan"), e = <i.Fragment>{<div className={I.text}>{S(t)}</div>}{<div className={I.text}>{T.intl.format(T.t["6aZ0NT"], {
          guildName: R.name
        })}</div>}</i.Fragment>
  } else {
    let t = o.Z.get(l);
    a()(null != t, "Missing plan"), e = <div className={I.text}>{S(t)}</div>
  }
  let X = m.ZP.getPremiumType(l);
  a()(null != X, "premium type should not be null in purchase confirmation"), n = null != A ? T.intl.formatToPlainString(T.t["1qGgm5"], {
    skuName: A.name
  }) : _ ? T.intl.string(T.t.QJ9EyM) : null != R ? T.intl.string(T.t.ta3cXV) : T.intl.string(T.t.TkTvBw);
  let y = () => p.X7u.has(null != P ? P : p.HeQ.UNKNOWN) ? x.ZP.Types.PREMIUM_PAYMENT_STARTED : null != L ? x.ZP.Types.PREMIUM_UPDATED : x.ZP.Types.PREMIUM_ACTIVATED;
  return k ? <f.Z type={y()} text={e} buttonText={n} hideClose={j} onClose={H} /> : <div className={I.confirmation}>{b ? <g.Z type={y()} theme={w} /> : <x.ZP className={I.banner} theme={w} premiumType={X} type={y()} />}{e}{j ? null : <div data-button-hoisted-classname-wrapper={true} className={I.button}><C.zxk variant={"primary"} text={n} onClick={H} /></div>}</div>
}

function _(t) {
  let {
    planId: e,
    onClose: n
  } = t, {
    giftRecipient: s,
    selectedGiftStyle: l,
    hasSentMessage: C,
    giftMessageError: c,
    isSendingMessage: u
  } = (0, d.wD)(), M = (0, r.e7)([o.Z], () => o.Z.get(e));
  a()(null != M, "Missing plan");
  let h = (0, r.e7)([H.Z], () => H.Z.getGiftCode(M.skuId));
  return <L.Z giftCode={h} subscriptionPlan={M} onClose={n} selectedGiftStyle={l} hasSentMessage={C} giftRecipient={s} giftMessageError={c} isSendingMessage={u} />
}

function j() {
  return <div className={Chunk106772.redirectConfirmation}>{<Chunk481060.X6q variant={"heading-xl/bold"}>{Chunk388032.intl.string(Chunk388032.t.Xtf9wM)}</Chunk481060.X6q>}{<div className={Chunk106772.redirectBody}>{<Chunk481060.Text variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t.bIVRSU)}</Chunk481060.Text>}{<br />}{<Chunk481060.Text variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t["0UJqOz"])}</Chunk481060.Text>}</div>}</div>
}