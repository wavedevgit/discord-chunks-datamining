/** Chunk was on 22325 **/
/** chunk id: 384166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk258536 = require("./258536.js"),
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

function O(e) {
  let {
    className: t
  } = e, {
    trackUserProfileEditSaved: n
  } = (0, f.KZ)(), [a, O] = i.useState(false), x = (0, c.Wu)([m.Z], () => {
    var e;
    return null != (e = m.Z.getSaveablePendingWidgets()) ? e : []
  }), _ = (0, c.Wu)([m.Z], () => m.Z.getChangedWidgets()), I = (0, c.Wu)([m.Z], () => m.Z.getRemovedWidgets()), P = (0, c.e7)([m.Z], () => m.Z.hasSaveablePendingChanges()), w = (0, c.e7)([m.Z], () => m.Z.isSubmitting), S = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), E = (0, s.Yzy)(P, {
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
      O(true), e = setTimeout(() => O(false), 500)
    }
    return d.S.subscribe(v.CkL.EMPHASIZE_NOTICE, t), () => {
      d.S.unsubscribe(v.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
    }
  }, []), i.useEffect(() => {
    P && s.uvj.announce(y.intl.string(y.t["0Y/qkJ"]))
  }, [P]);
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
      for (let e of I) n({
        widgetEdited: e.type,
        isWidgetRemoved: true
      })
    }, [x, _, I, n]),
    C = i.useCallback(() => {
      p.Z.clearPendingWidgets()
    }, []);
  return E((e, n) => n ? (0, r.jsx)(o.animated.div, {
    className: t,
    style: e,
    children: (0, r.jsxs)("section", {
      className: l()(j.content, {
        [j.emphasized]: a
      }),
      "aria-label": y.intl.string(y.t["odDw+/"]),
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        className: j.message,
        children: y.intl.string(y.t["/lQiX1"])
      }), (0, r.jsxs)("div", {
        className: j.actions,
        children: [(0, r.jsx)(s.Button, {
          size: "sm",
          variant: "secondary",
          text: y.intl.string(y.t.yBZMsb),
          onClick: C,
          disabled: !P || w
        }), (0, r.jsx)(s.Button, {
          size: "sm",
          variant: "primary",
          text: y.intl.string(y.t.R3BPHx),
          onClick: T,
          loading: w,
          disabled: !P || w
        })]
      })]
    })
  }) : null)
}