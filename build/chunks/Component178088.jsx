/** Chunk was on 94709 **/
/** chunk id: 178088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk595697 = require("./595697.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk602478 = require("./602478.js"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js"),
  Chunk453473 = require("./453473.jsx"),
  Chunk216789 = require("./216789.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk585483 = require("./585483.js"),
  Chunk153209 = require("./153209.jsx"),
  Chunk903672 = require("./903672.jsx"),
  Chunk791914 = require("./791914.jsx"),
  Chunk416018 = require("./416018.jsx"),
  Chunk946443 = require("./946443.jsx"),
  Chunk264233 = require("./264233.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427998 = require("./427998.js");

function Z(e) {
  let {
    onOpen: t,
    onClose: n,
    children: l,
    badgeState: Z,
    popoutPosition: w,
    popoutAlign: T,
    targetElementRef: A,
    spacing: R,
    dialogClassName: D
  } = e, {
    analyticsLocations: L
  } = (0, p.ZP)(d.Z.NOTIFICATION_CENTER), [M, k] = i.useState(false), [G, U] = [(0, s.e7)([y.Z], () => {
    var e, t;
    return null != (t = null == (e = y.Z.settings.inbox) ? true : e.currentTab) ? t : c.X.UNREADS
  }), i.useCallback(e => {
    _.hW.updateAsync("inbox", t => {
      if (t.currentTab === e) returnfalse;
      t.currentTab = e
    }, _.fy.FREQUENT_USER_ACTION)
  }, [])], {
    showTutorial: B,
    setSeenTutorial: F
  } = function(e) {
    let t = (0, s.e7)([y.Z], () => {
        var e, t;
        return null != (t = null == (e = y.Z.settings.inbox) ? true : e.viewedTutorial) && t
      }),
      n = i.useCallback(() => {
        _.hW.updateAsync("inbox", e => {
          e.viewedTutorial = true
        }, _.fy.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === c.X.UNREADS,
      setSeenTutorial: n
    }
  }(G), V = i.useCallback(() => {
    k(false), M && (null == n || n())
  }, [n, M]), H = i.useCallback(() => {
    k(!M), M ? null == n || n() : null == t || t()
  }, [n, t, M]);
  i.useEffect(() => (O.S.subscribe(I.CkL.TOGGLE_INBOX, H), () => void O.S.unsubscribe(I.CkL.TOGGLE_INBOX, H)), [H]);
  let {
    enabled: z,
    inInbox: W
  } = f.Z.useExperiment({
    location: "RecentsPopout"
  }), K = (0, s.e7)([g.Z], () => g.Z.hasOverdueReminder(), []) && z && W, {
    enabled: Y
  } = h.Z.useExperiment({
    location: "RecentsPopout"
  });
  i.useEffect(() => {
    G !== c.X.BOOKMARKS || z || W || U(c.X.MENTIONS)
  });
  let q = i.useCallback(e => {
      e.shiftKey || V()
    }, [V]),
    X = (0, b.Us)({
      location: "ForYou"
    });
  return (0, r.jsx)(p.Gt, {
    value: L,
    children: (0, r.jsx)(u.yRy, {
      targetElementRef: A,
      animation: u.yRy.Animation.NONE,
      position: w,
      align: T,
      autoInvert: false,
      shouldShow: M,
      onRequestClose: V,
      renderPopout: function() {
        return (0, r.jsx)(u.VqE, {
          "aria-label": P.intl.string(P.t.GSmTKJ),
          className: D,
          children: (0, r.jsx)("div", {
            className: o()(N.container, {
              [N.widerInbox]: X
            }),
            children: (0, r.jsx)(u.y5t, {
              component: (0, r.jsx)(x.Z, {
                tab: G,
                setTab: U,
                badgeState: Z,
                closePopout: V
              }),
              children: G === c.X.FOR_YOU ? (0, r.jsx)(v.ZP, {}) : G === c.X.MENTIONS ? (0, r.jsx)(j.Z, {
                onJump: q
              }) : Y && G === c.X.GAME_INVITES ? (0, r.jsx)(S.Z, {}) : z && W && G === c.X.BOOKMARKS ? (0, r.jsx)(m.K, {
                closePopout: V
              }) : G === c.X.SCHEDULED ? (0, r.jsx)(C._, {}) : (0, r.jsx)(a.SV, {
                fallback: (0, r.jsx)(E.h6, {}),
                children: (0, r.jsx)(E.ZP, {
                  onJump: q,
                  showTutorial: B,
                  setSeenTutorial: F,
                  closePopout: V
                })
              })
            })
          })
        })
      },
      ignoreModalClicks: true,
      spacing: R,
      clickTrap: true,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return l(H, n, e, K)
      }
    })
  })
}