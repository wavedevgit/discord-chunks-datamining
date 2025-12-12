/** Chunk was on 64722 **/
/** chunk id: 178088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk253107 = require("./253107.js");

function P(e) {
  let {
    onOpen: t,
    onClose: n,
    children: l,
    badgeState: P,
    popoutPosition: N,
    popoutAlign: Z,
    targetElementRef: w,
    spacing: T,
    dialogClassName: A
  } = e, {
    analyticsLocations: R
  } = (0, f.ZP)(d.Z.NOTIFICATION_CENTER), [D, M] = i.useState(false), [L, k] = [(0, s.e7)([_.Z], () => {
    var e, t;
    return null != (t = null == (e = _.Z.settings.inbox) ? true : e.currentTab) ? t : c.X.UNREADS
  }), i.useCallback(e => {
    b.hW.updateAsync("inbox", t => {
      if (t.currentTab === e) returnfalse;
      t.currentTab = e
    }, b.fy.FREQUENT_USER_ACTION)
  }, [])], {
    showTutorial: G,
    setSeenTutorial: U
  } = function(e) {
    let t = (0, s.e7)([_.Z], () => {
        var e, t;
        return null != (t = null == (e = _.Z.settings.inbox) ? true : e.viewedTutorial) && t
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
  }(L), B = i.useCallback(() => {
    M(false), D && (null == n || n())
  }, [n, D]), F = i.useCallback(() => {
    M(!D), D ? null == n || n() : null == t || t()
  }, [n, t, D]);
  i.useEffect(() => (y.S.subscribe(E.CkL.TOGGLE_INBOX, F), () => void y.S.unsubscribe(E.CkL.TOGGLE_INBOX, F)), [F]);
  let {
    enabled: V,
    inInbox: H
  } = h.Z.useExperiment({
    location: "RecentsPopout"
  }), z = (0, s.e7)([p.Z], () => p.Z.hasOverdueReminder(), []) && V && H;
  i.useEffect(() => {
    L !== c.X.BOOKMARKS || V || H || k(c.X.MENTIONS), L === c.X.GAME_INVITES && k(c.X.MENTIONS)
  });
  let W = i.useCallback(e => {
      e.shiftKey || B()
    }, [B]),
    K = (0, m.Us)({
      location: "ForYou"
    });
  return (0, r.jsx)(f.Gt, {
    value: R,
    children: (0, r.jsx)(u.yRy, {
      targetElementRef: w,
      animation: u.yRy.Animation.NONE,
      position: N,
      align: Z,
      autoInvert: false,
      shouldShow: D,
      onRequestClose: B,
      renderPopout: function() {
        return (0, r.jsx)(u.VqE, {
          "aria-label": S.intl.string(S.t.GSmTKJ),
          className: A,
          children: (0, r.jsx)("div", {
            className: o()(I.container, {
              [I.widerInbox]: K
            }),
            children: (0, r.jsx)(u.y5t, {
              component: (0, r.jsx)(j.Z, {
                tab: L,
                setTab: k,
                badgeState: P,
                closePopout: B
              }),
              children: L === c.X.FOR_YOU ? (0, r.jsx)(O.ZP, {}) : L === c.X.MENTIONS ? (0, r.jsx)(v.Z, {
                onJump: W
              }) : V && H && L === c.X.BOOKMARKS ? (0, r.jsx)(g.K, {
                closePopout: B
              }) : L === c.X.SCHEDULED ? (0, r.jsx)(C._, {}) : (0, r.jsx)(a.SV, {
                fallback: (0, r.jsx)(x.h6, {}),
                children: (0, r.jsx)(x.ZP, {
                  onJump: W,
                  showTutorial: G,
                  setSeenTutorial: U,
                  closePopout: B
                })
              })
            })
          })
        })
      },
      ignoreModalClicks: true,
      spacing: T,
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