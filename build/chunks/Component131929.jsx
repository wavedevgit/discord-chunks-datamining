/** Chunk was on 86142 **/
/** chunk id: 131929, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g,
  s: () => p
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk557582 = require("./557582.jsx"),
  Chunk167630 = require("./167630.jsx"),
  Chunk860689 = require("./860689.js"),
  Chunk949155 = require("./949155.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk979533 = require("./979533.js");

function f(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: s,
    onAcceptInvite: l,
    isSubmitting: c
  } = e;
  return (0, r.jsxs)("div", {
    className: h.s4,
    children: [(0, r.jsx)(a.Ay, {
      name: n.name,
      description: null != (t = n.description) ? t : true,
      headerVariant: "heading-md/medium",
      descriptionClassName: h.__invalid_channelDescription,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), null != s && (0, r.jsx)("div", {
      className: h.yW,
      children: (0, r.jsx)(o.A, {
        guildScheduledEvent: n,
        channel: s
      })
    }), (0, r.jsx)("div", {
      className: h.xG,
      children: (0, r.jsx)(i.Button, {
        variant: "active",
        size: "md",
        text: d.intl.string(d.t.riu2R5),
        onClick: l,
        loading: c,
        fullWidth: true
      })
    })]
  })
}

function p(e) {
  var t;
  let {
    invite: n
  } = e, a = null != n.guild ? (0, c.DY)(n.guild) : null;
  if (null == a) return null;
  let o = null != (t = a.description) ? t : "";
  return (0, r.jsxs)("div", {
    className: h.kQ,
    children: [(0, r.jsx)(i.Heading, {
      className: h.s7,
      variant: "text-sm/medium",
      children: d.intl.string(d.t.Eabu1z)
    }), (0, r.jsxs)("div", {
      className: h.bo,
      children: [(0, r.jsx)(s.A, {
        guild: a,
        active: true,
        size: s.A.Sizes.MEDIUM
      }), (0, r.jsxs)("div", {
        className: h.bW,
        children: [(0, r.jsxs)(i.Text, {
          className: h.J5,
          color: "text-strong",
          variant: "text-sm/medium",
          tag: "span",
          children: [a.name, (0, r.jsx)(l.A, {
            guild: a,
            className: h.n2,
            tooltipPosition: "left"
          })]
        }), (0, r.jsx)(u.IK, {
          invite: n,
          textClassName: h.kS,
          className: h.pe
        })]
      })]
    }), o.length > 0 && (0, r.jsx)("details", {
      className: h.x_,
      children: (0, r.jsx)(i.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: o
      })
    })]
  })
}

function g(e) {
  let {
    invite: t,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: s
  } = e, {
    guild_scheduled_event: l
  } = t;
  return null != l ? (0, r.jsx)(f, {
    guildScheduledEvent: l,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: s
  }) : null
}