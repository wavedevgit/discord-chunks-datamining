/** Chunk was on 84722 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => O,
  Z: () => T
}), require("./953529.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk854698 = require("./854698.js"),
  Chunk285784 = require("./285784.jsx"),
  Chunk95291 = require("./95291.jsx"),
  Chunk742593 = require("./742593.jsx"),
  Chunk810561 = require("./810561.jsx"),
  Chunk131154 = require("./131154.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179459 = require("./179459.js");

function w(e) {
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
var O = ((i = {})[i.BANNER = 0] = "BANNER", i[i.THUMBNAIL = 1] = "THUMBNAIL", i);

function S(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: i
  } = (0, h.XJ)(n), r = (0, c.e7)([v.Z], () => !n.isGuildVocal() || v.Z.can(k.Plq.CONNECT, n), [n]), m = a.useMemo(() => (0, u.Z)(n), [n]), g = (0, d.KS)(n);
  return (0, l.jsx)(o.aML, {
    "data-migration-pending": true,
    text: E.intl.string(E.t.nHjY9C),
    shouldShow: !r && null != t,
    children: e => (0, l.jsxs)(o.P3F, I(w({}, e), {
      className: s()(b.inline, b.channelContainer, {
        [b.channelContainerEnabled]: r && null != t,
        [b.channelContainerDisabled]: !r && null != t
      }),
      onClick: t,
      children: [(0, l.jsx)(o.aML, {
        "data-migration-pending": true,
        text: E.intl.string(E.t["48WXaW"]),
        shouldShow: i && m && r && null != t,
        children: e => null != g ? (0, l.jsx)(g, I(w({}, e), {
          color: "currentColor",
          size: "custom",
          width: 20,
          height: 20,
          className: b.icon
        })) : null
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: b.channelLocation,
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
    location: a,
    isExternal: r
  } = e;
  return null != n ? (0, l.jsx)(S, {
    channel: n,
    onClick: t
  }) : (0, l.jsxs)(o.P3F, {
    className: b.inline,
    onClick: i,
    children: [(0, l.jsx)(o._tJ, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: s()(b.channelContainer, b.icon)
    }), (0, l.jsx)(o.Text, {
      className: r ? b.externalLocation : b.channelLocation,
      variant: "text-sm/normal",
      children: (0, m.m)(a, true)
    })]
  })
}

function _(e) {
  let {
    channel: n,
    entityType: t,
    isJoined: i,
    isActive: a,
    isUserLurking: r,
    rsvped: s,
    canInvite: c,
    onContextMenu: u,
    onJoinClick: d,
    onRsvpClick: h,
    onStartClick: v,
    onInviteClick: m,
    onEndClick: x,
    onJoinGuildClick: C
  } = e, j = (0, g.Q)(n, t), f = (0, p.Zs)({
    entityType: t,
    isJoined: i,
    isActive: a,
    isUserLurking: r,
    rsvped: s,
    canInvite: c,
    isChannelPublic: j,
    channel: n,
    onJoinClick: d,
    onRsvpClick: h,
    onStartClick: v,
    onInviteClick: m,
    onEndClick: x,
    onJoinGuildClick: C
  });
  return (0, l.jsxs)(o.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != u ? (0, l.jsx)(p.b5, {
      onClick: u
    }) : null, null == f ? true : f.map((e, n) => (0, l.jsx)(o.Button, w({}, e), n))]
  })
}

function T(e) {
  let {
    className: n,
    guild: t,
    channel: i,
    creator: a,
    name: r,
    entityType: c,
    description: u,
    imageLocation: d = 0,
    imageSource: h,
    isActive: v,
    isUserLurking: m,
    isJoined: g = false,
    isMember: p = false,
    speakers: k,
    speakerCount: E,
    rsvped: w,
    canInvite: I,
    location: O,
    truncate: S,
    onContextMenu: T,
    onJoinClick: L,
    onJoinGuildClick: P,
    onRsvpClick: A,
    onStartClick: G,
    onInviteClick: X,
    onEndClick: M,
    onClick: W,
    isNew: R,
    guildEvent: J,
    eventPreview: U,
    recurrenceRule: B,
    recurrenceId: D
  } = e, V = c === y.WX.EXTERNAL, z = V ? e => e.stopPropagation() : true, H = [];
  if (null != B && null != event) {
    let e = (0, x.Ho)(B);
    H = (0, x.PJ)(4, e, new Date(J.scheduled_start_time))
  }
  let q = H.length > 0;
  return (0, l.jsxs)(o.kL8, {
    "aria-label": r,
    onClick: () => null == W ? true : W(D),
    onContextMenu: T,
    className: s()(b.card, {
      [b.joined]: g,
      [b.lurking]: m
    }, n),
    children: [(0, l.jsxs)("div", {
      className: s()(b.padding, {
        [b.isRecurring]: q
      }),
      children: [0 === d && (0, l.jsx)(C.Z, {
        source: h
      }), (0, l.jsx)(j.ZP, {
        creator: a,
        name: r,
        description: u,
        imageSource: 1 === d ? h : null,
        truncate: S,
        guildId: null == t ? true : t.id,
        isNew: R,
        guildEvent: J,
        eventPreview: U,
        recurrenceId: D
      }), v && null != t && null != k && E > 0 && (0, l.jsx)(N.Z, {
        guild: t,
        speakers: k,
        speakerCount: E,
        className: b.spacing
      }), (0, l.jsx)("hr", {
        className: b.divider
      }), (0, l.jsxs)("div", {
        className: s()(b.inline, b.footer),
        children: [(0, l.jsx)(Z, {
          channel: i,
          onJoinClick: L,
          handleLocationClick: z,
          location: O,
          isExternal: V
        }), (0, l.jsx)("div", {
          className: b.eventActions,
          children: (0, l.jsx)(_, {
            channel: i,
            entityType: c,
            isActive: v,
            isJoined: g,
            isUserLurking: m,
            isMember: p,
            rsvped: w,
            canInvite: I,
            onContextMenu: T,
            onRsvpClick: A,
            onJoinGuildClick: P,
            onInviteClick: X,
            onJoinClick: L,
            onStartClick: G,
            onEndClick: M
          })
        })]
      }), q && (0, l.jsx)("hr", {
        className: b.divider
      })]
    }), q && (0, l.jsx)(f.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: B,
      guildEventId: J.id,
      onRecurrenceClick: W
    })]
  })
}