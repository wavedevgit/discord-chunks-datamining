/** Chunk was on 71447 **/
/** chunk id: 970495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk391973 = require("./391973.js"),
  Chunk684013 = require("./684013.js"),
  Chunk401843 = require("./401843.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk313961 = require("./313961.js"),
  Chunk15285 = require("./15285.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk401901 = require("./401901.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk760751 = require("./760751.js"),
  Chunk555528 = require("./555528.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk810412 = require("./810412.js"),
  Chunk589051 = require("./589051.js"),
  Chunk761661 = require("./761661.js"),
  Chunk592598 = require("./592598.js"),
  Chunk658198 = require("./658198.jsx"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk676667 = require("./676667.js");

function _(e) {
  let {
    user: t,
    application: n,
    runningGame: r
  } = e;
  return null != n || null != r ? (0, i.jsx)("div", {
    className: C.R3,
    children: (0, i.jsx)(a.Qk9, {
      lowerBadge: (0, i.jsx)("div", {
        className: C.oM,
        children: null != n || null != r ? (0, i.jsx)(f.A, {
          game: n,
          pid: null == r ? true : r.pid,
          size: f.M.XXSMALL,
          className: C.Gt
        }) : null
      }),
      lowerBadgeSize: {
        width: 16,
        height: 16
      },
      children: (0, i.jsx)(u.A, {
        user: t,
        "aria-hidden": true,
        size: a._3J.SIZE_40
      })
    })
  }) : (0, i.jsx)(u.A, {
    user: t,
    "aria-hidden": true,
    size: a._3J.SIZE_40
  })
}

function P(e) {
  let {
    user: t,
    application: n,
    runningGame: r,
    username: o,
    onWatchClick: s,
    buttonColor: c
  } = e;
  return (0, i.jsxs)("div", {
    className: C.kL,
    children: [(0, i.jsx)("div", {
      className: C.H,
      children: (0, i.jsx)(_, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: l()(C.rf, C.FR),
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "interactive-text-default",
        className: C.G3,
        children: T.intl.format(T.t.vTPX23, {
          username: o
        })
      })
    }), (0, i.jsx)("div", {
      className: C.Xm,
      children: (0, i.jsx)(a.DUT, {
        onClick: s,
        className: l()(C.kx, "green" === c && C.Ib, "gray" === c && C.E0),
        children: (0, i.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          tag: "span",
          children: T.intl.string(T.t["xl+bTG"])
        })
      })
    })]
  })
}

function D(e) {
  let {
    user: t,
    application: n,
    runningGame: r,
    username: o,
    onWatchClick: s,
    iconColor: c
  } = e;
  return (0, i.jsxs)("div", {
    className: C.kL,
    children: [(0, i.jsx)("div", {
      className: C.H,
      children: (0, i.jsx)(_, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: l()(C.rf, C.FR),
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "interactive-text-default",
        className: C.G3,
        children: T.intl.format(T.t.NmEczg, {
          username: o
        })
      })
    }), (0, i.jsx)("div", {
      className: C.U4
    }), (0, i.jsx)("div", {
      className: C.Xm,
      children: (0, i.jsx)(a.DUT, {
        onClick: s,
        className: C.zf,
        children: (0, i.jsx)(j.b, {
          size: "sm",
          color: "green" === c ? "white" : a.LU0.colors.INTERACTIVE_TEXT_ACTIVE.css
        })
      })
    })]
  })
}

function R(e, t, n) {
  var r, l;
  if (x.A.isNotificationDisabled(N.KS.StreamWatchNudge)) return null;
  let a = O.default.getUser(e);
  if (null == a) return null;
  let {
    designVariant: u
  } = (0, b.Fg)("OverlayV3StreamWatchNudge"), f = null == n ? true : n.application_id, j = g.A.getChannel(t), T = null != f ? d.A.getApplication(f) : null, C = null != f ? y.A.getDetectableGame(f) : null, _ = null != f ? h.Ay.getRunningGames().find(e => e.id === f) : null, R = null != (r = null != (l = null == _ ? true : _.name) ? l : null == C ? true : C.name) ? r : null == T ? true : T.name, L = (0, E.mG)(null == j ? true : j.guild_id, null == j ? true : j.id, a), {
    trackView: k,
    trackClick: M
  } = (0, I.Y9)(N.KS.StreamWatchNudge, {
    notif_type: N.KS.StreamWatchNudge,
    notif_user_id: a.id,
    activity_type: null == n ? true : n.type,
    activity_name: null != R ? R : null == n ? true : n.name
  });
  return {
    body: (() => {
      switch (u) {
        case b.wD.GREEN_BUTTON_WITH_TEXT:
          return (0, i.jsx)(P, {
            user: a,
            application: T,
            runningGame: _,
            username: L,
            buttonColor: "green"
          });
        case b.wD.GRAY_BUTTON_WITH_TEXT:
          return (0, i.jsx)(P, {
            user: a,
            application: T,
            runningGame: _,
            username: L,
            buttonColor: "gray"
          });
        case b.wD.SINGLE_ICON_BUTTON:
          return (0, i.jsx)(D, {
            user: a,
            application: T,
            runningGame: _,
            username: L,
            iconColor: "white"
          })
      }
    })(),
    maxBodyLines: 1,
    onNotificationClick: (n, i) => {
      (() => {
        M("overlay-watch-stream");
        let [n] = A.A.getWidgetsByType(w.uss.GO_LIVE), i = p.A.getStreamParticipants(t).find(t => t.user.id === e);
        null != n && null != i && ((0, S.CZ)(i.stream, m.$.COVER), (0, c.A9)(i.stream, {
          forceMultiple: true,
          noFocus: true
        }), (0, o.v0)(n.id, {
          forcedPinnedState: true
        }), (0, o.dH)(n.id), (0, v.YX)(w.uss.GO_LIVE, {
          type: v.Z5.GO_LIVE,
          value: v.IP.ACCEPT_REQUEST,
          userId: i.user.id
        }))
      })(), setTimeout(() => {
        s.A.updateNotificationStatus(i)
      }, 300)
    },
    onNotificationShow: () => {
      k()
    },
    onDismissClick: (e, t) => {
      M("dismiss"), s.A.updateNotificationStatus(t)
    }
  }
}