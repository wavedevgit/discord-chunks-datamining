/** Chunk was on web.js **/
/** chunk id: 748492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ds: () => U,
  YB: () => k,
  of: () => G,
  q5: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk221888 = require("./221888.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk728285 = require("./728285.jsx"),
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
  Chunk566620 = require("./566620.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk617552 = require("./617552.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk702952 = require("./702952.js"),
  Chunk186880 = require("./186880.js");

function M(e) {
  let {
    onClick: t,
    isExpanded: n
  } = e;
  return (0, r.jsx)(y.Z, {
    iconClassName: a()(L.arrowIcon, {
      [L.arrowIconExpanded]: n
    }),
    onClick: t,
    iconComponent: s.CJ0,
    label: n ? D.intl.string(D.t["2TiKgS"]) : D.intl.string(D.t.oN8bqe)
  })
}

function k(e) {
  var t, n, i;
  let {
    channel: a,
    applicationId: s,
    onMouseDown: y,
    onMouseMove: I,
    onMouseLeave: N,
    onJumpToChannel: D,
    idle: M,
    selectedParticipant: k,
    embeddedActivity: j
  } = e, U = (0, p.bp)() === P.IlC.POPOUT, G = (0, o.e7)([T.Z], () => T.Z.isVideoEnabled()), B = (0, o.e7)([T.Z], () => Object.values(T.Z.getVideoDevices())[0]), Z = false === (null == (t = null == B ? true : B.disabled) || t), F = (0, u.Z)([s])[0], V = (0, m.Z)(a), {
    parentAnalyticsLocation: H
  } = (0, c.ZP)(), Y = e => {
    (0, f.v)(H, f.d.CAMERA, e), l.Z.setVideoEnabled(e)
  }, W = () => {
    Z ? Y(true) : (0, g.Z)()
  }, K = () => {
    (0, f.v)(H, f.d.POPOUT, true), null != a && (0, R.Z)({
      onConfirm: async () => {
        await (0, C.nJ)(s, a.id), h.hP(a)
      }
    })
  };
  return (0, r.jsxs)("div", {
    className: x.videoControls,
    onMouseMove: I,
    onMouseDown: y,
    onMouseLeave: N,
    children: [(0, r.jsx)("div", {
      className: x.topControls,
      children: (0, r.jsx)(b.r, {
        idle: M,
        title: null != (i = null != (n = null == F ? true : F.name) ? n : null == a ? true : a.name) ? i : "",
        onJumpToChannel: D,
        preventIdleComponent: E.Z
      })
    }), (0, r.jsxs)("div", {
      className: x.bottomControls,
      children: [(0, r.jsxs)(_.Z, {
        grow: 0,
        shrink: 1,
        basis: "50%",
        align: _.Z.Align.CENTER,
        children: [(0, r.jsx)(S.C, {
          className: L.leftPipIcon,
          enabled: G,
          cameraUnavailable: !Z,
          hasPermission: V,
          onChange: Y,
          onCameraUnavailable: W
        }), null != a && (0, r.jsx)(E.Z, {
          children: (0, r.jsx)(d.Z, {
            channelId: a.id,
            guildId: a.getGuildId(),
            className: x.__invalid_leftTrayIcon,
            participant: k,
            compact: true
          })
        })]
      }), (0, r.jsxs)(_.Z, {
        grow: 0,
        shrink: 1,
        justify: _.Z.Justify.END,
        basis: "50%",
        align: _.Z.Align.CENTER,
        children: [U || (0, A.R)() ? null : (0, r.jsx)(v.Z, {
          className: L.rightPipIcon,
          popoutOpen: false,
          onOpenPopout: K,
          onClosePopout: w.Vq
        }), (0, r.jsx)(O.Z, {
          applicationId: s,
          location: j.location,
          className: L.rightPipIcon
        })]
      })]
    })]
  })
}

function j(e) {
  var t, n;
  let {
    channel: i,
    applicationId: o,
    onMouseDown: l,
    onMouseMove: c,
    onMouseLeave: d,
    onJumpToChannel: f,
    idle: _,
    users: p,
    embeddedActivity: h
  } = e, m = (0, u.Z)([o])[0];
  return (0, r.jsxs)(s.P3F, {
    className: a()(x.videoControls, x.videoControlsTextActivity),
    onMouseMove: c,
    onMouseDown: l,
    onMouseLeave: d,
    onDoubleClick: f,
    children: [(0, r.jsx)("div", {
      className: x.topControls,
      children: (0, r.jsx)(b.r, {
        idle: _,
        title: null != (n = null != (t = null == m ? true : m.name) ? t : null == i ? true : i.name) ? n : "",
        onJumpToChannel: f,
        preventIdleComponent: E.Z
      })
    }), (0, r.jsxs)("div", {
      className: x.bottomControls,
      children: [(0, r.jsx)(N.ZP, {
        renderIcon: false,
        users: p,
        size: 24,
        max: 3,
        className: L.__invalid_userSummaryContainer
      }), (0, r.jsx)(O.Z, {
        applicationId: o,
        location: h.location,
        iconClassName: L.leaveActivityIcon,
        isActive: true
      })]
    })]
  })
}

function U(e) {
  let {
    channelId: t,
    participantsOpen: n,
    showToggleParticipants: i
  } = e;
  return i ? (0, r.jsx)(I.Z, {
    channelId: t,
    isParticipantsOpen: n,
    className: L.participantsButton
  }) : null
}

function G(e) {
  var t, n;
  let {
    onMouseDown: i,
    onMouseMove: o,
    onMouseLeave: l,
    showControls: c,
    applicationId: d,
    channel: f,
    onJumpToChannel: _,
    onToggleHeight: p,
    isExpanded: h,
    hideExpandedButton: m,
    embeddedActivity: g
  } = e, y = (0, u.Z)([d])[0];
  return (0, r.jsx)("div", {
    className: L.pipHeader,
    onMouseMove: o,
    onMouseDown: i,
    onMouseLeave: l,
    children: (0, r.jsxs)("div", {
      className: a()(x.topControls, L.pipHeaderContent, {
        [L.pipHeaderContentOpen]: c
      }),
      children: [!c && (0, r.jsx)(s.xhG, {
        size: "xxs",
        color: "currentColor",
        className: L.menuIcon
      }), c && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b.r, {
          idle: !c,
          title: null != (n = null != (t = null == y ? true : y.name) ? t : null == f ? true : f.name) ? n : "",
          onJumpToChannel: _,
          preventIdleComponent: E.Z
        }), (0, r.jsxs)("div", {
          className: L.pipHeaderButtonsRight,
          children: [m ? null : (0, r.jsx)(M, {
            isExpanded: h,
            onClick: p
          }), (0, r.jsx)(O.Z, {
            applicationId: d,
            location: g.location,
            iconClassName: L.leaveActivityIcon
          })]
        })]
      })]
    })
  })
}