/** Chunk was on web.js **/
/** chunk id: 11868, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qt: () => x,
  ZP: () => k
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk954313 = require("./954313.js"),
  Chunk405613 = require("./405613.js"),
  Chunk95291 = require("./95291.jsx"),
  Chunk742593 = require("./742593.jsx"),
  Chunk217804 = require("./217804.js"),
  Chunk139712 = require("./139712.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk98435 = require("./98435.js");
let w = (e, t) => n => {
    n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, false), null == t || t(n)
  },
  D = (e, t) => n => {
    let r = p.Z.getChannel(e.channel_id);
    null != r && (n.stopPropagation(), (0, _.Cq)(r), null == t || t(n))
  },
  x = (e, t) => {
    switch (null == e ? true : e.entity_type) {
      case N.WX.STAGE_INSTANCE:
        return D(e, t);
      case N.WX.VOICE:
        return w(e, t)
    }
    return () => {}
  },
  L = (e, t) => t && [N.WX.STAGE_INSTANCE, N.WX.VOICE].includes(null == e ? true : e.entity_type),
  M = Chunk647438.memo(function(e) {
    var t;
    let {
      guild: n,
      guildScheduledEvent: a,
      channel: o,
      isMember: u
    } = e, _ = (0, s.e7)([h.Z], () => {
      if (null == n) return null;
      let e = h.Z.getGuild(n.id);
      return null != e ? e : (0, m.lM)(n) ? n : (0, m.Qs)(n)
    }, [n]), p = (0, A.u)(a, o), g = i.useCallback(e => {
      u && null != a && (e.stopPropagation(), (0, c.Bk)(a))
    }, [u, a]), E = i.useCallback(e => {
      x(a)(e)
    }, [a]);
    if (null == _) return null;
    let y = null == p ? true : p.IconComponent,
      O = (0, r.jsxs)(r.Fragment, {
        children: [null != y && (0, r.jsx)(y, {
          size: "xs",
          color: "currentColor",
          className: P.channelIcon
        }), (0, r.jsx)(l.Text, {
          className: P.channelDescription,
          variant: "text-xs/normal",
          children: (0, b.m)(null != (t = null == p ? true : p.locationName) ? t : "", true)
        })]
      });
    return (0, r.jsxs)("div", {
      className: P.inviteDetailsContainer,
      children: [(0, r.jsx)(f.Z.Icon, {
        guild: _,
        onClick: g
      }), (0, r.jsxs)("div", {
        className: P.verticalContainer,
        children: [(0, r.jsxs)("div", {
          className: P.guildChannelInfoContainer,
          children: [(0, r.jsx)(d.Z, {
            guild: _,
            tooltipPosition: "top",
            tooltipColor: l.aML.Colors.PRIMARY,
            size: 16,
            className: P.guildBadge
          }), (0, r.jsx)(l.P3F, {
            className: P.guildNameClickable,
            onClick: g,
            children: (0, r.jsx)(l.Heading, {
              className: u ? P.guildNameLinkable : P.guildName,
              variant: "text-sm/medium",
              children: _.name
            })
          })]
        }), (0, r.jsx)("div", {
          className: P.channelInfoContainer,
          children: L(a, u) ? (0, r.jsx)(l.P3F, {
            className: P.channelLocationLink,
            onClick: E,
            children: O
          }) : O
        })]
      })]
    })
  }),
  j = Chunk647438.memo(function(e) {
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
    } = e, _ = (0, s.e7)([E.ZP], () => E.ZP.isInterestedInEventRecurrence(n, i), [n, i]), p = e => {
      e.stopPropagation(), (0, C.Z)(n, i, t)
    }, h = e => {
      e.stopPropagation(), c ? a && f() : d()
    };
    return c ? a ? u ? (0, r.jsx)(l.Button, {
      text: R.intl.string(R.t.GoCQxU),
      variant: "secondary"
    }) : (0, r.jsx)(l.Button, {
      text: R.intl.string(R.t.XpeFYr),
      onClick: h,
      variant: "active"
    }) : o ? (0, r.jsx)(l.Button, {
      text: R.intl.string(R.t.Pj7Xrv),
      variant: "secondary",
      disabled: true
    }) : _ ? (0, r.jsx)(l.Button, {
      text: R.intl.string(R.t.DlcqlU),
      onClick: p,
      variant: "active",
      icon: l.dz2
    }) : (0, r.jsx)(l.Button, {
      text: R.intl.string(R.t.DlcqlU),
      onClick: p,
      variant: "secondary",
      icon: l.Dkj
    }) : (0, r.jsx)(l.Button, {
      text: R.intl.string(R.t.XpeFYr),
      onClick: h,
      variant: "active"
    })
  }),
  k = Chunk647438.memo(function(e) {
    var t;
    let {
      guildScheduledEvent: n,
      guild: a,
      channel: s,
      isMember: c,
      recurrenceId: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: _
    } = e, p = null != u ? u : null != n ? (0, v.DK)(n) : null, h = (null == n ? true : n.recurrence_rule) == null || null == p || (0, v.Rp)((0, O.KV)(null == n ? true : n.recurrence_rule), p), m = (0, y.Z)(n), b = i.useCallback(() => {
      c && null != n && (0, g.bO)({
        eventId: n.id,
        recurrenceId: p
      })
    }, [c, n, p]);
    if (null == n || !h) return null;
    let A = (0, E.xt)(n),
      C = (0, E.Z2)(n),
      R = n.entity_type === N.WX.EXTERNAL;
    return (0, r.jsx)(f.Z, {
      className: o()({
        [P.clickable]: c
      }),
      children: (0, r.jsxs)(l.P3F, {
        onClick: b,
        children: [null != n.image && (0, r.jsx)(S.Z, {
          source: (0, I.Z)(n),
          className: P.banner
        }), (0, r.jsx)(T.ZP, {
          name: n.name,
          description: null != (t = n.description) ? t : true,
          descriptionClassName: P.eventDescription,
          guildId: n.guild_id,
          creator: m,
          guildEvent: n,
          eventPreview: n,
          recurrenceId: p
        }), (0, r.jsxs)("div", {
          className: P.footerContainer,
          children: [(0, r.jsx)(M, {
            guild: a,
            channel: s,
            guildScheduledEvent: n,
            isMember: c
          }), (0, r.jsx)(j, {
            isActive: A,
            isEnded: C,
            isMember: c,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: p,
            onAcceptInstantInvite: d,
            onTransitionToInviteChannel: _,
            isExternal: R
          })]
        })]
      })
    })
  })