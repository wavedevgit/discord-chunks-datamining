/** Chunk was on 22988 **/
/** chunk id: 353890, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk977258 = require("./977258.js"),
  Chunk637853 = require("./637853.js"),
  Chunk816436 = require("./816436.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk889369 = require("./889369.js"),
  Chunk838324 = require("./838324.js"),
  Chunk388032 = require("./388032.js"),
  Chunk281310 = require("./281310.js");

function b(e) {
  let {
    guild: t,
    scrollToQuestions: n
  } = e, i = (0, a.e7)([g.Z], () => g.Z.editedDefaultChannelIds), l = (0, u.b)(t.id, i).filter(e => e.isCategory() || (0, c.s)(e.guild_id, e.id));
  return <div className={f.container}>{<div className={f.header}><p.Z guildId={t.id} scrollToQuestions={n} /></div>}{<div className={f.channelList}>{<v />}{0 === l.length && <x />}{<j channels={l} />}</div>}</div>
}

function x() {
  return <div className={Chunk281310.emptyState}>{<div className={Chunk281310.emptyStateIcon}><Chunk481060.VL1 size={"md"} color={"currentColor"} /></div>}{<Chunk481060.Text className={Chunk281310.channelName} variant={"text-md/normal"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t["Qj6O9/"])}</Chunk481060.Text>}</div>
}

function j(e) {
  let {
    channels: t
  } = e;
  return <r.Fragment>{t.map(e => e.isCategory() ? (0, r.jsx)(_, {
      label: e.name
    }, e.id) : (0, r.jsx)(O, {
      channel: e
    }, e.id))}</r.Fragment>
}

function v() {
  return <div className={Chunk281310.divider} />
}

function _(e) {
  let {
    label: t
  } = e;
  return <div className={f.category}>{<m.Z className={f.caret} width={12} height={12} direction={m.Z.Directions.DOWN} />}{<s.Text variant={"text-xs/semibold"} color={"text-muted"} lineClamp={1}>{t}</s.Text>}</div>
}

function O(e) {
  var t;
  let {
    channel: n
  } = e, i = (0, d.iF)(n), a = null != (t = (0, o.KS)(n)) ? t : s.VL1;
  return <div className={f.channel}>{<a className={f.channelIcon} size={"xs"} color={"currentColor"} />}{<s.Text className={f.channelName} variant={"text-md/normal"} color={"text-muted"} lineClamp={1}>{n.name}</s.Text>}{<div className={l()({
        [f.chattableIndicator]: i
      })} />}</div>
}