/** Chunk was on 27978 **/
/** chunk id: 258356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => m,
  Z: () => g
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.js"),
  Chunk372769 = require("./372769.js"),
  Chunk742593 = require("./742593.js"),
  Chunk390072 = require("./390072.js"),
  Chunk411198 = require("./411198.js"),
  Chunk230224 = require("./230224.jsx"),
  Chunk388032 = require("./388032.js"),
  Chunk807048 = require("./807048.js");

function f(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: l,
    onAcceptInvite: o,
    isSubmitting: s
  } = e;
  return <div className={p.guildEventCard}>{<a.ZP name={n.name} description={null != (t = n.description) ? t : true} headerVariant={"heading-md/medium"} descriptionClassName={p.__invalid_channelDescription} guildId={n.guild_id} guildEvent={n} eventPreview={n} />}{null != l && <div className={p.channelInfo}><c.Z guildScheduledEvent={n} channel={l} /></div>}{<i.zx className={p.acceptButton} color={i.zx.Colors.GREEN} onClick={o} submitting={s}>{h.intl.string(h.t.riu2R0)}</i.zx>}</div>
}

function m(e) {
  var t;
  let {
    invite: n
  } = e, i = null != n.guild ? (0, u.Qs)(n.guild) : null;
  if (null == i) return null;
  let a = null != (t = i.description) ? t : "";
  return <div className={p.guildInfoCard}>{<l.X6q className={p.presentedBy} variant={"text-sm/medium"}>{h.intl.string(h.t.Eabu19)}</l.X6q>}{<div className={p.guildContainer}>{<o.Z guild={i} active={true} size={o.Z.Sizes.MEDIUM} />}{<div className={p.guildDetailsContanier}>{<l.Text className={p.guildName} color={"header-primary"} variant={"text-sm/medium"} tag={"span"}>{i.name}{<s.Z guild={i} className={p.guildBadge} tooltipPosition={"left"} />}</l.Text>}{<d.V6 invite={n} textClassName={p.guildInfoMemberCountText} className={p.guildInfoMemberCount} />}</div>}</div>}{a.length > 0 && <details className={p.guildDescriptionContainer}><l.Text color={"header-secondary"} variant={"text-sm/normal"}>{a}</l.Text></details>}</div>
}

function g(e) {
  let {
    invite: t,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: l
  } = e, {
    guild_scheduled_event: o
  } = t;
  return null != o ? <f guildScheduledEvent={o} channel={n} isSubmitting={i} onAcceptInvite={l} /> : null
}