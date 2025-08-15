/** Chunk was on web.js **/
/** chunk id: 748492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ds: () => j,
  YB: () => M,
  of: () => U,
  q5: () => k
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk221888 = require("./221888.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk189771 = require("./189771.js"),
  Chunk560688 = require("./560688.jsx"),
  Chunk618158 = require("./618158.jsx"),
  Chunk922745 = require("./922745.jsx"),
  Chunk871499 = require("./871499.jsx"),
  Chunk402113 = require("./402113.jsx"),
  Chunk800965 = require("./800965.jsx"),
  Chunk157813 = require("./157813.jsx"),
  Chunk25827 = require("./25827.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk636449 = require("./636449.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk617552 = require("./617552.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk702952 = require("./702952.js"),
  Chunk186880 = require("./186880.js");

function x(e) {
  let {
    onClick: t,
    isExpanded: n
  } = e;
  return (0, r.jsx)(y.Z, {
    iconClassName: a()(D.arrowIcon, {
      [D.arrowIconExpanded]: n
    }),
    onClick: t,
    iconComponent: s.CJ0,
    label: n ? w.intl.string(w.t["2TiKgY"]) : w.intl.string(w.t.oN8bqa)
  })
}

function M(e) {
  var t, n, i;
  let {
    channel: a,
    applicationId: s,
    onMouseDown: y,
    onMouseMove: I,
    onMouseLeave: N,
    onJumpToChannel: w,
    idle: x,
    selectedParticipant: M,
    embeddedActivity: k
  } = e, j = (0, c.bp)() === R.IlC.POPOUT, U = (0, o.e7)([S.Z], () => S.Z.isVideoEnabled()), G = (0, o.e7)([S.Z], () => Object.values(S.Z.getVideoDevices())[0]), B = false === (null == (t = null == G ? true : G.disabled) || t), V = (0, d.Z)([s])[0], F = (0, m.Z)(a), {
    parentAnalyticsLocation: Z
  } = (0, u.ZP)(), H = e => {
    (0, _.v)(Z, _.d.CAMERA, e), l.Z.setVideoEnabled(e)
  }, Y = () => {
    B ? H(true) : (0, g.Z)()
  }, W = () => {
    (0, _.v)(Z, _.d.POPOUT, true), null != a && (0, C.Z)({
      onConfirm: () => h.hP(a)
    })
  };
  return (0, r.jsxs)("div", {
    className: L.videoControls,
    onMouseMove: I,
    onMouseDown: y,
    onMouseLeave: N,
    children: [(0, r.jsx)("div", {
      className: L.topControls,
      children: (0, r.jsx)(b.r, {
        idle: x,
        title: null != (i = null != (n = null == V ? true : V.name) ? n : null == a ? true : a.name) ? i : "",
        onJumpToChannel: w,
        preventIdleComponent: E.Z
      })
    }), (0, r.jsxs)("div", {
      className: L.bottomControls,
      children: [(0, r.jsxs)(p.Z, {
        grow: 0,
        shrink: 1,
        basis: "50%",
        align: p.Z.Align.CENTER,
        children: [(0, r.jsx)(T.C, {
          className: D.leftPipIcon,
          enabled: U,
          cameraUnavailable: !B,
          hasPermission: F,
          onChange: H,
          onCameraUnavailable: Y
        }), null != a && (0, r.jsx)(E.Z, {
          children: (0, r.jsx)(f.Z, {
            channelId: a.id,
            guildId: a.getGuildId(),
            className: L.__invalid_leftTrayIcon,
            participant: M,
            compact: true
          })
        })]
      }), (0, r.jsxs)(p.Z, {
        grow: 0,
        shrink: 1,
        justify: p.Z.Justify.END,
        basis: "50%",
        align: p.Z.Align.CENTER,
        children: [j || (0, A.R)() ? null : (0, r.jsx)(v.Z, {
          className: D.rightPipIcon,
          popoutOpen: false,
          onOpenPopout: W,
          onClosePopout: P.Vq
        }), (0, r.jsx)(O.Z, {
          applicationId: s,
          location: k.location,
          className: D.rightPipIcon
        })]
      })]
    })]
  })
}

function k(e) {
  var t, n;
  let {
    channel: i,
    applicationId: o,
    onMouseDown: l,
    onMouseMove: c,
    onMouseLeave: u,
    onJumpToChannel: f,
    idle: _,
    users: p,
    embeddedActivity: h
  } = e, m = (0, d.Z)([o])[0];
  return (0, r.jsxs)(s.P3F, {
    className: a()(L.videoControls, L.videoControlsTextActivity),
    onMouseMove: c,
    onMouseDown: l,
    onMouseLeave: u,
    onDoubleClick: f,
    children: [(0, r.jsx)("div", {
      className: L.topControls,
      children: (0, r.jsx)(b.r, {
        idle: _,
        title: null != (n = null != (t = null == m ? true : m.name) ? t : null == i ? true : i.name) ? n : "",
        onJumpToChannel: f,
        preventIdleComponent: E.Z
      })
    }), (0, r.jsxs)("div", {
      className: L.bottomControls,
      children: [(0, r.jsx)(N.ZP, {
        renderIcon: false,
        users: p,
        size: 24,
        max: 3,
        className: D.__invalid_userSummaryContainer
      }), (0, r.jsx)(O.Z, {
        applicationId: o,
        location: h.location,
        iconClassName: D.leaveActivityIcon,
        isActive: true
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
  return i ? (0, r.jsx)(I.Z, {
    channelId: t,
    isParticipantsOpen: n,
    className: D.participantsButton
  }) : null
}

function U(e) {
  var t, n;
  let {
    onMouseDown: i,
    onMouseMove: o,
    onMouseLeave: l,
    showControls: c,
    applicationId: u,
    channel: f,
    onJumpToChannel: _,
    onToggleHeight: p,
    isExpanded: h,
    hideExpandedButton: m,
    embeddedActivity: g
  } = e, y = (0, d.Z)([u])[0];
  return (0, r.jsx)("div", {
    className: D.pipHeader,
    onMouseMove: o,
    onMouseDown: i,
    onMouseLeave: l,
    children: (0, r.jsxs)("div", {
      className: a()(L.topControls, D.pipHeaderContent, {
        [D.pipHeaderContentOpen]: c
      }),
      children: [!c && (0, r.jsx)(s.xhG, {
        size: "xxs",
        color: "currentColor",
        className: D.menuIcon
      }), c && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b.r, {
          idle: !c,
          title: null != (n = null != (t = null == y ? true : y.name) ? t : null == f ? true : f.name) ? n : "",
          onJumpToChannel: _,
          preventIdleComponent: E.Z
        }), (0, r.jsxs)("div", {
          className: D.pipHeaderButtonsRight,
          children: [m ? null : (0, r.jsx)(x, {
            isExpanded: h,
            onClick: p
          }), (0, r.jsx)(O.Z, {
            applicationId: u,
            location: g.location,
            iconClassName: D.leaveActivityIcon
          })]
        })]
      })]
    })
  })
}