/** Chunk was on 98878 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => Z,
  Z: () => O
}), require("./953529.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447003 = require("./447003.js"),
  Chunk471445 = require("./471445.js"),
  Chunk357156 = require("./357156.js"),
  Chunk496675 = require("./496675.js"),
  Chunk725436 = require("./725436.js"),
  Chunk274311 = require("./274311.js"),
  Chunk954313 = require("./954313.js"),
  Chunk285784 = require("./285784.jsx"),
  Chunk95291 = require("./95291.jsx"),
  Chunk742593 = require("./742593.jsx"),
  Chunk810561 = require("./810561.jsx"),
  Chunk131154 = require("./131154.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk187881 = require("./187881.js");

function y(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function N(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
var Z = ((i = {})[i.BANNER = 0] = "BANNER", i[i.THUMBNAIL = 1] = "THUMBNAIL", i);

function E(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: i
  } = (0, _.XJ)(n), l = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(j.Plq.CONNECT, n), [n]), v = a.useMemo(() => (0, d.Z)(n), [n]), m = (0, u.KS)(n);
  return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: k.intl.string(k.t.nHjY9C),
    shouldShow: !l && null != t,
    children: e => (0, r.jsxs)(s.P3F, N(y({}, e), {
      className: o()(w.inline, w.channelContainer, {
        [w.channelContainerEnabled]: l && null != t,
        [w.channelContainerDisabled]: !l && null != t
      }),
      onClick: t,
      children: [(0, r.jsx)(s.aML, {
        "data-migration-pending": true,
        text: k.intl.string(k.t["48WXaW"]),
        shouldShow: i && v && l && null != t,
        children: e => null != m ? (0, r.jsx)(m, N(y({}, e), {
          color: "currentColor",
          size: "custom",
          width: 20,
          height: 20,
          className: w.icon
        })) : null
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: w.channelLocation,
        children: n.name
      })]
    }))
  })
}

function P(e) {
  let {
    channel: n,
    onJoinClick: t,
    handleLocationClick: i,
    location: a,
    isExternal: l
  } = e;
  return null != n ? (0, r.jsx)(E, {
    channel: n,
    onClick: t
  }) : (0, r.jsxs)(s.P3F, {
    className: w.inline,
    onClick: i,
    children: [(0, r.jsx)(s._tJ, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: o()(w.channelContainer, w.icon)
    }), (0, r.jsx)(s.Text, {
      className: l ? w.externalLocation : w.channelLocation,
      variant: "text-sm/normal",
      children: (0, v.m)(a, true)
    })]
  })
}

function S(e) {
  let {
    channel: n,
    entityType: t,
    isJoined: i,
    isActive: a,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    onContextMenu: d,
    onJoinClick: u,
    onRsvpClick: _,
    onStartClick: p,
    onInviteClick: v,
    onEndClick: f,
    onJoinGuildClick: h
  } = e, b = (0, m.Q)(n, t), x = (0, g.Zs)({
    entityType: t,
    isJoined: i,
    isActive: a,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    isChannelPublic: b,
    channel: n,
    onJoinClick: u,
    onRsvpClick: _,
    onStartClick: p,
    onInviteClick: v,
    onEndClick: f,
    onJoinGuildClick: h
  });
  return (0, r.jsxs)(s.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != d ? (0, r.jsx)(g.b5, {
      onClick: d
    }) : null, null == x ? true : x.map((e, n) => (0, r.jsx)(s.Button, y({}, e), n))]
  })
}

function O(e) {
  let {
    className: n,
    guild: t,
    channel: i,
    creator: a,
    name: l,
    entityType: c,
    description: d,
    imageLocation: u = 0,
    imageSource: _,
    isActive: p,
    isUserLurking: v,
    isJoined: m = false,
    isMember: g = false,
    speakers: j,
    speakerCount: k,
    rsvped: y,
    canInvite: N,
    location: Z,
    truncate: E,
    onContextMenu: O,
    onJoinClick: T,
    onJoinGuildClick: U,
    onRsvpClick: D,
    onStartClick: B,
    onInviteClick: R,
    onEndClick: L,
    onClick: A,
    isNew: W,
    guildEvent: z,
    eventPreview: G,
    recurrenceRule: H,
    recurrenceId: M
  } = e, q = c === I.WX.EXTERNAL, J = q ? e => e.stopPropagation() : true, V = [];
  if (null != H && null != event) {
    let e = (0, f.Ho)(H);
    V = (0, f.PJ)(4, e, new Date(z.scheduled_start_time))
  }
  let X = V.length > 0;
  return (0, r.jsxs)(s.kL8, {
    "aria-label": l,
    onClick: () => null == A ? true : A(M),
    onContextMenu: O,
    className: o()(w.card, {
      [w.joined]: m,
      [w.lurking]: v
    }, n),
    children: [(0, r.jsxs)("div", {
      className: o()(w.padding, {
        [w.isRecurring]: X
      }),
      children: [0 === u && (0, r.jsx)(h.Z, {
        source: _
      }), (0, r.jsx)(b.ZP, {
        creator: a,
        name: l,
        description: d,
        imageSource: 1 === u ? _ : null,
        truncate: E,
        guildId: null == t ? true : t.id,
        isNew: W,
        guildEvent: z,
        eventPreview: G,
        recurrenceId: M
      }), p && null != t && null != j && k > 0 && (0, r.jsx)(C.Z, {
        guild: t,
        speakers: j,
        speakerCount: k,
        className: w.spacing
      }), (0, r.jsx)("hr", {
        className: w.divider
      }), (0, r.jsxs)("div", {
        className: o()(w.inline, w.footer),
        children: [(0, r.jsx)(P, {
          channel: i,
          onJoinClick: T,
          handleLocationClick: J,
          location: Z,
          isExternal: q
        }), (0, r.jsx)("div", {
          className: w.eventActions,
          children: (0, r.jsx)(S, {
            channel: i,
            entityType: c,
            isActive: p,
            isJoined: m,
            isUserLurking: v,
            isMember: g,
            rsvped: y,
            canInvite: N,
            onContextMenu: O,
            onRsvpClick: D,
            onJoinGuildClick: U,
            onInviteClick: R,
            onJoinClick: T,
            onStartClick: B,
            onEndClick: L
          })
        })]
      }), X && (0, r.jsx)("hr", {
        className: w.divider
      })]
    }), X && (0, r.jsx)(x.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: H,
      guildEventId: z.id,
      onRecurrenceClick: A
    })]
  })
}