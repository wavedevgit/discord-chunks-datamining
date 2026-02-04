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

function N(e) {
  let {
    user: t,
    application: n,
    runningGame: r
  } = e;
  return null != n || null != r ? (0, i.jsx)("div", {
    className: w.R3,
    children: (0, i.jsx)(a.Qk9, {
      lowerBadge: (0, i.jsx)("div", {
        className: w.oM,
        children: null != n || null != r ? (0, i.jsx)(f.A, {
          game: n,
          pid: null == r ? true : r.pid,
          size: f.M.XXSMALL,
          className: w.Gt
        }) : null
      }),
      lowerBadgeSize: {
        width: 16,
        height: 16
      },
      children: (0, i.jsx)(c.A, {
        user: t,
        "aria-hidden": true,
        size: a._3J.SIZE_40
      })
    })
  }) : (0, i.jsx)(c.A, {
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
    buttonColor: u
  } = e;
  return (0, i.jsxs)("div", {
    className: w.kL,
    children: [(0, i.jsx)("div", {
      className: w.H,
      children: (0, i.jsx)(N, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: l()(w.rf, w.FR),
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "interactive-text-default",
        className: w.G3,
        children: T.intl.format(T.t.vTPX23, {
          username: o
        })
      })
    }), (0, i.jsx)("div", {
      className: w.Xm,
      children: (0, i.jsx)(a.DUT, {
        onClick: s,
        className: l()(w.kx, "green" === u && w.Ib, "gray" === u && w.E0),
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
    iconColor: u
  } = e;
  return (0, i.jsxs)("div", {
    className: w.kL,
    children: [(0, i.jsx)("div", {
      className: w.H,
      children: (0, i.jsx)(N, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: l()(w.rf, w.FR),
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "interactive-text-default",
        className: w.G3,
        children: T.intl.format(T.t.NmEczg, {
          username: o
        })
      })
    }), (0, i.jsx)("div", {
      className: w.U4
    }), (0, i.jsx)("div", {
      className: w.Xm,
      children: (0, i.jsx)(a.DUT, {
        onClick: s,
        className: w.zf,
        children: (0, i.jsx)(x.b, {
          size: "sm",
          color: "green" === u ? "white" : a.LU0.colors.INTERACTIVE_TEXT_ACTIVE.css
        })
      })
    })]
  })
}

function R(e, t, n) {
  var r, l;
  if (S.A.isNotificationDisabled(j.KS.StreamWatchNudge)) return null;
  let a = O.default.getUser(e);
  if (null == a) return null;
  let {
    designVariant: c
  } = (0, E.Fg)("OverlayV3StreamWatchNudge"), f = null == n ? true : n.application_id, x = m.A.getChannel(t), T = null != f ? d.A.getApplication(f) : null, w = null != f ? A.A.getDetectableGame(f) : null, N = null != f ? p.Ay.getRunningGames().find(e => e.id === f) : null, R = null != (r = null != (l = null == N ? true : N.name) ? l : null == w ? true : w.name) ? r : null == T ? true : T.name, L = (0, v.mG)(null == x ? true : x.guild_id, null == x ? true : x.id, a), {
    trackView: k,
    trackClick: M
  } = (0, I.Y9)(j.KS.StreamWatchNudge, {
    notif_type: j.KS.StreamWatchNudge,
    notif_user_id: a.id,
    activity_type: null == n ? true : n.type,
    activity_name: null != R ? R : null == n ? true : n.name
  });
  return {
    body: (() => {
      switch (c) {
        case E.wD.GREEN_BUTTON_WITH_TEXT:
          return (0, i.jsx)(P, {
            user: a,
            application: T,
            runningGame: N,
            username: L,
            buttonColor: "green"
          });
        case E.wD.GRAY_BUTTON_WITH_TEXT:
          return (0, i.jsx)(P, {
            user: a,
            application: T,
            runningGame: N,
            username: L,
            buttonColor: "gray"
          });
        case E.wD.SINGLE_ICON_BUTTON:
          return (0, i.jsx)(D, {
            user: a,
            application: T,
            runningGame: N,
            username: L,
            iconColor: "white"
          })
      }
    })(),
    maxBodyLines: 1,
    onNotificationClick: (n, i) => {
      (() => {
        M("overlay-watch-stream");
        let [n] = y.A.getWidgetsByType(C.uss.GO_LIVE), i = h.A.getStreamParticipants(t).find(t => t.user.id === e);
        null != n && null != i && ((0, _.CZ)(i.stream, g.$.COVER), (0, u.A9)(i.stream, {
          forceMultiple: true,
          noFocus: true
        }), (0, o.v0)(n.id, {
          forcedPinnedState: true
        }), (0, o.dH)(n.id), (0, b.YX)(C.uss.GO_LIVE, {
          type: b.Z5.GO_LIVE,
          value: b.IP.ACCEPT_REQUEST,
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