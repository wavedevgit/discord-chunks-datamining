/** Chunk was on 47841 **/
/** chunk id: 741207, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk239705 = require("./239705.js"),
  Chunk411335 = require("./411335.js"),
  Chunk652215 = require("./652215.js"),
  Chunk200700 = require("./200700.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk86181 = require("./86181.js");

function f(e) {
  var t;
  let {
    action: n,
    triggerType: f,
    guildId: b,
    toggled: h,
    onToggleAction: x
  } = e, j = e => () => x(e), _ = (0, c.x)(n.type, n, f), O = null == (t = n.metadata) ? true : t.durationSeconds, v = null != O ? (0, g.getFriendlyDurationString)(O) : null, y = (0, i.bG)([o.A, a.A], () => o.A.can(u.xBc.MODERATE_MEMBERS, a.A.getGuild(b)), [b]);
  if (null == _) return null;
  let {
    headerText: A,
    descriptionText: E,
    icon: N
  } = _;
  return (0, r.jsxs)("div", {
    className: p.Ik,
    children: [(0, r.jsx)("div", {
      className: p.TV,
      children: (0, r.jsx)(N, {
        size: "md",
        color: "currentColor",
        className: p.gE
      })
    }), (0, r.jsxs)("div", {
      className: p.xj,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-sm/semibold",
        children: A
      }), (0, r.jsx)(s.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: E
      }), h && (0, r.jsxs)(s.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: [null === v ? null : f === d.uh.MENTION_SPAM ? m.intl.format(m.t.i3lsKD, {
          friendlyDurationString: v
        }) : m.intl.format(m.t.mvHxze, {
          friendlyDurationString: v
        }), y && (0, r.jsx)(s.DUT, {
          onClick: j(true),
          className: p._2,
          tag: "span",
          role: "link",
          children: m.intl.string(m.t["0B95RJ"])
        })]
      })]
    }), (0, r.jsx)(l.m, {
      text: m.intl.format(m.t.wx6Vb9, {}),
      "aria-label": m.intl.formatToMarkdownString(m.t.wx6Vb9, {}),
      shouldShow: !y,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.DUT, {
          onClick: y ? j(false) : true,
          children: (0, r.jsx)(s.P7L, {
            checked: h,
            disabled: !y
          })
        })
      })
    })]
  })
}