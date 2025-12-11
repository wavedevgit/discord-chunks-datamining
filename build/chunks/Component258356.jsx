/** Chunk was on 27978 **/
/** chunk id: 258356, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => g,
  Z: () => m
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk742593 = require("./742593.jsx"),
  Chunk390072 = require("./390072.jsx"),
  Chunk411198 = require("./411198.js"),
  Chunk230224 = require("./230224.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk9314 = require("./9314.js");

function f(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: s,
    onAcceptInvite: a,
    isSubmitting: c
  } = e;
  return (0, r.jsxs)("div", {
    className: h.guildEventCard,
    children: [(0, r.jsx)(l.ZP, {
      name: n.name,
      description: null != (t = n.description) ? t : true,
      headerVariant: "heading-md/medium",
      descriptionClassName: h.__invalid_channelDescription,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), null != s && (0, r.jsx)("div", {
      className: h.channelInfo,
      children: (0, r.jsx)(o.Z, {
        guildScheduledEvent: n,
        channel: s
      })
    }), (0, r.jsx)("div", {
      className: h.acceptButton,
      children: (0, r.jsx)(i.Button, {
        variant: "active",
        size: "md",
        text: d.intl.string(d.t.riu2R5),
        onClick: a,
        loading: c,
        fullWidth: true
      })
    })]
  })
}

function g(e) {
  var t;
  let {
    invite: n
  } = e, l = null != n.guild ? (0, c.Qs)(n.guild) : null;
  if (null == l) return null;
  let o = null != (t = l.description) ? t : "";
  return (0, r.jsxs)("div", {
    className: h.guildInfoCard,
    children: [(0, r.jsx)(i.Heading, {
      className: h.presentedBy,
      variant: "text-sm/medium",
      children: d.intl.string(d.t.Eabu1z)
    }), (0, r.jsxs)("div", {
      className: h.guildContainer,
      children: [(0, r.jsx)(s.Z, {
        guild: l,
        active: true,
        size: s.Z.Sizes.MEDIUM
      }), (0, r.jsxs)("div", {
        className: h.guildDetailsContanier,
        children: [(0, r.jsxs)(i.Text, {
          className: h.guildName,
          color: "header-primary",
          variant: "text-sm/medium",
          tag: "span",
          children: [l.name, (0, r.jsx)(a.Z, {
            guild: l,
            className: h.guildBadge,
            tooltipPosition: "left"
          })]
        }), (0, r.jsx)(u.V6, {
          invite: n,
          textClassName: h.guildInfoMemberCountText,
          className: h.guildInfoMemberCount
        })]
      })]
    }), o.length > 0 && (0, r.jsx)("details", {
      className: h.guildDescriptionContainer,
      children: (0, r.jsx)(i.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: o
      })
    })]
  })
}

function m(e) {
  let {
    invite: t,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: s
  } = e, {
    guild_scheduled_event: a
  } = t;
  return null != a ? (0, r.jsx)(f, {
    guildScheduledEvent: a,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: s
  }) : null
}