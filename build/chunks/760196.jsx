/** Chunk was on web.js **/
/** chunk id: 760196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E,
  c: () => g
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk998698 = require("./998698.js"),
  Chunk713583 = require("./713583.jsx"),
  Chunk694202 = require("./694202.jsx"),
  Chunk931981 = require("./931981.js"),
  Chunk898188 = require("./898188.js"),
  Chunk328908 = require("./328908.js"),
  Chunk832820 = require("./832820.js"),
  Chunk841284 = require("./841284.js"),
  Chunk541716 = require("./541716.js"),
  Chunk407661 = require("./407661.jsx"),
  Chunk302195 = require("./302195.js");

function g(e) {
  let {
    channel: t,
    type: n,
    activeCommand: g,
    pendingReply: E,
    pendingScheduledMessage: b,
    selectedAutocompleteInputType: y
  } = e, {
    activeCommandOption: O,
    activeCommandOptionStates: v
  } = (0, o.cj)([a.Z], () => ({
    activeCommandOption: a.Z.getActiveOption(t.id),
    activeCommandOptionStates: a.Z.getOptionStates(t.id)
  })), I = (0, c.e)(t), T = (0, d.LN)(t.id);
  return i.useMemo(() => {
    let e = [],
      i = [];
    return null != t.guild_id && n === p.Ie.NORMAL && i.push(<u.Z guildId={t.guild_id} channel={t} className={m.newMemberActionBar} />), null != g && e.push(<s.Z activeCommand={g} activeOption={null != O ? O : null} optionStates={v} channelId={t.id} />), null != E && e.push(<h.Z reply={E} chatInputType={n} />), I && e.push(<c.V />), T && e.push(<f.Z channel={t} />), null != b && e.push(<_.y pendingScheduledMessage={b} />), "gameMentionInput" === y && i.push(<l.i />), {
      stacked: e,
      floating: i
    }
  }, [g, O, v, t, E, I, n, T, b, y])
}

function E(e) {
  let {
    bars: t
  } = e, n = t.stacked.map((e, t) => <div>{e}</div>), o = t.floating.map((e, t) => <i.Fragment>{e}</i.Fragment>);
  return 0 === n.length && 0 === o.length ? null : <i.Fragment>{o.length > 0 && <div className={m.floatingBars}>{o}</div>}{n.length > 0 && <div className={m.stackedBars}>{n}</div>}</i.Fragment>
}