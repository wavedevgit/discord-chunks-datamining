/** Chunk was on web.js **/
/** chunk id: 676526, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ds: () => U,
  YB: () => M,
  of: () => G,
  q5: () => k
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function j(e) {
  let {
    onClick: t,
    isExpanded: n
  } = e;
  return (0, r.jsx)(y.Z, {
    iconClassName: o()(x.arrowIcon, {
      [x.arrowIconExpanded]: n
    }),
    onClick: t,
    iconComponent: s.CJ0,
    label: n ? D.intl.string(D.t["2TiKgS"]) : D.intl.string(D.t.oN8bqe)
  })
}

function M(e) {
  var t, n, i;
  let {
    channel: o,
    applicationId: s,
    onMouseDown: y,
    onMouseMove: S,
    onMouseLeave: N,
    onJumpToChannel: D,
    idle: j,
    selectedParticipant: M,
    embeddedActivity: k
  } = e, U = (0, _.bp)() === R.IlC.POPOUT, G = (0, a.e7)([T.Z], () => T.Z.isVideoEnabled()), Z = (0, a.e7)([T.Z], () => Object.values(T.Z.getVideoDevices())[0]), F = false === (null == (t = null == Z ? true : Z.disabled) || t), B = (0, u.Z)([s])[0], V = (0, h.Z)(o), {
    parentAnalyticsLocation: H
  } = (0, c.ZP)(), Y = e => {
    (0, f.v)(H, f.d.CAMERA, e), l.Z.setVideoEnabled(e)
  }, W = () => {
    F ? Y(true) : (0, g.Z)()
  }, K = () => {
    (0, f.v)(H, f.d.POPOUT, true), null != o && (0, P.Z)({
      onConfirm: async () => {
        await (0, A.nJ)(s, o.id), m.openChannelCallPopout(o)
      }
    })
  };
  return (0, r.jsxs)("div", {
    className: L.videoControls,
    onMouseMove: S,
    onMouseDown: y,
    onMouseLeave: N,
    children: [(0, r.jsx)("div", {
      className: L.topControls,
      children: (0, r.jsx)(b.r, {
        idle: j,
        title: null != (i = null != (n = null == B ? true : B.name) ? n : null == o ? true : o.name) ? i : "",
        onJumpToChannel: D,
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
          className: x.leftPipIcon,
          enabled: G,
          cameraUnavailable: !F,
          hasPermission: V,
          onChange: Y,
          onCameraUnavailable: W
        }), null != o && (0, r.jsx)(E.Z, {
          children: (0, r.jsx)(d.Z, {
            channelId: o.id,
            guildId: o.getGuildId(),
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
        children: [U || (0, C.R)() ? null : (0, r.jsx)(v.Z, {
          className: x.rightPipIcon,
          popoutOpen: false,
          onOpenPopout: K,
          onClosePopout: w.Vq
        }), (0, r.jsx)(O.Z, {
          applicationId: s,
          location: k.location,
          className: x.rightPipIcon
        })]
      })]
    })]
  })
}

function k(e) {
  var t, n;
  let {
    channel: i,
    applicationId: a,
    onMouseDown: l,
    onMouseMove: c,
    onMouseLeave: d,
    onJumpToChannel: f,
    idle: p,
    users: _,
    embeddedActivity: m
  } = e, h = (0, u.Z)([a])[0];
  return (0, r.jsxs)(s.P3F, {
    className: o()(L.videoControls, L.videoControlsTextActivity),
    onMouseMove: c,
    onMouseDown: l,
    onMouseLeave: d,
    onDoubleClick: f,
    children: [(0, r.jsx)("div", {
      className: L.topControls,
      children: (0, r.jsx)(b.r, {
        idle: p,
        title: null != (n = null != (t = null == h ? true : h.name) ? t : null == i ? true : i.name) ? n : "",
        onJumpToChannel: f,
        preventIdleComponent: E.Z
      })
    }), (0, r.jsxs)("div", {
      className: L.bottomControls,
      children: [(0, r.jsx)(N.ZP, {
        renderIcon: false,
        users: _,
        size: 24,
        max: 3,
        className: x.__invalid_userSummaryContainer
      }), (0, r.jsx)(O.Z, {
        applicationId: a,
        location: m.location,
        iconClassName: x.leaveActivityIcon,
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
  return i ? (0, r.jsx)(S.Z, {
    channelId: t,
    isParticipantsOpen: n,
    className: x.participantsButton
  }) : null
}

function G(e) {
  var t, n;
  let {
    onMouseDown: i,
    onMouseMove: a,
    onMouseLeave: l,
    showControls: c,
    applicationId: d,
    channel: f,
    onJumpToChannel: p,
    onToggleHeight: _,
    isExpanded: m,
    hideExpandedButton: h,
    embeddedActivity: g
  } = e, y = (0, u.Z)([d])[0];
  return (0, r.jsx)("div", {
    className: x.pipHeader,
    onMouseMove: a,
    onMouseDown: i,
    onMouseLeave: l,
    children: (0, r.jsxs)("div", {
      className: o()(L.topControls, x.pipHeaderContent, {
        [x.pipHeaderContentOpen]: c
      }),
      children: [!c && (0, r.jsx)(s.xhG, {
        size: "xxs",
        color: "currentColor",
        className: x.menuIcon
      }), c && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b.r, {
          idle: !c,
          title: null != (n = null != (t = null == y ? true : y.name) ? t : null == f ? true : f.name) ? n : "",
          onJumpToChannel: p,
          preventIdleComponent: E.Z
        }), (0, r.jsxs)("div", {
          className: x.pipHeaderButtonsRight,
          children: [h ? null : (0, r.jsx)(j, {
            isExpanded: m,
            onClick: _
          }), (0, r.jsx)(O.Z, {
            applicationId: d,
            location: g.location,
            iconClassName: x.leaveActivityIcon
          })]
        })]
      })]
    })
  })
}