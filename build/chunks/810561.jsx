/** Chunk was on 22347 **/
/** chunk id: 810561, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk709054 = require("./709054.js"),
  Chunk7697 = require("./7697.js"),
  Chunk421032 = require("./421032.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk862173 = require("./862173.js");

function h(t) {
  let {
    guildId: e,
    recurrenceRule: n,
    guildEventId: i,
    onRecurrenceClick: h,
    hideScroller: g = false,
    activeRecurrenceId: m
  } = t, {
    recurrenceStartTimes: p,
    canViewMoreRecurrences: v,
    updateRecurrenceStartTimes: f
  } = (0, u.Z)(i, e, n), b = g ? "div" : s.Ttm;
  return <div className={d.recurrences}>{<s.X6q variant={"heading-sm/medium"} className={d.heading}>{o.intl.string(o.t["D/jjoa"])}</s.X6q>}{<b className={r()(d.scroller, {
        [d.showScroller]: !g
      })}>{p.map(t => {
        let e = a.default.fromTimestamp(t.getTime());
        return <c.Z recurrenceId={e} originalScheduledStartTime={t} guildEventId={i} onClick={h} isActive={e === m} />
      })}{v && <div className={d.buttonContainer}><s.Avr onClick={t => {
            t.stopPropagation(), f()
          }} text={o.intl.string(o.t["8O7Hp6"])} size={"sm"} /></div>}</b>}</div>
}