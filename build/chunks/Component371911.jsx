/** Chunk was on 77870 **/
/** chunk id: 371911, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk484030 = require("./484030.js"),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk966597 = require("./966597.js"),
  Chunk85109 = require("./85109.js"),
  Chunk44022 = require("./44022.jsx"),
  Chunk566908 = require("./566908.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk203982 = require("./203982.js"),
  Chunk646468 = require("./646468.jsx"),
  Chunk492498 = require("./492498.jsx"),
  Chunk765627 = require("./765627.jsx"),
  Chunk547945 = require("./547945.jsx"),
  Chunk412484 = require("./412484.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk98938 = require("./98938.js");

function I(e) {
  let t, n, {
      onOpen: i,
      onClose: I,
      children: N,
      badgeState: T,
      popoutPosition: P,
      popoutAlign: w,
      targetElementRef: R,
      spacing: D,
      dialogClassName: M
    } = e,
    {
      analyticsLocations: L
    } = (0, p.Ay)(d.A.NOTIFICATION_CENTER),
    [k, G] = l.useState(false),
    [U, B] = [(0, o.bG)([A.A], () => {
      var e, t;
      return null != (e = null == (t = A.A.settings.inbox) ? true : t.currentTab) ? e : c.Y2.UNREADS
    }), l.useCallback(e => {
      b.wc.updateAsync("inbox", t => {
        if (t.currentTab === e) returnfalse;
        t.currentTab = e
      }, b.Sb.FREQUENT_USER_ACTION)
    }, [])],
    {
      showTutorial: V,
      setSeenTutorial: F
    } = (t = (0, o.bG)([A.A], () => {
      var e, t;
      return null != (e = null == (t = A.A.settings.inbox) ? true : t.viewedTutorial) && e
    }), n = l.useCallback(() => {
      b.wc.updateAsync("inbox", e => {
        e.viewedTutorial = true
      }, b.Sb.INFREQUENT_USER_ACTION)
    }, []), {
      showTutorial: !t && U === c.Y2.UNREADS,
      setSeenTutorial: n
    }),
    H = l.useCallback(() => {
      G(false), k && (null == I || I())
    }, [I, k]),
    K = l.useCallback(() => {
      G(!k), k ? null == I || I() : null == i || i()
    }, [I, i, k]);
  l.useEffect(() => (y._.subscribe(E.jej.TOGGLE_INBOX, K), () => void y._.unsubscribe(E.jej.TOGGLE_INBOX, K)), [K]);
  let {
    enabled: W,
    inInbox: z
  } = h.A.useExperiment({
    location: "RecentsPopout"
  }), Y = (0, o.bG)([f.A], () => f.A.hasOverdueReminder(), []) && W && z;
  l.useEffect(() => {
    U !== c.Y2.BOOKMARKS || W || z || B(c.Y2.MENTIONS), U === c.Y2.GAME_INVITES && B(c.Y2.MENTIONS)
  });
  let q = l.useCallback(e => {
      e.shiftKey || H()
    }, [H]),
    X = (0, m.Sc)({
      location: "ForYou"
    });
  return (0, r.jsx)(p.f5, {
    value: L,
    children: (0, r.jsx)(u.YNO, {
      targetElementRef: R,
      animation: u.YNO.Animation.NONE,
      position: P,
      align: w,
      autoInvert: false,
      shouldShow: k,
      onRequestClose: H,
      renderPopout: function() {
        return (0, r.jsx)(u.lGe, {
          "aria-label": C.intl.string(C.t.GSmTKJ),
          className: M,
          children: (0, r.jsx)("div", {
            className: s()(S.k, {
              [S.q]: X
            }),
            children: (0, r.jsx)(u.Fmo, {
              component: (0, r.jsx)(j.A, {
                tab: U,
                setTab: B,
                badgeState: T,
                closePopout: H
              }),
              children: U === c.Y2.FOR_YOU ? (0, r.jsx)(_.Ay, {}) : U === c.Y2.MENTIONS ? (0, r.jsx)(O.A, {
                onJump: q
              }) : W && z && U === c.Y2.BOOKMARKS ? (0, r.jsx)(g.J, {
                closePopout: H
              }) : U === c.Y2.SCHEDULED ? (0, r.jsx)(v.w, {}) : (0, r.jsx)(a.tH, {
                fallback: (0, r.jsx)(x.T, {}),
                children: (0, r.jsx)(x.Ay, {
                  onJump: q,
                  showTutorial: V,
                  setSeenTutorial: F,
                  closePopout: H
                })
              })
            })
          })
        })
      },
      ignoreModalClicks: true,
      spacing: D,
      clickTrap: true,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return N(K, n, e, Y)
      }
    })
  })
}