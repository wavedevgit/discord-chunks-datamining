/** Chunk was on 56848 **/
/** chunk id: 384166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk461671 = require("./461671.js");

function O(e) {
  let {
    className: t
  } = e, {
    trackUserProfileEditSaved: n
  } = (0, f.KZ)(), [l, O] = i.useState(false), x = (0, o.Wu)([h.Z], () => {
    var e;
    return null != (e = h.Z.getSaveablePendingWidgets()) ? e : []
  }), P = (0, o.Wu)([h.Z], () => h.Z.getChangedWidgets()), I = (0, o.Wu)([h.Z], () => h.Z.getRemovedWidgets()), S = (0, o.e7)([h.Z], () => h.Z.hasSaveablePendingChanges()), w = (0, o.e7)([h.Z], () => h.Z.isSubmitting), E = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), T = (0, c.Yzy)(S, {
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
      O(true), e = setTimeout(() => O(false), 500)
    }
    return d.S.subscribe(y.CkL.EMPHASIZE_NOTICE, t), () => {
      d.S.unsubscribe(y.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
    }
  }, []), i.useEffect(() => {
    S && c.uvj.announce(j.intl.string(j.t["0Y/qkJ"]))
  }, [S]);
  let A = i.useCallback(async () => {
      try {
        await p.Z.savePendingWidgets(x)
      } catch (e) {
        (0, m.L$)(v.qb.WIDGET_SAVE_FAILURE);
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
    }, [x, P, I, n]),
    N = i.useCallback(() => {
      p.Z.clearPendingWidgets()
    }, []);
  return T((e, n) => n ? (0, r.jsx)(s.animated.div, {
    className: t,
    style: e,
    children: (0, r.jsxs)("section", {
      className: a()(b.content, {
        [b.emphasized]: l
      }),
      "aria-label": j.intl.string(j.t["odDw+/"]),
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        className: b.message,
        children: j.intl.string(j.t["/lQiX1"])
      }), (0, r.jsxs)("div", {
        className: b.actions,
        children: [(0, r.jsx)(c.zxk, {
          size: "sm",
          variant: "secondary",
          text: j.intl.string(j.t.yBZMsb),
          onClick: N,
          disabled: !S || w
        }), (0, r.jsx)(c.zxk, {
          size: "sm",
          variant: "primary",
          text: j.intl.string(j.t.R3BPHx),
          onClick: A,
          loading: w,
          disabled: !S || w
        })]
      })]
    })
  }) : null)
}