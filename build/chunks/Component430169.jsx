/** Chunk was on 50751 **/
/** chunk id: 430169, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk872810 = require("./872810.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk358221 = require("./358221.js"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk77498 = require("./77498.js"),
  Chunk355863 = require("./355863.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk444295 = require("./444295.js"),
  Chunk32300 = require("./32300.js"),
  Chunk1226 = require("./1226.js"),
  Chunk624864 = require("./624864.js"),
  Chunk631734 = require("./631734.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk612118 = require("./612118.js");

function T(e) {
  let {
    user: t,
    application: n,
    runningGame: r
  } = e;
  return null != n || null != r ? (0, i.jsx)("div", {
    className: w.avatarWrapper,
    children: (0, i.jsx)(l.aRk, {
      lowerBadge: (0, i.jsx)("div", {
        className: w.gameIconMask,
        children: null != n || null != r ? (0, i.jsx)(p.Z, {
          game: n,
          pid: null == r ? true : r.pid,
          size: p.A.XXSMALL,
          className: w.gameIcon
        }) : null
      }),
      lowerBadgeSize: {
        width: 16,
        height: 16
      },
      children: (0, i.jsx)(u.Z, {
        user: t,
        "aria-hidden": true,
        size: l.EFr.SIZE_40
      })
    })
  }) : (0, i.jsx)(u.Z, {
    user: t,
    "aria-hidden": true,
    size: l.EFr.SIZE_40
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
    className: w.container,
    children: [(0, i.jsx)("div", {
      className: w.avatarContainer,
      children: (0, i.jsx)(T, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: a()(w.body, w.singleLineBody),
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "interactive-text-default",
        className: w.bodyText,
        children: N.intl.format(N.t.vTPX23, {
          username: o
        })
      })
    }), (0, i.jsx)("div", {
      className: w.watchButtonContainer,
      children: (0, i.jsx)(l.P3F, {
        onClick: s,
        className: a()(w.watchButton, "green" === c && w.greenButton, "gray" === c && w.grayButton),
        children: (0, i.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          tag: "span",
          children: N.intl.string(N.t["xl+bTG"])
        })
      })
    })]
  })
}

function A(e) {
  let {
    user: t,
    application: n,
    runningGame: r,
    username: o,
    onWatchClick: s,
    iconColor: c
  } = e;
  return (0, i.jsxs)("div", {
    className: w.container,
    children: [(0, i.jsx)("div", {
      className: w.avatarContainer,
      children: (0, i.jsx)(T, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: a()(w.body, w.singleLineBody),
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "interactive-text-default",
        className: w.bodyText,
        children: N.intl.format(N.t.NmEczg, {
          username: o
        })
      })
    }), (0, i.jsx)("div", {
      className: w.buttonDivider
    }), (0, i.jsx)("div", {
      className: w.watchButtonContainer,
      children: (0, i.jsx)(l.P3F, {
        onClick: s,
        className: w.watchIconButton,
        children: (0, i.jsx)(j.a, {
          size: "sm",
          color: "green" === c ? "white" : l.TVs.colors.INTERACTIVE_TEXT_ACTIVE.css
        })
      })
    })]
  })
}

function k(e, t, n) {
  var r, a;
  if (I.Z.isNotificationDisabled(_.n0.StreamWatchNudge)) return null;
  let l = O.default.getUser(e);
  if (null == l) return null;
  let {
    designVariant: u
  } = (0, S.lj)("OverlayV3StreamWatchNudge"), p = null == n ? true : n.application_id, j = g.Z.getChannel(t), N = null != p ? d.Z.getApplication(p) : null, w = null != p ? b.Z.getDetectableGame(p) : null, T = null != p ? h.ZP.getRunningGames().find(e => e.id === p) : null, k = null != (a = null != (r = null == T ? true : T.name) ? r : null == w ? true : w.name) ? a : null == N ? true : N.name, D = (0, v.oY)(null == j ? true : j.guild_id, null == j ? true : j.id, l), {
    trackView: R,
    trackClick: L
  } = (0, C.Rg)(_.n0.StreamWatchNudge, {
    notif_type: _.n0.StreamWatchNudge,
    notif_user_id: l.id,
    activity_type: null == n ? true : n.type,
    activity_name: null != k ? k : null == n ? true : n.name
  });
  return {
    body: (() => {
      switch (u) {
        case S.RD.GREEN_BUTTON_WITH_TEXT:
          return (0, i.jsx)(P, {
            user: l,
            application: N,
            runningGame: T,
            username: D,
            buttonColor: "green"
          });
        case S.RD.GRAY_BUTTON_WITH_TEXT:
          return (0, i.jsx)(P, {
            user: l,
            application: N,
            runningGame: T,
            username: D,
            buttonColor: "gray"
          });
        case S.RD.SINGLE_ICON_BUTTON:
          return (0, i.jsx)(A, {
            user: l,
            application: N,
            runningGame: T,
            username: D,
            iconColor: "white"
          })
      }
    })(),
    maxBodyLines: 1,
    onNotificationClick: (n, i) => {
      L("overlay-watch-stream");
      let [r] = y.Z.getWidgetsByType(Z.Odu.GO_LIVE), a = f.Z.getStreamParticipants(t).find(t => t.user.id === e);
      null != r && null != a && ((0, x.gI)(a.stream, m.L.COVER), (0, c.rn)(a.stream, {
        forceMultiple: true,
        noFocus: true
      }), (0, o.xh)(r.id, {
        forcedPinnedState: true
      }), (0, o.n6)(r.id), (0, E.Ws)(Z.Odu.GO_LIVE, {
        type: E.Qu.GO_LIVE,
        value: E.bk.ACCEPT_REQUEST,
        userId: a.user.id
      })), setTimeout(() => {
        s.Z.updateNotificationStatus(i)
      }, 300)
    },
    onNotificationShow: () => {
      R()
    },
    onDismissClick: (e, t) => {
      L("dismiss"), s.Z.updateNotificationStatus(t)
    }
  }
}