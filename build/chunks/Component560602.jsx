/** Chunk was on 78704 **/
/** chunk id: 560602, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk911969 = require("./911969.js"),
  Chunk605436 = require("./605436.js"),
  Chunk601964 = require("./601964.js"),
  Chunk485386 = require("./485386.js"),
  Chunk700785 = require("./700785.js"),
  Chunk993259 = require("./993259.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk821383 = require("./821383.js");

function y(e) {
  return t => null != t && !(0, d.pM)(e, t)
}
let g = (e, t, l) => {
    let r = h.Uu(l, t),
      [i, a] = n.useState(r);
    return {
      shouldEveryonePost: i,
      setShouldEveryonePost: a
    }
  },
  x = e => {
    let {
      rolesRow: t
    } = e;
    return (0, r.jsx)("div", {
      "aria-hidden": true,
      className: v.roleCircle,
      style: {
        backgroundColor: null == t ? true : t.colorString
      }
    })
  },
  b = e => {
    let {
      guild: t,
      channel: l,
      permission: b,
      onClose: j,
      transitionState: O,
      currentSelectedRoles: S = []
    } = e, {
      shouldEveryonePost: k,
      setShouldEveryonePost: C
    } = g(t, l, b), N = function(e) {
      let t = (0, a.e7)([f.Z], () => f.Z.getSortedRoles(e.id));
      return n.useMemo(() => (0, m.K)(t).filter(t => y(e.id)(t.id)), [e, t])
    }(t), H = N.reduce((e, t) => (e.set(t.id, t), e), new Map), E = N.map(e => ({
      key: e.key,
      label: e.name,
      value: e.id
    })), [P, _] = n.useState(S.map(e => e.id).filter(y(t.id))), [R, Z] = n.useState(false), [G, K] = n.useState(false), M = P.length > 0 || k, B = function(e, t) {
      let l = (0, a.e7)([f.Z], () => f.Z.getSortedRoles(e.id));
      return n.useCallback((r, n) => {
        let a = (0, m.K)(l),
          o = new Set(n),
          s = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(l);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = l[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, t.permissionOverwrites),
          p = [],
          f = [];
        return a.forEach(t => {
          var l, n, a, u, m, w, v, y, g, x;
          let b = t.id,
            j = o.has(b);
          j ? p.push({
            id: b,
            type: c.BN.ROLE,
            allow: j ? i.IH(null != (u = null == (l = s[b]) ? true : l.allow) ? u : h.Hn, r) : i.Od(null != (m = null == (n = s[b]) ? true : n.allow) ? m : h.Hn, r),
            deny: i.Od(null != (w = null == (a = s[b]) ? true : a.deny) ? w : h.Hn, r)
          }) : (0, d.pM)(e.id, b) ? p.push({
            id: b,
            type: c.BN.ROLE,
            allow: i.Od(null != (g = null == (v = s[b]) ? true : v.allow) ? g : h.Hn, r),
            deny: i.IH(null != (x = null == (y = s[b]) ? true : y.deny) ? x : h.Hn, r)
          }) : b in s && f.push(b)
        }, []), (0, u.kU)(t.id, p, f)
      }, [e, l, t])
    }(t, l), T = async () => {
      if (!M) return;
      Z(true), K(false);
      let e = [...P];
      if (k) {
        let l = (0, p.lV)(t);
        e.push(l)
      }
      try {
        await B(b, e), j()
      } catch (e) {
        K(true)
      } finally {
        Z(false)
      }
    };
    return R ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)(o.Modal, {
      title: w.intl.string(w.t.TFGnmp),
      actions: [{
        variant: "secondary",
        text: w.intl.string(w.t["ETE/oK"]),
        onClick: j
      }, {
        variant: "primary",
        text: w.intl.string(w.t.R3BPHx),
        onClick: T,
        disabled: !M
      }],
      onClose: j,
      transitionState: O,
      children: [(0, r.jsx)(s.VcW, {
        closeOnSelect: false,
        className: v.roleSelector,
        maxVisibleItems: 5,
        placeholder: w.intl.string(w.t["8kKqCQ"]),
        multi: true,
        value: P,
        options: E,
        onChange: e => {
          _(e)
        },
        renderOptionPrefix: e => null != e ? (0, r.jsx)(x, {
          rolesRow: H.get(e.value)
        }) : null
      }), (0, r.jsxs)("div", {
        className: v.row,
        children: [(0, r.jsx)(s.j7V, {
          value: k,
          hideBorder: true,
          onChange: C,
          className: v.switchGroup,
          children: w.intl.string(w.t.kPwwAw)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: w.intl.format(w.t.l7Ercn, {})
        })]
      }), G ? (0, r.jsx)("div", {
        className: v.row,
        children: (0, r.jsx)(s.Text, {
          className: v.error,
          variant: "text-sm/normal",
          children: w.intl.string(w.t.mgZKZG)
        })
      }) : null]
    })
  }