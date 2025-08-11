/** Chunk was on 75708 **/
/** chunk id: 10970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./997841.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk601911 = require("./601911.js"),
  Chunk887818 = require("./887818.js"),
  Chunk824856 = require("./824856.js"),
  Chunk565138 = require("./565138.js"),
  Chunk430824 = require("./430824.js"),
  Chunk55563 = require("./55563.js"),
  Chunk171246 = require("./171246.js"),
  Chunk263519 = require("./263519.js"),
  Chunk63487 = require("./63487.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk831169 = require("./831169.js");

function x(e) {
  var t;
  let {
    app: n,
    currentSubscription: p,
    currentListing: h,
    alternativeListings: x,
    navigateToHome: j,
    subscriptionGroup: E,
    renewalSkuId: C
  } = e, O = (0, a.y)(n, 100), v = (0, m.KK)(E.flags), S = v ? s.QTo : s.tBG, T = v ? f.intl.string(f.t["46YF2N"]) : f.intl.string(f.t.fFyGiI), I = null == (t = p.metadata) ? true : t.application_subscription_guild_id, N = (0, r.e7)([d.Z], () => v && null != I ? d.Z.getGuild(I) : true, [I, v]), y = (0, r.e7)([u.Z], () => {
    if (null != C) return u.Z.get(C)
  }, [C]), A = (0, g.p)(p.currentPeriodEnd);
  return <div>{<div className={b.header}>{null != O && <s.Eep src={O.href} imageClassName={b.appIcon} width={48} height={48} />}{<div>{<s.X6q variant={"heading-xl/semibold"}>{n.name}</s.X6q>}{<div className={b.subInfo}>{<s.X6q variant={"heading-md/normal"} className={b.subInfoType}>{<S size={"xs"} color={"currentColor"} />}{" "}{T}</s.X6q>}{null != N && <i.Fragment>{<s.Text variant={"text-md/normal"}>{"•"}</s.Text>}{<span className={b.guildSubscription}>{<c.Z guild={N} size={c.Z.Sizes.SMOL} />}{<s.X6q variant={"heading-md/semibold"} color={"text-muted"}>{f.intl.format(f.t["7ZD8p6"], {
                  guildName: N.name
                })}</s.X6q>}</span>}</i.Fragment>}</div>}</div>}</div>}{<l.Z>{e => (0, i.jsxs)("div", {
        className: b.planNotice,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          children: f.intl.string(f.t["goe+ho"])
        }), e && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            children: f.intl.format(f.t["Q8qJ+/"], {})
          }), (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            children: f.intl.format(f.t.sqowY2, {})
          })]
        }), (0, i.jsx)(l.Z.Toggle, {
          text: e ? f.intl.string(f.t["1Rkq/P"]) : f.intl.string(f.t.WsTHkZ)
        })]
      })}</l.Z>}{<div className={b.subscriptions}>{<o.Z storeListing={h} className={b.activeSubscriptionCard} cta={(0, i.jsxs)("div", {
          className: b.activeSubscriptionCTA,
          children: [(0, i.jsx)(s.Text, {
            variant: "eyebrow",
            color: "text-brand",
            children: f.intl.string(f.t.fHIpOT)
          }), null != y && (0, i.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: f.intl.format(f.t["OQk+jo"], {
              endDate: A
            })
          })]
        })} />}{x.map(e => e.skuId === C ? <o.Z storeListing={e} cta={(0, i.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: f.intl.format(f.t.nn88hI, {
            startDate: A
          })
        })} /> : <_ storeListing={e} guildId={I} navigateToHome={j} />)}</div>}</div>
}

function _(e) {
  let {
    storeListing: t,
    guildId: n,
    navigateToHome: r
  } = e, {
    openModal: a
  } = (0, p.Z)({
    analyticsLocation: h.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
    skuId: t.skuId,
    initialSubscribeForGuild: n,
    disableGuildSelector: true,
    onComplete: r
  });
  return <o.Z storeListing={t} cta={(0, i.jsx)(s.zxk, {
      variant: "primary",
      size: "sm",
      text: f.intl.string(f.t["+KwmBg"]),
      onClick: a
    })} />
}