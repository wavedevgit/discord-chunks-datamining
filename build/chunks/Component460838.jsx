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
var S = ((i = {})[i.BANNER = 0] = "BANNER", i[i.THUMBNAIL = 1] = "THUMBNAIL", i);

function Z(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: i
  } = (0, h.XJ)(n), a = (0, c.e7)([v.Z], () => !n.isGuildVocal() || v.Z.can(k.Plq.CONNECT, n), [n]), g = r.useMemo(() => (0, u.Z)(n), [n]), m = (0, d.KS)(n);
  return (0, l.jsx)(o.aML, {
    "data-migration-pending": true,
    text: E.intl.string(E.t.nHjY9P),
    shouldShow: !a && null != t,
    children: e => (0, l.jsxs)(o.P3F, I(w({}, e), {
      className: s()(b.inline, b.channelContainer, {
        [b.channelContainerEnabled]: a && null != t,
        [b.channelContainerDisabled]: !a && null != t
      }),
      onClick: t,
      children: [(0, l.jsx)(o.aML, {
        "data-migration-pending": true,
        text: E.intl.string(E.t["48WXaW"]),
        shouldShow: i && g && a && null != t,
        children: e => null != m ? (0, l.jsx)(m, I(w({}, e), {
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

function O(e) {
  let {
    channel: n,
    onJoinClick: t,
    handleLocationClick: i,
    location: r,
    isExternal: a
  } = e;
  return null != n ? (0, l.jsx)(Z, {
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
      className: a ? b.externalLocation : b.channelLocation,
      variant: "text-sm/normal",
      children: (0, g.m)(r, true)
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
    onInviteClick: g,
    onEndClick: x,
    onJoinGuildClick: C
  } = e, j = (0, m.Q)(n, t), f = (0, p.Zs)({
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
    onInviteClick: g,
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
    creator: r,
    name: a,
    entityType: c,
    description: u,
    imageLocation: d = 0,
    imageSource: h,
    isActive: v,
    isUserLurking: g,
    isJoined: m = false,
    isMember: p = false,
    speakers: k,
    speakerCount: E,
    rsvped: w,
    canInvite: I,
    location: S,
    truncate: Z,
    onContextMenu: T,
    onJoinClick: L,
    onJoinGuildClick: P,
    onRsvpClick: G,
    onStartClick: A,
    onInviteClick: X,
    onEndClick: M,
    onClick: R,
    isNew: W,
    guildEvent: J,
    eventPreview: U,
    recurrenceRule: V,
    recurrenceId: B
  } = e, D = c === N.WX.EXTERNAL, q = D ? e => e.stopPropagation() : true, z = [];
  if (null != V && null != event) {
    let e = (0, x.Ho)(V);
    z = (0, x.PJ)(4, e, new Date(J.scheduled_start_time))
  }
  let H = z.length > 0;
  return (0, l.jsxs)(o.kL8, {
    "aria-label": a,
    onClick: () => null == R ? true : R(B),
    onContextMenu: T,
    className: s()(b.card, {
      [b.joined]: m,
      [b.lurking]: g
    }, n),
    children: [(0, l.jsxs)("div", {
      className: s()(b.padding, {
        [b.isRecurring]: H
      }),
      children: [0 === d && (0, l.jsx)(C.Z, {
        source: h
      }), (0, l.jsx)(j.ZP, {
        creator: r,
        name: a,
        description: u,
        imageSource: 1 === d ? h : null,
        truncate: Z,
        guildId: null == t ? true : t.id,
        isNew: W,
        guildEvent: J,
        eventPreview: U,
        recurrenceId: B
      }), v && null != t && null != k && E > 0 && (0, l.jsx)(y.Z, {
        guild: t,
        speakers: k,
        speakerCount: E,
        className: b.spacing
      }), (0, l.jsx)("hr", {
        className: b.divider
      }), (0, l.jsxs)("div", {
        className: s()(b.inline, b.footer),
        children: [(0, l.jsx)(O, {
          channel: i,
          onJoinClick: L,
          handleLocationClick: q,
          location: S,
          isExternal: D
        }), (0, l.jsx)("div", {
          children: (0, l.jsx)(_, {
            channel: i,
            entityType: c,
            isActive: v,
            isJoined: m,
            isUserLurking: g,
            isMember: p,
            rsvped: w,
            canInvite: I,
            onContextMenu: T,
            onRsvpClick: G,
            onJoinGuildClick: P,
            onInviteClick: X,
            onJoinClick: L,
            onStartClick: A,
            onEndClick: M
          })
        })]
      }), H && (0, l.jsx)("hr", {
        className: b.divider
      })]
    }), H && (0, l.jsx)(f.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: V,
      guildEventId: J.id,
      onRecurrenceClick: R
    })]
  })
}