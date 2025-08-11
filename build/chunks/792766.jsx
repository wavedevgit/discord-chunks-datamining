/** Chunk was on web.js **/
/** chunk id: 792766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b,
  y: () => E
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk411198 = require("./411198.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk515230 = require("./515230.js");
let h = 24,
  m = 16,
  g = e => {
    var t;
    let {
      speaker: n,
      guildId: i,
      isEmbed: o
    } = e, a = new d.Z(n.user);
    return <div className={p.speaker}>{<l.qEK src={a.getAvatarURL(i, o ? 16 : 24)} size={o ? l.EFr.SIZE_16 : l.EFr.SIZE_24} aria-label={"".concat(n.nick, "-avatar")} className={o ? null : p.avatar} />}{<l.Text variant={o ? "text-xs/normal" : "text-sm/normal"} color={"text-secondary"} className={p.username}>{null != (t = n.nick) ? t : a.username}</l.Text>}</div>
  },
  E = e => {
    let {
      guild: t,
      onlineCount: n
    } = e;
    if (null == t) return null;
    let i = f.Qs(t),
      {
        name: o,
        description: a
      } = i;
    return <div>{<l.X6q variant={"heading-md/normal"} color={"header-muted"} className={p.alignStart}>{_.intl.string(_.t.Eabu19)}</l.X6q>}{<div className={p.guild}>{<c.ZP mask={c.ZP.Masks.SQUIRCLE} width={40} height={40}><u.Z guild={i} size={u.Z.Sizes.MEDIUM} active={true} /></c.ZP>}{<div className={p.guildInfo}>{<l.X6q variant={"heading-sm/semibold"}>{o}</l.X6q>}{<div className={p.speaker}>{<div className={p.dot} />}{null != n && n > 0 ? <l.Text variant={"text-sm/normal"}>{_.intl.format(_.t["LC+S+v"], {
                membersOnline: n
              })}</l.Text> : null}</div>}</div>}</div>}{null != a && "" !== a && <l.Text color={"header-secondary"} className={p.alignStart} variant={"text-sm/normal"}>{a}</l.Text>}</div>
  },
  b = e => {
    var t;
    let {
      stageInstance: n,
      guild: o,
      isCard: d = false,
      isEmbed: E = false,
      onClick: b
    } = e, y = i.useMemo(() => null == o ? null : f.lM(o) ? o : f.Qs(o), [o]);
    if (null == n || null == y) return null;
    let {
      topic: O,
      speaker_count: v,
      participant_count: I
    } = n, T = null != (t = n.members) ? t : [], S = E ? T.slice(0, 3) : T, A = v - S.length;
    return E && (A += T.length - S.length), <div>{<div className={p.flex}>{<div className={p.flex}>{<l.ewx size={"custom"} color={"currentColor"} height={h} width={h} className={p.live} />}{<l.X6q variant={"eyebrow"} className={a()(p.__invalid_label, p.live)}>{_.intl.string(_.t["X2K3//"])}</l.X6q>}</div>}{<div className={p.background}>{<l.VWR size={"custom"} color={"currentColor"} height={m} width={m} className={p.listeners} />}{<l.X6q className={a()(p.__invalid_label, p.listeners)} variant={"heading-sm/semibold"}>{I}</l.X6q>}</div>}</div>}{E && <div className={a()(p.guild, {
          [p.embed]: E
        })}>{<c.ZP mask={c.ZP.Masks.SQUIRCLE} width={20} height={20}><u.Z guild={y} size={u.Z.Sizes.MINI} active={true} /></c.ZP>}{<l.Text color={"header-secondary"} className={p.__invalid_label} variant={"text-sm/normal"}>{y.name}</l.Text>}</div>}{<l.X6q variant={d || E ? "heading-md/semibold" : "heading-lg/semibold"} className={a()(p.header, {
          [p.embed]: E
        })}>{O}</l.X6q>}{<div className={a()(p.members, {
          [p.embed]: E
        })}>{S.length > 0 && <div className={p.speakers}>{S.map(e => <g speaker={e} guildId={y.id} isEmbed={E} />)}{A > 0 ? <div className={p.speaker}>{<div className={a()(p.icon, {
                [p.embed]: E
              })}><l.S6n size={"custom"} color={"currentColor"} height={E ? 12 : 14} className={p.listeners} /></div>}{<l.Text variant={E ? "text-xs/normal" : "text-sm/normal"} color={"text-secondary"}>{"+"}{_.intl.format(_.t.L1pCBQ, {
                count: A
              })}</l.Text>}</div> : null}</div>}{E && <s.zx color={s.zx.Colors.GREEN} onClick={b} className={p.joinButton}>{_.intl.string(_.t.ZYO5OD)}</s.zx>}</div>}</div>
  }