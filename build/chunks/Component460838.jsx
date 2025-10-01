/** Chunk was on 84722 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => S,
  Z: () => T
}), require("./953529.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk179459 = require("./179459.js");

function b(e) {
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

function I(e, n) {
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
var S = ((i = {})[i.BANNER = 0] = "BANNER", i[i.THUMBNAIL = 1] = "THUMBNAIL", i);

function O(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: i
  } = (0, h.XJ)(n), a = (0, c.e7)([v.Z], () => !n.isGuildVocal() || v.Z.can(k.Plq.CONNECT, n), [n]), m = r.useMemo(() => (0, u.Z)(n), [n]), x = (0, d.KS)(n);
  return (0, l.jsx)(o.ua7, {
    text: E.intl.string(E.t.nHjY9P),
    shouldShow: !a && null != t,
    children: e => (0, l.jsxs)(o.P3F, I(b({}, e), {
      className: s()(w.inline, w.channelContainer, {
        [w.channelContainerEnabled]: a && null != t,
        [w.channelContainerDisabled]: !a && null != t
      }),
      onClick: t,
      children: [(0, l.jsx)(o.ua7, {
        text: E.intl.string(E.t["48WXaW"]),
        shouldShow: i && m && a && null != t,
        children: e => null != x ? (0, l.jsx)(x, I(b({}, e), {
          color: "currentColor",
          size: "custom",
          width: 20,
          height: 20,
          className: w.icon
        })) : null
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: w.channelLocation,
        children: n.name
      })]
    }))
  })
}

function Z(e) {
  let {
    channel: n,
    onJoinClick: t,
    handleLocationClick: i,
    location: r,
    isExternal: a
  } = e;
  return null != n ? (0, l.jsx)(O, {
    channel: n,
    onClick: t
  }) : (0, l.jsxs)(o.P3F, {
    className: w.inline,
    onClick: i,
    children: [(0, l.jsx)(o._tJ, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: s()(w.channelContainer, w.icon)
    }), (0, l.jsx)(o.Text, {
      className: a ? w.externalLocation : w.channelLocation,
      variant: "text-sm/normal",
      children: (0, m.m)(r, true)
    })]
  })
}

function _(e) {
  let {
    channel: n,
    entityType: t,
    isJoined: i,
    isActive: r,
    isUserLurking: a,
    rsvped: s,
    canInvite: c,
    onContextMenu: u,
    onJoinClick: d,
    onRsvpClick: h,
    onStartClick: v,
    onInviteClick: m,
    onEndClick: g,
    onJoinGuildClick: p
  } = e, j = (0, x.Q)(n, t), f = (0, C.Zs)({
    entityType: t,
    isJoined: i,
    isActive: r,
    isUserLurking: a,
    rsvped: s,
    canInvite: c,
    isChannelPublic: j,
    onJoinClick: d,
    onRsvpClick: h,
    onStartClick: v,
    onInviteClick: m,
    onEndClick: g,
    onJoinGuildClick: p
  });
  return (0, l.jsxs)(o.hE2, {
    fullWidth: false,
    size: "sm",
    children: [null != u ? (0, l.jsx)(C.b5, {
      onClick: u
    }) : null, null == f ? true : f.map((e, n) => (0, l.jsx)(o.zxk, b({}, e), n))]
  })
}

function T(e) {
  let {
    className: n,
    guild: t,
    channel: i,
    creator: r,
    name: a,
    entityType: c,
    description: u,
    imageLocation: d = 0,
    imageSource: h,
    isActive: v,
    isUserLurking: m,
    isJoined: x = false,
    isMember: C = false,
    speakers: k,
    speakerCount: E,
    rsvped: b,
    canInvite: I,
    location: S,
    truncate: O,
    onContextMenu: T,
    onJoinClick: P,
    onJoinGuildClick: A,
    onRsvpClick: G,
    onStartClick: L,
    onInviteClick: X,
    onEndClick: R,
    onClick: M,
    isNew: W,
    guildEvent: J,
    eventPreview: U,
    recurrenceRule: V,
    recurrenceId: D
  } = e, q = c === y.WX.EXTERNAL, z = q ? e => e.stopPropagation() : true, H = [];
  if (null != V && null != event) {
    let e = (0, g.Ho)(V);
    H = (0, g.PJ)(4, e, new Date(J.scheduled_start_time))
  }
  let B = H.length > 0;
  return (0, l.jsxs)(o.kL8, {
    "aria-label": a,
    onClick: () => null == M ? true : M(D),
    onContextMenu: T,
    className: s()(w.card, {
      [w.joined]: x,
      [w.lurking]: m
    }, n),
    children: [(0, l.jsxs)("div", {
      className: s()(w.padding, {
        [w.isRecurring]: B
      }),
      children: [0 === d && (0, l.jsx)(p.Z, {
        source: h
      }), (0, l.jsx)(j.ZP, {
        creator: r,
        name: a,
        description: u,
        imageSource: 1 === d ? h : null,
        truncate: O,
        guildId: null == t ? true : t.id,
        isNew: W,
        guildEvent: J,
        eventPreview: U,
        recurrenceId: D
      }), v && null != t && null != k && E > 0 && (0, l.jsx)(N.Z, {
        guild: t,
        speakers: k,
        speakerCount: E,
        className: w.spacing
      }), (0, l.jsx)("hr", {
        className: w.divider
      }), (0, l.jsxs)("div", {
        className: s()(w.inline, w.footer),
        children: [(0, l.jsx)(Z, {
          channel: i,
          onJoinClick: P,
          handleLocationClick: z,
          location: S,
          isExternal: q
        }), (0, l.jsx)("div", {
          children: (0, l.jsx)(_, {
            channel: i,
            entityType: c,
            isActive: v,
            isJoined: x,
            isUserLurking: m,
            isMember: C,
            rsvped: b,
            canInvite: I,
            onContextMenu: T,
            onRsvpClick: G,
            onJoinGuildClick: A,
            onInviteClick: X,
            onJoinClick: P,
            onStartClick: L,
            onEndClick: R
          })
        })]
      }), B && (0, l.jsx)("hr", {
        className: w.divider
      })]
    }), B && (0, l.jsx)(f.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: V,
      guildEventId: J.id,
      onRecurrenceClick: M
    })]
  })
}