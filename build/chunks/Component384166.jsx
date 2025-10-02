/** Chunk was on 56848 **/
/** chunk id: 384166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk137317 = require("./137317.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk585483 = require("./585483.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk836197 = require("./836197.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk973301 = require("./973301.js");

function j(e) {
  let {
    className: t
  } = e, {
    trackUserProfileEditSaved: n
  } = (0, f.KZ)(), [a, j] = i.useState(false), P = (0, o.Wu)([p.Z], () => {
    var e;
    return null != (e = p.Z.getSaveablePendingWidgets()) ? e : []
  }), x = (0, o.Wu)([p.Z], () => p.Z.getChangedWidgets()), S = (0, o.Wu)([p.Z], () => p.Z.getRemovedWidgets()), I = (0, o.e7)([p.Z], () => p.Z.hasSaveablePendingChanges()), w = (0, o.e7)([p.Z], () => p.Z.isSubmitting), E = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), C = (0, c.Yzy)(I, {
    from: {
      opacity: 0,
      y: 80 * !E
    },
    enter: {
      opacity: 1,
      y: 0
    },
    leave: {
      opacity: 0,
      y: 80 * !E
    }
  });
  i.useEffect(() => {
    let e = null;

    function t() {
      j(true), e = setTimeout(() => j(false), 500)
    }
    return d.S.subscribe(b.CkL.EMPHASIZE_NOTICE, t), () => {
      d.S.unsubscribe(b.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
    }
  }, []), i.useEffect(() => {
    I && c.uvj.announce(y.intl.string(y.t["0Y/qkJ"]))
  }, [I]);
  let N = i.useCallback(async () => {
      try {
        await h.Z.savePendingWidgets(P)
      } catch (e) {
        (0, m.L$)(v.qb.WIDGET_SAVE_FAILURE);
        return
      }
      for (let e of x) {
        let t = {
          widgetEdited: e.type,
          isWidgetRemoved: false
        };
        (0, g.Wc)(e) && (t.gameIds = e.games.map(e => e.applicationId), t.tags = e.games.flatMap(e => {
          var t;
          return null != (t = e.tags) ? t : []
        }).map(e => e.toString()), t.numCharactersCommentary = e.games.reduce((e, t) => {
          var n, r;
          return e + (null != (r = null == (n = t.comment) ? true : n.length) ? r : 0)
        }, 0)), n(t)
      }
      for (let e of S) n({
        widgetEdited: e.type,
        isWidgetRemoved: true
      })
    }, [P, x, S, n]),
    A = i.useCallback(() => {
      h.Z.clearPendingWidgets()
    }, []);
  return C((e, n) => n ? (0, r.jsx)(s.animated.div, {
    className: t,
    style: e,
    children: (0, r.jsxs)("section", {
      className: l()(O.content, {
        [O.emphasized]: a
      }),
      "aria-label": y.intl.string(y.t["odDw+/"]),
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        className: O.message,
        children: y.intl.string(y.t["/lQiX1"])
      }), (0, r.jsxs)("div", {
        className: O.actions,
        children: [(0, r.jsx)(c.zxk, {
          size: "sm",
          variant: "secondary",
          text: y.intl.string(y.t.yBZMsb),
          onClick: A,
          disabled: !I || w
        }), (0, r.jsx)(c.zxk, {
          size: "sm",
          variant: "primary",
          text: y.intl.string(y.t.R3BPHx),
          onClick: N,
          loading: w,
          disabled: !I || w
        })]
      })]
    })
  }) : null)
}