/** Chunk was on 98878 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => E,
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
var E = ((i = {})[i.BANNER = 0] = "BANNER", i[i.THUMBNAIL = 1] = "THUMBNAIL", i);

function S(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: i
  } = (0, _.XJ)(n), l = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(j.Plq.CONNECT, n), [n]), g = r.useMemo(() => (0, d.Z)(n), [n]), m = (0, u.KS)(n);
  return (0, a.jsx)(s.aML, {
    "data-migration-pending": true,
    text: k.intl.string(k.t.nHjY9C),
    shouldShow: !l && null != t,
    children: e => (0, a.jsxs)(s.P3F, N(y({}, e), {
      className: o()(w.inline, w.channelContainer, {
        [w.channelContainerEnabled]: l && null != t,
        [w.channelContainerDisabled]: !l && null != t
      }),
      onClick: t,
      children: [(0, a.jsx)(s.aML, {
        "data-migration-pending": true,
        text: k.intl.string(k.t["48WXaW"]),
        shouldShow: i && g && l && null != t,
        children: e => null != m ? (0, a.jsx)(m, N(y({}, e), {
          color: "currentColor",
          size: "custom",
          width: 20,
          height: 20,
          className: w.icon
        })) : null
      }), (0, a.jsx)(s.Text, {
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
    isExternal: l
  } = e;
  return null != n ? (0, a.jsx)(S, {
    channel: n,
    onClick: t
  }) : (0, a.jsxs)(s.P3F, {
    className: w.inline,
    onClick: i,
    children: [(0, a.jsx)(s._tJ, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: o()(w.channelContainer, w.icon)
    }), (0, a.jsx)(s.Text, {
      className: l ? w.externalLocation : w.channelLocation,
      variant: "text-sm/normal",
      children: (0, g.m)(r, true)
    })]
  })
}

function P(e) {
  let {
    channel: n,
    entityType: t,
    isJoined: i,
    isActive: r,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    onContextMenu: d,
    onJoinClick: u,
    onRsvpClick: _,
    onStartClick: p,
    onInviteClick: g,
    onEndClick: b,
    onJoinGuildClick: f
  } = e, v = (0, m.Q)(n, t), x = (0, h.Zs)({
    entityType: t,
    isJoined: i,
    isActive: r,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    isChannelPublic: v,
    onJoinClick: u,
    onRsvpClick: _,
    onStartClick: p,
    onInviteClick: g,
    onEndClick: b,
    onJoinGuildClick: f
  });
  return (0, a.jsxs)(s.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != d ? (0, a.jsx)(h.b5, {
      onClick: d
    }) : null, null == x ? true : x.map((e, n) => (0, a.jsx)(s.Button, y({}, e), n))]
  })
}

function O(e) {
  let {
    className: n,
    guild: t,
    channel: i,
    creator: r,
    name: l,
    entityType: c,
    description: d,
    imageLocation: u = 0,
    imageSource: _,
    isActive: p,
    isUserLurking: g,
    isJoined: m = false,
    isMember: h = false,
    speakers: j,
    speakerCount: k,
    rsvped: y,
    canInvite: N,
    location: E,
    truncate: S,
    onContextMenu: O,
    onJoinClick: T,
    onJoinGuildClick: U,
    onRsvpClick: B,
    onStartClick: D,
    onInviteClick: R,
    onEndClick: L,
    onClick: A,
    isNew: H,
    guildEvent: z,
    eventPreview: G,
    recurrenceRule: W,
    recurrenceId: M
  } = e, J = c === I.WX.EXTERNAL, V = J ? e => e.stopPropagation() : true, X = [];
  if (null != W && null != event) {
    let e = (0, b.Ho)(W);
    X = (0, b.PJ)(4, e, new Date(z.scheduled_start_time))
  }
  let F = X.length > 0;
  return (0, a.jsxs)(s.kL8, {
    "aria-label": l,
    onClick: () => null == A ? true : A(M),
    onContextMenu: O,
    className: o()(w.card, {
      [w.joined]: m,
      [w.lurking]: g
    }, n),
    children: [(0, a.jsxs)("div", {
      className: o()(w.padding, {
        [w.isRecurring]: F
      }),
      children: [0 === u && (0, a.jsx)(f.Z, {
        source: _
      }), (0, a.jsx)(v.ZP, {
        creator: r,
        name: l,
        description: d,
        imageSource: 1 === u ? _ : null,
        truncate: S,
        guildId: null == t ? true : t.id,
        isNew: H,
        guildEvent: z,
        eventPreview: G,
        recurrenceId: M
      }), p && null != t && null != j && k > 0 && (0, a.jsx)(C.Z, {
        guild: t,
        speakers: j,
        speakerCount: k,
        className: w.spacing
      }), (0, a.jsx)("hr", {
        className: w.divider
      }), (0, a.jsxs)("div", {
        className: o()(w.inline, w.footer),
        children: [(0, a.jsx)(Z, {
          channel: i,
          onJoinClick: T,
          handleLocationClick: V,
          location: E,
          isExternal: J
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(P, {
            channel: i,
            entityType: c,
            isActive: p,
            isJoined: m,
            isUserLurking: g,
            isMember: h,
            rsvped: y,
            canInvite: N,
            onContextMenu: O,
            onRsvpClick: B,
            onJoinGuildClick: U,
            onInviteClick: R,
            onJoinClick: T,
            onStartClick: D,
            onEndClick: L
          })
        })]
      }), F && (0, a.jsx)("hr", {
        className: w.divider
      })]
    }), F && (0, a.jsx)(x.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: W,
      guildEventId: z.id,
      onRecurrenceClick: A
    })]
  })
}