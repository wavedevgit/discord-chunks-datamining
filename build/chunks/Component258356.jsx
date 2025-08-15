/** Chunk was on 27978 **/
/** chunk id: 258356, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => g,
  Z: () => f
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function m(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: l,
    onAcceptInvite: a,
    isSubmitting: s
  } = e;
  return (0, r.jsxs)("div", {
    className: p.guildEventCard,
    children: [(0, r.jsx)(o.ZP, {
      name: n.name,
      description: null != (t = n.description) ? t : true,
      headerVariant: "heading-md/medium",
      descriptionClassName: p.__invalid_channelDescription,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), null != l && (0, r.jsx)("div", {
      className: p.channelInfo,
      children: (0, r.jsx)(c.Z, {
        guildScheduledEvent: n,
        channel: l
      })
    }), (0, r.jsx)(i.zx, {
      className: p.acceptButton,
      color: i.zx.Colors.GREEN,
      onClick: a,
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
  let o = null != (t = i.description) ? t : "";
  return (0, r.jsxs)("div", {
    className: p.guildInfoCard,
    children: [(0, r.jsx)(l.X6q, {
      className: p.presentedBy,
      variant: "text-sm/medium",
      children: h.intl.string(h.t.Eabu19)
    }), (0, r.jsxs)("div", {
      className: p.guildContainer,
      children: [(0, r.jsx)(a.Z, {
        guild: i,
        active: true,
        size: a.Z.Sizes.MEDIUM
      }), (0, r.jsxs)("div", {
        className: p.guildDetailsContanier,
        children: [(0, r.jsxs)(l.Text, {
          className: p.guildName,
          color: "header-primary",
          variant: "text-sm/medium",
          tag: "span",
          children: [i.name, (0, r.jsx)(s.Z, {
            guild: i,
            className: p.guildBadge,
            tooltipPosition: "left"
          })]
        }), (0, r.jsx)(d.V6, {
          invite: n,
          textClassName: p.guildInfoMemberCountText,
          className: p.guildInfoMemberCount
        })]
      })]
    }), o.length > 0 && (0, r.jsx)("details", {
      className: p.guildDescriptionContainer,
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
    guild_scheduled_event: a
  } = t;
  return null != a ? (0, r.jsx)(m, {
    guildScheduledEvent: a,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: l
  }) : null
}