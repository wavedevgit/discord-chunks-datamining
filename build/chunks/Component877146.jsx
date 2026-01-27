/** Chunk was on web.js **/
/** chunk id: 877146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  Y: () => m
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk861382 = require("./861382.js"),
  Chunk408557 = require("./408557.jsx"),
  Chunk132422 = require("./132422.jsx"),
  Chunk615284 = require("./615284.jsx"),
  Chunk429196 = require("./429196.jsx"),
  Chunk575293 = require("./575293.jsx"),
  Chunk76623 = require("./76623.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk416379 = require("./416379.jsx"),
  Chunk111314 = require("./111314.js");

function m(e) {
  let {
    channel: t,
    type: n,
    activeCommand: m,
    pendingReply: g,
    pendingScheduledMessage: E,
    selectedAutocompleteInputType: y,
    selectedAutocompleteInputError: b
  } = e, {
    activeCommandOption: O,
    activeCommandOptionStates: v
  } = (0, a.cf)([o.A], () => ({
    activeCommandOption: o.A.getActiveOption(t.id),
    activeCommandOptionStates: o.A.getOptionStates(t.id)
  })), A = (0, c.x)(t);
  return i.useMemo(() => {
    let e = [],
      i = [];
    return null != t.guild_id && n === p.oU.NORMAL && i.push((0, r.jsx)(d.A, {
      guildId: t.guild_id,
      channel: t,
      className: h.UW
    })), null != m && e.push((0, r.jsx)(s.A, {
      activeCommand: m,
      activeOption: null != O ? O : null,
      optionStates: v,
      channelId: t.id
    })), null != g && e.push((0, r.jsx)(_.A, {
      reply: g,
      chatInputType: n
    })), A && e.push((0, r.jsx)(c.X, {})), null != E && e.push((0, r.jsx)(f.C, {
      pendingScheduledMessage: E
    })), "gameMentionInput" === y && i.push((0, r.jsx)(l.S, {})), "timestampMentionInput" === y && i.push((0, r.jsx)(u.S, {
      error: null != b && b
    })), {
      stacked: e,
      floating: i
    }
  }, [m, O, v, t, g, A, n, E, y, b])
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
      className: h.Vq,
      children: a
    }), n.length > 0 && (0, r.jsx)("div", {
      className: h.MD,
      children: n
    })]
  })
}