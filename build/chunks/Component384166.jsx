/** Chunk was on 36113 **/
/** chunk id: 384166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk203463 = require("./203463.js"),
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
  Chunk461671 = require("./461671.js");

function j(e) {
  let {
    className: t
  } = e, {
    trackUserProfileEditSaved: n
  } = (0, f.KZ)(), [a, j] = i.useState(false), x = (0, c.Wu)([m.Z], () => {
    var e;
    return null != (e = m.Z.getSaveablePendingWidgets()) ? e : []
  }), _ = (0, c.Wu)([m.Z], () => m.Z.getChangedWidgets()), P = (0, c.Wu)([m.Z], () => m.Z.getRemovedWidgets()), I = (0, c.e7)([m.Z], () => m.Z.hasSaveablePendingChanges()), w = (0, c.e7)([m.Z], () => m.Z.isSubmitting), S = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), E = (0, s.Yzy)(I, {
    from: {
      opacity: 0,
      y: 80 * !S
    },
    enter: {
      opacity: 1,
      y: 0
    },
    leave: {
      opacity: 0,
      y: 80 * !S
    }
  });
  i.useEffect(() => {
    let e = null;

    function t() {
      j(true), e = setTimeout(() => j(false), 500)
    }
    return d.S.subscribe(y.CkL.EMPHASIZE_NOTICE, t), () => {
      d.S.unsubscribe(y.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
    }
  }, []), i.useEffect(() => {
    I && s.uvj.announce(O.intl.string(O.t["0Y/qkL"]))
  }, [I]);
  let T = i.useCallback(async () => {
      try {
        await p.Z.savePendingWidgets(x)
      } catch (e) {
        (0, b.L$)(h.qb.WIDGET_SAVE_FAILURE);
        return
      }
      for (let e of _) {
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
      for (let e of P) n({
        widgetEdited: e.type,
        isWidgetRemoved: true
      })
    }, [x, _, P, n]),
    C = i.useCallback(() => {
      p.Z.clearPendingWidgets()
    }, []);
  return E((e, n) => n ? (0, r.jsx)(o.animated.div, {
    className: t,
    style: e,
    children: (0, r.jsxs)("section", {
      className: l()(v.content, {
        [v.emphasized]: a
      }),
      "aria-label": O.intl.string(O.t["odDw+z"]),
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        className: v.message,
        children: O.intl.string(O.t["/lQiX/"])
      }), (0, r.jsxs)("div", {
        className: v.actions,
        children: [(0, r.jsx)(s.Button, {
          size: "sm",
          variant: "secondary",
          text: O.intl.string(O.t.yBZMsQ),
          onClick: C,
          disabled: !I || w
        }), (0, r.jsx)(s.Button, {
          size: "sm",
          variant: "primary",
          text: O.intl.string(O.t["R3BPH+"]),
          onClick: T,
          loading: w,
          disabled: !I || w
        })]
      })]
    })
  }) : null)
}