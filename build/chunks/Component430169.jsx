/** Chunk was on 50751 **/
/** chunk id: 430169, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
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
  Chunk624864 = require("./624864.js"),
  Chunk631734 = require("./631734.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk796212 = require("./796212.js");

function _(e) {
  let {
    user: t,
    application: n,
    runningGame: r
  } = e;
  return null != n || null != r ? (0, i.jsx)("div", {
    className: T.avatarWrapper,
    children: (0, i.jsx)(a.aRk, {
      lowerBadge: (0, i.jsx)("div", {
        className: T.gameIconMask,
        children: null != n || null != r ? (0, i.jsx)(f.Z, {
          game: n,
          pid: null == r ? true : r.pid,
          size: f.A.XXSMALL,
          className: T.gameIcon
        }) : null
      }),
      lowerBadgeSize: {
        width: 16,
        height: 16
      },
      children: (0, i.jsx)(u.Z, {
        user: t,
        "aria-hidden": true,
        size: a.EFr.SIZE_40
      })
    })
  }) : (0, i.jsx)(u.Z, {
    user: t,
    "aria-hidden": true,
    size: a.EFr.SIZE_40
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
    className: T.container,
    children: [(0, i.jsx)("div", {
      className: T.avatarContainer,
      children: (0, i.jsx)(_, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: l()(T.body, T.singleLineBody),
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: T.bodyText,
        children: w.intl.format(w.t.vTPX23, {
          username: o
        })
      })
    }), (0, i.jsx)("div", {
      className: T.watchButtonContainer,
      children: (0, i.jsx)(a.P3F, {
        onClick: s,
        className: l()(T.watchButton, "green" === c && T.greenButton, "gray" === c && T.grayButton),
        children: (0, i.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          tag: "span",
          children: w.intl.string(w.t["xl+bTG"])
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
    className: T.container,
    children: [(0, i.jsx)("div", {
      className: T.avatarContainer,
      children: (0, i.jsx)(_, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: l()(T.body, T.singleLineBody),
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: T.bodyText,
        children: w.intl.format(w.t.NmEczg, {
          username: o
        })
      })
    }), (0, i.jsx)("div", {
      className: T.buttonDivider
    }), (0, i.jsx)("div", {
      className: T.watchButtonContainer,
      children: (0, i.jsx)(a.P3F, {
        onClick: s,
        className: T.watchIconButton,
        children: (0, i.jsx)(I.a, {
          size: "sm",
          color: "green" === c ? "white" : a.TVs.colors.INTERACTIVE_ACTIVE.css
        })
      })
    })]
  })
}

function D(e, t, n) {
  var r, l;
  if (j.Z.isNotificationDisabled(Z.n0.StreamWatchNudge)) return null;
  let a = E.default.getUser(e);
  if (null == a) return null;
  let {
    designVariant: u
  } = (0, b.lj)("OverlayV3StreamWatchNudge"), f = null == n ? true : n.application_id, I = g.Z.getChannel(t), w = null != f ? d.Z.getApplication(f) : null, T = null != f ? y.Z.getDetectableGame(f) : null, _ = null != f ? p.ZP.getRunningGames().find(e => e.id === f) : null, D = null != (l = null != (r = null == _ ? true : _.name) ? r : null == T ? true : T.name) ? l : null == w ? true : w.name, R = (0, v.oY)(null == I ? true : I.guild_id, null == I ? true : I.id, a), {
    trackView: k,
    trackClick: L
  } = (0, C.Rg)(Z.n0.StreamWatchNudge, {
    notif_type: Z.n0.StreamWatchNudge,
    notif_user_id: a.id,
    activity_type: null == n ? true : n.type,
    activity_name: null != D ? D : null == n ? true : n.name
  });
  return {
    body: (() => {
      switch (u) {
        case b.RD.GREEN_BUTTON_WITH_TEXT:
          return (0, i.jsx)(P, {
            user: a,
            application: w,
            runningGame: _,
            username: R,
            buttonColor: "green"
          });
        case b.RD.GRAY_BUTTON_WITH_TEXT:
          return (0, i.jsx)(P, {
            user: a,
            application: w,
            runningGame: _,
            username: R,
            buttonColor: "gray"
          });
        case b.RD.SINGLE_ICON_BUTTON:
          return (0, i.jsx)(A, {
            user: a,
            application: w,
            runningGame: _,
            username: R,
            iconColor: "white"
          })
      }
    })(),
    maxBodyLines: 1,
    onNotificationClick: (n, i) => {
      L("overlay-watch-stream");
      let [r] = O.Z.getWidgetsByType(N.Odu.GO_LIVE), l = h.Z.getStreamParticipants(t).find(t => t.user.id === e);
      null != r && null != l && ((0, x.gI)(l.stream, m.L.COVER), (0, c.rn)(l.stream, {
        forceMultiple: true,
        noFocus: true
      }), (0, o.xh)(r.id, {
        forcedPinnedState: true
      }), (0, o.n6)(r.id), (0, S.Ws)(N.Odu.GO_LIVE, {
        type: S.Qu.GO_LIVE,
        value: S.bk.ACCEPT_REQUEST,
        userId: l.user.id
      })), setTimeout(() => {
        s.Z.updateNotificationStatus(i)
      }, 300)
    },
    onNotificationShow: () => {
      k()
    },
    onDismissClick: (e, t) => {
      L("dismiss"), s.Z.updateNotificationStatus(t)
    }
  }
}