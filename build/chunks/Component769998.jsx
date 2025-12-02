/** Chunk was on 384 **/
/** chunk id: 769998, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk556012 = require("./556012.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk464992 = require("./464992.js");

function h(e) {
  var t;
  let {
    action: n,
    triggerType: h,
    guildId: b,
    toggled: x,
    onToggleAction: j
  } = e, _ = e => () => j(e), v = (0, d.c)(n.type, n, h), O = null == (t = n.metadata) ? true : t.durationSeconds, C = null != O ? (0, m.getFriendlyDurationString)(O) : null, y = (0, i.e7)([c.Z, o.Z], () => c.Z.can(g.Plq.MODERATE_MEMBERS, o.Z.getGuild(b)), [b]);
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
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-sm/semibold",
        children: N
      }), (0, r.jsx)(s.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: E
      }), x && (0, r.jsxs)(s.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: [null === C ? null : h === u.fX.MENTION_SPAM ? p.intl.format(p.t.i3lsKD, {
          friendlyDurationString: C
        }) : p.intl.format(p.t.mvHxze, {
          friendlyDurationString: C
        }), y && (0, r.jsx)(s.P3F, {
          onClick: _(true),
          className: f.editChannel,
          tag: "span",
          role: "link",
          children: p.intl.string(p.t["0B95RJ"])
        })]
      })]
    }), (0, r.jsx)(l.u, {
      text: p.intl.format(p.t.wx6Vb9, {}),
      "aria-label": p.intl.formatToMarkdownString(p.t.wx6Vb9, {}),
      shouldShow: !y,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.$q, {
          type: a.M0.INVERTED,
          value: x,
          onChange: _(false),
          disabled: !y,
          className: f.__invalid_actionCheckbox
        })
      })
    })]
  })
}