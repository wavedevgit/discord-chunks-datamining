/** Chunk was on 384 **/
/** chunk id: 769998, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
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
  Chunk464992 = require("./464992.js");

function f(e) {
  var t;
  let {
    action: n,
    triggerType: f,
    guildId: h,
    toggled: b,
    onToggleAction: x
  } = e, j = e => () => x(e), _ = (0, c.c)(n.type, n, f), v = null == (t = n.metadata) ? true : t.durationSeconds, O = null != v ? (0, g.getFriendlyDurationString)(v) : null, C = (0, i.e7)([o.Z, s.Z], () => o.Z.can(u.Plq.MODERATE_MEMBERS, s.Z.getGuild(h)), [h]);
  if (null == _) return null;
  let {
    headerText: y,
    descriptionText: N,
    icon: E
  } = _;
  return (0, r.jsxs)("div", {
    className: p.actionContainer,
    children: [(0, r.jsx)("div", {
      className: p.actionIconContainer,
      children: (0, r.jsx)(E, {
        size: "md",
        color: "currentColor",
        className: p.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: p.actionTextContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-sm/semibold",
        children: y
      }), (0, r.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: N
      }), b && (0, r.jsxs)(a.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: [null === O ? null : f === d.fX.MENTION_SPAM ? m.intl.format(m.t.i3lsKD, {
          friendlyDurationString: O
        }) : m.intl.format(m.t.mvHxze, {
          friendlyDurationString: O
        }), C && (0, r.jsx)(a.P3F, {
          onClick: j(true),
          className: p.editChannel,
          tag: "span",
          role: "link",
          children: m.intl.string(m.t["0B95RJ"])
        })]
      })]
    }), (0, r.jsx)(l.u, {
      text: m.intl.format(m.t.wx6Vb9, {}),
      "aria-label": m.intl.formatToMarkdownString(m.t.wx6Vb9, {}),
      shouldShow: !C,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.P3F, {
          onClick: C ? j(false) : true,
          children: (0, r.jsx)(a.FZ5, {
            checked: b,
            disabled: !C
          })
        })
      })
    })]
  })
}