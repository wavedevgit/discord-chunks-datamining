/** Chunk was on web.js **/
/** chunk id: 760196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E,
  c: () => g
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk998698 = require("./998698.js"),
  Chunk713583 = require("./713583.jsx"),
  Chunk694202 = require("./694202.jsx"),
  Chunk931981 = require("./931981.jsx"),
  Chunk898188 = require("./898188.jsx"),
  Chunk328908 = require("./328908.js"),
  Chunk832820 = require("./832820.jsx"),
  Chunk841284 = require("./841284.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk407661 = require("./407661.jsx"),
  Chunk564355 = require("./564355.js");

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
  } = (0, a.cj)([o.Z], () => ({
    activeCommandOption: o.Z.getActiveOption(t.id),
    activeCommandOptionStates: o.Z.getOptionStates(t.id)
  })), I = (0, c.e)(t), S = (0, d.LN)(t.id);
  return i.useMemo(() => {
    let e = [],
      i = [];
    return null != t.guild_id && n === p.Ie.NORMAL && i.push((0, r.jsx)(u.Z, {
      guildId: t.guild_id,
      channel: t,
      className: m.newMemberActionBar
    })), null != g && e.push((0, r.jsx)(s.Z, {
      activeCommand: g,
      activeOption: null != O ? O : null,
      optionStates: v,
      channelId: t.id
    })), null != E && e.push((0, r.jsx)(h.Z, {
      reply: E,
      chatInputType: n
    })), I && e.push((0, r.jsx)(c.V, {})), S && e.push((0, r.jsx)(f.Z, {
      channel: t
    })), null != b && e.push((0, r.jsx)(_.y, {
      pendingScheduledMessage: b
    })), "gameMentionInput" === y && i.push((0, r.jsx)(l.i, {})), {
      stacked: e,
      floating: i
    }
  }, [g, O, v, t, E, I, n, S, b, y])
}

function E(e) {
  let {
    bars: t
  } = e, n = t.stacked.map((e, t) => (0, r.jsx)("div", {
    children: e
  }, t)), a = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, {
    children: e
  }, t));
  return 0 === n.length && 0 === a.length ? null : (0, r.jsxs)(i.Fragment, {
    children: [a.length > 0 && (0, r.jsx)("div", {
      className: m.floatingBars,
      children: a
    }), n.length > 0 && (0, r.jsx)("div", {
      className: m.stackedBars,
      children: n
    })]
  })
}