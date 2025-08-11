/** Chunk was on 9558 **/
/** chunk id: 862239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk937615 = require("./937615.js"),
  Chunk549631 = require("./549631.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk344748 = require("./344748.js");

function x(e) {
  let {
    listing: t
  } = e, {
    name: n,
    image: i,
    description: c
  } = t, d = (0, s.T4)(t.price_tier, o.pKx.USD);
  return <div>{<div className={m.listingInfoRow}>{<img src={i} alt={""} className={m.avatar} />}{<div>{<l.X6q variant={"heading-md/medium"} className={m.tierName}>{n}</l.X6q>}{<l.Text variant={"text-md/medium"} tag={"span"}>{d}</l.Text>}{<l.Text variant={"text-xxs/medium"} tag={"span"}>{"/mo."}</l.Text>}</div>}</div>}{<div className={m.listingRoleRow}>{<div style={{
          backgroundColor: (0, r.Rf)(t.role_color)
        }} className={m.roleColor} />}{<img src={i} alt={""} className={m.roleIcon} />}{<l.Text variant={"text-xs/medium"}>{n}</l.Text>}</div>}{<l.Text variant={"text-xs/normal"} className={m.tierDescription}>{c}</l.Text>}</div>
}

function u(e) {
  let {
    channel: t
  } = e, n = function(e) {
    switch (e) {
      case o.d4z.GUILD_TEXT:
        return l.W4G;
      case o.d4z.GUILD_VOICE:
        return l.gjC;
      case o.d4z.GUILD_STAGE_VOICE:
        return l.pki;
      case o.d4z.GUILD_FORUM:
        return l.BUe;
      case o.d4z.GUILD_MEDIA:
        return l.D7T;
      case o.d4z.GUILD_ANNOUNCEMENT:
        return l.Fv2;
      default:
        return null
    }
  }(t.type);
  return <div className={m.channelBenefitRow}>{null != n && <n className={m.channelBenefitIcon} color={"currentColor"} />}{<div className={m.channelBenefitText}>{<l.Text variant={"text-sm/normal"}>{t.name}</l.Text>}{<l.Text variant={"text-xs/normal"} className={m.channelBenefitTagline}>{t.tagline}</l.Text>}</div>}{<c.Z className={m.__invalid_emojiIcon} color={i.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON} />}</div>
}

function p(e) {
  let {
    benefit: t
  } = e;
  return true === t ? null : <div className={m.intangibleBenefitRow}>{<div className={m.intangibleBenefitIcon} />}{<l.Text variant={"text-sm/normal"}>{t}</l.Text>}</div>
}

function f(e) {
  let {
    listing: t
  } = e;
  return <div>{<l.X6q variant={"heading-sm/semibold"} className={m.perksHeader}>{d.intl.string(d.t.CjC5XV)}</l.X6q>}{<l.Text variant={"text-xs/semibold"} className={m.benefitTypeHeader}>{d.intl.string(d.t.rI43W1)}</l.Text>}{t.channels.map(e => <u channel={e} />)}{<l.Text variant={"text-xs/semibold"} className={m.benefitTypeHeader}>{d.intl.string(d.t.XqWRLi)}</l.Text>}{t.additional_perks.map((e, t) => <p benefit={e.name} />)}</div>
}

function _(e) {
  let {
    selectedTemplate: t,
    handleSelectTemplate: n
  } = e;
  if (true === t) return null;
  let r = t.listings[0];
  return <div className={m.container}>{<l.zJl className={m.content}>{<x listing={r} />}{<div className={m.divider} />}{<f listing={r} />}</l.zJl>}{<l.zxk variant={"primary"} text={d.intl.string(d.t["1W7mCg"])} onClick={() => {
        n(t)
      }} />}</div>
}