/** Chunk was on 41753 **/
/** chunk id: 178088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk740442 = require("./740442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk602478 = require("./602478.js"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk585483 = require("./585483.js"),
  Chunk400445 = require("./400445.jsx"),
  Chunk153209 = require("./153209.jsx"),
  Chunk903672 = require("./903672.jsx"),
  Chunk711165 = require("./711165.jsx"),
  Chunk946443 = require("./946443.jsx"),
  Chunk264233 = require("./264233.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function S(e) {
  let {
    onOpen: t,
    onClose: n,
    children: S,
    badgeState: x,
    popoutPosition: I,
    popoutAlign: P,
    targetElementRef: N,
    spacing: w,
    dialogClassName: Z
  } = e, {
    analyticsLocations: T
  } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER), [A, R] = i.useState(false), [D, L] = [(0, o.e7)([g.Z], () => {
    var e, t;
    return null != (t = null == (e = g.Z.settings.inbox) ? true : e.currentTab) ? t : s.X.UNREADS
  }), i.useCallback(e => {
    f.hW.updateAsync("inbox", t => {
      if (t.currentTab === e) returnfalse;
      t.currentTab = e
    }, f.fy.FREQUENT_USER_ACTION)
  }, [])], {
    showTutorial: M,
    setSeenTutorial: k
  } = function(e) {
    let t = (0, o.e7)([g.Z], () => {
        var e, t;
        return null != (t = null == (e = g.Z.settings.inbox) ? true : e.viewedTutorial) && t
      }),
      n = i.useCallback(() => {
        f.hW.updateAsync("inbox", e => {
          e.viewedTutorial = true
        }, f.fy.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === s.X.UNREADS,
      setSeenTutorial: n
    }
  }(D), U = i.useCallback(() => {
    R(false), A && (null == n || n())
  }, [n, A]), G = i.useCallback(() => {
    R(!A), A ? null == n || n() : null == t || t()
  }, [n, t, A]);
  i.useEffect(() => (m.S.subscribe(j.CkL.TOGGLE_INBOX, G), () => void m.S.unsubscribe(j.CkL.TOGGLE_INBOX, G)), [G]);
  let {
    enabled: B,
    inInbox: V
  } = h.Z.useExperiment({
    location: "RecentsPopout"
  }), F = (0, o.e7)([p.Z], () => p.Z.hasOverdueReminder(), []) && B && V, {
    enabled: H
  } = d.Z.useExperiment({
    location: "RecentsPopout"
  });
  i.useEffect(() => {
    D !== s.X.BOOKMARKS || B || V || L(s.X.MENTIONS)
  });
  let z = i.useCallback(e => {
    e.shiftKey || U()
  }, [U]);
  return (0, r.jsx)(u.Gt, {
    value: T,
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: N,
      animation: a.yRy.Animation.NONE,
      position: I,
      align: P,
      autoInvert: false,
      shouldShow: A,
      onRequestClose: U,
      renderPopout: function() {
        return (0, r.jsx)(a.VqE, {
          "aria-label": E.intl.string(E.t.GSmTKC),
          className: Z,
          children: D === s.X.FOR_YOU ? (0, r.jsx)(O.Z, {
            setTab: L,
            badgeState: x,
            closePopout: U
          }) : D === s.X.MENTIONS ? (0, r.jsx)(_.Z, {
            setTab: L,
            onJump: z,
            badgeState: x,
            closePopout: U
          }) : H && D === s.X.GAME_INVITES ? (0, r.jsx)(v.Z, {
            setTab: L,
            badgeState: x,
            closePopout: U
          }) : B && V && D === s.X.BOOKMARKS ? (0, r.jsx)(b.Z, {
            setTab: L,
            badgeState: x,
            closePopout: U
          }) : D === s.X.SCHEDULED ? (0, r.jsx)(y._, {
            setTab: L,
            closePopout: U
          }) : (0, r.jsx)(l.SV, {
            fallback: (0, r.jsx)(C.h, {
              setTab: L,
              closePopout: U,
              badgeState: x
            }),
            children: (0, r.jsx)(C.Z, {
              setTab: L,
              onJump: z,
              showTutorial: M,
              setSeenTutorial: k,
              closePopout: U,
              badgeState: x
            })
          })
        })
      },
      ignoreModalClicks: true,
      spacing: w,
      clickTrap: true,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return S(G, n, e, F)
      }
    })
  })
}