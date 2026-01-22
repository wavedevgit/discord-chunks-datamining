/** Chunk was on 96110 **/
/** chunk id: 895202, original params: e,c,a (module,exports,require) **/
require.d(exports, {
  A: () => B,
  c: () => E
}), require("./228524.js");
var n, Chunk627968 = require("./627968.js"),
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
  E = ((n = {})[n.BANNER = 0] = "BANNER", n[n.THUMBNAIL = 1] = "THUMBNAIL", n);

function w(e) {
  let {
    channel: c,
    onClick: a
  } = e, {
    canManageAllEvents: n
  } = (0, u.nr)(c), d = (0, f.bG)([x.A], () => !c.isGuildVocal() || x.A.can(g.xBc.CONNECT, c), [c]), _ = t.useMemo(() => (0, o.A)(c), [c]), h = t.useMemo(() => {
    let e = (0, b.gU)(c);
    return null != e ? t.createElement(e, {
      color: "currentColor",
      size: "custom",
      width: 20,
      height: 20,
      className: T.Kk
    }) : null
  }, [c]);
  return (0, l.jsx)(s.m_, {
    text: y.intl.string(y.t.nHjY9C),
    shouldShow: !d && null != a,
    children: (0, l.jsxs)(i.DUT, {
      className: r()(T.mG, T.nU, {
        [T.MN]: d && null != a,
        [T.Pm]: !d && null != a
      }),
      onClick: a,
      children: [(0, l.jsx)(s.m_, {
        text: y.intl.string(y.t["48WXaW"]),
        shouldShow: n && _ && d && null != a,
        children: h
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: T.h7,
        children: c.name
      })]
    })
  })
}

function U(e) {
  let {
    channel: c,
    onJoinClick: a,
    handleLocationClick: n,
    location: t,
    isExternal: d
  } = e;
  return null != c ? (0, l.jsx)(w, {
    channel: c,
    onClick: a
  }) : (0, l.jsxs)(i.DUT, {
    className: T.mG,
    onClick: n,
    children: [(0, l.jsx)(i.BT6, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: r()(T.nU, T.Kk)
    }), (0, l.jsx)(i.Text, {
      className: d ? T.dC : T.h7,
      variant: "text-sm/normal",
      children: (0, h.l)(t, true)
    })]
  })
}

function L(e) {
  let {
    channel: c,
    entityType: a,
    isJoined: n,
    isActive: t,
    isUserLurking: d,
    rsvped: r,
    canInvite: f,
    onContextMenu: s,
    onJoinClick: o,
    onRsvpClick: b,
    onStartClick: u,
    onInviteClick: _,
    onEndClick: x,
    onJoinGuildClick: h
  } = e, v = (0, m.D)(c, a), k = (0, p.Zq)({
    entityType: a,
    isJoined: n,
    isActive: t,
    isUserLurking: d,
    rsvped: r,
    canInvite: f,
    isChannelPublic: v,
    channel: c,
    onJoinClick: o,
    onRsvpClick: b,
    onStartClick: u,
    onInviteClick: _,
    onEndClick: x,
    onJoinGuildClick: h
  });
  return (0, l.jsxs)(i.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != s ? (0, l.jsx)(p.jD, {
      onClick: s
    }) : null, null == k ? true : k.map((e, c) => (0, l.jsx)(i.Button, function(e) {
      for (var c = 1; c < arguments.length; c++) {
        var a = null != arguments[c] ? arguments[c] : {},
          n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), n.forEach(function(c) {
          var n;
          n = a[c], c in e ? Object.defineProperty(e, c, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[c] = n
        })
      }
      return e
    }({}, e), c))]
  })
}

function B(e) {
  let {
    className: c,
    guild: a,
    channel: n,
    creator: t,
    name: d,
    entityType: f,
    description: s,
    imageLocation: o = 0,
    imageSource: b,
    isActive: u,
    isUserLurking: x,
    isJoined: h = false,
    isMember: m = false,
    speakers: p,
    speakerCount: g,
    rsvped: y,
    canInvite: E,
    location: w,
    truncate: B,
    onContextMenu: R,
    onJoinClick: D,
    onJoinGuildClick: G,
    onRsvpClick: I,
    onStartClick: K,
    onInviteClick: O,
    onEndClick: P,
    onClick: S,
    isNew: q,
    guildEvent: M,
    eventPreview: J,
    recurrenceRule: X,
    recurrenceId: z,
    hideAgeVerificationNotice: Q
  } = e, F = f === C.Ps.EXTERNAL, W = F ? e => e.stopPropagation() : true, V = [];
  if (null != X && null != event) {
    let e = (0, v.X7)(X);
    V = (0, v.er)(4, e, new Date(M.scheduled_start_time))
  }
  let Y = V.length > 0;
  return (0, l.jsxs)(i.sqX, {
    "aria-label": d,
    onClick: () => null == S ? true : S(z),
    onContextMenu: R,
    className: r()(T.Nr, {
      [T.oR]: h,
      [T.hT]: x
    }, c),
    children: [(0, l.jsxs)("div", {
      className: r()(T.Ms, {
        [T.AD]: Y
      }),
      children: [0 === o && (0, l.jsx)(k.A, {
        source: b
      }), (0, l.jsx)(N.Ay, {
        creator: t,
        name: d,
        description: s,
        imageSource: 1 === o ? b : null,
        truncate: B,
        guildId: null == a ? true : a.id,
        isNew: q,
        guildEvent: M,
        eventPreview: J,
        recurrenceId: z
      }), u && null != a && null != p && g > 0 && (0, l.jsx)(A.A, {
        guild: a,
        speakers: p,
        speakerCount: g,
        className: T.YK
      }), (0, l.jsx)("hr", {
        className: T.yF
      }), !Q && C.Tn.has(M.entity_type) && (0, l.jsx)(_.A, {
        className: T.K4,
        noBackground: true,
        divider: _.V.BOTTOM,
        channelId: null == n ? true : n.id
      }), (0, l.jsxs)("div", {
        className: r()(T.mG, T.qr),
        children: [(0, l.jsx)(U, {
          channel: n,
          onJoinClick: D,
          handleLocationClick: W,
          location: w,
          isExternal: F
        }), (0, l.jsx)("div", {
          className: T.AQ,
          children: (0, l.jsx)(L, {
            channel: n,
            entityType: f,
            isActive: u,
            isJoined: h,
            isUserLurking: x,
            isMember: m,
            rsvped: y,
            canInvite: E,
            onContextMenu: R,
            onRsvpClick: I,
            onJoinGuildClick: G,
            onInviteClick: O,
            onJoinClick: D,
            onStartClick: K,
            onEndClick: P
          })
        })]
      }), Y && (0, l.jsx)("hr", {
        className: T.yF
      })]
    }), Y && (0, l.jsx)(j.A, {
      guildId: null == a ? true : a.id,
      recurrenceRule: X,
      guildEventId: M.id,
      onRecurrenceClick: S
    })]
  })
}