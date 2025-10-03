/** Chunk was on 50751 **/
/** chunk id: 430169, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk631734 = require("./631734.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk796212 = require("./796212.js");

function T(e) {
  let {
    user: t,
    application: n,
    runningGame: r
  } = e;
  return null != n || null != r ? (0, i.jsx)("div", {
    className: w.avatarWrapper,
    children: (0, i.jsx)(o.aRk, {
      lowerBadge: (0, i.jsx)("div", {
        className: w.gameIconMask,
        children: null != n || null != r ? (0, i.jsx)(f.Z, {
          game: n,
          pid: null == r ? true : r.pid,
          size: f.A.XXSMALL,
          className: w.gameIcon
        }) : null
      }),
      lowerBadgeSize: {
        width: 16,
        height: 16
      },
      children: (0, i.jsx)(c.Z, {
        user: t,
        "aria-hidden": true,
        size: o.EFr.SIZE_40
      })
    })
  }) : (0, i.jsx)(c.Z, {
    user: t,
    "aria-hidden": true,
    size: o.EFr.SIZE_40
  })
}

function _(e) {
  let {
    user: t,
    application: n,
    runningGame: r,
    username: a,
    onWatchClick: s,
    buttonColor: u
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
      className: l()(w.body, w.singleLineBody),
      children: (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: w.bodyText,
        children: N.intl.format(N.t.vTPX29, {
          username: a
        })
      })
    }), (0, i.jsx)("div", {
      className: w.watchButtonContainer,
      children: (0, i.jsx)(o.P3F, {
        onClick: s,
        className: l()(w.watchButton, "green" === u && w.greenButton, "gray" === u && w.grayButton),
        children: (0, i.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          tag: "span",
          children: N.intl.string(N.t["xl+bTE"])
        })
      })
    })]
  })
}

function P(e) {
  let {
    user: t,
    application: n,
    runningGame: r,
    username: a,
    onWatchClick: s,
    iconColor: u
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
      className: l()(w.body, w.singleLineBody),
      children: (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: w.bodyText,
        children: N.intl.format(N.t.NmEczs, {
          username: a
        })
      })
    }), (0, i.jsx)("div", {
      className: w.buttonDivider
    }), (0, i.jsx)("div", {
      className: w.watchButtonContainer,
      children: (0, i.jsx)(o.P3F, {
        onClick: s,
        className: w.watchIconButton,
        children: (0, i.jsx)(j.a, {
          size: "sm",
          color: "green" === u ? "white" : o.TVs.colors.INTERACTIVE_ACTIVE.css
        })
      })
    })]
  })
}

function D(e, t, n) {
  var r, l;
  let o = E.default.getUser(e);
  if (null == o) return null;
  let {
    designVariant: c
  } = (0, b.lj)("OverlayV3StreamWatchNudge"), f = null == n ? true : n.application_id, j = g.Z.getChannel(t), N = null != f ? d.Z.getApplication(f) : null, w = null != f ? y.Z.getDetectableGame(f) : null, T = null != f ? p.ZP.getRunningGames().find(e => e.id === f) : null, D = null != (l = null != (r = null == T ? true : T.name) ? r : null == w ? true : w.name) ? l : null == N ? true : N.name, A = (0, v.oY)(null == j ? true : j.guild_id, null == j ? true : j.id, o), {
    trackView: R,
    trackClick: k
  } = (0, I.R)(C.n0.StreamWatchNudge, {
    notif_type: C.n0.StreamWatchNudge,
    notif_user_id: o.id,
    activity_type: null == n ? true : n.type,
    activity_name: null != D ? D : null == n ? true : n.name
  });
  return {
    body: (() => {
      switch (c) {
        case b.RD.GREEN_BUTTON_WITH_TEXT:
          return (0, i.jsx)(_, {
            user: o,
            application: N,
            runningGame: T,
            username: A,
            buttonColor: "green"
          });
        case b.RD.GRAY_BUTTON_WITH_TEXT:
          return (0, i.jsx)(_, {
            user: o,
            application: N,
            runningGame: T,
            username: A,
            buttonColor: "gray"
          });
        case b.RD.SINGLE_ICON_BUTTON:
          return (0, i.jsx)(P, {
            user: o,
            application: N,
            runningGame: T,
            username: A,
            iconColor: "white"
          })
      }
    })(),
    maxBodyLines: 1,
    onNotificationClick: (n, i) => {
      k("overlay-watch-stream");
      let [r] = O.Z.getWidgetsByType(Z.Odu.GO_LIVE), l = h.Z.getStreamParticipants(t).find(t => t.user.id === e);
      null != r && null != l && ((0, x.gI)(l.stream, m.L.COVER), (0, u.rn)(l.stream, {
        forceMultiple: true,
        noFocus: true
      }), (0, a.xh)(r.id, {
        forcedPinnedState: true
      }), (0, a.n6)(r.id), (0, S.Ws)(Z.Odu.GO_LIVE, {
        type: S.Qu.GO_LIVE,
        value: S.bk.ACCEPT_REQUEST,
        userId: l.user.id
      })), setTimeout(() => {
        s.Z.updateNotificationStatus(i)
      }, 300)
    },
    onNotificationShow: () => {
      R()
    },
    onDismissClick: (e, t) => {
      k("dismiss"), s.Z.updateNotificationStatus(t)
    }
  }
}