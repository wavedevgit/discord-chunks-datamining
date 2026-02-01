/** Chunk was on 60118 **/
/** chunk id: 633098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk203982 = require("./203982.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk289173 = require("./289173.js"),
  Chunk958805 = require("./958805.js"),
  Chunk61881 = require("./61881.js"),
  Chunk384377 = require("./384377.js"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk892984 = require("./892984.js");

function x(e) {
  let {
    className: t
  } = e, {
    trackUserProfileEditSaved: n
  } = (0, f.NJ)(), [i, x] = l.useState(false), v = (0, s.yK)([m.A], () => {
    var e;
    return null != (e = m.A.getSaveablePendingWidgets()) ? e : []
  }), _ = (0, s.yK)([m.A], () => m.A.getChangedWidgets()), I = (0, s.yK)([m.A], () => m.A.getRemovedWidgets()), A = (0, s.bG)([m.A], () => m.A.hasUnsavedChanges()), w = (0, s.bG)([m.A], () => m.A.canSaveChanges()), P = (0, s.bG)([m.A], () => m.A.isSubmitting), E = (0, s.bG)([u.A], () => u.A.useReducedMotion), S = (0, c.pnh)(A, {
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
  l.useEffect(() => {
    let e = null;

    function t() {
      x(true), e = setTimeout(() => x(false), 500)
    }
    return d._.subscribe(O.jej.EMPHASIZE_NOTICE, t), () => {
      d._.unsubscribe(O.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
    }
  }, []), l.useEffect(() => {
    A && c.ORC.announce(j.intl.string(j.t["0Y/qkL"]))
  }, [A]);
  let T = l.useCallback(async () => {
      if (m.A.canSaveChanges()) {
        try {
          await g.A.savePendingWidgets(v)
        } catch (e) {
          (0, b.XA)(y.jM.WIDGET_SAVE_FAILURE);
          return
        }
        for (let e of _) {
          let t = {
            widgetEdited: e.type,
            isWidgetRemoved: false
          };
          (0, p.fu)(e) && (t.gameIds = e.games.map(e => e.applicationId), t.tags = e.games.flatMap(e => {
            var t;
            return null != (t = e.tags) ? t : []
          }).map(e => e.toString()), t.numCharactersCommentary = e.games.reduce((e, t) => {
            var n, r;
            return e + (null != (n = null == (r = t.comment) ? true : r.length) ? n : 0)
          }, 0)), n(t)
        }
        for (let e of I) n({
          widgetEdited: e.type,
          isWidgetRemoved: true
        })
      }
    }, [v, _, I, n]),
    C = l.useCallback(() => {
      g.A.clearPendingWidgets()
    }, []);
  return S((e, n) => n ? (0, r.jsx)(o.animated.div, {
    className: t,
    style: e,
    children: (0, r.jsxs)("section", {
      className: a()(h.Qs, {
        [h.hO]: i
      }),
      "aria-label": j.intl.string(j.t["odDw+z"]),
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        className: h.iU,
        children: j.intl.string(j.t["/lQiX/"])
      }), (0, r.jsxs)("div", {
        className: h.o1,
        children: [(0, r.jsx)(c.Button, {
          size: "sm",
          variant: "secondary",
          text: j.intl.string(j.t.yBZMsQ),
          onClick: C,
          disabled: !A || P
        }), (0, r.jsx)(c.Button, {
          size: "sm",
          variant: "primary",
          text: j.intl.string(j.t["R3BPH+"]),
          onClick: T,
          loading: P,
          disabled: !w || !A || P
        })]
      })]
    })
  }) : null)
}