/** Chunk was on 41753 **/
/** chunk id: 178088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk740442 = require("./740442.js"),
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
  Chunk711165 = require("./711165.jsx"),
  Chunk946443 = require("./946443.jsx"),
  Chunk264233 = require("./264233.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk556871 = require("./556871.js");

function w(e) {
  let {
    onOpen: t,
    onClose: n,
    children: l,
    badgeState: w,
    popoutPosition: Z,
    popoutAlign: T,
    targetElementRef: A,
    spacing: R,
    dialogClassName: D
  } = e, {
    analyticsLocations: L
  } = (0, h.ZP)(d.Z.NOTIFICATION_CENTER), [M, k] = i.useState(false), [U, G] = [(0, a.e7)([_.Z], () => {
    var e, t;
    return null != (t = null == (e = _.Z.settings.inbox) ? true : e.currentTab) ? t : c.X.UNREADS
  }), i.useCallback(e => {
    O.hW.updateAsync("inbox", t => {
      if (t.currentTab === e) returnfalse;
      t.currentTab = e
    }, O.fy.FREQUENT_USER_ACTION)
  }, [])], {
    showTutorial: B,
    setSeenTutorial: V
  } = function(e) {
    let t = (0, a.e7)([_.Z], () => {
        var e, t;
        return null != (t = null == (e = _.Z.settings.inbox) ? true : e.viewedTutorial) && t
      }),
      n = i.useCallback(() => {
        O.hW.updateAsync("inbox", e => {
          e.viewedTutorial = true
        }, O.fy.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === c.X.UNREADS,
      setSeenTutorial: n
    }
  }(U), F = i.useCallback(() => {
    k(false), M && (null == n || n())
  }, [n, M]), H = i.useCallback(() => {
    k(!M), M ? null == n || n() : null == t || t()
  }, [n, t, M]);
  i.useEffect(() => (y.S.subscribe(I.CkL.TOGGLE_INBOX, H), () => void y.S.unsubscribe(I.CkL.TOGGLE_INBOX, H)), [H]);
  let {
    enabled: z,
    inInbox: W
  } = f.Z.useExperiment({
    location: "RecentsPopout"
  }), K = (0, a.e7)([g.Z], () => g.Z.hasOverdueReminder(), []) && z && W, {
    enabled: Y
  } = p.Z.useExperiment({
    location: "RecentsPopout"
  });
  i.useEffect(() => {
    U !== c.X.BOOKMARKS || z || W || G(c.X.MENTIONS)
  });
  let q = i.useCallback(e => {
      e.shiftKey || F()
    }, [F]),
    X = (0, b.Us)({
      location: "ForYou"
    });
  return (0, r.jsx)(h.Gt, {
    value: L,
    children: (0, r.jsx)(u.yRy, {
      targetElementRef: A,
      animation: u.yRy.Animation.NONE,
      position: Z,
      align: T,
      autoInvert: false,
      shouldShow: M,
      onRequestClose: F,
      renderPopout: function() {
        return (0, r.jsx)(u.VqE, {
          "aria-label": P.intl.string(P.t.GSmTKC),
          className: D,
          children: (0, r.jsx)("div", {
            className: o()(N.container, {
              [N.widerInbox]: X
            }),
            children: (0, r.jsx)(u.y5t, {
              component: (0, r.jsx)(j.Z, {
                tab: U,
                setTab: G,
                badgeState: w,
                closePopout: F
              }),
              children: U === c.X.FOR_YOU ? (0, r.jsx)(C.ZP, {}) : U === c.X.MENTIONS ? (0, r.jsx)(v.Z, {
                onJump: q
              }) : Y && U === c.X.GAME_INVITES ? (0, r.jsx)(x.Z, {}) : z && W && U === c.X.BOOKMARKS ? (0, r.jsx)(m.K, {
                closePopout: F
              }) : U === c.X.SCHEDULED ? (0, r.jsx)(E._, {}) : (0, r.jsx)(s.SV, {
                fallback: (0, r.jsx)(S.h6, {}),
                children: (0, r.jsx)(S.ZP, {
                  onJump: q,
                  showTutorial: B,
                  setSeenTutorial: V,
                  closePopout: F
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