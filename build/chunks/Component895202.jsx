/** Chunk was on 96110 **/
/** chunk id: 895202, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => B,
  c: () => w
}), require("./228524.js");
var a, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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
  w = ((a = {})[a.BANNER = 0] = "BANNER", a[a.THUMBNAIL = 1] = "THUMBNAIL", a);

function U(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: a
  } = (0, b.nr)(n), l = (0, c.bG)([x.A], () => !n.isGuildVocal() || x.A.can(j.xBc.CONNECT, n), [n]), h = i.useMemo(() => (0, d.A)(n), [n]), m = i.useMemo(() => {
    let e = (0, u.gU)(n);
    return null != e ? i.createElement(e, {
      color: "currentColor",
      size: "custom",
      width: 20,
      height: 20,
      className: I.Kk
    }) : null
  }, [n]);
  return (0, r.jsx)(_.m_, {
    text: y.intl.string(y.t.nHjY9C),
    shouldShow: !l && null != t,
    children: (0, r.jsxs)(s.DUT, {
      className: o()(I.mG, I.nU, {
        [I.MN]: l && null != t,
        [I.Pm]: !l && null != t
      }),
      onClick: t,
      children: [(0, r.jsx)(_.m_, {
        text: y.intl.string(y.t["48WXaW"]),
        shouldShow: a && h && l && null != t,
        children: m
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: I.h7,
        children: n.name
      })]
    })
  })
}

function T(e) {
  let {
    channel: n,
    onJoinClick: t,
    handleLocationClick: a,
    location: i,
    isExternal: l
  } = e;
  return null != n ? (0, r.jsx)(U, {
    channel: n,
    onClick: t
  }) : (0, r.jsxs)(s.DUT, {
    className: I.mG,
    onClick: a,
    children: [(0, r.jsx)(s.BT6, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: o()(I.nU, I.Kk)
    }), (0, r.jsx)(s.Text, {
      className: l ? I.dC : I.h7,
      variant: "text-sm/normal",
      children: (0, m.l)(i, true)
    })]
  })
}

function S(e) {
  let {
    channel: n,
    entityType: t,
    isJoined: a,
    isActive: i,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    onContextMenu: _,
    onJoinClick: d,
    onRsvpClick: u,
    onStartClick: b,
    onInviteClick: h,
    onEndClick: x,
    onJoinGuildClick: m
  } = e, f = (0, p.D)(n, t), g = (0, v.Zq)({
    entityType: t,
    isJoined: a,
    isActive: i,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    isChannelPublic: f,
    channel: n,
    onJoinClick: d,
    onRsvpClick: u,
    onStartClick: b,
    onInviteClick: h,
    onEndClick: x,
    onJoinGuildClick: m
  });
  return (0, r.jsxs)(s.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != _ ? (0, r.jsx)(v.jD, {
      onClick: _
    }) : null, null == g ? true : g.map((e, n) => (0, r.jsx)(s.Button, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), a.forEach(function(n) {
          var a;
          a = t[n], n in e ? Object.defineProperty(e, n, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = a
        })
      }
      return e
    }({}, e), n))]
  })
}

function B(e) {
  let {
    className: n,
    guild: t,
    channel: a,
    creator: i,
    name: l,
    entityType: c,
    description: _,
    imageLocation: d = 0,
    imageSource: u,
    isActive: b,
    isUserLurking: x,
    isJoined: m = false,
    isMember: p = false,
    speakers: v,
    speakerCount: j,
    rsvped: y,
    canInvite: w,
    location: U,
    truncate: B,
    onContextMenu: E,
    onJoinClick: R,
    onJoinGuildClick: D,
    onRsvpClick: L,
    onStartClick: P,
    onInviteClick: G,
    onEndClick: q,
    onClick: M,
    isNew: O,
    guildEvent: K,
    eventPreview: W,
    recurrenceRule: J,
    recurrenceId: z,
    hideAgeVerificationNotice: X
  } = e, F = c === A.Ps.EXTERNAL, Q = F ? e => e.stopPropagation() : true, H = [];
  if (null != J && null != event) {
    let e = (0, f.X7)(J);
    H = (0, f.er)(4, e, new Date(K.scheduled_start_time))
  }
  let V = H.length > 0;
  return (0, r.jsxs)(s.sqX, {
    "aria-label": l,
    onClick: () => null == M ? true : M(z),
    onContextMenu: E,
    className: o()(I.Nr, {
      [I.oR]: m,
      [I.hT]: x
    }, n),
    children: [(0, r.jsxs)("div", {
      className: o()(I.Ms, {
        [I.AD]: V
      }),
      children: [0 === d && (0, r.jsx)(g.A, {
        source: u
      }), (0, r.jsx)(k.Ay, {
        creator: i,
        name: l,
        description: _,
        imageSource: 1 === d ? u : null,
        truncate: B,
        guildId: null == t ? true : t.id,
        isNew: O,
        guildEvent: K,
        eventPreview: W,
        recurrenceId: z
      }), b && null != t && null != v && j > 0 && (0, r.jsx)(N.A, {
        guild: t,
        speakers: v,
        speakerCount: j,
        className: I.YK
      }), (0, r.jsx)("hr", {
        className: I.yF
      }), !X && A.Tn.has(K.entity_type) && (0, r.jsx)(h.A, {
        className: I.K4,
        noBackground: true,
        divider: h.V.BOTTOM,
        channelId: null == a ? true : a.id
      }), (0, r.jsxs)("div", {
        className: o()(I.mG, I.qr),
        children: [(0, r.jsx)(T, {
          channel: a,
          onJoinClick: R,
          handleLocationClick: Q,
          location: U,
          isExternal: F
        }), (0, r.jsx)("div", {
          className: I.AQ,
          children: (0, r.jsx)(S, {
            channel: a,
            entityType: c,
            isActive: b,
            isJoined: m,
            isUserLurking: x,
            isMember: p,
            rsvped: y,
            canInvite: w,
            onContextMenu: E,
            onRsvpClick: L,
            onJoinGuildClick: D,
            onInviteClick: G,
            onJoinClick: R,
            onStartClick: P,
            onEndClick: q
          })
        })]
      }), V && (0, r.jsx)("hr", {
        className: I.yF
      })]
    }), V && (0, r.jsx)(C.A, {
      guildId: null == t ? true : t.id,
      recurrenceRule: J,
      guildEventId: K.id,
      onRecurrenceClick: M
    })]
  })
}