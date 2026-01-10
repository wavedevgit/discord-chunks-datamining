/** Chunk was on 81985 **/
/** chunk id: 178088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk734610 = require("./734610.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk424626 = require("./424626.js");

function P(e) {
  let {
    onOpen: t,
    onClose: n,
    children: l,
    badgeState: P,
    popoutPosition: Z,
    popoutAlign: N,
    targetElementRef: T,
    spacing: A,
    dialogClassName: w
  } = e, {
    analyticsLocations: R
  } = (0, p.ZP)(d.Z.NOTIFICATION_CENTER), [D, M] = i.useState(false), [k, L] = [(0, s.e7)([y.Z], () => {
    var e, t;
    return null != (t = null == (e = y.Z.settings.inbox) ? true : e.currentTab) ? t : c.X.UNREADS
  }), i.useCallback(e => {
    b.hW.updateAsync("inbox", t => {
      if (t.currentTab === e) returnfalse;
      t.currentTab = e
    }, b.fy.FREQUENT_USER_ACTION)
  }, [])], {
    showTutorial: U,
    setSeenTutorial: G
  } = function(e) {
    let t = (0, s.e7)([y.Z], () => {
        var e, t;
        return null != (t = null == (e = y.Z.settings.inbox) ? true : e.viewedTutorial) && t
      }),
      n = i.useCallback(() => {
        b.hW.updateAsync("inbox", e => {
          e.viewedTutorial = true
        }, b.fy.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === c.X.UNREADS,
      setSeenTutorial: n
    }
  }(k), B = i.useCallback(() => {
    M(false), D && (null == n || n())
  }, [n, D]), F = i.useCallback(() => {
    M(!D), D ? null == n || n() : null == t || t()
  }, [n, t, D]);
  i.useEffect(() => (v.S.subscribe(S.CkL.TOGGLE_INBOX, F), () => void v.S.unsubscribe(S.CkL.TOGGLE_INBOX, F)), [F]);
  let {
    enabled: H,
    inInbox: V
  } = f.Z.useExperiment({
    location: "RecentsPopout"
  }), z = (0, s.e7)([h.Z], () => h.Z.hasOverdueReminder(), []) && H && V;
  i.useEffect(() => {
    k !== c.X.BOOKMARKS || H || V || L(c.X.MENTIONS), k === c.X.GAME_INVITES && L(c.X.MENTIONS)
  });
  let W = i.useCallback(e => {
      e.shiftKey || B()
    }, [B]),
    K = (0, m.Us)({
      location: "ForYou"
    });
  return (0, r.jsx)(p.Gt, {
    value: R,
    children: (0, r.jsx)(u.yRy, {
      targetElementRef: T,
      animation: u.yRy.Animation.NONE,
      position: Z,
      align: N,
      autoInvert: false,
      shouldShow: D,
      onRequestClose: B,
      renderPopout: function() {
        return (0, r.jsx)(u.VqE, {
          "aria-label": _.intl.string(_.t.GSmTKJ),
          className: w,
          children: (0, r.jsx)("div", {
            className: a()(I.container, {
              [I.widerInbox]: K
            }),
            children: (0, r.jsx)(u.y5t, {
              component: (0, r.jsx)(x.Z, {
                tab: k,
                setTab: L,
                badgeState: P,
                closePopout: B
              }),
              children: k === c.X.FOR_YOU ? (0, r.jsx)(O.ZP, {}) : k === c.X.MENTIONS ? (0, r.jsx)(j.Z, {
                onJump: W
              }) : H && V && k === c.X.BOOKMARKS ? (0, r.jsx)(g.K, {
                closePopout: B
              }) : k === c.X.SCHEDULED ? (0, r.jsx)(C._, {}) : (0, r.jsx)(o.SV, {
                fallback: (0, r.jsx)(E.h6, {}),
                children: (0, r.jsx)(E.ZP, {
                  onJump: W,
                  showTutorial: U,
                  setSeenTutorial: G,
                  closePopout: B
                })
              })
            })
          })
        })
      },
      ignoreModalClicks: true,
      spacing: A,
      clickTrap: true,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return l(F, n, e, z)
      }
    })
  })
}