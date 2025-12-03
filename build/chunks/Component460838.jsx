/** Chunk was on 98878 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => Z,
  Z: () => O
}), require("./953529.js");
var i, Chunk54381 = require("./54381.js"),
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
  Chunk187881 = require("./187881.js");

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

function y(e, n) {
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
  } = (0, _.XJ)(n), l = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(k.Plq.CONNECT, n), [n]), f = a.useMemo(() => (0, d.Z)(n), [n]), m = (0, u.KS)(n);
  return (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: I.intl.string(I.t.nHjY9C),
    shouldShow: !l && null != t,
    children: e => (0, r.jsxs)(s.P3F, y(w({}, e), {
      className: o()(N.inline, N.channelContainer, {
        [N.channelContainerEnabled]: l && null != t,
        [N.channelContainerDisabled]: !l && null != t
      }),
      onClick: t,
      children: [(0, r.jsx)(s.aML, {
        "data-migration-pending": true,
        text: I.intl.string(I.t["48WXaW"]),
        shouldShow: i && f && l && null != t,
        children: e => null != m ? (0, r.jsx)(m, y(w({}, e), {
          color: "currentColor",
          size: "custom",
          width: 20,
          height: 20,
          className: N.icon
        })) : null
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: N.channelLocation,
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
    className: N.inline,
    onClick: i,
    children: [(0, r.jsx)(s._tJ, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: o()(N.channelContainer, N.icon)
    }), (0, r.jsx)(s.Text, {
      className: l ? N.externalLocation : N.channelLocation,
      variant: "text-sm/normal",
      children: (0, f.m)(a, true)
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
    onInviteClick: f,
    onEndClick: v,
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
    onInviteClick: f,
    onEndClick: v,
    onJoinGuildClick: h
  });
  return (0, r.jsxs)(s.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != d ? (0, r.jsx)(g.b5, {
      onClick: d
    }) : null, null == x ? true : x.map((e, n) => (0, r.jsx)(s.Button, w({}, e), n))]
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
    isUserLurking: f,
    isJoined: m = false,
    isMember: g = false,
    speakers: k,
    speakerCount: I,
    rsvped: w,
    canInvite: y,
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
  } = e, q = c === j.WX.EXTERNAL, J = q ? e => e.stopPropagation() : true, X = [];
  if (null != H && null != event) {
    let e = (0, v.Ho)(H);
    X = (0, v.PJ)(4, e, new Date(z.scheduled_start_time))
  }
  let V = X.length > 0;
  return (0, r.jsxs)(s.kL8, {
    "aria-label": l,
    onClick: () => null == A ? true : A(M),
    onContextMenu: O,
    className: o()(N.card, {
      [N.joined]: m,
      [N.lurking]: f
    }, n),
    children: [(0, r.jsxs)("div", {
      className: o()(N.padding, {
        [N.isRecurring]: V
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
      }), p && null != t && null != k && I > 0 && (0, r.jsx)(C.Z, {
        guild: t,
        speakers: k,
        speakerCount: I,
        className: N.spacing
      }), (0, r.jsx)("hr", {
        className: N.divider
      }), (0, r.jsxs)("div", {
        className: o()(N.inline, N.footer),
        children: [(0, r.jsx)(P, {
          channel: i,
          onJoinClick: T,
          handleLocationClick: J,
          location: Z,
          isExternal: q
        }), (0, r.jsx)("div", {
          className: N.eventActions,
          children: (0, r.jsx)(S, {
            channel: i,
            entityType: c,
            isActive: p,
            isJoined: m,
            isUserLurking: f,
            isMember: g,
            rsvped: w,
            canInvite: y,
            onContextMenu: O,
            onRsvpClick: D,
            onJoinGuildClick: U,
            onInviteClick: R,
            onJoinClick: T,
            onStartClick: B,
            onEndClick: L
          })
        })]
      }), V && (0, r.jsx)("hr", {
        className: N.divider
      })]
    }), V && (0, r.jsx)(x.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: H,
      guildEventId: z.id,
      onRecurrenceClick: A
    })]
  })
}