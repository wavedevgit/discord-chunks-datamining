/** Chunk was on web.js **/
/** chunk id: 11868, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qt: () => x,
  ZP: () => k
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk287734 = require("./287734.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk922482 = require("./922482.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk411198 = require("./411198.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk725436 = require("./725436.js"),
  Chunk978227 = require("./978227.js"),
  Chunk236373 = require("./236373.js"),
  Chunk854698 = require("./854698.js"),
  Chunk405613 = require("./405613.js"),
  Chunk95291 = require("./95291.jsx"),
  Chunk742593 = require("./742593.jsx"),
  Chunk217804 = require("./217804.js"),
  Chunk139712 = require("./139712.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk182279 = require("./182279.js");
let D = (e, t) => n => {
    n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, false), null == t || t(n)
  },
  w = (e, t) => n => {
    let r = _.Z.getChannel(e.channel_id);
    null != r && (n.stopPropagation(), (0, p.Cq)(r), null == t || t(n))
  },
  x = (e, t) => {
    switch (null == e ? true : e.entity_type) {
      case N.WX.STAGE_INSTANCE:
        return w(e, t);
      case N.WX.VOICE:
        return D(e, t)
    }
    return () => {}
  },
  L = (e, t) => t && [N.WX.STAGE_INSTANCE, N.WX.VOICE].includes(null == e ? true : e.entity_type),
  j = Chunk473749.memo(function(e) {
    var t;
    let {
      guild: n,
      guildScheduledEvent: a,
      channel: o,
      isMember: u
    } = e, p = (0, s.e7)([m.Z], () => {
      if (null == n) return null;
      let e = m.Z.getGuild(n.id);
      return null != e ? e : (0, h.lM)(n) ? n : (0, h.Qs)(n)
    }, [n]), _ = (0, C.u)(a, o), g = i.useCallback(e => {
      u && null != a && (e.stopPropagation(), (0, c.Bk)(a))
    }, [u, a]), E = i.useCallback(e => {
      x(a)(e)
    }, [a]);
    if (null == p) return null;
    let y = null == _ ? true : _.IconComponent,
      O = (0, r.jsxs)(r.Fragment, {
        children: [null != y && (0, r.jsx)(y, {
          size: "xs",
          color: "currentColor",
          className: R.channelIcon
        }), (0, r.jsx)(l.Text, {
          className: R.channelDescription,
          variant: "text-xs/normal",
          children: (0, b.m)(null != (t = null == _ ? true : _.locationName) ? t : "", true)
        })]
      });
    return (0, r.jsxs)("div", {
      className: R.inviteDetailsContainer,
      children: [(0, r.jsx)(f.Z.Icon, {
        guild: p,
        onClick: g
      }), (0, r.jsxs)("div", {
        className: R.verticalContainer,
        children: [(0, r.jsxs)("div", {
          className: R.guildChannelInfoContainer,
          children: [(0, r.jsx)(d.Z, {
            guild: p,
            tooltipPosition: "top",
            tooltipColor: l.aML.Colors.PRIMARY,
            size: 16,
            className: R.guildBadge
          }), (0, r.jsx)(l.P3F, {
            className: R.guildNameClickable,
            onClick: g,
            children: (0, r.jsx)(l.Heading, {
              className: u ? R.guildNameLinkable : R.guildName,
              variant: "text-sm/medium",
              children: p.name
            })
          })]
        }), (0, r.jsx)("div", {
          className: R.channelInfoContainer,
          children: L(a, u) ? (0, r.jsx)(l.P3F, {
            className: R.channelLocationLink,
            onClick: E,
            children: O
          }) : O
        })]
      })]
    })
  }),
  M = Chunk473749.memo(function(e) {
    let {
      guildId: t,
      guildScheduledEventId: n,
      recurrenceId: i,
      isActive: a,
      isEnded: o,
      isMember: c,
      isExternal: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: f
    } = e, p = (0, s.e7)([E.ZP], () => E.ZP.isInterestedInEventRecurrence(n, i), [n, i]), _ = e => {
      e.stopPropagation(), (0, A.Z)(n, i, t)
    }, m = e => {
      e.stopPropagation(), c ? a && f() : d()
    };
    return c ? a ? u ? (0, r.jsx)(l.Button, {
      text: P.intl.string(P.t.GoCQxU),
      variant: "secondary"
    }) : (0, r.jsx)(l.Button, {
      text: P.intl.string(P.t.XpeFYr),
      onClick: m,
      variant: "active"
    }) : o ? (0, r.jsx)(l.Button, {
      text: P.intl.string(P.t.Pj7Xrv),
      variant: "secondary",
      disabled: true
    }) : p ? (0, r.jsx)(l.Button, {
      text: P.intl.string(P.t.DlcqlU),
      onClick: _,
      variant: "active",
      icon: l.dz2
    }) : (0, r.jsx)(l.Button, {
      text: P.intl.string(P.t.DlcqlU),
      onClick: _,
      variant: "secondary",
      icon: l.Dkj
    }) : (0, r.jsx)(l.Button, {
      text: P.intl.string(P.t.XpeFYr),
      onClick: m,
      variant: "active"
    })
  }),
  k = Chunk473749.memo(function(e) {
    var t;
    let {
      guildScheduledEvent: n,
      guild: a,
      channel: s,
      isMember: c,
      recurrenceId: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: p
    } = e, _ = null != u ? u : null != n ? (0, v.DK)(n) : null, m = (null == n ? true : n.recurrence_rule) == null || null == _ || (0, v.Rp)((0, O.KV)(null == n ? true : n.recurrence_rule), _), h = (0, y.Z)(n), b = i.useCallback(() => {
      c && null != n && (0, g.bO)({
        eventId: n.id,
        recurrenceId: _
      })
    }, [c, n, _]);
    if (null == n || !m) return null;
    let C = (0, E.xt)(n),
      A = (0, E.Z2)(n),
      P = n.entity_type === N.WX.EXTERNAL;
    return (0, r.jsx)(f.Z, {
      className: o()({
        [R.clickable]: c
      }),
      children: (0, r.jsxs)(l.P3F, {
        onClick: b,
        children: [null != n.image && (0, r.jsx)(I.Z, {
          source: (0, S.Z)(n),
          className: R.banner
        }), (0, r.jsx)(T.ZP, {
          name: n.name,
          description: null != (t = n.description) ? t : true,
          descriptionClassName: R.eventDescription,
          guildId: n.guild_id,
          creator: h,
          guildEvent: n,
          eventPreview: n,
          recurrenceId: _
        }), (0, r.jsxs)("div", {
          className: R.footerContainer,
          children: [(0, r.jsx)(j, {
            guild: a,
            channel: s,
            guildScheduledEvent: n,
            isMember: c
          }), (0, r.jsx)(M, {
            isActive: C,
            isEnded: A,
            isMember: c,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: _,
            onAcceptInstantInvite: d,
            onTransitionToInviteChannel: p,
            isExternal: P
          })]
        })]
      })
    })
  })