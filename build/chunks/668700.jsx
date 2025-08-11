/** Chunk was on web.js **/
/** chunk id: 668700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => v,
  Z: () => I
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk933557 = require("./933557.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk318374 = require("./318374.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk769654 = require("./769654.js"),
  Chunk496675 = require("./496675.js"),
  Chunk323038 = require("./323038.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk788858 = require("./788858.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk227832 = require("./227832.js");
let v = 3;

function I(e) {
  let {
    user: t,
    guild: n,
    channel: I,
    onAction: T,
    onClose: S
  } = e, {
    themeType: A
  } = (0, m.z)(), N = (0, p.Z)(I), C = (0, s.ZP)(I), {
    canViewChannel: R,
    canConnect: P
  } = (0, i.cj)([_.Z], () => ({
    canViewChannel: _.Z.can(b.Plq.VIEW_CHANNEL, I),
    canConnect: I.isPrivate() || _.Z.can(b.Plq.CONNECT, I)
  }));
  if (!R) return null;
  let w = () => {
      let e = e => {
        e.stopPropagation(), (0, f.X)(n.id), null == T || T({
          action: "OPEN_VOICE_GUILD"
        }), null == S || S()
      };
      return <o.DY3 text={n.name} aria-label={false}><u.Z guild={n} size={u.Z.Sizes.SMOL} className={O.guildIcon} onClick={e} /></o.DY3>
    },
    D = () => {
      if (!P) return <o.Text variant={"text-xs/normal"} color={"text-secondary"} lineClamp={1}><l.Z>{C}</l.Z></o.Text>;
      let e = e => {
        e.stopPropagation(), a.default.selectVoiceChannel(I.id), (0, d.Kh)(I.id), null == T || T({
          action: "OPEN_VOICE_CHANNEL"
        }), null == S || S()
      };
      return <o.P3F onClick={e} className={O.clickableText}><o.Text variant={"text-xs/normal"} color={"text-secondary"} lineClamp={1}><l.Z>{C}</l.Z></o.Text></o.P3F>
    },
    L = A !== E.lY.MODAL && A !== E.lY.MODAL_V2 && A !== E.lY.SIDEBAR;
  return <r.Fragment>{<h.Z className={O.voiceChannelDivider} />}{<div className={O.voiceChannel}>{w()}{<o.Fbu size={"xxs"} color={o.TVs.colors.TEXT_SECONDARY} />}{<div className={O.voiceChannelText}>{<g.Z channel={I} size={"xxs"} color={o.TVs.colors.TEXT_SECONDARY} className={O.voiceIcon} />}{D()}</div>}{<c.Z users={N} guildId={n.id} channelId={I.id} maxUsers={v} size={o.EFr.SIZE_16} overflowCountColor={"text-secondary"} overflowCountClassName={O.voiceChannelOverflowCount} onClickOverflow={e => {
          e.stopPropagation(), null == T || T({
            action: "PRESS_VOICE_CHANNEL_AVATARS"
          })
        }} onUserClick={e => e.stopPropagation()} disableUserPopout={!!L || (e => e === t.id)} aria-label={y.intl.string(y.t.jNqDh4)} />}</div>}</r.Fragment>
}