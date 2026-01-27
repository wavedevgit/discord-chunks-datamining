/** Chunk was on 48330 **/
/** chunk id: 427080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => D,
  GI: () => w
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk956793 = require("./956793.js"),
  Chunk714991 = require("./714991.jsx"),
  Chunk529200 = require("./529200.jsx"),
  Chunk323443 = require("./323443.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk860689 = require("./860689.js"),
  Chunk707592 = require("./707592.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk435328 = require("./435328.js"),
  Chunk408607 = require("./408607.js"),
  Chunk794782 = require("./794782.js"),
  Chunk974930 = require("./974930.js"),
  Chunk691012 = require("./691012.js"),
  Chunk850183 = require("./850183.jsx"),
  Chunk557582 = require("./557582.jsx"),
  Chunk515115 = require("./515115.js"),
  Chunk666394 = require("./666394.jsx"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk467946 = require("./467946.js");
let w = (e, t) => {
    switch (null == e ? true : e.entity_type) {
      case T.Ps.STAGE_INSTANCE:
        return n => {
          let l = p.A.getChannel(e.channel_id);
          null != l && (n.stopPropagation(), (0, v.av)(l), null == t || t(n))
        };
      case T.Ps.VOICE:
        return n => {
          n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, false), null == t || t(n)
        }
    }
    return () => {}
  },
  _ = Chunk64700.memo(function(e) {
    var t;
    let {
      guild: n,
      guildScheduledEvent: i,
      channel: s,
      isMember: u
    } = e, v = (0, a.bG)([x.A], () => {
      if (null == n) return null;
      let e = x.A.getGuild(n.id);
      return null != e ? e : (0, g.fh)(n) ? n : (0, g.DY)(n)
    }, [n]), p = (0, C.L)(i, s), j = r.useCallback(e => {
      u && null != i && (e.stopPropagation(), (0, o.rq)(i))
    }, [u, i]), h = r.useCallback(e => {
      w(i)(e)
    }, [i]);
    if (null == v) return null;
    let f = null == p ? true : p.IconComponent,
      y = (0, l.jsxs)(l.Fragment, {
        children: [null != f && (0, l.jsx)(f, {
          size: "xs",
          color: "currentColor",
          className: P.p
        }), (0, l.jsx)(c.Text, {
          className: P.I0,
          variant: "text-xs/normal",
          children: (0, N.l)(null != (t = null == p ? true : p.locationName) ? t : "", true)
        })]
      });
    return (0, l.jsxs)("div", {
      className: P.Ix,
      children: [(0, l.jsx)(m.A.Icon, {
        guild: v,
        onClick: j
      }), (0, l.jsxs)("div", {
        className: P.YG,
        children: [(0, l.jsxs)("div", {
          className: P.Kp,
          children: [(0, l.jsx)(d.A, {
            guild: v,
            tooltipPosition: "top",
            tooltipColor: c.STz.Colors.PRIMARY,
            size: 16,
            className: P.n2
          }), (0, l.jsx)(c.DUT, {
            className: P.Nm,
            onClick: j,
            children: (0, l.jsx)(c.Heading, {
              className: u ? P.ht : P.J5,
              variant: "text-sm/medium",
              children: v.name
            })
          })]
        }), (0, l.jsx)("div", {
          className: P.Nj,
          children: u && [T.Ps.STAGE_INSTANCE, T.Ps.VOICE].includes(null == i ? true : i.entity_type) ? (0, l.jsx)(c.DUT, {
            className: P.tR,
            onClick: h,
            children: y
          }) : y
        })]
      })]
    })
  }),
  k = Chunk64700.memo(function(e) {
    let {
      guildId: t,
      guildScheduledEventId: n,
      recurrenceId: r,
      isActive: i,
      isEnded: s,
      isMember: o,
      isExternal: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: m
    } = e, v = (0, a.bG)([h.Ay], () => h.Ay.isInterestedInEventRecurrence(n, r), [n, r]), p = e => {
      e.stopPropagation(), (0, O.A)(n, r, t)
    }, x = e => {
      e.stopPropagation(), o ? i && m() : d()
    };
    return o ? i ? u ? (0, l.jsx)(c.Button, {
      text: S.intl.string(S.t.GoCQxU),
      variant: "secondary"
    }) : (0, l.jsx)(c.Button, {
      text: S.intl.string(S.t.XpeFYr),
      onClick: x,
      variant: "active"
    }) : s ? (0, l.jsx)(c.Button, {
      text: S.intl.string(S.t.Pj7Xrv),
      variant: "secondary",
      disabled: true
    }) : v ? (0, l.jsx)(c.Button, {
      text: S.intl.string(S.t.DlcqlU),
      onClick: p,
      variant: "active",
      icon: c.A9s
    }) : (0, l.jsx)(c.Button, {
      text: S.intl.string(S.t.DlcqlU),
      onClick: p,
      variant: "secondary",
      icon: c.XFE
    }) : (0, l.jsx)(c.Button, {
      text: S.intl.string(S.t.XpeFYr),
      onClick: x,
      variant: "active"
    })
  }),
  D = Chunk64700.memo(function(e) {
    var t;
    let {
      guildScheduledEvent: n,
      guild: i,
      channel: a,
      isMember: o,
      recurrenceId: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: v
    } = e, p = null != u ? u : null != n ? (0, E.G3)(n) : null, x = (null == n ? true : n.recurrence_rule) == null || null == p || (0, E.p$)((0, y.Sn)(null == n ? true : n.recurrence_rule), p), g = (0, f.A)(n), N = r.useCallback(() => {
      o && null != n && (0, j.uR)({
        eventId: n.id,
        recurrenceId: p
      })
    }, [o, n, p]);
    if (null == n || !x) return null;
    let C = (0, h.Fd)(n),
      O = (0, h.AZ)(n),
      S = n.entity_type === T.Ps.EXTERNAL;
    return (0, l.jsx)(m.A, {
      className: s()({
        [P.vk]: o
      }),
      children: (0, l.jsxs)(c.DUT, {
        onClick: N,
        children: [null != n.image && (0, l.jsx)(I.A, {
          source: (0, b.A)(n),
          className: P.vK
        }), (0, l.jsx)(A.Ay, {
          name: n.name,
          description: null != (t = n.description) ? t : true,
          descriptionClassName: P.tj,
          guildId: n.guild_id,
          creator: g,
          guildEvent: n,
          eventPreview: n,
          recurrenceId: p
        }), (0, l.jsxs)("div", {
          className: P.xQ,
          children: [(0, l.jsx)(_, {
            guild: i,
            channel: a,
            guildScheduledEvent: n,
            isMember: o
          }), (0, l.jsx)(k, {
            isActive: C,
            isEnded: O,
            isMember: o,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: p,
            onAcceptInstantInvite: d,
            onTransitionToInviteChannel: v,
            isExternal: S
          })]
        })]
      })
    })
  })