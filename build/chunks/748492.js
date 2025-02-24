/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Ds: () => M,
  YB: () => L,
  of: () => j,
  q5: () => x
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(442837),
  s = n(481060),
  l = n(846027),
  c = n(40851),
  u = n(835473),
  d = n(221888),
  f = n(600164),
  p = n(788983),
  _ = n(189771),
  h = n(560688),
  m = n(618158),
  g = n(922745),
  E = n(871499),
  v = n(402113),
  b = n(800965),
  y = n(157813),
  O = n(25827),
  S = n(131951),
  I = n(636449),
  T = n(884338),
  N = n(349619),
  A = n(981631),
  C = n(231338),
  R = n(388032),
  P = n(229905),
  D = n(717268);

function w(e) {
  let {
    onClick: t,
    isExpanded: n
  } = e;
  return (0, r.jsx)(E.Z, {
    iconClassName: o()(P.arrowIcon, {
      [P.arrowIconExpanded]: n
    }),
    onClick: t,
    iconComponent: s.CJ0,
    label: n ? R.NW.string(R.t["2TiKgY"]) : R.NW.string(R.t.oN8bqa)
  })
}

function L(e) {
  var t, n;
  let {
    channel: i,
    applicationId: o,
    onMouseDown: s,
    onMouseMove: E,
    onMouseLeave: y,
    onJumpToChannel: T,
    idle: R,
    selectedParticipant: w,
    embeddedActivity: L
  } = e, x = (0, c.bp)() === A.IlC.POPOUT, M = (0, a.e7)([S.Z], () => S.Z.isVideoEnabled()), j = (0, a.e7)([S.Z], () => Object.values(S.Z.getVideoDevices())[0]), k = !1 === (null === (t = null == j ? void 0 : j.disabled) || void 0 === t || t), U = (0, u.Z)([o])[0], G = (0, _.Z)(i), B = e => {
    l.Z.setVideoEnabled(e)
  }, F = () => {
    k ? B(!0) : (0, h.Z)()
  }, V = () => {
    (0, N.Z)(() => p.hP(i))
  };
  return (0, r.jsxs)("div", {
    className: D.videoControls,
    onMouseMove: E,
    onMouseDown: s,
    onMouseLeave: y,
    children: [(0, r.jsx)("div", {
      className: D.topControls,
      children: (0, r.jsx)(g.r, {
        idle: R,
        title: null !== (n = null == U ? void 0 : U.name) && void 0 !== n ? n : i.name,
        onJumpToChannel: T,
        preventIdleComponent: m.Z
      })
    }), (0, r.jsxs)("div", {
      className: D.bottomControls,
      children: [(0, r.jsxs)(f.Z, {
        grow: 0,
        shrink: 1,
        basis: "50%",
        align: f.Z.Align.CENTER,
        children: [(0, r.jsx)(O.C, {
          className: P.leftPipIcon,
          enabled: M,
          cameraUnavailable: !k,
          hasPermission: G,
          onChange: B,
          onCameraUnavailable: F
        }), (0, r.jsx)(m.Z, {
          children: (0, r.jsx)(d.Z, {
            channelId: i.id,
            guildId: i.getGuildId(),
            className: D.__invalid_leftTrayIcon,
            participant: w,
            compact: !0
          })
        })]
      }), (0, r.jsxs)(f.Z, {
        grow: 0,
        shrink: 1,
        justify: f.Z.Justify.END,
        basis: "50%",
        align: f.Z.Align.CENTER,
        children: [x || (0, I.R)() ? null : (0, r.jsx)(b.Z, {
          className: P.rightPipIcon,
          popoutOpen: !1,
          onOpenPopout: V,
          onClosePopout: C.Vq
        }), (0, r.jsx)(v.Z, {
          applicationId: o,
          location: L.location,
          className: P.rightPipIcon
        })]
      })]
    })]
  })
}

function x(e) {
  var t;
  let {
    channel: n,
    applicationId: i,
    onMouseDown: a,
    onMouseMove: l,
    onMouseLeave: c,
    onJumpToChannel: d,
    idle: f,
    users: p,
    embeddedActivity: _
  } = e, h = (0, u.Z)([i])[0];
  return (0, r.jsxs)(s.P3F, {
    className: o()(D.videoControls, D.videoControlsTextActivity),
    onMouseMove: l,
    onMouseDown: a,
    onMouseLeave: c,
    onDoubleClick: d,
    children: [(0, r.jsx)("div", {
      className: o()(D.topControls),
      children: (0, r.jsx)(g.r, {
        idle: f,
        title: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : n.name,
        onJumpToChannel: d,
        preventIdleComponent: m.Z
      })
    }), (0, r.jsxs)("div", {
      className: D.bottomControls,
      children: [(0, r.jsx)(T.Z, {
        renderIcon: !1,
        users: p,
        size: 24,
        max: 3,
        className: P.__invalid_userSummaryContainer
      }), (0, r.jsx)(v.Z, {
        applicationId: i,
        location: _.location,
        iconClassName: P.leaveActivityIcon,
        isActive: !0
      })]
    })]
  })
}

function M(e) {
  let {
    channelId: t,
    participantsOpen: n,
    showToggleParticipants: i
  } = e;
  return i ? (0, r.jsx)(y.Z, {
    channelId: t,
    isParticipantsOpen: n,
    className: P.participantsButton
  }) : null
}

function j(e) {
  var t;
  let {
    onMouseDown: n,
    onMouseMove: i,
    onMouseLeave: a,
    showControls: l,
    applicationId: c,
    channel: d,
    onJumpToChannel: f,
    onToggleHeight: p,
    isExpanded: _,
    hideExpandedButton: h,
    embeddedActivity: E
  } = e, b = (0, u.Z)([c])[0];
  return (0, r.jsx)("div", {
    className: P.pipHeader,
    onMouseMove: i,
    onMouseDown: n,
    onMouseLeave: a,
    children: (0, r.jsxs)("div", {
      className: o()(D.topControls, P.pipHeaderContent, {
        [P.pipHeaderContentOpen]: l
      }),
      children: [!l && (0, r.jsx)(s.xhG, {
        size: "xxs",
        color: "currentColor",
        className: P.menuIcon
      }), l && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.r, {
          idle: !l,
          title: null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : d.name,
          onJumpToChannel: f,
          preventIdleComponent: m.Z
        }), (0, r.jsxs)("div", {
          className: P.pipHeaderButtonsRight,
          children: [h ? null : (0, r.jsx)(w, {
            isExpanded: _,
            onClick: p
          }), (0, r.jsx)(v.Z, {
            applicationId: c,
            location: E.location,
            iconClassName: P.leaveActivityIcon
          })]
        })]
      })]
    })
  })
}