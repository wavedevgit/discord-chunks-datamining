/** Chunk was on 34779 **/
/** chunk id: 791914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk399606 = require("./399606.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk494404 = require("./494404.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk317632 = require("./317632.js"),
  Chunk602478 = require("./602478.js"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js"),
  Chunk216789 = require("./216789.js"),
  Chunk818186 = require("./818186.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk413813 = require("./413813.js");

function b(e) {
  let {
    tab: t,
    setTab: n,
    children: b,
    badgeState: O,
    closePopout: _
  } = e, {
    enabled: y,
    inInbox: C
  } = d.Z.useExperiment({
    location: "RecentsPopout"
  }), v = (0, p.Us)({
    location: "RecentsHeader"
  }), {
    enabled: j
  } = u.Z.useExperiment({
    location: "RecentsHeader"
  }), E = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()), S = (0, i.e7)([h.Z], () => h.Z.getOverdueMessageReminderCount());
  return <s.h4 className={m.header}>{<div className={m.headerTitle}>{<o.xx7 size={"md"} color={"currentColor"} className={m.inboxIcon} />}{<o.X6q className={m.inboxTitle} variant={"text-lg/semibold"} color={"interactive-active"}>{g.intl.string(g.t.GSmTKC)}</o.X6q>}{<o.kL8 className={m.controls} onClick={e => e.stopPropagation()} focusProps={{
          enabled: false
        }} aria-label={g.intl.string(g.t["8k+6QU"])}>{b}{<f.Z closePopout={_} />}</o.kL8>}</div>}{<div className={m.headerTabs}><o.njP selectedItem={t} type={"top"} look={"brand"} onItemSelect={n} className={m.tabBar}>{<o.njP.Item id={l.X.FOR_YOU} aria-label={g.intl.string(g.t["En+D+v"])} className={m.tab}>{g.intl.string(g.t["En+D+v"])}{(null == O ? true : O.badgeForYou) ? <o.fWl color={a.Z.STATUS_DANGER} className={m.iconBadge} /> : null}</o.njP.Item>}{<o.njP.Item id={l.X.UNREADS} className={m.tab}>{g.intl.string(g.t.sRUdBw)}</o.njP.Item>}{<o.njP.Item aria-label={g.intl.string(g.t["GRZF9/"])} id={l.X.MENTIONS} className={m.tab}>{g.intl.string(g.t["GRZF9/"])}</o.njP.Item>}{j ? <o.njP.Item aria-label={"game_invites"} id={l.X.GAME_INVITES} className={m.tab}>{g.intl.string(g.t.apq3cX)}{E > 0 ? <o.fWl color={a.Z.STATUS_DANGER} className={m.iconBadge} /> : null}</o.njP.Item> : null}{y && C ? <o.njP.Item aria-label={g.intl.string(g.t["2pAkDA"])} id={l.X.BOOKMARKS} className={m.tab}>{0 === S ? g.intl.string(g.t["2pAkDA"]) : g.intl.formatToPlainString(g.t.I4fryM, {
            count: S
          })}</o.njP.Item> : null}{v ? <o.njP.Item aria-label={"scheduled"} id={l.X.SCHEDULED} className={m.tab}>{g.intl.string(g.t.Fn6Odn)}</o.njP.Item> : null}</o.njP></div>}</s.h4>
}