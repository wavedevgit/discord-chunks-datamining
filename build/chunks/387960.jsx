/** Chunk was on 22988 **/
/** chunk id: 387960, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk734893 = require("./734893.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk700785 = require("./700785.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk824990 = require("./824990.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk773100 = require("./773100.js");
let x = [],
  j = function(e) {
    let {
      guildId: t
    } = e, n = (0, a.e7)([d.Z], () => d.Z.getGuild(t)), j = (0, a.Wu)([g.Z], () => {
      var e, t;
      return null != (t = null == (e = g.Z.getSettings().resourceChannels) ? true : e.map(e => e.channelId)) ? t : x
    }), v = (0, a.Wu)([g.Z], () => g.Z.getDismissedSuggestedChannelIds(t)), _ = (0, a.e7)([c.ZP], () => c.ZP.getSelectableChannels(t)), O = i.useMemo(() => (0, l.chain)(_).filter(e => e.channel.type === h.d4z.GUILD_TEXT && e.channel.id !== (null == n ? true : n.rulesChannelId) && !v.includes(e.channel.id) && !j.includes(e.channel.id) && u.Uu(h.Plq.VIEW_CHANNEL, e.channel) && !u.Uu(h.Plq.SEND_MESSAGES, e.channel)).take(5).value(), [_, v, null == n ? true : n.rulesChannelId, j]), y = i.useCallback(() => {
      let e = O.map(e => e.channel.id);
      (0, m.q6)(t, e)
    }, [t, O]);
    return O.length <= 0 || j.length >= o.x3 ? null : <r.Fragment>{<div className={b.suggestedChannelsSection}>{<s.Text variant={"text-md/semibold"}>{f.intl.string(f.t.WThgAQ)}</s.Text>}{<div className={b.suggestedChannelsHeader}>{<s.Text variant={"text-xs/medium"} color={"text-muted"}>{f.intl.string(f.t.YtNI8P)}</s.Text>}{<s.P3F className={b.suggestedChannelsDismiss} onClick={y}>{<s.dz2 size={"md"} color={"currentColor"} className={b.suggestedChannelsDismissCheck} />}{<s.Text variant={"text-xs/semibold"} color={"text-brand"}>{f.intl.string(f.t.aLqZTk)}</s.Text>}</s.P3F>}</div>}{<div className={b.suggestedChannels}>{O.map((e, t) => (0, r.jsx)(p.Z, {
            channel: e.channel,
            end: t < O.length - 1
          }, e.channel.id))}</div>}</div>}{<div className={b.sectionSeparator} />}</r.Fragment>
  }