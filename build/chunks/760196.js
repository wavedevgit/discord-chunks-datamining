/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m,
  c: () => g
}), n(653041);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(998698),
  s = n(713583),
  l = n(931981),
  c = n(898188),
  u = n(328908),
  d = n(832820),
  f = n(841284),
  _ = n(541716),
  p = n(407661),
  h = n(25675);

function g(e) {
  let {
    channel: t,
    type: n,
    activeCommand: g,
    pendingReply: m,
    pendingScheduledMessage: E
  } = e, {
    activeCommandOption: v,
    activeCommandOptionStates: b
  } = (0, o.cj)([a.Z], () => ({
    activeCommandOption: a.Z.getActiveOption(t.id),
    activeCommandOptionStates: a.Z.getOptionStates(t.id)
  })), y = (0, l.e)(t), O = (0, u.LN)(t.id);
  return i.useMemo(() => {
    let e = [],
      i = [];
    return null != t.guild_id && n === _.Ie.NORMAL && i.push((0, r.jsx)(c.Z, {
      guildId: t.guild_id,
      channel: t,
      className: h.newMemberActionBar
    })), null != g && e.push((0, r.jsx)(s.Z, {
      activeCommand: g,
      activeOption: null != v ? v : null,
      optionStates: b,
      channelId: t.id
    })), null != m && e.push((0, r.jsx)(p.Z, {
      reply: m,
      chatInputType: n
    })), y && e.push((0, r.jsx)(l.V, {})), O && e.push((0, r.jsx)(d.Z, {
      channel: t
    })), null != E && e.push((0, r.jsx)(f.y, {
      pendingScheduledMessage: E
    })), {
      stacked: e,
      floating: i
    }
  }, [g, v, b, t, m, y, n, O, E])
}

function m(e) {
  let {
    bars: t
  } = e, n = t.stacked.map((e, t) => (0, r.jsx)("div", {
    children: e
  }, t)), o = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, {
    children: e
  }, t));
  return 0 === n.length && 0 === o.length ? null : (0, r.jsxs)(i.Fragment, {
    children: [o.length > 0 && (0, r.jsx)("div", {
      className: h.floatingBars,
      children: o
    }), n.length > 0 && (0, r.jsx)("div", {
      className: h.stackedBars,
      children: n
    })]
  })
}