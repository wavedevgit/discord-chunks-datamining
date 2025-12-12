/** Chunk was on 97476 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => N,
  Z: () => O
}), require("./953529.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk854698 = require("./854698.js"),
  Chunk285784 = require("./285784.jsx"),
  Chunk95291 = require("./95291.jsx"),
  Chunk742593 = require("./742593.jsx"),
  Chunk810561 = require("./810561.jsx"),
  Chunk131154 = require("./131154.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk518838 = require("./518838.js");

function y(e) {
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
}

function w(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      t.push.apply(t, a)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
var N = ((a = {})[a.BANNER = 0] = "BANNER", a[a.THUMBNAIL = 1] = "THUMBNAIL", a);

function E(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: a
  } = (0, b.XJ)(n), l = (0, c.e7)([f.Z], () => !n.isGuildVocal() || f.Z.can(I.Plq.CONNECT, n), [n]), p = r.useMemo(() => (0, s.Z)(n), [n]), h = (0, u.KS)(n);
  return (0, i.jsx)(d.aML, {
    "data-migration-pending": true,
    text: k.intl.string(k.t.nHjY9C),
    shouldShow: !l && null != t,
    children: e => (0, i.jsxs)(d.P3F, w(y({}, e), {
      className: o()(Z.inline, Z.channelContainer, {
        [Z.channelContainerEnabled]: l && null != t,
        [Z.channelContainerDisabled]: !l && null != t
      }),
      onClick: t,
      children: [(0, i.jsx)(d.aML, {
        "data-migration-pending": true,
        text: k.intl.string(k.t["48WXaW"]),
        shouldShow: a && p && l && null != t,
        children: e => null != h ? (0, i.jsx)(h, w(y({}, e), {
          color: "currentColor",
          size: "custom",
          width: 20,
          height: 20,
          className: Z.icon
        })) : null
      }), (0, i.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: Z.channelLocation,
        children: n.name
      })]
    }))
  })
}

function P(e) {
  let {
    channel: n,
    onJoinClick: t,
    handleLocationClick: a,
    location: r,
    isExternal: l
  } = e;
  return null != n ? (0, i.jsx)(E, {
    channel: n,
    onClick: t
  }) : (0, i.jsxs)(d.P3F, {
    className: Z.inline,
    onClick: a,
    children: [(0, i.jsx)(d._tJ, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: o()(Z.channelContainer, Z.icon)
    }), (0, i.jsx)(d.Text, {
      className: l ? Z.externalLocation : Z.channelLocation,
      variant: "text-sm/normal",
      children: (0, p.m)(r, true)
    })]
  })
}

function S(e) {
  let {
    channel: n,
    entityType: t,
    isJoined: a,
    isActive: r,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    onContextMenu: s,
    onJoinClick: u,
    onRsvpClick: b,
    onStartClick: f,
    onInviteClick: p,
    onEndClick: v,
    onJoinGuildClick: m
  } = e, x = (0, h.Q)(n, t), _ = (0, g.Zs)({
    entityType: t,
    isJoined: a,
    isActive: r,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    isChannelPublic: x,
    channel: n,
    onJoinClick: u,
    onRsvpClick: b,
    onStartClick: f,
    onInviteClick: p,
    onEndClick: v,
    onJoinGuildClick: m
  });
  return (0, i.jsxs)(d.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != s ? (0, i.jsx)(g.b5, {
      onClick: s
    }) : null, null == _ ? true : _.map((e, n) => (0, i.jsx)(d.Button, y({}, e), n))]
  })
}

function O(e) {
  let {
    className: n,
    guild: t,
    channel: a,
    creator: r,
    name: l,
    entityType: c,
    description: s,
    imageLocation: u = 0,
    imageSource: b,
    isActive: f,
    isUserLurking: p,
    isJoined: h = false,
    isMember: g = false,
    speakers: I,
    speakerCount: k,
    rsvped: y,
    canInvite: w,
    location: N,
    truncate: E,
    onContextMenu: O,
    onJoinClick: T,
    onJoinGuildClick: U,
    onRsvpClick: D,
    onStartClick: R,
    onInviteClick: A,
    onEndClick: L,
    onClick: B,
    isNew: W,
    guildEvent: G,
    eventPreview: z,
    recurrenceRule: H,
    recurrenceId: M
  } = e, q = c === j.WX.EXTERNAL, J = q ? e => e.stopPropagation() : true, X = [];
  if (null != H && null != event) {
    let e = (0, v.Ho)(H);
    X = (0, v.PJ)(4, e, new Date(G.scheduled_start_time))
  }
  let V = X.length > 0;
  return (0, i.jsxs)(d.kL8, {
    "aria-label": l,
    onClick: () => null == B ? true : B(M),
    onContextMenu: O,
    className: o()(Z.card, {
      [Z.joined]: h,
      [Z.lurking]: p
    }, n),
    children: [(0, i.jsxs)("div", {
      className: o()(Z.padding, {
        [Z.isRecurring]: V
      }),
      children: [0 === u && (0, i.jsx)(m.Z, {
        source: b
      }), (0, i.jsx)(x.ZP, {
        creator: r,
        name: l,
        description: s,
        imageSource: 1 === u ? b : null,
        truncate: E,
        guildId: null == t ? true : t.id,
        isNew: W,
        guildEvent: G,
        eventPreview: z,
        recurrenceId: M
      }), f && null != t && null != I && k > 0 && (0, i.jsx)(C.Z, {
        guild: t,
        speakers: I,
        speakerCount: k,
        className: Z.spacing
      }), (0, i.jsx)("hr", {
        className: Z.divider
      }), (0, i.jsxs)("div", {
        className: o()(Z.inline, Z.footer),
        children: [(0, i.jsx)(P, {
          channel: a,
          onJoinClick: T,
          handleLocationClick: J,
          location: N,
          isExternal: q
        }), (0, i.jsx)("div", {
          className: Z.eventActions,
          children: (0, i.jsx)(S, {
            channel: a,
            entityType: c,
            isActive: f,
            isJoined: h,
            isUserLurking: p,
            isMember: g,
            rsvped: y,
            canInvite: w,
            onContextMenu: O,
            onRsvpClick: D,
            onJoinGuildClick: U,
            onInviteClick: A,
            onJoinClick: T,
            onStartClick: R,
            onEndClick: L
          })
        })]
      }), V && (0, i.jsx)("hr", {
        className: Z.divider
      })]
    }), V && (0, i.jsx)(_.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: H,
      guildEventId: G.id,
      onRecurrenceClick: B
    })]
  })
}