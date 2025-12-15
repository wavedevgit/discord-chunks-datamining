/** Chunk was on 97476 **/
/** chunk id: 460838, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => y,
  Z: () => T
}), require("./953529.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  y = ((a = {})[a.BANNER = 0] = "BANNER", a[a.THUMBNAIL = 1] = "THUMBNAIL", a);

function S(e) {
  let {
    channel: n,
    onClick: t
  } = e, {
    canManageAllEvents: a
  } = (0, f.XJ)(n), l = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(N.Plq.CONNECT, n), [n]), h = r.useMemo(() => (0, u.Z)(n), [n]), m = r.useMemo(() => {
    let e = (0, b.KS)(n);
    return null != e ? r.createElement(e, {
      color: "currentColor",
      size: "custom",
      width: 20,
      height: 20,
      className: E.icon
    }) : null
  }, [n]);
  return (0, i.jsx)(d.u, {
    text: Z.intl.string(Z.t.nHjY9C),
    shouldShow: !l && null != t,
    children: (0, i.jsxs)(s.P3F, {
      className: o()(E.inline, E.channelContainer, {
        [E.channelContainerEnabled]: l && null != t,
        [E.channelContainerDisabled]: !l && null != t
      }),
      onClick: t,
      children: [(0, i.jsx)(d.u, {
        text: Z.intl.string(Z.t["48WXaW"]),
        shouldShow: a && h && l && null != t,
        children: m
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: E.channelLocation,
        children: n.name
      })]
    })
  })
}

function w(e) {
  let {
    channel: n,
    onJoinClick: t,
    handleLocationClick: a,
    location: r,
    isExternal: l
  } = e;
  return null != n ? (0, i.jsx)(S, {
    channel: n,
    onClick: t
  }) : (0, i.jsxs)(s.P3F, {
    className: E.inline,
    onClick: a,
    children: [(0, i.jsx)(s._tJ, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: o()(E.channelContainer, E.icon)
    }), (0, i.jsx)(s.Text, {
      className: l ? E.externalLocation : E.channelLocation,
      variant: "text-sm/normal",
      children: (0, m.m)(r, true)
    })]
  })
}

function P(e) {
  let {
    channel: n,
    entityType: t,
    isJoined: a,
    isActive: r,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    onContextMenu: d,
    onJoinClick: u,
    onRsvpClick: b,
    onStartClick: f,
    onInviteClick: h,
    onEndClick: p,
    onJoinGuildClick: m
  } = e, v = (0, g.Q)(n, t), _ = (0, x.Zs)({
    entityType: t,
    isJoined: a,
    isActive: r,
    isUserLurking: l,
    rsvped: o,
    canInvite: c,
    isChannelPublic: v,
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
    children: [null != d ? (0, i.jsx)(x.b5, {
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

function T(e) {
  let {
    className: n,
    guild: t,
    channel: a,
    creator: r,
    name: l,
    entityType: c,
    description: d,
    imageLocation: u = 0,
    imageSource: b,
    isActive: f,
    isUserLurking: p,
    isJoined: m = false,
    isMember: g = false,
    speakers: x,
    speakerCount: N,
    rsvped: Z,
    canInvite: y,
    location: S,
    truncate: T,
    onContextMenu: U,
    onJoinClick: D,
    onJoinGuildClick: R,
    onRsvpClick: A,
    onStartClick: O,
    onInviteClick: B,
    onEndClick: L,
    onClick: G,
    isNew: W,
    guildEvent: M,
    eventPreview: z,
    recurrenceRule: H,
    recurrenceId: J,
    hideAgeVerificationNotice: q
  } = e, V = c === I.WX.EXTERNAL, X = V ? e => e.stopPropagation() : true, F = [];
  if (null != H && null != event) {
    let e = (0, v.Ho)(H);
    F = (0, v.PJ)(4, e, new Date(M.scheduled_start_time))
  }
  let K = F.length > 0;
  return (0, i.jsxs)(s.kL8, {
    "aria-label": l,
    onClick: () => null == G ? true : G(J),
    onContextMenu: U,
    className: o()(E.card, {
      [E.joined]: m,
      [E.lurking]: p
    }, n),
    children: [(0, i.jsxs)("div", {
      className: o()(E.padding, {
        [E.isRecurring]: K
      }),
      children: [0 === u && (0, i.jsx)(_.Z, {
        source: b
      }), (0, i.jsx)(C.ZP, {
        creator: r,
        name: l,
        description: d,
        imageSource: 1 === u ? b : null,
        truncate: T,
        guildId: null == t ? true : t.id,
        isNew: W,
        guildEvent: M,
        eventPreview: z,
        recurrenceId: J
      }), f && null != t && null != x && N > 0 && (0, i.jsx)(k.Z, {
        guild: t,
        speakers: x,
        speakerCount: N,
        className: E.spacing
      }), (0, i.jsx)("hr", {
        className: E.divider
      }), !q && I.Qk.has(M.entity_type) && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.Z, {
          className: E.ageVerificationNoticeSpacing,
          noBackground: true
        }), (0, i.jsx)(s.izJ, {
          gap: 16
        })]
      }), (0, i.jsxs)("div", {
        className: o()(E.inline, E.footer),
        children: [(0, i.jsx)(w, {
          channel: a,
          onJoinClick: D,
          handleLocationClick: X,
          location: S,
          isExternal: V
        }), (0, i.jsx)("div", {
          className: E.eventActions,
          children: (0, i.jsx)(P, {
            channel: a,
            entityType: c,
            isActive: f,
            isJoined: m,
            isUserLurking: p,
            isMember: g,
            rsvped: Z,
            canInvite: y,
            onContextMenu: U,
            onRsvpClick: A,
            onJoinGuildClick: R,
            onInviteClick: B,
            onJoinClick: D,
            onStartClick: O,
            onEndClick: L
          })
        })]
      }), K && (0, i.jsx)("hr", {
        className: E.divider
      })]
    }), K && (0, i.jsx)(j.Z, {
      guildId: null == t ? true : t.id,
      recurrenceRule: H,
      guildEventId: M.id,
      onRecurrenceClick: G
    })]
  })
}