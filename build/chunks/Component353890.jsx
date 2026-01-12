/** Chunk was on 9536 **/
/** chunk id: 353890, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk977258 = require("./977258.js"),
  Chunk637853 = require("./637853.js"),
  Chunk816436 = require("./816436.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk889369 = require("./889369.js"),
  Chunk838324 = require("./838324.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk794558 = require("./794558.js");

function h(e) {
  let {
    guild: t,
    scrollToQuestions: n
  } = e, i = (0, a.e7)([m.Z], () => m.Z.editedDefaultChannelIds), l = (0, u.b)(t.id, i).filter(e => e.isCategory() || (0, c.s)(e.guild_id, e.id));
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
      children: [(0, r.jsx)(v, {}), 0 === l.length && (0, r.jsx)(x, {}), (0, r.jsx)(j, {
        channels: l
      })]
    })]
  })
}

function x() {
  return (0, r.jsxs)("div", {
    className: p.emptyState,
    children: [(0, r.jsx)("div", {
      className: p.emptyStateIcon,
      children: (0, r.jsx)(s.VL1, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsx)(s.Text, {
      className: p.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      children: b.intl.string(b.t.Qj6O91)
    })]
  })
}

function j(e) {
  let {
    channels: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map(e => e.isCategory() ? (0, r.jsx)(O, {
      label: e.name
    }, e.id) : (0, r.jsx)(y, {
      channel: e
    }, e.id))
  })
}

function v() {
  return (0, r.jsx)("div", {
    className: p.divider
  })
}

function O(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: p.category,
    children: [(0, r.jsx)(g.Z, {
      className: p.caret,
      width: 12,
      height: 12,
      direction: g.Z.Directions.DOWN
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      lineClamp: 1,
      children: t
    })]
  })
}

function y(e) {
  var t;
  let {
    channel: n
  } = e, i = (0, d.iF)(n), a = null != (t = (0, o.KS)(n)) ? t : s.VL1;
  return (0, r.jsxs)("div", {
    className: p.channel,
    children: [(0, r.jsx)(a, {
      className: p.channelIcon,
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(s.Text, {
      className: p.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      lineClamp: 1,
      children: n.name
    }), (0, r.jsx)("div", {
      className: l()({
        [p.chattableIndicator]: i
      })
    })]
  })
}