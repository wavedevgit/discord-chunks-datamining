/** Chunk was on 38663 **/
/** chunk id: 633098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
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

function h(e) {
  let {
    className: t
  } = e, {
    trackUserProfileEditSaved: n
  } = (0, f.NJ)(), [i, h] = l.useState(false), v = (0, o.yK)([g.A], () => {
    var e;
    return null != (e = g.A.getSaveablePendingWidgets()) ? e : []
  }), A = (0, o.yK)([g.A], () => g.A.getChangedWidgets()), w = (0, o.yK)([g.A], () => g.A.getRemovedWidgets()), I = (0, o.bG)([g.A], () => g.A.hasUnsavedChanges()), P = (0, o.bG)([g.A], () => g.A.canSaveChanges()), E = (0, o.bG)([g.A], () => g.A.isSubmitting), S = (0, o.bG)([u.A], () => u.A.useReducedMotion), T = (0, c.pnh)(I, {
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
  l.useEffect(() => {
    let e = null;

    function t() {
      h(true), e = setTimeout(() => h(false), 500)
    }
    return d._.subscribe(O.jej.EMPHASIZE_NOTICE, t), () => {
      d._.unsubscribe(O.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
    }
  }, []), l.useEffect(() => {
    I && c.ORC.announce(j.intl.string(j.t["0Y/qkL"]))
  }, [I]);
  let _ = l.useCallback(async () => {
      if (g.A.canSaveChanges()) {
        try {
          await b.A.savePendingWidgets(v)
        } catch (e) {
          (0, m.XA)(y.jM.WIDGET_SAVE_FAILURE);
          return
        }
        for (let e of A) {
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
        for (let e of w) n({
          widgetEdited: e.type,
          isWidgetRemoved: true
        })
      }
    }, [v, A, w, n]),
    N = l.useCallback(() => {
      b.A.clearPendingWidgets()
    }, []);
  return T((e, n) => n ? (0, r.jsx)(s.animated.div, {
    className: t,
    style: e,
    children: (0, r.jsxs)("section", {
      className: a()(x.Qs, {
        [x.hO]: i
      }),
      "aria-label": j.intl.string(j.t["odDw+z"]),
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        className: x.iU,
        children: j.intl.string(j.t["/lQiX/"])
      }), (0, r.jsxs)("div", {
        className: x.o1,
        children: [(0, r.jsx)(c.Button, {
          size: "sm",
          variant: "secondary",
          text: j.intl.string(j.t.yBZMsQ),
          onClick: N,
          disabled: !I || E
        }), (0, r.jsx)(c.Button, {
          size: "sm",
          variant: "primary",
          text: j.intl.string(j.t["R3BPH+"]),
          onClick: _,
          loading: E,
          disabled: !P || !I || E
        })]
      })]
    })
  }) : null)
}