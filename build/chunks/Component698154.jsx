/** Chunk was on 40556 **/
/** chunk id: 698154, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk444550 = require("./444550.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk931991 = require("./931991.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js"),
  Chunk473145 = require("./473145.js"),
  Chunk661191 = require("./661191.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk980504 = require("./980504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk485516 = require("./485516.js");

function O(e) {
  let {
    availableSlots: t,
    className: n
  } = e;
  return (0, l.jsxs)(o.Text, {
    className: r()(N._E, n),
    variant: "text-sm/medium",
    color: "text-strong",
    children: [(0, l.jsx)(o.HKD, {
      size: "md",
      color: "currentColor",
      className: N.Xk
    }), w.intl.format(w.t["8Dyg1C"], {
      slots: t
    })]
  })
}

function A(e) {
  let t, {
      label: n,
      value: a,
      className: o,
      onChange: A
    } = e,
    C = (0, s.cf)([g.Ay, m.A, h.default, f.A], () => {
      let e = {};
      for (let t of g.Ay.getFlattenedGuildIds()) {
        let n = f.A.getGuild(t);
        null != n && (0, d.ie)(n, m.A, h.default).canCreateExpressions && (e[n.id] = n)
      }
      return e
    }),
    S = (0, s.cf)([p.A], () => {
      let e = {};
      for (let [n, l] of b.default.entries(C)) {
        var t;
        let i = (0, v.tO)(l, null != (t = p.A.getSoundsForGuild(n)) ? t : j.pD, l.premiumTier);
        e[n] = i
      }
      return e
    }, [C]);
  i.useEffect(() => {
    (0, x.E7)()
  }, []);
  let P = i.useMemo(() => Object.values(C).map(e => {
      let {
        name: t,
        id: n
      } = e;
      return {
        label: t,
        value: n,
        disabled: S[n] <= 0
      }
    }), [C, S]),
    E = i.useCallback(e => null == e || "" === e.value ? null : (0, l.jsx)(c.A, {
      className: r()(N.cl, {
        [N.QJ]: e.disabled
      }),
      guild: C[e.value],
      size: c.A.Sizes.SMOL,
      active: true
    }), [C]),
    M = i.useCallback(e => {
      let t = null == e ? true : e.value;
      return null == t || "" === t ? null : (0, l.jsx)(O, {
        className: r()({
          [N.QJ]: null == e ? true : e.disabled
        }),
        availableSlots: S[t]
      })
    }, [S]),
    k = i.useCallback(e => (0, l.jsx)("div", {
      className: r()({
        [N.QJ]: e.disabled
      }),
      children: e.label
    }), []),
    T = i.useCallback(e => {
      S[e] <= 0 || A(e)
    }, [S, A]),
    D = null == (t = S[null != a ? a : y.dJq]) || t > 0 ? a : true;
  return (0, l.jsx)(u.p, {
    label: n,
    className: o,
    onChange: T,
    value: D,
    multi: false,
    options: P,
    renderOptionPrefix: E,
    renderOptionSuffix: M,
    renderOptionLabel: k,
    placeholder: 0 === P.length ? w.intl.string(w.t.O3i2gV) : w.intl.string(w.t.CunCMN),
    "data-migration-pending": true
  })
}