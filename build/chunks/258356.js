/** Chunk was on 27978 **/
n.d(t, {
  X: () => g,
  Z: () => m
}), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(565138),
  a = n(372769),
  s = n(742593),
  l = n(390072),
  c = n(601964),
  u = n(230224),
  d = n(388032),
  p = n(632106);

function h(e) {
  var t;
  let {
    guildScheduledEvent: n,
    channel: o,
    onAcceptInvite: a,
    isSubmitting: c
  } = e;
  return (0, r.jsxs)("div", {
    className: p.guildEventCard,
    children: [(0, r.jsx)(s.ZP, {
      name: n.name,
      description: null !== (t = n.description) && void 0 !== t ? t : void 0,
      headerVariant: "heading-md/medium",
      descriptionClassName: p.__invalid_channelDescription,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), null != o && (0, r.jsx)("div", {
      className: p.channelInfo,
      children: (0, r.jsx)(l.Z, {
        guildScheduledEvent: n,
        channel: o
      })
    }), (0, r.jsx)(i.zxk, {
      className: p.acceptButton,
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
  } = e, s = null != n.guild ? new c.ZP(n.guild) : null;
  if (null == s) return null;
  let l = null !== (t = s.description) && void 0 !== t ? t : "";
  return (0, r.jsxs)("div", {
    className: p.guildInfoCard,
    children: [(0, r.jsx)(i.X6q, {
      className: p.presentedBy,
      variant: "text-sm/medium",
      children: d.NW.string(d.t.Eabu19)
    }), (0, r.jsxs)("div", {
      className: p.guildContainer,
      children: [(0, r.jsx)(o.Z, {
        guild: s,
        active: !0,
        size: o.Z.Sizes.MEDIUM
      }), (0, r.jsxs)("div", {
        className: p.guildDetailsContanier,
        children: [(0, r.jsxs)(i.Text, {
          className: p.guildName,
          color: "header-primary",
          variant: "text-sm/medium",
          tag: "span",
          children: [s.name, (0, r.jsx)(a.Z, {
            guild: s,
            className: p.guildBadge,
            tooltipPosition: "left"
          })]
        }), (0, r.jsx)(u.V6, {
          invite: n,
          textClassName: p.guildInfoMemberCountText,
          className: p.guildInfoMemberCount
        })]
      })]
    }), l.length > 0 && (0, r.jsx)("details", {
      className: p.guildDescriptionContainer,
      children: (0, r.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: l
      })
    })]
  })
}

function m(e) {
  let {
    invite: t,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: o
  } = e, {
    guild_scheduled_event: a
  } = t;
  return null != a ? (0, r.jsx)(h, {
    guildScheduledEvent: a,
    channel: n,
    isSubmitting: i,
    onAcceptInvite: o
  }) : null
}