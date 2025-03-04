/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Ds: () => j,
  YB: () => M,
  of: () => U,
  q5: () => k
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(442837),
  s = n(481060),
  l = n(846027),
  c = n(40851),
  u = n(906732),
  d = n(835473),
  f = n(221888),
  _ = n(522651),
  p = n(600164),
  h = n(788983),
  m = n(189771),
  g = n(560688),
  E = n(618158),
  v = n(922745),
  b = n(871499),
  y = n(402113),
  O = n(800965),
  S = n(157813),
  I = n(25827),
  T = n(131951),
  N = n(636449),
  A = n(884338),
  C = n(349619),
  R = n(981631),
  P = n(231338),
  w = n(388032),
  D = n(49039),
  L = n(54329);

function x(e) {
  let {
    onClick: t,
    isExpanded: n
  } = e;
  return (0, r.jsx)(b.Z, {
    iconClassName: o()(D.arrowIcon, {
      [D.arrowIconExpanded]: n
    }),
    onClick: t,
    iconComponent: s.CJ0,
    label: n ? w.NW.string(w.t["2TiKgY"]) : w.NW.string(w.t.oN8bqa)
  })
}

function M(e) {
  var t, n;
  let {
    channel: i,
    applicationId: o,
    onMouseDown: s,
    onMouseMove: b,
    onMouseLeave: S,
    onJumpToChannel: A,
    idle: w,
    selectedParticipant: x,
    embeddedActivity: M
  } = e, k = (0, c.bp)() === R.IlC.POPOUT, j = (0, a.e7)([T.Z], () => T.Z.isVideoEnabled()), U = (0, a.e7)([T.Z], () => Object.values(T.Z.getVideoDevices())[0]), G = !1 === (null === (t = null == U ? void 0 : U.disabled) || void 0 === t || t), B = (0, d.Z)([o])[0], V = (0, m.Z)(i), {
    parentAnalyticsLocation: F
  } = (0, u.ZP)(), Z = e => {
    (0, _.v)(F, _.d.CAMERA, e), l.Z.setVideoEnabled(e)
  }, H = () => {
    G ? Z(!0) : (0, g.Z)()
  }, W = () => {
    (0, _.v)(F, _.d.POPOUT, !0), (0, C.Z)(() => h.hP(i))
  };
  return (0, r.jsxs)("div", {
    className: L.videoControls,
    onMouseMove: b,
    onMouseDown: s,
    onMouseLeave: S,
    children: [(0, r.jsx)("div", {
      className: L.topControls,
      children: (0, r.jsx)(v.r, {
        idle: w,
        title: null !== (n = null == B ? void 0 : B.name) && void 0 !== n ? n : i.name,
        onJumpToChannel: A,
        preventIdleComponent: E.Z
      })
    }), (0, r.jsxs)("div", {
      className: L.bottomControls,
      children: [(0, r.jsxs)(p.Z, {
        grow: 0,
        shrink: 1,
        basis: "50%",
        align: p.Z.Align.CENTER,
        children: [(0, r.jsx)(I.C, {
          className: D.leftPipIcon,
          enabled: j,
          cameraUnavailable: !G,
          hasPermission: V,
          onChange: Z,
          onCameraUnavailable: H
        }), (0, r.jsx)(E.Z, {
          children: (0, r.jsx)(f.Z, {
            channelId: i.id,
            guildId: i.getGuildId(),
            className: L.__invalid_leftTrayIcon,
            participant: x,
            compact: !0
          })
        })]
      }), (0, r.jsxs)(p.Z, {
        grow: 0,
        shrink: 1,
        justify: p.Z.Justify.END,
        basis: "50%",
        align: p.Z.Align.CENTER,
        children: [k || (0, N.R)() ? null : (0, r.jsx)(O.Z, {
          className: D.rightPipIcon,
          popoutOpen: !1,
          onOpenPopout: W,
          onClosePopout: P.Vq
        }), (0, r.jsx)(y.Z, {
          applicationId: o,
          location: M.location,
          className: D.rightPipIcon
        })]
      })]
    })]
  })
}

function k(e) {
  var t;
  let {
    channel: n,
    applicationId: i,
    onMouseDown: a,
    onMouseMove: l,
    onMouseLeave: c,
    onJumpToChannel: u,
    idle: f,
    users: _,
    embeddedActivity: p
  } = e, h = (0, d.Z)([i])[0];
  return (0, r.jsxs)(s.P3F, {
    className: o()(L.videoControls, L.videoControlsTextActivity),
    onMouseMove: l,
    onMouseDown: a,
    onMouseLeave: c,
    onDoubleClick: u,
    children: [(0, r.jsx)("div", {
      className: L.topControls,
      children: (0, r.jsx)(v.r, {
        idle: f,
        title: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : n.name,
        onJumpToChannel: u,
        preventIdleComponent: E.Z
      })
    }), (0, r.jsxs)("div", {
      className: L.bottomControls,
      children: [(0, r.jsx)(A.Z, {
        renderIcon: !1,
        users: _,
        size: 24,
        max: 3,
        className: D.__invalid_userSummaryContainer
      }), (0, r.jsx)(y.Z, {
        applicationId: i,
        location: p.location,
        iconClassName: D.leaveActivityIcon,
        isActive: !0
      })]
    })]
  })
}

function j(e) {
  let {
    channelId: t,
    participantsOpen: n,
    showToggleParticipants: i
  } = e;
  return i ? (0, r.jsx)(S.Z, {
    channelId: t,
    isParticipantsOpen: n,
    className: D.participantsButton
  }) : null
}

function U(e) {
  var t;
  let {
    onMouseDown: n,
    onMouseMove: i,
    onMouseLeave: a,
    showControls: l,
    applicationId: c,
    channel: u,
    onJumpToChannel: f,
    onToggleHeight: _,
    isExpanded: p,
    hideExpandedButton: h,
    embeddedActivity: m
  } = e, g = (0, d.Z)([c])[0];
  return (0, r.jsx)("div", {
    className: D.pipHeader,
    onMouseMove: i,
    onMouseDown: n,
    onMouseLeave: a,
    children: (0, r.jsxs)("div", {
      className: o()(L.topControls, D.pipHeaderContent, {
        [D.pipHeaderContentOpen]: l
      }),
      children: [!l && (0, r.jsx)(s.xhG, {
        size: "xxs",
        color: "currentColor",
        className: D.menuIcon
      }), l && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(v.r, {
          idle: !l,
          title: null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : u.name,
          onJumpToChannel: f,
          preventIdleComponent: E.Z
        }), (0, r.jsxs)("div", {
          className: D.pipHeaderButtonsRight,
          children: [h ? null : (0, r.jsx)(x, {
            isExpanded: p,
            onClick: _
          }), (0, r.jsx)(y.Z, {
            applicationId: c,
            location: m.location,
            iconClassName: D.leaveActivityIcon
          })]
        })]
      })]
    })
  })
}