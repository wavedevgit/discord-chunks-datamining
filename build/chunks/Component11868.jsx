/** Chunk was on 34082 **/
/** chunk id: 11868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qt: () => k,
  ZP: () => L
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk182279 = require("./182279.js");
let k = (e, t) => {
    switch (null == e ? true : e.entity_type) {
      case w.WX.STAGE_INSTANCE:
        return n => {
          let r = f.Z.getChannel(e.channel_id);
          null != r && (n.stopPropagation(), (0, v.Cq)(r), null == t || t(n))
        };
      case w.WX.VOICE:
        return n => {
          n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, false), null == t || t(n)
        }
    }
    return () => {}
  },
  D = Chunk647438.memo(function(e) {
    var t;
    let {
      guild: n,
      guildScheduledEvent: i,
      channel: s,
      isMember: o
    } = e, d = (0, a.e7)([g.Z], () => {
      if (null == n) return null;
      let e = g.Z.getGuild(n.id);
      return null != e ? e : (0, b.lM)(n) ? n : (0, b.Qs)(n)
    }, [n]), v = (0, S.u)(i, s), f = l.useCallback(e => {
      o && null != i && (e.stopPropagation(), (0, u.Bk)(i))
    }, [o, i]), j = l.useCallback(e => {
      k(i)(e)
    }, [i]);
    if (null == d) return null;
    let x = null == v ? true : v.IconComponent,
      N = (0, r.jsxs)(r.Fragment, {
        children: [null != x && (0, r.jsx)(x, {
          size: "xs",
          color: "currentColor",
          className: Z.channelIcon
        }), (0, r.jsx)(c.Text, {
          className: Z.channelDescription,
          variant: "text-xs/normal",
          children: (0, h.m)(null != (t = null == v ? true : v.locationName) ? t : "", true)
        })]
      });
    return (0, r.jsxs)("div", {
      className: Z.inviteDetailsContainer,
      children: [(0, r.jsx)(p.Z.Icon, {
        guild: d,
        onClick: f
      }), (0, r.jsxs)("div", {
        className: Z.verticalContainer,
        children: [(0, r.jsxs)("div", {
          className: Z.guildChannelInfoContainer,
          children: [(0, r.jsx)(m.Z, {
            guild: d,
            tooltipPosition: "top",
            tooltipColor: c.ua7.Colors.PRIMARY,
            size: 16,
            className: Z.guildBadge
          }), (0, r.jsx)(c.P3F, {
            className: Z.guildNameClickable,
            onClick: f,
            children: (0, r.jsx)(c.X6q, {
              className: o ? Z.guildNameLinkable : Z.guildName,
              variant: "text-sm/medium",
              children: d.name
            })
          })]
        }), (0, r.jsx)("div", {
          className: Z.channelInfoContainer,
          children: o && [w.WX.STAGE_INSTANCE, w.WX.VOICE].includes(null == i ? true : i.entity_type) ? (0, r.jsx)(c.P3F, {
            className: Z.channelLocationLink,
            onClick: j,
            children: N
          }) : N
        })]
      })]
    })
  }),
  z = Chunk647438.memo(function(e) {
    let {
      guildId: t,
      guildScheduledEventId: n,
      recurrenceId: l,
      isActive: i,
      isEnded: s,
      isMember: u,
      isExternal: d,
      onAcceptInstantInvite: m,
      onTransitionToInviteChannel: p
    } = e, v = (0, a.e7)([x.ZP], () => x.ZP.isInterestedInEventRecurrence(n, l), [n, l]), f = e => {
      e.stopPropagation(), u ? i && p() : m()
    };
    return u ? i ? (0, r.jsx)(o.zx, {
      className: Z.button,
      size: o.zx.Sizes.SMALL,
      onClick: e => {
        d || f(e)
      },
      color: d ? o.zx.Colors.TRANSPARENT : o.zx.Colors.GREEN,
      children: d ? T.intl.string(T.t.GoCQxc) : T.intl.string(T.t.XpeFYm)
    }) : s ? (0, r.jsx)(o.zx, {
      className: Z.button,
      size: o.zx.Sizes.SMALL,
      disabled: true,
      color: o.zx.Colors.PRIMARY,
      look: o.zx.Looks.OUTLINED,
      children: T.intl.string(T.t.Pj7Xrq)
    }) : (0, r.jsxs)(o.zx, {
      className: Z.button,
      innerClassName: Z.innerButton,
      size: o.zx.Sizes.SMALL,
      color: o.zx.Colors.PRIMARY,
      look: v ? o.zx.Looks.OUTLINED : o.zx.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, C.Z)(n, l, t)
      },
      children: [v ? (0, r.jsx)(c.dz2, {
        size: "xs",
        color: "currentColor",
        className: Z.buttonIcon
      }) : (0, r.jsx)(c.Dkj, {
        size: "xs",
        color: "currentColor",
        className: Z.buttonIcon
      }), T.intl.string(T.t.DlcqlZ)]
    }) : (0, r.jsx)(o.zx, {
      className: Z.button,
      size: o.zx.Sizes.SMALL,
      onClick: f,
      color: o.zx.Colors.GREEN,
      children: T.intl.string(T.t.XpeFYm)
    })
  }),
  L = Chunk647438.memo(function(e) {
    var t;
    let {
      guildScheduledEvent: n,
      guild: i,
      channel: a,
      isMember: o,
      recurrenceId: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: m
    } = e, v = null != u ? u : null != n ? (0, y.DK)(n) : null, f = (null == n ? true : n.recurrence_rule) == null || null == v || (0, y.Rp)((0, O.KV)(null == n ? true : n.recurrence_rule), v), g = (0, N.Z)(n), b = l.useCallback(() => {
      o && null != n && (0, j.bO)({
        eventId: n.id,
        recurrenceId: v
      })
    }, [o, n, v]);
    if (null == n || !f) return null;
    let h = (0, x.xt)(n),
      S = (0, x.Z2)(n),
      C = n.entity_type === w.WX.EXTERNAL;
    return (0, r.jsx)(p.Z, {
      className: s()({
        [Z.clickable]: o
      }),
      children: (0, r.jsxs)(c.P3F, {
        onClick: b,
        children: [null != n.image && (0, r.jsx)(P.Z, {
          source: (0, E.Z)(n),
          className: Z.banner
        }), (0, r.jsx)(I.ZP, {
          name: n.name,
          description: null != (t = n.description) ? t : true,
          descriptionClassName: Z.eventDescription,
          guildId: n.guild_id,
          creator: g,
          guildEvent: n,
          eventPreview: n,
          recurrenceId: v
        }), (0, r.jsxs)("div", {
          className: Z.footerContainer,
          children: [(0, r.jsx)(D, {
            guild: i,
            channel: a,
            guildScheduledEvent: n,
            isMember: o
          }), (0, r.jsx)(z, {
            isActive: h,
            isEnded: S,
            isMember: o,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: v,
            onAcceptInstantInvite: d,
            onTransitionToInviteChannel: m,
            isExternal: C
          })]
        })]
      })
    })
  })