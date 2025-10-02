/** Chunk was on 98878 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => N,
  Z: () => Z
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

function P(e, n) {
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
var N = ((i = {})[i.BANNER = 0] = "BANNER", i[i.THUMBNAIL = 1] = "THUMBNAIL", i);

function S(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: i
  } = (0, _.XJ)(n), l = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(I.Plq.CONNECT, n), [n]), b = a.useMemo(() => (0, d.Z)(n), [n]), g = (0, u.KS)(n);
  return (0, r.jsx)(s.ua7, {
    text: k.intl.string(k.t.nHjY9P),
    shouldShow: !l && null != t,
    children: e => (0, r.jsxs)(s.P3F, P(y({}, e), {
      className: o()(w.inline, w.channelContainer, {
        [w.channelContainerEnabled]: l && null != t,
        [w.channelContainerDisabled]: !l && null != t
      }),
      onClick: t,
      children: [(0, r.jsx)(s.ua7, {
        text: k.intl.string(k.t["48WXaW"]),
        shouldShow: i && b && l && null != t,
        children: e => null != g ? (0, r.jsx)(g, P(y({}, e), {
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

function E(e) {
  let {
    channel: n,
    onJoinClick: t,
    handleLocationClick: i,
    location: a,
    isExternal: l
  } = e;
  return null != n ? (0, r.jsx)(S, {
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
      children: (0, b.m)(a, true)
    })]
  })
}

function O(e) {
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
    onInviteClick: b,
    onEndClick: h,
    onJoinGuildClick: f
  } = e, v = (0, g.Q)(n, t), x = (0, m.Zs)({
    entityType: t,
    isJoined: i,
    isActive: a,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    isChannelPublic: v,
    onJoinClick: u,
    onRsvpClick: _,
    onStartClick: p,
    onInviteClick: b,
    onEndClick: h,
    onJoinGuildClick: f
  });
  return (0, r.jsxs)(s.hE2, {
    fullWidth: false,
    size: "sm",
    children: [null != d ? (0, r.jsx)(m.b5, {
      onClick: d
    }) : null, null == x ? true : x.map((e, n) => (0, r.jsx)(s.zxk, y({}, e), n))]
  })
}

function Z(e) {
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
    isUserLurking: b,
    isJoined: g = false,
    isMember: m = false,
    speakers: I,
    speakerCount: k,
    rsvped: y,
    canInvite: P,
    location: N,
    truncate: S,
    onContextMenu: Z,
    onJoinClick: T,
    onJoinGuildClick: D,
    onRsvpClick: U,
    onStartClick: B,
    onInviteClick: R,
    onEndClick: L,
    onClick: A,
    isNew: H,
    guildEvent: z,
    eventPreview: W,
    recurrenceRule: G,
    recurrenceId: M
  } = e, X = c === j.WX.EXTERNAL, J = X ? e => e.stopPropagation() : true, V = [];
  if (null != G && null != event) {
    let e = (0, h.Ho)(G);
    V = (0, h.PJ)(4, e, new Date(z.scheduled_start_time))
  }
  let q = V.length > 0;
  return (0, r.jsxs)(s.kL8, {
    "aria-label": l,
    onClick: () => null == A ? true : A(M),
    onContextMenu: Z,
    className: o()(w.card, {
      [w.joined]: g,
      [w.lurking]: b
    }, n),
    children: [(0, r.jsxs)("div", {
      className: o()(w.padding, {
        [w.isRecurring]: q
      }),
      children: [0 === u && (0, r.jsx)(f.Z, {
        source: _
      }), (0, r.jsx)(v.ZP, {
        creator: a,
        name: l,
        description: d,
        imageSource: 1 === u ? _ : null,
        truncate: S,
        guildId: null == t ? true : t.id,
        isNew: H,
        guildEvent: z,
        eventPreview: W,
        recurrenceId: M
      }), p && null != t && null != I && k > 0 && (0, r.jsx)(C.Z, {
        guild: t,
        speakers: I,
        speakerCount: k,
        className: w.spacing
      }), (0, r.jsx)("hr", {
        className: w.divider
      }), (0, r.jsxs)("div", {
        className: o()(w.inline, w.footer),
        children: [(0, r.jsx)(E, {
          channel: i,
          onJoinClick: T,
          handleLocationClick: J,
          location: N,
          isExternal: X
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(O, {
            channel: i,
            entityType: c,
            isActive: p,
            isJoined: g,
            isUserLurking: b,
            isMember: m,
            rsvped: y,
            canInvite: P,
            onContextMenu: Z,
            onRsvpClick: U,
            onJoinGuildClick: D,
            onInviteClick: R,
            onJoinClick: T,
            onStartClick: B,
            onEndClick: L
          })
        })]
      }), q && (0, r.jsx)("hr", {
        className: w.divider
      })]
    }), q && (0, r.jsx)(x.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: G,
      guildEventId: z.id,
      onRecurrenceClick: A
    })]
  })
}