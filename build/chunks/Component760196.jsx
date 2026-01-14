/** Chunk was on web.js **/
/** chunk id: 760196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  c: () => h
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk998698 = require("./998698.js"),
  Chunk713583 = require("./713583.jsx"),
  Chunk694202 = require("./694202.jsx"),
  Chunk931981 = require("./931981.jsx"),
  Chunk183889 = require("./183889.jsx"),
  Chunk898188 = require("./898188.jsx"),
  Chunk841284 = require("./841284.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk407661 = require("./407661.jsx"),
  Chunk72775 = require("./72775.js");

function h(e) {
  let {
    channel: t,
    type: n,
    activeCommand: h,
    pendingReply: g,
    pendingScheduledMessage: E,
    selectedAutocompleteInputType: b,
    selectedAutocompleteInputError: y
  } = e, {
    activeCommandOption: O,
    activeCommandOptionStates: v
  } = (0, a.cj)([o.Z], () => ({
    activeCommandOption: o.Z.getActiveOption(t.id),
    activeCommandOptionStates: o.Z.getOptionStates(t.id)
  })), S = (0, c.e)(t);
  return i.useMemo(() => {
    let e = [],
      i = [];
    return null != t.guild_id && n === p.Ie.NORMAL && i.push((0, r.jsx)(d.Z, {
      guildId: t.guild_id,
      channel: t,
      className: m.newMemberActionBar
    })), null != h && e.push((0, r.jsx)(s.Z, {
      activeCommand: h,
      activeOption: null != O ? O : null,
      optionStates: v,
      channelId: t.id
    })), null != g && e.push((0, r.jsx)(_.Z, {
      reply: g,
      chatInputType: n
    })), S && e.push((0, r.jsx)(c.V, {})), null != E && e.push((0, r.jsx)(f.y, {
      pendingScheduledMessage: E
    })), "gameMentionInput" === b && i.push((0, r.jsx)(l.i, {})), "timestampMentionInput" === b && i.push((0, r.jsx)(u.a, {
      error: null != y && y
    })), {
      stacked: e,
      floating: i
    }
  }, [h, O, v, t, g, S, n, E, b, y])
}

function g(e) {
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