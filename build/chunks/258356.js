/** Chunk was on 27978 **/
n.d(t, {
  X: () => g,
  Z: () => f
}), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(565138),
  a = n(372769),
  l = n(742593),
  s = n(390072),
  c = n(601964),
  u = n(230224),
  d = n(388032),
  h = n(866251);

function p(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: o,
    onAcceptInvite: a,
    isSubmitting: c
  } = e;
  return (0, r.jsxs)("div", {
    className: h.guildEventCard,
    children: [(0, r.jsx)(l.ZP, {
      name: n.name,
      description: null !== (t = n.description) && void 0 !== t ? t : void 0,
      headerVariant: "heading-md/medium",
      descriptionClassName: h.__invalid_channelDescription,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), null != o && (0, r.jsx)("div", {
      className: h.channelInfo,
      children: (0, r.jsx)(s.Z, {
        guildScheduledEvent: n,
        channel: o
      })
    }), (0, r.jsx)(i.zxk, {
      className: h.acceptButton,
      color: i.zxk.Colors.GREEN,
      onClick: a,
      submitting: c,
      children: d.NW.string(d.t.riu2R0)
    })]
  })
}

function g(e) {
  var t;
  let {
    invite: n
  } = e, l = null != n.guild ? new c.ZP(n.guild) : null;
  if (null == l) return null;
  let s = null !== (t = l.description) && void 0 !== t ? t : "";
  return (0, r.jsxs)("div", {
    className: h.guildInfoCard,
    children: [(0, r.jsx)(i.X6q, {
      className: h.presentedBy,
      variant: "text-sm/medium",
      children: d.NW.string(d.t.Eabu19)
    }), (0, r.jsxs)("div", {
      className: h.guildContainer,
      children: [(0, r.jsx)(o.Z, {
        guild: l,
        active: !0,
        size: o.Z.Sizes.MEDIUM
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
    }), s.length > 0 && (0, r.jsx)("details", {
      className: h.guildDescriptionContainer,
      children: (0, r.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: s
      })
    })]
  })
}

function f(e) {
  let {
    invite: t,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: o
  } = e, {
    guild_scheduled_event: a
  } = t;
  return null != a ? (0, r.jsx)(p, {
    guildScheduledEvent: a,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: o
  }) : null
}