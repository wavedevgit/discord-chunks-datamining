/** Chunk was on 81899 **/
/** chunk id: 895202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => G,
  c: () => T
}), require("./228524.js");
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk148719 = require("./148719.js"),
  Chunk713654 = require("./713654.js"),
  Chunk931991 = require("./931991.js"),
  Chunk660110 = require("./660110.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk435328 = require("./435328.js"),
  Chunk530209 = require("./530209.js"),
  Chunk974930 = require("./974930.js"),
  Chunk428978 = require("./428978.jsx"),
  Chunk850183 = require("./850183.jsx"),
  Chunk557582 = require("./557582.jsx"),
  Chunk888637 = require("./888637.jsx"),
  Chunk823991 = require("./823991.jsx"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk340500 = require("./340500.js"),
  T = ((l = {})[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL", l);

function D(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, b.nr)(t), i = (0, s.bG)([m.A], () => !t.isGuildVocal() || m.A.can(C.xBc.CONNECT, t), [t]), _ = c.useMemo(() => (0, u.A)(t), [t]), h = c.useMemo(() => {
    let e = (0, f.gU)(t);
    return null != e ? c.createElement(e, {
      color: "currentColor",
      size: "custom",
      width: 20,
      height: 20,
      className: E.Kk
    }) : null
  }, [t]);
  return (0, a.jsx)(d.m_, {
    text: N.intl.string(N.t.nHjY9C),
    shouldShow: !i && null != n,
    children: (0, a.jsxs)(o.DUT, {
      className: r()(E.mG, E.nU, {
        [E.MN]: i && null != n,
        [E.Pm]: !i && null != n
      }),
      onClick: n,
      children: [(0, a.jsx)(d.m_, {
        text: N.intl.string(N.t["48WXaW"]),
        shouldShow: l && _ && i && null != n,
        children: h
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: E.h7,
        children: t.name
      })]
    })
  })
}

function w(e) {
  let {
    channel: t,
    onJoinClick: n,
    handleLocationClick: l,
    location: c,
    isExternal: i
  } = e;
  return null != t ? (0, a.jsx)(D, {
    channel: t,
    onClick: n
  }) : (0, a.jsxs)(o.DUT, {
    className: E.mG,
    onClick: l,
    children: [(0, a.jsx)(o.BT6, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: r()(E.nU, E.Kk)
    }), (0, a.jsx)(o.Text, {
      className: i ? E.dC : E.h7,
      variant: "text-sm/normal",
      children: (0, h.l)(c, true)
    })]
  })
}

function S(e) {
  let {
    channel: t,
    entityType: n,
    isJoined: l,
    isActive: c,
    isUserLurking: i,
    rsvped: r,
    canInvite: s,
    onContextMenu: d,
    onJoinClick: u,
    onRsvpClick: f,
    onStartClick: b,
    onInviteClick: _,
    onEndClick: m,
    onJoinGuildClick: h
  } = e, v = (0, x.D)(t, n), p = (0, g.Zq)({
    entityType: n,
    isJoined: l,
    isActive: c,
    isUserLurking: i,
    rsvped: r,
    canInvite: s,
    isChannelPublic: v,
    channel: t,
    onJoinClick: u,
    onRsvpClick: f,
    onStartClick: b,
    onInviteClick: _,
    onEndClick: m,
    onJoinGuildClick: h
  });
  return (0, a.jsxs)(o.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != d ? (0, a.jsx)(g.jD, {
      onClick: d
    }) : null, null == p ? true : p.map((e, t) => (0, a.jsx)(o.Button, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({}, e), t))]
  })
}

function G(e) {
  let {
    className: t,
    guild: n,
    channel: l,
    creator: c,
    name: i,
    entityType: s,
    description: d,
    imageLocation: u = 0,
    imageSource: f,
    isActive: b,
    isUserLurking: m,
    isJoined: h = false,
    isMember: x = false,
    speakers: g,
    speakerCount: C,
    rsvped: N,
    canInvite: T,
    location: D,
    truncate: G,
    onContextMenu: O,
    onJoinClick: P,
    onJoinGuildClick: L,
    onRsvpClick: R,
    onStartClick: M,
    onInviteClick: U,
    onEndClick: I,
    onClick: q,
    isNew: z,
    guildEvent: B,
    eventPreview: K,
    recurrenceRule: X,
    recurrenceId: V,
    hideAgeVerificationNotice: W
  } = e, Z = s === k.Ps.EXTERNAL, J = Z ? e => e.stopPropagation() : true, Q = [];
  if (null != X && null != event) {
    let e = (0, v.X7)(X);
    Q = (0, v.er)(4, e, new Date(B.scheduled_start_time))
  }
  let Y = Q.length > 0;
  return (0, a.jsxs)(o.sqX, {
    "aria-label": i,
    onClick: () => null == q ? true : q(V),
    onContextMenu: O,
    className: r()(E.Nr, {
      [E.oR]: h,
      [E.hT]: m
    }, t),
    children: [(0, a.jsxs)("div", {
      className: r()(E.Ms, {
        [E.AD]: Y
      }),
      children: [0 === u && (0, a.jsx)(p.A, {
        source: f
      }), (0, a.jsx)(j.Ay, {
        creator: c,
        name: i,
        description: d,
        imageSource: 1 === u ? f : null,
        truncate: G,
        guildId: null == n ? true : n.id,
        isNew: z,
        guildEvent: B,
        eventPreview: K,
        recurrenceId: V
      }), b && null != n && null != g && C > 0 && (0, a.jsx)(y.A, {
        guild: n,
        speakers: g,
        speakerCount: C,
        className: E.YK
      }), (0, a.jsx)("hr", {
        className: E.yF
      }), !W && k.Tn.has(B.entity_type) && (0, a.jsx)(_.A, {
        className: E.K4,
        noBackground: true,
        divider: true
      }), (0, a.jsxs)("div", {
        className: r()(E.mG, E.qr),
        children: [(0, a.jsx)(w, {
          channel: l,
          onJoinClick: P,
          handleLocationClick: J,
          location: D,
          isExternal: Z
        }), (0, a.jsx)("div", {
          className: E.AQ,
          children: (0, a.jsx)(S, {
            channel: l,
            entityType: s,
            isActive: b,
            isJoined: h,
            isUserLurking: m,
            isMember: x,
            rsvped: N,
            canInvite: T,
            onContextMenu: O,
            onRsvpClick: R,
            onJoinGuildClick: L,
            onInviteClick: U,
            onJoinClick: P,
            onStartClick: M,
            onEndClick: I
          })
        })]
      }), Y && (0, a.jsx)("hr", {
        className: E.yF
      })]
    }), Y && (0, a.jsx)(A.A, {
      guildId: null == n ? true : n.id,
      recurrenceRule: X,
      guildEventId: B.id,
      onRecurrenceClick: q
    })]
  })
}