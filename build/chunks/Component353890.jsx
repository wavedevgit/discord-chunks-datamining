/** Chunk was on 60611 **/
/** chunk id: 353890, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk518676 = require("./518676.js");

function x(e) {
  let {
    guild: t,
    scrollToQuestions: n
  } = e, i = (0, s.e7)([g.Z], () => g.Z.editedDefaultChannelIds), l = (0, u.b)(t.id, i).filter(e => e.isCategory() || (0, c.s)(e.guild_id, e.id));
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)("div", {
      className: h.header,
      children: (0, r.jsx)(p.Z, {
        guildId: t.id,
        scrollToQuestions: n
      })
    }), (0, r.jsxs)("div", {
      className: h.channelList,
      children: [(0, r.jsx)(v, {}), 0 === l.length && (0, r.jsx)(b, {}), (0, r.jsx)(j, {
        channels: l
      })]
    })]
  })
}

function b() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk518676.emptyState,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk518676.emptyStateIcon,
      children: (0, Chunk951288.jsx)(Chunk481060.VL1, {
        size: "md",
        color: "currentColor"
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk518676.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t["Qj6O9/"])
    })]
  })
}

function j(e) {
  let {
    channels: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map(e => e.isCategory() ? (0, r.jsx)(_, {
      label: e.name
    }, e.id) : (0, r.jsx)(O, {
      channel: e
    }, e.id))
  })
}

function v() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk518676.divider
  })
}

function _(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: h.category,
    children: [(0, r.jsx)(m.Z, {
      className: h.caret,
      width: 12,
      height: 12,
      direction: m.Z.Directions.DOWN
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      lineClamp: 1,
      children: t
    })]
  })
}

function O(e) {
  var t;
  let {
    channel: n
  } = e, i = (0, d.iF)(n), s = null != (t = (0, o.KS)(n)) ? t : a.VL1;
  return (0, r.jsxs)("div", {
    className: h.channel,
    children: [(0, r.jsx)(s, {
      className: h.channelIcon,
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      className: h.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      lineClamp: 1,
      children: n.name
    }), (0, r.jsx)("div", {
      className: l()({
        [h.chattableIndicator]: i
      })
    })]
  })
}