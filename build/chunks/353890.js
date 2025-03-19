/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  l = n(481060),
  o = n(471445),
  c = n(977258),
  A = n(637853),
  d = n(816436),
  u = n(259580),
  g = n(889369),
  f = n(838324),
  m = n(388032),
  p = n(570856);

function h(e) {
  let {
    guild: t,
    scrollToQuestions: n
  } = e, i = (0, a.e7)([g.Z], () => g.Z.editedDefaultChannelIds), s = (0, d.b)(t.id, i).filter(e => e.isCategory() || (0, c.s)(e.guild_id, e.id));
  return (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)("div", {
      className: p.header,
      children: (0, r.jsx)(f.Z, {
        guildId: t.id,
        scrollToQuestions: n
      })
    }), (0, r.jsxs)("div", {
      className: p.channelList,
      children: [(0, r.jsx)(v, {}), 0 === s.length && (0, r.jsx)(C, {}), (0, r.jsx)(b, {
        channels: s
      })]
    })]
  })
}

function C() {
  return (0, r.jsxs)("div", {
    className: p.emptyState,
    children: [(0, r.jsx)("div", {
      className: p.emptyStateIcon,
      children: (0, r.jsx)(l.VL1, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsx)(l.Text, {
      className: p.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      children: m.NW.string(m.t["Qj6O9/"])
    })]
  })
}

function b(e) {
  let {
    channels: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map(e => e.isCategory() ? (0, r.jsx)(x, {
      label: e.name
    }, e.id) : (0, r.jsx)(N, {
      channel: e
    }, e.id))
  })
}

function v() {
  return (0, r.jsx)("div", {
    className: p.divider
  })
}

function x(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: p.category,
    children: [(0, r.jsx)(u.Z, {
      className: p.caret,
      width: 12,
      height: 12,
      direction: u.Z.Directions.DOWN
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      lineClamp: 1,
      children: t
    })]
  })
}

function N(e) {
  var t;
  let {
    channel: n
  } = e, i = (0, A.iF)(n), a = null !== (t = (0, o.KS)(n)) && void 0 !== t ? t : l.VL1;
  return (0, r.jsxs)("div", {
    className: p.channel,
    children: [(0, r.jsx)(a, {
      className: p.channelIcon,
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(l.Text, {
      className: p.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      lineClamp: 1,
      children: n.name
    }), (0, r.jsx)("div", {
      className: s()({
        [p.chattableIndicator]: i
      })
    })]
  })
}