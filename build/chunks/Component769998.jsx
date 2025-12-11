/** Chunk was on 9536 **/
/** chunk id: 769998, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk556012 = require("./556012.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239244 = require("./239244.js");

function p(e) {
  var t;
  let {
    action: n,
    triggerType: p,
    guildId: b,
    toggled: h,
    onToggleAction: x
  } = e, j = e => () => x(e), v = (0, c.c)(n.type, n, p), O = null == (t = n.metadata) ? true : t.durationSeconds, C = null != O ? (0, g.getFriendlyDurationString)(O) : null, y = (0, i.e7)([o.Z, s.Z], () => o.Z.can(u.Plq.MODERATE_MEMBERS, s.Z.getGuild(b)), [b]);
  if (null == v) return null;
  let {
    headerText: N,
    descriptionText: E,
    icon: I
  } = v;
  return (0, r.jsxs)("div", {
    className: f.actionContainer,
    children: [(0, r.jsx)("div", {
      className: f.actionIconContainer,
      children: (0, r.jsx)(I, {
        size: "md",
        color: "currentColor",
        className: f.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: f.actionTextContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-sm/semibold",
        children: N
      }), (0, r.jsx)(a.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: E
      }), h && (0, r.jsxs)(a.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: [null === C ? null : p === d.fX.MENTION_SPAM ? m.intl.format(m.t.i3lsKD, {
          friendlyDurationString: C
        }) : m.intl.format(m.t.mvHxze, {
          friendlyDurationString: C
        }), y && (0, r.jsx)(a.P3F, {
          onClick: j(true),
          className: f.editChannel,
          tag: "span",
          role: "link",
          children: m.intl.string(m.t["0B95RJ"])
        })]
      })]
    }), (0, r.jsx)(l.u, {
      text: m.intl.format(m.t.wx6Vb9, {}),
      "aria-label": m.intl.formatToMarkdownString(m.t.wx6Vb9, {}),
      shouldShow: !y,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.P3F, {
          onClick: y ? j(false) : true,
          children: (0, r.jsx)(a.FZ5, {
            checked: h,
            disabled: !y
          })
        })
      })
    })]
  })
}