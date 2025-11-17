/** Chunk was on 78704 **/
/** chunk id: 560602, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
      className: w.roleCircle,
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
      onClose: k,
      transitionState: x,
      currentSelectedRoles: O = []
    } = e, {
      shouldEveryonePost: j,
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
    })), [P, E] = r.useState(O.map(e => e.id).filter(y(t.id))), [R, Z] = r.useState(false), [_, M] = r.useState(false), K = P.length > 0 || j, B = function(e, t) {
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
          var l, r, a, u, m, v, w, y, g, b;
          let k = t.id,
            x = o.has(k);
          x ? p.push({
            id: k,
            type: c.BN.ROLE,
            allow: x ? i.IH(null != (u = null == (l = s[k]) ? true : l.allow) ? u : h.Hn, n) : i.Od(null != (m = null == (r = s[k]) ? true : r.allow) ? m : h.Hn, n),
            deny: i.Od(null != (v = null == (a = s[k]) ? true : a.deny) ? v : h.Hn, n)
          }) : (0, d.pM)(e.id, k) ? p.push({
            id: k,
            type: c.BN.ROLE,
            allow: i.Od(null != (g = null == (w = s[k]) ? true : w.allow) ? g : h.Hn, n),
            deny: i.IH(null != (b = null == (y = s[k]) ? true : y.deny) ? b : h.Hn, n)
          }) : k in s && f.push(k)
        }, []), (0, u.kU)(t.id, p, f)
      }, [e, l, t])
    }(t, l), I = async () => {
      if (!K) return;
      Z(true), M(false);
      let e = [...P];
      if (j) {
        let l = (0, p.lV)(t);
        e.push(l)
      }
      try {
        await B(b, e), k()
      } catch (e) {
        M(true)
      } finally {
        Z(false)
      }
    };
    return R ? (0, n.jsx)(s.$jN, {}) : (0, n.jsxs)(a.Modal, {
      title: v.intl.string(v.t.TFGnmk),
      actions: [{
        variant: "secondary",
        text: v.intl.string(v.t["ETE/oC"]),
        onClick: k
      }, {
        variant: "primary",
        text: v.intl.string(v.t["R3BPH+"]),
        onClick: I,
        disabled: !K
      }],
      onClose: k,
      transitionState: x,
      children: [(0, n.jsx)(s.VcW, {
        closeOnSelect: false,
        className: w.roleSelector,
        maxVisibleItems: 5,
        placeholder: v.intl.string(v.t["8kKqCW"]),
        multi: true,
        value: P,
        options: N,
        onChange: e => {
          E(e)
        },
        renderOptionPrefix: e => null != e ? (0, n.jsx)(g, {
          rolesRow: H.get(e.value)
        }) : null
      }), (0, n.jsx)("div", {
        className: w.row,
        children: (0, n.jsx)(s.rsf, {
          label: v.intl.string(v.t["kPwwA/"]),
          description: v.intl.format(v.t.l7Ercq, {}),
          checked: j,
          onChange: S
        })
      }), _ ? (0, n.jsx)("div", {
        className: w.row,
        children: (0, n.jsx)(s.Text, {
          className: w.error,
          variant: "text-sm/normal",
          children: v.intl.string(v.t.mgZKZP)
        })
      }) : null]
    })
  }