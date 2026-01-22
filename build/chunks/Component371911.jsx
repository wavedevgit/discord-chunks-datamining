/** Chunk was on 97492 **/
/** chunk id: 371911, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
    } = (0, f.Ay)(d.A.NOTIFICATION_CENTER),
    [G, k] = l.useState(false),
    [U, V] = [(0, o.bG)([A.A], () => {
      var e, t;
      return null != (e = null == (t = A.A.settings.inbox) ? true : t.currentTab) ? e : c.Y2.UNREADS
    }), l.useCallback(e => {
      m.wc.updateAsync("inbox", t => {
        if (t.currentTab === e) returnfalse;
        t.currentTab = e
      }, m.Sb.FREQUENT_USER_ACTION)
    }, [])],
    {
      showTutorial: F,
      setSeenTutorial: H
    } = (t = (0, o.bG)([A.A], () => {
      var e, t;
      return null != (e = null == (t = A.A.settings.inbox) ? true : t.viewedTutorial) && e
    }), n = l.useCallback(() => {
      m.wc.updateAsync("inbox", e => {
        e.viewedTutorial = true
      }, m.Sb.INFREQUENT_USER_ACTION)
    }, []), {
      showTutorial: !t && U === c.Y2.UNREADS,
      setSeenTutorial: n
    }),
    B = l.useCallback(() => {
      k(false), G && (null == I || I())
    }, [I, G]),
    K = l.useCallback(() => {
      k(!G), G ? null == I || I() : null == i || i()
    }, [I, i, G]);
  l.useEffect(() => (y._.subscribe(_.jej.TOGGLE_INBOX, K), () => void y._.unsubscribe(_.jej.TOGGLE_INBOX, K)), [K]);
  let {
    enabled: W,
    inInbox: z
  } = p.A.useExperiment({
    location: "RecentsPopout"
  }), Y = (0, o.bG)([h.A], () => h.A.hasOverdueReminder(), []) && W && z;
  l.useEffect(() => {
    U !== c.Y2.BOOKMARKS || W || z || V(c.Y2.MENTIONS), U === c.Y2.GAME_INVITES && V(c.Y2.MENTIONS)
  });
  let q = l.useCallback(e => {
      e.shiftKey || B()
    }, [B]),
    X = (0, g.Sc)({
      location: "ForYou"
    });
  return (0, r.jsx)(f.f5, {
    value: L,
    children: (0, r.jsx)(u.YNO, {
      targetElementRef: R,
      animation: u.YNO.Animation.NONE,
      position: P,
      align: w,
      autoInvert: false,
      shouldShow: G,
      onRequestClose: B,
      renderPopout: function() {
        return (0, r.jsx)(u.lGe, {
          "aria-label": C.intl.string(C.t.GSmTKJ),
          className: M,
          children: (0, r.jsx)("div", {
            className: a()(S.k, {
              [S.q]: X
            }),
            children: (0, r.jsx)(u.Fmo, {
              component: (0, r.jsx)(v.A, {
                tab: U,
                setTab: V,
                badgeState: T,
                closePopout: B
              }),
              children: U === c.Y2.FOR_YOU ? (0, r.jsx)(O.Ay, {}) : U === c.Y2.MENTIONS ? (0, r.jsx)(j.A, {
                onJump: q
              }) : W && z && U === c.Y2.BOOKMARKS ? (0, r.jsx)(b.J, {
                closePopout: B
              }) : U === c.Y2.SCHEDULED ? (0, r.jsx)(x.w, {}) : (0, r.jsx)(s.tH, {
                fallback: (0, r.jsx)(E.T, {}),
                children: (0, r.jsx)(E.Ay, {
                  onJump: q,
                  showTutorial: F,
                  setSeenTutorial: H,
                  closePopout: B
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