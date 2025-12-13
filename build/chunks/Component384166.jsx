/** Chunk was on 85032 **/
/** chunk id: 384166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk706619 = require("./706619.js"),
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
  Chunk933751 = require("./933751.js");

function j(e) {
  let {
    className: t
  } = e, {
    trackUserProfileEditSaved: n
  } = (0, f.KZ)(), [a, j] = i.useState(false), x = (0, c.Wu)([b.Z], () => {
    var e;
    return null != (e = b.Z.getSaveablePendingWidgets()) ? e : []
  }), P = (0, c.Wu)([b.Z], () => b.Z.getChangedWidgets()), I = (0, c.Wu)([b.Z], () => b.Z.getRemovedWidgets()), w = (0, c.e7)([b.Z], () => b.Z.hasUnsavedChanges()), S = (0, c.e7)([b.Z], () => b.Z.canSaveChanges()), E = (0, c.e7)([b.Z], () => b.Z.isSubmitting), T = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), _ = (0, s.Yzy)(w, {
    from: {
      opacity: 0,
      y: 80 * !T
    },
    enter: {
      opacity: 1,
      y: 0
    },
    leave: {
      opacity: 0,
      y: 80 * !T
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
    w && s.uvj.announce(v.intl.string(v.t["0Y/qkL"]))
  }, [w]);
  let C = i.useCallback(async () => {
      if (b.Z.canSaveChanges()) {
        try {
          await p.Z.savePendingWidgets(x)
        } catch (e) {
          (0, m.L$)(h.qb.WIDGET_SAVE_FAILURE);
          return
        }
        for (let e of P) {
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
      }
    }, [x, P, I, n]),
    D = i.useCallback(() => {
      p.Z.clearPendingWidgets()
    }, []);
  return _((e, n) => n ? (0, r.jsx)(o.animated.div, {
    className: t,
    style: e,
    children: (0, r.jsxs)("section", {
      className: l()(O.content, {
        [O.emphasized]: a
      }),
      "aria-label": v.intl.string(v.t["odDw+z"]),
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        className: O.message,
        children: v.intl.string(v.t["/lQiX/"])
      }), (0, r.jsxs)("div", {
        className: O.actions,
        children: [(0, r.jsx)(s.Button, {
          size: "sm",
          variant: "secondary",
          text: v.intl.string(v.t.yBZMsQ),
          onClick: D,
          disabled: !w || E
        }), (0, r.jsx)(s.Button, {
          size: "sm",
          variant: "primary",
          text: v.intl.string(v.t["R3BPH+"]),
          onClick: C,
          loading: E,
          disabled: !S || !w || E
        })]
      })]
    })
  }) : null)
}