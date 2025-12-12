/** Chunk was on 97476 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => E,
  Z: () => P
}), require("./953529.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk518838 = require("./518838.js"),
  E = ((a = {})[a.BANNER = 0] = "BANNER", a[a.THUMBNAIL = 1] = "THUMBNAIL", a);

function w(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: a
  } = (0, f.XJ)(n), l = (0, o.e7)([h.Z], () => !n.isGuildVocal() || h.Z.can(Z.Plq.CONNECT, n), [n]), p = r.useMemo(() => (0, u.Z)(n), [n]), v = r.useMemo(() => {
    let e = (0, b.KS)(n);
    return null != e ? r.createElement(e, {
      color: "currentColor",
      size: "custom",
      width: 20,
      height: 20,
      className: N.icon
    }) : null
  }, [n]);
  return (0, i.jsx)(d.u, {
    text: j.intl.string(j.t.nHjY9C),
    shouldShow: !l && null != t,
    children: (0, i.jsxs)(s.P3F, {
      className: c()(N.inline, N.channelContainer, {
        [N.channelContainerEnabled]: l && null != t,
        [N.channelContainerDisabled]: !l && null != t
      }),
      onClick: t,
      children: [(0, i.jsx)(d.u, {
        text: j.intl.string(j.t["48WXaW"]),
        shouldShow: a && p && l && null != t,
        children: v
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: N.channelLocation,
        children: n.name
      })]
    })
  })
}

function y(e) {
  let {
    channel: n,
    onJoinClick: t,
    handleLocationClick: a,
    location: r,
    isExternal: l
  } = e;
  return null != n ? (0, i.jsx)(w, {
    channel: n,
    onClick: t
  }) : (0, i.jsxs)(s.P3F, {
    className: N.inline,
    onClick: a,
    children: [(0, i.jsx)(s._tJ, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: c()(N.channelContainer, N.icon)
    }), (0, i.jsx)(s.Text, {
      className: l ? N.externalLocation : N.channelLocation,
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
    rsvped: c,
    canInvite: o,
    onContextMenu: d,
    onJoinClick: u,
    onRsvpClick: b,
    onStartClick: f,
    onInviteClick: h,
    onEndClick: p,
    onJoinGuildClick: m
  } = e, x = (0, v.Q)(n, t), _ = (0, g.Zs)({
    entityType: t,
    isJoined: a,
    isActive: r,
    isUserLurking: l,
    rsvped: c,
    canInvite: o,
    isChannelPublic: x,
    channel: n,
    onJoinClick: u,
    onRsvpClick: b,
    onStartClick: f,
    onInviteClick: h,
    onEndClick: p,
    onJoinGuildClick: m
  });
  return (0, i.jsxs)(s.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != d ? (0, i.jsx)(g.b5, {
      onClick: d
    }) : null, null == _ ? true : _.map((e, n) => (0, i.jsx)(s.Button, function(e) {
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

function P(e) {
  let {
    className: n,
    guild: t,
    channel: a,
    creator: r,
    name: l,
    entityType: o,
    description: d,
    imageLocation: u = 0,
    imageSource: b,
    isActive: f,
    isUserLurking: h,
    isJoined: p = false,
    isMember: v = false,
    speakers: g,
    speakerCount: Z,
    rsvped: j,
    canInvite: E,
    location: w,
    truncate: P,
    onContextMenu: T,
    onJoinClick: U,
    onJoinGuildClick: D,
    onRsvpClick: R,
    onStartClick: O,
    onInviteClick: A,
    onEndClick: B,
    onClick: L,
    isNew: W,
    guildEvent: G,
    eventPreview: z,
    recurrenceRule: H,
    recurrenceId: M
  } = e, q = o === k.WX.EXTERNAL, J = q ? e => e.stopPropagation() : true, X = [];
  if (null != H && null != event) {
    let e = (0, m.Ho)(H);
    X = (0, m.PJ)(4, e, new Date(G.scheduled_start_time))
  }
  let V = X.length > 0;
  return (0, i.jsxs)(s.kL8, {
    "aria-label": l,
    onClick: () => null == L ? true : L(M),
    onContextMenu: T,
    className: c()(N.card, {
      [N.joined]: p,
      [N.lurking]: h
    }, n),
    children: [(0, i.jsxs)("div", {
      className: c()(N.padding, {
        [N.isRecurring]: V
      }),
      children: [0 === u && (0, i.jsx)(x.Z, {
        source: b
      }), (0, i.jsx)(_.ZP, {
        creator: r,
        name: l,
        description: d,
        imageSource: 1 === u ? b : null,
        truncate: P,
        guildId: null == t ? true : t.id,
        isNew: W,
        guildEvent: G,
        eventPreview: z,
        recurrenceId: M
      }), f && null != t && null != g && Z > 0 && (0, i.jsx)(I.Z, {
        guild: t,
        speakers: g,
        speakerCount: Z,
        className: N.spacing
      }), (0, i.jsx)("hr", {
        className: N.divider
      }), (0, i.jsxs)("div", {
        className: c()(N.inline, N.footer),
        children: [(0, i.jsx)(y, {
          channel: a,
          onJoinClick: U,
          handleLocationClick: J,
          location: w,
          isExternal: q
        }), (0, i.jsx)("div", {
          className: N.eventActions,
          children: (0, i.jsx)(S, {
            channel: a,
            entityType: o,
            isActive: f,
            isJoined: p,
            isUserLurking: h,
            isMember: v,
            rsvped: j,
            canInvite: E,
            onContextMenu: T,
            onRsvpClick: R,
            onJoinGuildClick: D,
            onInviteClick: A,
            onJoinClick: U,
            onStartClick: O,
            onEndClick: B
          })
        })]
      }), V && (0, i.jsx)("hr", {
        className: N.divider
      })]
    }), V && (0, i.jsx)(C.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: H,
      guildEventId: G.id,
      onRecurrenceClick: L
    })]
  })
}