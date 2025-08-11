/** Chunk was on web.js **/
/** chunk id: 165583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => F,
  dz: () => U
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk55358 = require("./55358.js"),
  Chunk703656 = require("./703656.js"),
  Chunk483444 = require("./483444.js"),
  Chunk599250 = require("./599250.js"),
  Chunk424218 = require("./424218.js"),
  Chunk74538 = require("./74538.js"),
  Chunk960048 = require("./960048.js"),
  Chunk861990 = require("./861990.js"),
  Chunk98278 = require("./98278.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.js"),
  Chunk382791 = require("./382791.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk110588 = require("./110588.js"),
  Chunk867250 = require("./867250.js");

function M(e) {
  if (null == e) return null;
  let t = u()(e),
    n = t.diff(u()(), "h");
  if (n > 24) {
    let e = t.diff(u()(), "d");
    return D.intl.formatToPlainString(D.t.xs9VPj, {
      numDays: e
    })
  }
  if (n > 1) return D.intl.formatToPlainString(D.t["p7KX5+"], {
    numHours: n
  });
  let r = t.diff(u()(), "minutes");
  return D.intl.formatToPlainString(D.t["XtQ+Ag"], {
    numMinutes: r
  })
}

function k(e) {
  var t, n, i;
  let {
    className: o,
    children: s,
    withBottomMargin: l,
    discountOffer: c,
    trialOffer: u
  } = e, d = null != (t = null == u ? true : u.expires_at) ? t : null == c ? true : c.expires_at, f = null == u ? true : u.subscription_trial, _ = null != (i = null != (n = e.subscriptionTier) ? n : null == f ? true : f.sku_id) ? i : P.Si.TIER_2;
  return <div className={a()(o, L.gradientUpsellWrapper, {
      [L.gradientUpsellWrapperTier0]: _ === P.Si.TIER_0,
      [L.gradientUpsellWrapperTier2]: _ === P.Si.TIER_2,
      [L.gradientUpsellWrapperWithBottomMargin]: l
    })}>{<div className={L.logo}>{<h.SrA size={"md"} color={"currentColor"} className={L.logoIcon} />}{_ === P.Si.TIER_0 && <O.Z className={L.logoWordmark} />}{_ === P.Si.TIER_2 && <y.Z className={L.logoWordmark} />}</div>}{<h.Text variant={"text-md/medium"} className={L.copy} color={"none"}>{s}</h.Text>}{<R.Cy text={null != c ? D.intl.formatToPlainString(D.t.iiLbvr, {
        percent: c.discount.amount
      }) : D.intl.string(D.t.IBYG5e)} colorOptions={_ === P.Si.TIER_0 ? R.VE.PREMIUM_TIER_0_WHITE_FILL : R.VE.PREMIUM_TIER_2_WHITE_FILL} />}{<h.Text variant={"eyebrow"} className={L.countdownText}>{M(d)}</h.Text>}</div>
}

function j(e) {
  var t, n;
  let {
    className: o,
    onClose: a,
    subscriptionTier: s,
    analyticsLocationObject: l,
    trialOffer: c,
    discountOffer: u
  } = e, [d, f] = i.useState(false), _ = null != u ? D.intl.formatToPlainString(D.t.bkQ4bG, {
    percent: u.discount.amount
  }) : (0, I.Rt)({
    intervalType: null == c || null == (t = c.subscription_trial) ? true : t.interval,
    intervalCount: null == c || null == (n = c.subscription_trial) ? true : n.interval_count
  });
  return <C.Z className={o} subscriptionTier={s} submitting={d} premiumModalAnalyticsLocation={l} size={p.zx.Sizes.MEDIUM} color={p.zx.Colors.GREEN} onClick={() => {
      f(true)
    }} onSubscribeModalClose={e => {
      f(false), e && (null == a || a())
    }} textOptions={{
      textOverride: _
    }} />
}

function U(e) {
  var t, n;
  let i = null == (t = (0, N.N)()) ? true : t.subscription_trial,
    o = null != (n = null == i ? true : i.sku_id) ? n : P.Si.TIER_2;
  return <h.Text variant={"text-xs/bold"} className={a()(L.trialBadge, e.className, {
      [L.trialBadgeGradientTier0]: o === P.Si.TIER_0,
      [L.trialBadgeGradientTier2]: o === P.Si.TIER_2
    })} color={"none"}>{(0, I.a5)({
      intervalType: null == i ? true : i.interval,
      intervalCount: null == i ? true : i.interval_count
    })}</h.Text>
}

function G(e) {
  let {
    subscriptionTier: t,
    onClose: n,
    analyticsLocationObject: i,
    trialOffer: o,
    discountOffer: a
  } = e;
  return <div className={L.footer}>{<p.zx onClick={n} size={p.zx.Sizes.SMALL} look={p.iL.BLANK} className={L.cancelButton}>{D.intl.string(D.t.cpT0Cg)}</p.zx>}{<j className={L.subscribeButton} subscriptionTier={t} analyticsLocationObject={i} onClose={n} discountOffer={a} trialOffer={o} />}</div>
}

function B(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, i = (0, N.N)();
  return <div className={L.tryOutUpsellContainer}>{<R.Cy className={L.topRimPill} text={D.intl.string(D.t["8CVUra"])} colorOptions={R.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL} />}{<h.X6q variant={"heading-md/semibold"} color={"text-default"}>{D.intl.format(D.t["fF+cgY"], {
        onClick: () => (0, A.z)()
      })}</h.X6q>}{<j trialOffer={i} className={L.subscribeButtonWide} subscriptionTier={P.Si.TIER_2} analyticsLocationObject={n} onClose={t} />}{<h.Text variant={"eyebrow"} className={L.countdownTextInSetting}>{M(null == i ? true : i.expires_at)}</h.Text>}</div>
}

function Z(e) {
  let {
    headingText: t,
    context: n,
    children: i,
    trialOffer: o,
    discountOffer: a
  } = e;
  return <div className={L.contentContainer}>{<h.X6q variant={"heading-xl/semibold"}>{t}</h.X6q>}{null != n && <h.Text className={L.context} variant={"text-md/normal"}>{n}</h.Text>}{<k trialOffer={o} discountOffer={a}>{i}</k>}</div>
}

function F(e) {
  let {
    headingText: t,
    context: i,
    children: o,
    onClose: s,
    type: c,
    subscriptionTier: u,
    analyticsLocationObject: p,
    trialOffer: y,
    discountOffer: O
  } = e, A = (0, d.e7)([g.Z], () => g.Z.useReducedMotion), N = (0, m.ZP)(), C = (0, v.BU)(S.zz / v.XD, {
    useKibibytes: true
  });
  switch (c) {
    case P.cd.EMPTY_STICKER_PICKER_UPSELL:
      return <r.Fragment>{<h.P3F className={L.upsellClose} onClick={s}><h.Dio size={"md"} color={"currentColor"} /></h.P3F>}{<div className={L.contentContainer}>{<img className={L.upsellImage} src={x} alt={D.intl.string(D.t.do7AoK)} />}{<h.X6q variant={"heading-xl/bold"} color={"header-primary"}>{D.intl.string(D.t.HEm04O)}</h.X6q>}{<k trialOffer={y} discountOffer={O}>{D.intl.format(D.t["2HoFKC"], {
              planName: (0, I.jP)(u),
              onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
            })}</k>}</div>}{<G subscriptionTier={u} onClose={s} analyticsLocationObject={{
            section: w.jXE.EXPRESSION_PICKER,
            object: w.qAy.BUTTON_CTA
          }} trialOffer={y} discountOffer={O} />}</r.Fragment>;
    case P.cd.STICKER_PICKER_UPSELL:
      return l()(null != o, "You must specify children for this upsell type"), <r.Fragment>{<div className={L.contentContainer}>{<img className={L.upsellImage} src={x} alt={D.intl.string(D.t.do7AoK)} />}{<h.X6q variant={"heading-xl/bold"} color={"header-primary"}>{D.intl.string(D.t.jJG1pq)}</h.X6q>}{<k trialOffer={y} discountOffer={O}>{D.intl.format(D.t["2HoFKC"], {
              planName: (0, I.jP)(u),
              onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
            })}</k>}</div>}{<G subscriptionTier={u} onClose={s} analyticsLocationObject={{
            section: w.jXE.EXPRESSION_PICKER,
            object: w.qAy.BUTTON_CTA
          }} trialOffer={y} discountOffer={O} />}</r.Fragment>;
    case P.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      l()(null != o, "You must specify children for this upsell type");
      let R = (0, _.ap)(N) ? n(537381) : n(341048);
      return <r.Fragment>{<div className={L.contentContainer}>{<img alt={""} className={L.upsellImage} src={R} />}{<h.X6q variant={"heading-xl/bold"} color={"header-primary"}>{D.intl.string(D.t["1SsvhY"])}</h.X6q>}{<k trialOffer={y} discountOffer={O}>{D.intl.format(D.t.md4nPz, {
              planName: (0, I.jP)(u),
              onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
            })}</k>}</div>}{<G subscriptionTier={u} onClose={s} analyticsLocationObject={{
            section: w.jXE.EMOJI_PICKER_POPOUT,
            object: w.qAy.BUTTON_CTA
          }} trialOffer={y} discountOffer={O} />}</r.Fragment>;
    case P.cd.UPLOAD_ERROR_UPSELL:
    case P.cd.BURST_REACTION_UPSELL:
    case P.cd.STREAM_QUALITY_UPSELL:
    case P.cd.MESSAGE_LENGTH_UPSELL:
      let M;
      switch (c) {
        case P.cd.UPLOAD_ERROR_UPSELL:
          M = D.intl.format(D.t.F4qoDw, {
            planName: (0, I.jP)(u),
            premiumMaxSize: u === P.Si.TIER_0 ? D.intl.string(D.t["C/Rhb2"]) : C,
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case P.cd.BURST_REACTION_UPSELL:
          M = D.intl.format(D.t.poib9P, {
            planName: (0, I.jP)(u),
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case P.cd.STREAM_QUALITY_UPSELL:
          M = D.intl.format(D.t.WspKp6, {
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s(), (0, f.pT)()
            }
          });
          break;
        case P.cd.MESSAGE_LENGTH_UPSELL:
          M = D.intl.format(D.t.GUHtEx, {
            premiumMaxMessageLength: w.en1,
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          })
      }
      return l()(null != M, "There must be some upsell context"), <div className={L.contentContainer}>{<h.X6q variant={"heading-xl/bold"} color={"header-primary"}>{t}</h.X6q>}{<h.Text variant={"text-md/normal"}>{i}</h.Text>}{<k trialOffer={y} discountOffer={O}>{M}</k>}</div>;
    case P.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
      return <div className={L.contentContainer}>{<h.X6q variant={"heading-xl/bold"} color={"header-primary"}>{t}</h.X6q>}{<h.Text variant={"text-md/normal"}>{i}</h.Text>}{<k trialOffer={y} discountOffer={O}>{D.intl.format(D.t.poib9P, {
            planName: (0, I.jP)(u),
            onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
          })}</k>}{<j className={L.upsellButton} subscriptionTier={u} analyticsLocationObject={p} onClose={s} trialOffer={y} discountOffer={O} />}</div>;
    case P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return l()(null != o, "You must specify children for this upsell type"), <k trialOffer={y} discountOffer={O}>{D.intl.format(D.t["5KMAnJ"], {
          onClick: () => {
            (0, b.uL)(w.Z5c.APPLICATION_STORE), (0, E.C)()
          }
        })}</k>;
    case P.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return <div className={a()(L.messageLengthUpsellContainer, {
          [L.messageLengthUpsellAppearAnimation]: !A
        })}>{<h.Text variant={"text-lg/bold"} color={"status-danger"}>{i}</h.Text>}{<h.X6q variant={"heading-lg/extrabold"} color={"header-primary"} className={L.messageLengthUpsellHeader}>{D.intl.string(D.t.ZvHg3N)}</h.X6q>}{<div className={L.divider} />}{<k trialOffer={y} discountOffer={O} className={L.messageLengthBrandedContainer} subscriptionTier={u}>{D.intl.format(D.t.GUHtEx, {
            premiumMaxMessageLength: w.en1,
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          })}</k>}{<j subscriptionTier={u} analyticsLocationObject={p} onClose={s} trialOffer={y} discountOffer={O} />}</div>;
    case P.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case P.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return <B />;
    case P.cd.GUILD_CAP_MODAL_UPSELL:
    case P.cd.PREMIUM_GUILD_IDENTITY_MODAL:
    case P.cd.CUSTOM_PROFILE_UPSELL:
    case P.cd.VIDEO_BACKGROUNDS_MODAL:
    case P.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case P.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case P.cd.EMOJI_PICKER_EMOJI_CLICKED:
    case P.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
    case P.cd.APP_ICON_UPSELL:
    case P.cd.CLIENT_THEMES_UPSELL:
    case P.cd.TRY_IT_OUT_MODAL_UPSELL:
    case P.cd.VOICE_FILTERS_UPSELL:
      return <Z trialOffer={y} discountOffer={O} headingText={t} context={i}>{o}</Z>;
    default:
      return T.Z.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(c)), <Z headingText={t} context={i} trialOffer={y} discountOffer={O}>{o}</Z>
  }
}