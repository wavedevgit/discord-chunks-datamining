/** Chunk was on 78704 **/
/** chunk id: 560602, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk149765 = require("./149765.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk911969 = require("./911969.js"),
  Chunk605436 = require("./605436.js"),
  Chunk601964 = require("./601964.js"),
  Chunk485386 = require("./485386.js"),
  Chunk700785 = require("./700785.js"),
  Chunk993259 = require("./993259.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk628903 = require("./628903.js");

function y(e) {
  return t => null != t && !(0, d.pM)(e, t)
}
let g = e => {
    let {
      rolesRow: t
    } = e;
    return (0, n.jsx)("div", {
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
      onClose: x,
      transitionState: O,
      currentSelectedRoles: j = []
    } = e, {
      shouldEveryonePost: k,
      setShouldEveryonePost: S
    } = ((e, t, l) => {
      let n = h.Uu(l, t),
        [i, a] = r.useState(n);
      return {
        shouldEveryonePost: i,
        setShouldEveryonePost: a
      }
    })(0, l, b), C = function(e) {
      let t = (0, o.e7)([f.Z], () => f.Z.getSortedRoles(e.id));
      return r.useMemo(() => (0, m.K)(t).filter(t => y(e.id)(t.id)), [e, t])
    }(t), H = C.reduce((e, t) => (e.set(t.id, t), e), new Map), N = C.map(e => ({
      key: e.key,
      label: e.name,
      value: e.id
    })), [E, P] = r.useState(j.map(e => e.id).filter(y(t.id))), [R, Z] = r.useState(false), [_, K] = r.useState(false), M = E.length > 0 || k, B = function(e, t) {
      let l = (0, o.e7)([f.Z], () => f.Z.getSortedRoles(e.id));
      return r.useCallback((n, r) => {
        let a = (0, m.K)(l),
          o = new Set(r),
          s = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(l);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = l[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, t.permissionOverwrites),
          p = [],
          f = [];
        return a.forEach(t => {
          var l, r, a, u, m, w, v, y, g, b;
          let x = t.id,
            O = o.has(x);
          O ? p.push({
            id: x,
            type: c.BN.ROLE,
            allow: O ? i.IH(null != (u = null == (l = s[x]) ? true : l.allow) ? u : h.Hn, n) : i.Od(null != (m = null == (r = s[x]) ? true : r.allow) ? m : h.Hn, n),
            deny: i.Od(null != (w = null == (a = s[x]) ? true : a.deny) ? w : h.Hn, n)
          }) : (0, d.pM)(e.id, x) ? p.push({
            id: x,
            type: c.BN.ROLE,
            allow: i.Od(null != (g = null == (v = s[x]) ? true : v.allow) ? g : h.Hn, n),
            deny: i.IH(null != (b = null == (y = s[x]) ? true : y.deny) ? b : h.Hn, n)
          }) : x in s && f.push(x)
        }, []), (0, u.kU)(t.id, p, f)
      }, [e, l, t])
    }(t, l), I = async () => {
      if (!M) return;
      Z(true), K(false);
      let e = [...E];
      if (k) {
        let l = (0, p.lV)(t);
        e.push(l)
      }
      try {
        await B(b, e), x()
      } catch (e) {
        K(true)
      } finally {
        Z(false)
      }
    };
    return R ? (0, n.jsx)(s.$jN, {}) : (0, n.jsxs)(a.Modal, {
      title: w.intl.string(w.t.TFGnmp),
      actions: [{
        variant: "secondary",
        text: w.intl.string(w.t["ETE/oK"]),
        onClick: x
      }, {
        variant: "primary",
        text: w.intl.string(w.t.R3BPHx),
        onClick: I,
        disabled: !M
      }],
      onClose: x,
      transitionState: O,
      children: [(0, n.jsx)(s.VcW, {
        closeOnSelect: false,
        className: v.roleSelector,
        maxVisibleItems: 5,
        placeholder: w.intl.string(w.t["8kKqCQ"]),
        multi: true,
        value: E,
        options: N,
        onChange: e => {
          P(e)
        },
        renderOptionPrefix: e => null != e ? (0, n.jsx)(g, {
          rolesRow: H.get(e.value)
        }) : null
      }), (0, n.jsx)("div", {
        className: v.row,
        children: (0, n.jsx)(s.rsf, {
          label: w.intl.string(w.t.kPwwAw),
          description: w.intl.format(w.t.l7Ercn, {}),
          checked: k,
          onChange: S
        })
      }), _ ? (0, n.jsx)("div", {
        className: v.row,
        children: (0, n.jsx)(s.Text, {
          className: v.error,
          variant: "text-sm/normal",
          children: w.intl.string(w.t.mgZKZG)
        })
      }) : null]
    })
  }