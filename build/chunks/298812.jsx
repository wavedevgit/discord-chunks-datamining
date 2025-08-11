/** Chunk was on 5863 **/
/** chunk id: 298812, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk87051 = require("./87051.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk775666 = require("./775666.js"),
  Chunk471445 = require("./471445.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk699516 = require("./699516.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk621600 = require("./621600.js"),
  Chunk423589 = require("./423589.js"),
  Chunk221259 = require("./221259.js"),
  Chunk113449 = require("./113449.js"),
  Chunk686660 = require("./686660.js"),
  Chunk958648 = require("./958648.js"),
  Chunk569658 = require("./569658.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk955549 = require("./955549.js");
let I = Chunk73800.forwardRef(function(e, t) {
  let {
    guildId: n,
    requestScrollToBottom: s
  } = e, l = (0, a.Wu)([p.Z, S.ZP], () => (0, C.OD)(S.ZP.getChannelOverrides(n), {
    ignoreMute: true,
    ignoreUnreadSetting: false,
    ignoreNotificationSetting: false
  }).map(e => p.Z.getChannel(e)).filter(f.lm));
  (0, _.Z)(l, () => s());
  let r = (0, a.e7)([v.Z], () => v.Z.getCategories(n)),
    o = l.map((e, t) => <div className={M.channelRow}>{<P channel={e} categories={r} />}{t < l.length - 1 && <div className={M.separator} />}</div>);
  return <div ref={t}>{<L.Z guildId={n} onSelected={e => {
        if (null != l.find(t => t.id === e)) return;
        let t = p.Z.getChannel(e);
        null != t && u.Z.updateChannelOverrideSettings(n, e, {
          muted: false,
          message_notifications: S.ZP.resolvedMessageNotifications(t),
          flags: (0, E.pq)(S.ZP.getChannelIdFlags(t.guild_id, t.id), S.ZP.resolveUnreadSetting(t))
        }, b.ZB.OverrideCreated)
      }} />}{o.length > 0 && <div className={M.table}>{<div className={M.row}>{<d.Text variant={"text-xs/bold"} color={"text-muted"} className={M.rowName}>{y.intl.string(y.t.uShwWl)}</d.Text>}{<d.Text variant={"text-xs/bold"} color={"text-muted"} className={M.rowOption}>{y.intl.string(y.t.hZrr6u)}</d.Text>}{<d.Text variant={"text-xs/bold"} color={"text-muted"} className={M.rowOption}>{y.intl.string(y.t.y59NJi)}</d.Text>}{<d.Text variant={"text-xs/bold"} color={"text-muted"} className={M.rowOption}>{y.intl.string(y.t["pGn/bG"])}</d.Text>}{<d.Text variant={"text-xs/bold"} color={"text-muted"} className={M.rowOption}>{y.intl.string(y.t["32yow8"])}</d.Text>}</div>}{o.length > 0 && <div className={M.channels}>{o}</div>}</div>}</div>
});

function P(e) {
  let {
    channel: t,
    categories: n
  } = e, l = (0, d.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(), u = (0, a.e7)([p.Z], () => p.Z.getChannel(null == t ? true : t.parent_id)), v = (0, O.ZA)(t), [S, f] = s.useState(false);
  if (null == t) return null;
  let b = y.intl.string(y.t.uIzfCA),
    C = (0, x.KS)(t);
  t.type === T.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? b = y.intl.formatToPlainString(y.t["2KzH8/"], {
    num: null != n[t.id] ? n[t.id].length : 0
  }) : null != u && (b = y.intl.formatToPlainString(y.t.L1zJgY, {
    categoryName: (0, g.F6)(u, N.default, j.Z)
  }));
  let E = S ? Z.s8.CUSTOM : v.preset;
  return <div><div className={r()(M.row, M.channel)}>{<div className={r()(M.rowName, M.modColor)}>{null != C ? <C size={"custom"} color={"currentColor"} height={20} width={20} className={M.icon} /> : null}{<div>{<d.Text variant={"text-md/semibold"} className={M.modColor}>{(0, g.F6)(t, N.default, j.Z)}</d.Text>}{<d.Text variant={"text-xs/medium"} className={M.modColor}>{b}</d.Text>}</div>}</div>}{<div className={M.rowOption}><div><d.XZJ color={l} shape={d.XZJ.Shapes.ROUND} type={d.XZJ.Types.INVERTED} value={E === Z.s8.ALL_MESSAGES} onChange={() => ((0, O._m)(t.guild_id, t.id, Z.s8.ALL_MESSAGES), f(false))} /></div></div>}{<div className={M.rowOption}><div><d.XZJ color={l} shape={d.XZJ.Shapes.ROUND} type={d.XZJ.Types.INVERTED} value={E === Z.s8.MENTIONS} onChange={() => ((0, O._m)(t.guild_id, t.id, Z.s8.MENTIONS), f(false))} /></div></div>}{<div className={M.rowOption}><div><d.XZJ color={l} shape={d.XZJ.Shapes.ROUND} type={d.XZJ.Types.INVERTED} value={E === Z.s8.NOTHING} onChange={() => ((0, O._m)(t.guild_id, t.id, Z.s8.NOTHING), f(false))} /></div></div>}{<div className={M.rowOption}><div><d.XZJ onClick={e => {
              (0, c.vq)(e, () => (0, i.jsx)(d.v2r, {
                navId: "ChannelNotificationCustomSettingsItems",
                "aria-label": y.intl.string(y.t.kMdneX),
                onClose: () => {},
                onSelect: () => {},
                children: (0, m.T5)(t, () => f(false))
              }))
            }} color={l} shape={d.XZJ.Shapes.ROUND} type={d.XZJ.Types.INVERTED} value={E === Z.s8.CUSTOM} onChange={() => f(true)} /></div></div>}{<h.Z onClick={() => (0, O.JK)(t.guild_id, t.id)} className={M.removeButton} />}</div></div>
}