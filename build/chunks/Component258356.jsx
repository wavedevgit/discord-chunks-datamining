/** Chunk was on 27978 **/
/** chunk id: 258356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => g,
  Z: () => m
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk742593 = require("./742593.jsx"),
  Chunk390072 = require("./390072.jsx"),
  Chunk411198 = require("./411198.js"),
  Chunk230224 = require("./230224.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk694527 = require("./694527.js");

function p(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: l,
    onAcceptInvite: o,
    isSubmitting: s
  } = e;
  return (0, r.jsxs)("div", {
    className: f.guildEventCard,
    children: [(0, r.jsx)(a.ZP, {
      name: n.name,
      description: null != (t = n.description) ? t : true,
      headerVariant: "heading-md/medium",
      descriptionClassName: f.__invalid_channelDescription,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), null != l && (0, r.jsx)("div", {
      className: f.channelInfo,
      children: (0, r.jsx)(c.Z, {
        guildScheduledEvent: n,
        channel: l
      })
    }), (0, r.jsx)(i.zx, {
      className: f.acceptButton,
      color: i.zx.Colors.GREEN,
      onClick: o,
      submitting: s,
      children: h.intl.string(h.t.riu2R0)
    })]
  })
}

function g(e) {
  var t;
  let {
    invite: n
  } = e, i = null != n.guild ? (0, u.Qs)(n.guild) : null;
  if (null == i) return null;
  let a = null != (t = i.description) ? t : "";
  return (0, r.jsxs)("div", {
    className: f.guildInfoCard,
    children: [(0, r.jsx)(l.X6q, {
      className: f.presentedBy,
      variant: "text-sm/medium",
      children: h.intl.string(h.t.Eabu19)
    }), (0, r.jsxs)("div", {
      className: f.guildContainer,
      children: [(0, r.jsx)(o.Z, {
        guild: i,
        active: true,
        size: o.Z.Sizes.MEDIUM
      }), (0, r.jsxs)("div", {
        className: f.guildDetailsContanier,
        children: [(0, r.jsxs)(l.Text, {
          className: f.guildName,
          color: "header-primary",
          variant: "text-sm/medium",
          tag: "span",
          children: [i.name, (0, r.jsx)(s.Z, {
            guild: i,
            className: f.guildBadge,
            tooltipPosition: "left"
          })]
        }), (0, r.jsx)(d.V6, {
          invite: n,
          textClassName: f.guildInfoMemberCountText,
          className: f.guildInfoMemberCount
        })]
      })]
    }), a.length > 0 && (0, r.jsx)("details", {
      className: f.guildDescriptionContainer,
      children: (0, r.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: a
      })
    })]
  })
}

function m(e) {
  let {
    invite: t,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: l
  } = e, {
    guild_scheduled_event: o
  } = t;
  return null != o ? (0, r.jsx)(p, {
    guildScheduledEvent: o,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: l
  }) : null
}