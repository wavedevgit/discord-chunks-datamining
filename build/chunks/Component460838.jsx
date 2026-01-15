/** Chunk was on 84722 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => Z,
  Z: () => b
}), require("./953529.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447003 = require("./447003.js"),
  Chunk471445 = require("./471445.js"),
  Chunk357156 = require("./357156.js"),
  Chunk937096 = require("./937096.jsx"),
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
  Z = ((i = {})[i.BANNER = 0] = "BANNER", i[i.THUMBNAIL = 1] = "THUMBNAIL", i);

function S(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: i
  } = (0, x.XJ)(n), r = (0, c.e7)([m.Z], () => !n.isGuildVocal() || m.Z.can(_.Plq.CONNECT, n), [n]), v = a.useMemo(() => (0, d.Z)(n), [n]), g = a.useMemo(() => {
    let e = (0, h.KS)(n);
    return null != e ? a.createElement(e, {
      color: "currentColor",
      size: "custom",
      width: 20,
      height: 20,
      className: T.icon
    }) : null
  }, [n]);
  return (0, l.jsx)(o.u, {
    text: w.intl.string(w.t.nHjY9C),
    shouldShow: !r && null != t,
    children: (0, l.jsxs)(u.P3F, {
      className: s()(T.inline, T.channelContainer, {
        [T.channelContainerEnabled]: r && null != t,
        [T.channelContainerDisabled]: !r && null != t
      }),
      onClick: t,
      children: [(0, l.jsx)(o.u, {
        text: w.intl.string(w.t["48WXaW"]),
        shouldShow: i && v && r && null != t,
        children: g
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: T.channelLocation,
        children: n.name
      })]
    })
  })
}

function I(e) {
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
  }) : (0, l.jsxs)(u.P3F, {
    className: T.inline,
    onClick: i,
    children: [(0, l.jsx)(u._tJ, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: s()(T.channelContainer, T.icon)
    }), (0, l.jsx)(u.Text, {
      className: r ? T.externalLocation : T.channelLocation,
      variant: "text-sm/normal",
      children: (0, g.m)(a, true)
    })]
  })
}

function A(e) {
  let {
    channel: n,
    entityType: t,
    isJoined: i,
    isActive: a,
    isUserLurking: r,
    rsvped: s,
    canInvite: c,
    onContextMenu: o,
    onJoinClick: d,
    onRsvpClick: h,
    onStartClick: x,
    onInviteClick: v,
    onEndClick: m,
    onJoinGuildClick: g
  } = e, f = (0, j.Q)(n, t), p = (0, C.Zs)({
    entityType: t,
    isJoined: i,
    isActive: a,
    isUserLurking: r,
    rsvped: s,
    canInvite: c,
    isChannelPublic: f,
    channel: n,
    onJoinClick: d,
    onRsvpClick: h,
    onStartClick: x,
    onInviteClick: v,
    onEndClick: m,
    onJoinGuildClick: g
  });
  return (0, l.jsxs)(u.ButtonGroup, {
    fullWidth: false,
    size: "sm",
    children: [null != o ? (0, l.jsx)(C.b5, {
      onClick: o
    }) : null, null == p ? true : p.map((e, n) => (0, l.jsx)(u.Button, function(e) {
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
    }({}, e), n))]
  })
}

function b(e) {
  let {
    className: n,
    guild: t,
    channel: i,
    creator: a,
    name: r,
    entityType: c,
    description: o,
    imageLocation: d = 0,
    imageSource: h,
    isActive: x,
    isUserLurking: m,
    isJoined: g = false,
    isMember: j = false,
    speakers: C,
    speakerCount: _,
    rsvped: w,
    canInvite: Z,
    location: S,
    truncate: b,
    onContextMenu: P,
    onJoinClick: G,
    onJoinGuildClick: L,
    onRsvpClick: O,
    onStartClick: R,
    onInviteClick: M,
    onEndClick: X,
    onClick: W,
    isNew: J,
    guildEvent: U,
    eventPreview: V,
    recurrenceRule: z,
    recurrenceId: B,
    hideAgeVerificationNotice: D
  } = e, H = c === y.WX.EXTERNAL, q = H ? e => e.stopPropagation() : true, F = [];
  if (null != z && null != event) {
    let e = (0, f.Ho)(z);
    F = (0, f.PJ)(4, e, new Date(U.scheduled_start_time))
  }
  let K = F.length > 0;
  return (0, l.jsxs)(u.kL8, {
    "aria-label": r,
    onClick: () => null == W ? true : W(B),
    onContextMenu: P,
    className: s()(T.card, {
      [T.joined]: g,
      [T.lurking]: m
    }, n),
    children: [(0, l.jsxs)("div", {
      className: s()(T.padding, {
        [T.isRecurring]: K
      }),
      children: [0 === d && (0, l.jsx)(p.Z, {
        source: h
      }), (0, l.jsx)(N.ZP, {
        creator: a,
        name: r,
        description: o,
        imageSource: 1 === d ? h : null,
        truncate: b,
        guildId: null == t ? true : t.id,
        isNew: J,
        guildEvent: U,
        eventPreview: V,
        recurrenceId: B
      }), x && null != t && null != C && _ > 0 && (0, l.jsx)(E.Z, {
        guild: t,
        speakers: C,
        speakerCount: _,
        className: T.spacing
      }), (0, l.jsx)("hr", {
        className: T.divider
      }), !D && y.Qk.has(U.entity_type) && (0, l.jsx)(v.Z, {
        className: T.ageVerificationNoticeSpacing,
        noBackground: true,
        divider: true
      }), (0, l.jsxs)("div", {
        className: s()(T.inline, T.footer),
        children: [(0, l.jsx)(I, {
          channel: i,
          onJoinClick: G,
          handleLocationClick: q,
          location: S,
          isExternal: H
        }), (0, l.jsx)("div", {
          className: T.eventActions,
          children: (0, l.jsx)(A, {
            channel: i,
            entityType: c,
            isActive: x,
            isJoined: g,
            isUserLurking: m,
            isMember: j,
            rsvped: w,
            canInvite: Z,
            onContextMenu: P,
            onRsvpClick: O,
            onJoinGuildClick: L,
            onInviteClick: M,
            onJoinClick: G,
            onStartClick: R,
            onEndClick: X
          })
        })]
      }), K && (0, l.jsx)("hr", {
        className: T.divider
      })]
    }), K && (0, l.jsx)(k.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: z,
      guildEventId: U.id,
      onRecurrenceClick: W
    })]
  })
}