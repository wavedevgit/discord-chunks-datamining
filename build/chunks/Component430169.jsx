/** Chunk was on 2803 **/
/** chunk id: 430169, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk765250 = require("./765250.js"),
  Chunk872810 = require("./872810.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk358221 = require("./358221.js"),
  Chunk594190 = require("./594190.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk569545 = require("./569545.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk77498 = require("./77498.js"),
  Chunk355863 = require("./355863.js"),
  Chunk959457 = require("./959457.js"),
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
  Chunk700460 = require("./700460.js");

function D(e) {
  let {
    user: t,
    application: n,
    runningGame: r
  } = e;
  return null != n || null != r ? (0, i.jsx)("div", {
    className: A.avatarWrapper,
    children: (0, i.jsx)(o.aRk, {
      lowerBadge: (0, i.jsx)("div", {
        className: A.gameIconMask,
        children: null != n || null != r ? (0, i.jsx)(f.Z, {
          game: n,
          pid: null == r ? true : r.pid,
          size: f.A.XXSMALL,
          className: A.gameIcon
        }) : null
      }),
      lowerBadgeSize: {
        width: 16,
        height: 16
      },
      children: (0, i.jsx)(u.Z, {
        user: t,
        "aria-hidden": true,
        size: o.EFr.SIZE_40
      })
    })
  }) : (0, i.jsx)(u.Z, {
    user: t,
    "aria-hidden": true,
    size: o.EFr.SIZE_40
  })
}

function k(e) {
  let {
    user: t,
    application: n,
    runningGame: r,
    username: a,
    onWatchClick: s,
    buttonColor: c
  } = e;
  return (0, i.jsxs)("div", {
    className: A.container,
    children: [(0, i.jsx)("div", {
      className: A.avatarContainer,
      children: (0, i.jsx)(D, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: l()(A.body, A.singleLineBody),
      children: (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: A.bodyText,
        children: P.intl.format(P.t.vTPX29, {
          username: a
        })
      })
    }), (0, i.jsx)("div", {
      className: A.watchButtonContainer,
      children: (0, i.jsx)(o.P3F, {
        onClick: s,
        className: l()(A.watchButton, "green" === c && A.greenButton, "gray" === c && A.grayButton),
        children: (0, i.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          tag: "span",
          children: P.intl.string(P.t["xl+bTE"])
        })
      })
    })]
  })
}

function R(e) {
  let {
    user: t,
    application: n,
    runningGame: r,
    username: a,
    onWatchClick: s,
    iconColor: c
  } = e;
  return (0, i.jsxs)("div", {
    className: A.container,
    children: [(0, i.jsx)("div", {
      className: A.avatarContainer,
      children: (0, i.jsx)(D, {
        user: t,
        application: n,
        runningGame: r
      })
    }), (0, i.jsx)("div", {
      className: l()(A.body, A.singleLineBody),
      children: (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: A.bodyText,
        children: P.intl.format(P.t.NmEczs, {
          username: a
        })
      })
    }), (0, i.jsx)("div", {
      className: A.buttonDivider
    }), (0, i.jsx)("div", {
      className: A.watchButtonContainer,
      children: (0, i.jsx)(o.P3F, {
        onClick: s,
        className: A.watchIconButton,
        children: (0, i.jsx)(w.a, {
          size: "sm",
          color: "green" === c ? "white" : o.TVs.colors.INTERACTIVE_ACTIVE.css
        })
      })
    })]
  })
}

function L(e, t, n) {
  var r, l;
  let o = x.default.getUser(e);
  if (null == o) return null;
  let {
    designVariant: u
  } = (0, C.lj)("OverlayV3StreamWatchNudge"), f = null == n ? true : n.application_id, w = v.Z.getChannel(t), P = null != f ? d.Z.getApplication(f) : null, A = null != f ? b.Z.getDetectableGame(f) : null, D = null != f ? h.ZP.getRunningGames().find(e => e.id === f) : null, L = null != (l = null != (r = null == D ? true : D.name) ? r : null == A ? true : A.name) ? l : null == P ? true : P.name, M = (0, S.oY)(null == w ? true : w.guild_id, null == w ? true : w.id, o), V = e => null != e && _.Z.isUserConnected((0, m.V9)(e.stream), O.default.getId()), z = e => {
    if (null == e) returnfalse;
    let t = y.Z.getActiveStreamForStreamKey((0, m.V9)(e.stream));
    return (null == t ? true : t.state) === T.jm8.ACTIVE
  }, U = () => p.Z.getStreamParticipants(t).find(t => t.user.id === e), W = () => {
    B("overlay-watch-stream");
    let [e] = E.Z.getWidgetsByType(T.Odu.GO_LIVE), t = U();
    if (null == e || null == t) return;
    let n = (0, m.V9)(t.stream),
      i = V(t),
      r = z(t);
    if (i && r) return (0, s.n6)(e.id);
    let l = null;

    function o() {
      clearTimeout(l), a.Z.unsubscribe("STREAM_UPDATE", d), a.Z.unsubscribe("RTC_CONNECTION_STATE", p)
    }

    function u() {
      (0, s.n6)(e.id), o()
    }

    function d(e) {
      let {
        streamKey: t,
        paused: i
      } = e, r = U();
      if (null != r) V(r) && !i && t === n && u()
    }

    function p(e) {
      let {
        state: t,
        streamKey: i
      } = e, r = U();
      if (null == r) return;
      let l = t === T.hes.RTC_CONNECTED && i === n,
        o = z(r);
      l && o && u()
    }
    a.Z.subscribe("RTC_CONNECTION_STATE", p), a.Z.subscribe("STREAM_UPDATE", d), (0, j.gI)(t.stream, g.L.COVER), (0, c.rn)(t.stream, {
      forceMultiple: true,
      noFocus: true
    }), l = setTimeout(() => {
      o()
    }, 1e4), e.pinned || (0, s.xh)(e.id), (0, I.Ws)(T.Odu.GO_LIVE, {
      type: I.Qu.GO_LIVE,
      value: I.bk.ACCEPT_REQUEST,
      userId: t.user.id
    })
  }, {
    trackView: G,
    trackClick: B
  } = (0, N.R)(Z.n0.StreamWatchNudge, {
    notif_type: Z.n0.StreamWatchNudge,
    notif_user_id: o.id,
    activity_type: null == n ? true : n.type,
    activity_name: null != L ? L : null == n ? true : n.name
  });
  return {
    body: (() => {
      switch (u) {
        case C.RD.GREEN_BUTTON_WITH_TEXT:
          return (0, i.jsx)(k, {
            user: o,
            application: P,
            runningGame: D,
            username: M,
            onWatchClick: W,
            buttonColor: "green"
          });
        case C.RD.GRAY_BUTTON_WITH_TEXT:
          return (0, i.jsx)(k, {
            user: o,
            application: P,
            runningGame: D,
            username: M,
            onWatchClick: W,
            buttonColor: "gray"
          });
        case C.RD.SINGLE_ICON_BUTTON:
          return (0, i.jsx)(R, {
            user: o,
            application: P,
            runningGame: D,
            username: M,
            onWatchClick: W,
            iconColor: "white"
          })
      }
    })(),
    maxBodyLines: 1,
    onNotificationClick: () => {
      B("dismiss")
    },
    onNotificationShow: () => {
      G()
    },
    onDismissClick: () => {
      B("dismiss")
    }
  }
}