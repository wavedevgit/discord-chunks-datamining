/** Chunk was on 71879 **/
/** chunk id: 895932, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk481060 = require("./481060.js"),
  Chunk869382 = require("./869382.js"),
  Chunk109434 = require("./109434.js"),
  Chunk228392 = require("./228392.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk130883 = require("./130883.js"),
  Chunk987097 = require("./987097.js");

function g(e) {
  let {
    channel: t,
    closePopout: n
  } = e, {
    sortOrder: g,
    layoutType: f,
    tagSetting: x
  } = (0, c.H)(t.id), {
    showResolvedFlags: p,
    setShowResolvedFlags: b
  } = (0, o.N)(t.id), j = (0, c.v)(), v = t.isMediaChannel(), C = e => {
    (0, d.KR)({
      guildId: t.guild_id,
      channelId: t.id,
      sortOrder: e
    }), j.getState().setSortOrder(t.id, e), n()
  }, _ = e => {
    (0, d.Do)({
      guildId: t.guild_id,
      channelId: t.id,
      forumLayout: e
    }), j.getState().setLayoutType(t.id, e), n()
  }, y = e => {
    j.getState().setTagSetting(t.id, e), n()
  }, O = null != t.availableTags && t.availableTags.length > 0;
  return <div className={h.container}><s.v2r navId={"sort-and-view"} aria-label={v ? u.intl.string(u.t["kQN/bm"]) : u.intl.string(u.t.DJzbkJ)} hideScroller={true} onClose={n} onSelect={n}>{<s.kSQ label={u.intl.string(u.t.f8wNDg)}>{<s.k5B id={"sort-by-recent-activity"} group={"sort-by"} label={u.intl.string(u.t.jOPmcH)} action={() => C(l.z.LATEST_ACTIVITY)} checked={g === l.z.LATEST_ACTIVITY} />}{<s.k5B id={"sort-by-date-posted"} group={"sort-by"} label={u.intl.string(u.t.UIltXV)} action={() => C(l.z.CREATION_DATE)} checked={g === l.z.CREATION_DATE} />}</s.kSQ>}{t.isModeratorReportChannel() && <s.kSQ label={u.intl.string(m.default.PsM2b2)}><s.S89 id={"resolved-flags-none"} label={u.intl.string(u.t.XJuakJ)} action={() => b(!p)} checked={p} /></s.kSQ>}{t.isMediaChannel() || t.isModeratorReportChannel() ? null : <s.kSQ label={u.intl.string(u.t.mFMDSk)}>{<s.k5B id={"view-as-list"} group={"view-as"} label={u.intl.string(u.t["NJFr+v"])} action={() => _(i.X.LIST)} checked={f === i.X.LIST} />}{<s.k5B id={"view-as-grid"} group={"view-as"} label={u.intl.string(u.t.wKeggY)} action={() => _(i.X.GRID)} checked={f === i.X.GRID} />}</s.kSQ>}{O ? <s.kSQ label={u.intl.string(u.t.Paxaur)}>{<s.k5B id={"match-some"} group={"tag-setting"} label={u.intl.string(u.t.rQ0ctb)} action={() => y(a.z.MATCH_SOME)} checked={x === a.z.MATCH_SOME} />}{<s.k5B id={"match-all"} group={"tag-setting"} label={u.intl.string(u.t.FCXUu7)} action={() => y(a.z.MATCH_ALL)} checked={x === a.z.MATCH_ALL} />}</s.kSQ> : null}{<s.kSQ><s.sNh id={"reset-all"} className={h.clearText} label={(0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: u.intl.string(u.t["3b//lJ"])
          })} action={() => {
            C(t.getDefaultSortOrder()), _(t.getDefaultLayout()), y(t.getDefaultTagSetting())
          }} /></s.kSQ>}</s.v2r></div>
}