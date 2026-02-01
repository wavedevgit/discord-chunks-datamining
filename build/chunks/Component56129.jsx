/** Chunk was on web.js **/
/** chunk id: 56129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mp: () => k,
  gE: () => j,
  ll: () => U,
  tM: () => G
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk525788 = require("./525788.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk574172 = require("./574172.js"),
  Chunk704877 = require("./704877.js"),
  Chunk222692 = require("./222692.jsx"),
  Chunk447404 = require("./447404.jsx"),
  Chunk271195 = require("./271195.jsx"),
  Chunk709562 = require("./709562.jsx"),
  Chunk383831 = require("./383831.jsx"),
  Chunk128286 = require("./128286.jsx"),
  Chunk80051 = require("./80051.jsx"),
  Chunk970636 = require("./970636.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk646865 = require("./646865.js"),
  Chunk795816 = require("./795816.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk47294 = require("./47294.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk31545 = require("./31545.js"),
  Chunk319567 = require("./319567.js");

function M(e) {
  let {
    onClick: t,
    isExpanded: n
  } = e;
  return (0, r.jsx)(b.A, {
    iconClassName: a()(L.D6, {
      [L.S7]: n
    }),
    onClick: t,
    iconComponent: s.abt,
    label: n ? D.intl.string(D.t["2TiKgS"]) : D.intl.string(D.t.oN8bqe)
  })
}

function j(e) {
  var t, n, i;
  let {
    channel: a,
    applicationId: s,
    onMouseDown: b,
    onMouseMove: A,
    onMouseLeave: N,
    onJumpToChannel: D,
    idle: M,
    selectedParticipant: j,
    embeddedActivity: k
  } = e, U = (0, _.Us)() === R.BRT.POPOUT, G = (0, o.bG)([S.A], () => S.A.isVideoEnabled()), V = (0, o.bG)([S.A], () => Object.values(S.A.getVideoDevices())[0]), F = false === (null == (t = null == V ? true : V.disabled) || t), B = (0, u.A)([s])[0], H = (0, m.A)(a), {
    parentAnalyticsLocation: Y
  } = (0, c.Ay)(), W = e => {
    (0, f.X)(Y, f.O.CAMERA, e), l.A.setVideoEnabled(e)
  }, K = () => {
    F ? W(true) : (0, g.A)()
  }, z = () => {
    (0, f.X)(Y, f.O.POPOUT, true), null != a && (0, w.A)({
      onConfirm: async () => {
        await (0, C.od)(s, a.id), h.openChannelCallPopout(a)
      }
    })
  };
  return (0, r.jsxs)("div", {
    className: x._v,
    onMouseMove: A,
    onMouseDown: b,
    onMouseLeave: N,
    children: [(0, r.jsx)("div", {
      className: x.K1,
      children: (0, r.jsx)(y.X, {
        idle: M,
        title: null != (n = null != (i = null == B ? true : B.name) ? i : null == a ? true : a.name) ? n : "",
        onJumpToChannel: D,
        preventIdleComponent: E.A
      })
    }), (0, r.jsxs)("div", {
      className: x.q6,
      children: [(0, r.jsxs)(p.A, {
        grow: 0,
        shrink: 1,
        basis: "50%",
        align: p.A.Align.CENTER,
        children: [(0, r.jsx)(I.A, {
          className: L.Oc,
          enabled: G,
          cameraUnavailable: !F,
          hasPermission: H,
          onChange: W,
          onCameraUnavailable: K
        }), null != a && (0, r.jsx)(E.A, {
          children: (0, r.jsx)(d.A, {
            channelId: a.id,
            guildId: a.getGuildId(),
            className: x.__invalid_leftTrayIcon,
            participant: j,
            compact: true
          })
        })]
      }), (0, r.jsxs)(p.A, {
        grow: 0,
        shrink: 1,
        justify: p.A.Justify.END,
        basis: "50%",
        align: p.A.Align.CENTER,
        children: [U || (0, T.f)() ? null : (0, r.jsx)(v.A, {
          className: L.BD,
          popoutOpen: false,
          onOpenPopout: z,
          onClosePopout: P.FX
        }), (0, r.jsx)(O.A, {
          applicationId: s,
          location: k.location,
          className: L.BD
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
    onMouseLeave: d,
    onJumpToChannel: f,
    idle: p,
    users: _,
    embeddedActivity: h
  } = e, m = (0, u.A)([o])[0];
  return (0, r.jsxs)(s.DUT, {
    className: a()(x._v, x.ob),
    onMouseMove: c,
    onMouseDown: l,
    onMouseLeave: d,
    onDoubleClick: f,
    children: [(0, r.jsx)("div", {
      className: x.K1,
      children: (0, r.jsx)(y.X, {
        idle: p,
        title: null != (t = null != (n = null == m ? true : m.name) ? n : null == i ? true : i.name) ? t : "",
        onJumpToChannel: f,
        preventIdleComponent: E.A
      })
    }), (0, r.jsxs)("div", {
      className: x.q6,
      children: [(0, r.jsx)(N.Ay, {
        renderIcon: false,
        users: _,
        size: 24,
        max: 3,
        className: L.__invalid_userSummaryContainer
      }), (0, r.jsx)(O.A, {
        applicationId: o,
        location: h.location,
        iconClassName: L.Gu,
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
  return i ? (0, r.jsx)(A.A, {
    channelId: t,
    isParticipantsOpen: n,
    className: L.N9
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
    onJumpToChannel: p,
    onToggleHeight: _,
    isExpanded: h,
    hideExpandedButton: m,
    embeddedActivity: g
  } = e, b = (0, u.A)([d])[0];
  return (0, r.jsx)("div", {
    className: L.LO,
    onMouseMove: o,
    onMouseDown: i,
    onMouseLeave: l,
    children: (0, r.jsxs)("div", {
      className: a()(x.K1, L.eA, {
        [L.eo]: c
      }),
      children: [!c && (0, r.jsx)(s.jNK, {
        size: "xxs",
        color: "currentColor",
        className: L.ro
      }), c && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(y.X, {
          idle: !c,
          title: null != (t = null != (n = null == b ? true : b.name) ? n : null == f ? true : f.name) ? t : "",
          onJumpToChannel: p,
          preventIdleComponent: E.A
        }), (0, r.jsxs)("div", {
          className: L.QS,
          children: [m ? null : (0, r.jsx)(M, {
            isExpanded: h,
            onClick: _
          }), (0, r.jsx)(O.A, {
            applicationId: d,
            location: g.location,
            iconClassName: L.Gu
          })]
        })]
      })]
    })
  })
}