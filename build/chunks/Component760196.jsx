/** Chunk was on web.js **/
/** chunk id: 760196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b,
  c: () => E
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk998698 = require("./998698.js"),
  Chunk713583 = require("./713583.jsx"),
  Chunk694202 = require("./694202.jsx"),
  Chunk931981 = require("./931981.jsx"),
  Chunk183889 = require("./183889.jsx"),
  Chunk898188 = require("./898188.jsx"),
  Chunk328908 = require("./328908.js"),
  Chunk832820 = require("./832820.jsx"),
  Chunk841284 = require("./841284.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk407661 = require("./407661.jsx"),
  Chunk564355 = require("./564355.js");

function E(e) {
  let {
    channel: t,
    type: n,
    activeCommand: E,
    pendingReply: b,
    pendingScheduledMessage: y,
    selectedAutocompleteInputType: O
  } = e, {
    activeCommandOption: v,
    activeCommandOptionStates: I
  } = (0, a.cj)([o.Z], () => ({
    activeCommandOption: o.Z.getActiveOption(t.id),
    activeCommandOptionStates: o.Z.getOptionStates(t.id)
  })), S = (0, c.e)(t), T = (0, f.LN)(t.id);
  return i.useMemo(() => {
    let e = [],
      i = [];
    return null != t.guild_id && n === h.Ie.NORMAL && i.push((0, r.jsx)(d.Z, {
      guildId: t.guild_id,
      channel: t,
      className: g.newMemberActionBar
    })), null != E && e.push((0, r.jsx)(s.Z, {
      activeCommand: E,
      activeOption: null != v ? v : null,
      optionStates: I,
      channelId: t.id
    })), null != b && e.push((0, r.jsx)(m.Z, {
      reply: b,
      chatInputType: n
    })), S && e.push((0, r.jsx)(c.V, {})), T && e.push((0, r.jsx)(_.Z, {
      channel: t
    })), null != y && e.push((0, r.jsx)(p.y, {
      pendingScheduledMessage: y
    })), "gameMentionInput" === O && i.push((0, r.jsx)(l.i, {})), "timestampMentionInput" === O && i.push((0, r.jsx)(u.a, {})), {
      stacked: e,
      floating: i
    }
  }, [E, v, I, t, b, S, n, T, y, O])
}

function b(e) {
  let {
    bars: t
  } = e, n = t.stacked.map((e, t) => (0, r.jsx)("div", {
    children: e
  }, t)), a = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, {
    children: e
  }, t));
  return 0 === n.length && 0 === a.length ? null : (0, r.jsxs)(i.Fragment, {
    children: [a.length > 0 && (0, r.jsx)("div", {
      className: g.floatingBars,
      children: a
    }), n.length > 0 && (0, r.jsx)("div", {
      className: g.stackedBars,
      children: n
    })]
  })
}