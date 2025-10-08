/** Chunk was on 27978 **/
/** chunk id: 258356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => p,
  Z: () => f
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
  Chunk248602 = require("./248602.js");

function m(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: l,
    onAcceptInvite: s,
    isSubmitting: a
  } = e;
  return (0, r.jsxs)("div", {
    className: g.guildEventCard,
    children: [(0, r.jsx)(o.ZP, {
      name: n.name,
      description: null != (t = n.description) ? t : true,
      headerVariant: "heading-md/medium",
      descriptionClassName: g.__invalid_channelDescription,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), null != l && (0, r.jsx)("div", {
      className: g.channelInfo,
      children: (0, r.jsx)(c.Z, {
        guildScheduledEvent: n,
        channel: l
      })
    }), (0, r.jsx)(i.zx, {
      className: g.acceptButton,
      color: i.zx.Colors.GREEN,
      onClick: s,
      submitting: a,
      children: h.intl.string(h.t.riu2R0)
    })]
  })
}

function p(e) {
  var t;
  let {
    invite: n
  } = e, i = null != n.guild ? (0, u.Qs)(n.guild) : null;
  if (null == i) return null;
  let o = null != (t = i.description) ? t : "";
  return (0, r.jsxs)("div", {
    className: g.guildInfoCard,
    children: [(0, r.jsx)(l.X6q, {
      className: g.presentedBy,
      variant: "text-sm/medium",
      children: h.intl.string(h.t.Eabu19)
    }), (0, r.jsxs)("div", {
      className: g.guildContainer,
      children: [(0, r.jsx)(s.Z, {
        guild: i,
        active: true,
        size: s.Z.Sizes.MEDIUM
      }), (0, r.jsxs)("div", {
        className: g.guildDetailsContanier,
        children: [(0, r.jsxs)(l.Text, {
          className: g.guildName,
          color: "header-primary",
          variant: "text-sm/medium",
          tag: "span",
          children: [i.name, (0, r.jsx)(a.Z, {
            guild: i,
            className: g.guildBadge,
            tooltipPosition: "left"
          })]
        }), (0, r.jsx)(d.V6, {
          invite: n,
          textClassName: g.guildInfoMemberCountText,
          className: g.guildInfoMemberCount
        })]
      })]
    }), o.length > 0 && (0, r.jsx)("details", {
      className: g.guildDescriptionContainer,
      children: (0, r.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: o
      })
    })]
  })
}

function f(e) {
  let {
    invite: t,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: l
  } = e, {
    guild_scheduled_event: s
  } = t;
  return null != s ? (0, r.jsx)(m, {
    guildScheduledEvent: s,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: l
  }) : null
}