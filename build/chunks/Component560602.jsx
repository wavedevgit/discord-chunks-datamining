/** Chunk was on 78704 **/
/** chunk id: 560602, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk911969 = require("./911969.js"),
  Chunk605436 = require("./605436.js"),
  Chunk601964 = require("./601964.js"),
  Chunk485386 = require("./485386.js"),
  Chunk700785 = require("./700785.js"),
  Chunk993259 = require("./993259.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk357378 = require("./357378.js");

function y(e) {
  return t => null != t && !(0, f.pM)(e, t)
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
  k = e => {
    let {
      guild: t,
      channel: l,
      permission: k,
      onClose: x,
      transitionState: O,
      currentSelectedRoles: j = []
    } = e, {
      shouldEveryonePost: S,
      setShouldEveryonePost: C
    } = ((e, t, l) => {
      let n = b.Uu(l, t),
        [i, a] = r.useState(n);
      return {
        shouldEveryonePost: i,
        setShouldEveryonePost: a
      }
    })(0, l, k), H = function(e) {
      let t = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(e.id));
      return r.useMemo(() => (0, m.K)(t).filter(t => y(e.id)(t.id)), [e, t])
    }(t), N = H.reduce((e, t) => (e.set(t.id, t), e), new Map), P = H.map(e => ({
      key: e.key,
      label: e.name,
      value: e.id
    })), [E, R] = r.useState(j.map(e => e.id).filter(y(t.id))), [Z, M] = r.useState(false), [K, B] = r.useState(false), I = E.length > 0 || S, T = function(e, t) {
      let l = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(e.id));
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
          u = [],
          p = [];
        return a.forEach(t => {
          var l, r, a, c, h, m, v, w, y, g;
          let k = t.id,
            x = o.has(k);
          x ? u.push({
            id: k,
            type: d.BN.ROLE,
            allow: x ? i.IH(null != (c = null == (l = s[k]) ? true : l.allow) ? c : b.Hn, n) : i.Od(null != (h = null == (r = s[k]) ? true : r.allow) ? h : b.Hn, n),
            deny: i.Od(null != (m = null == (a = s[k]) ? true : a.deny) ? m : b.Hn, n)
          }) : (0, f.pM)(e.id, k) ? u.push({
            id: k,
            type: d.BN.ROLE,
            allow: i.Od(null != (y = null == (v = s[k]) ? true : v.allow) ? y : b.Hn, n),
            deny: i.IH(null != (g = null == (w = s[k]) ? true : w.deny) ? g : b.Hn, n)
          }) : k in s && p.push(k)
        }, []), (0, c.kU)(t.id, u, p)
      }, [e, l, t])
    }(t, l), q = async () => {
      if (!I) return;
      M(true), B(false);
      let e = [...E];
      if (S) {
        let l = (0, p.lV)(t);
        e.push(l)
      }
      try {
        await T(k, e), x()
      } catch (e) {
        B(true)
      } finally {
        M(false)
      }
    };
    return Z ? (0, n.jsx)(u.$jN, {}) : (0, n.jsxs)(a.Modal, {
      title: v.intl.string(v.t.TFGnmk),
      actions: [{
        variant: "secondary",
        text: v.intl.string(v.t["ETE/oC"]),
        onClick: x
      }, {
        variant: "primary",
        text: v.intl.string(v.t["R3BPH+"]),
        onClick: q,
        disabled: !I
      }],
      onClose: x,
      transitionState: O,
      children: [(0, n.jsx)(s.d, {
        closeOnSelect: false,
        className: w.roleSelector,
        maxVisibleItems: 5,
        placeholder: v.intl.string(v.t["8kKqCW"]),
        multi: true,
        value: E,
        options: P,
        onChange: e => {
          R(e)
        },
        renderOptionPrefix: e => null != e ? (0, n.jsx)(g, {
          rolesRow: N.get(e.value)
        }) : null
      }), (0, n.jsx)("div", {
        className: w.row,
        children: (0, n.jsx)(u.rsf, {
          label: v.intl.string(v.t["kPwwA/"]),
          description: v.intl.format(v.t.l7Ercq, {}),
          checked: S,
          onChange: C
        })
      }), K ? (0, n.jsx)("div", {
        className: w.row,
        children: (0, n.jsx)(u.Text, {
          className: w.error,
          variant: "text-sm/normal",
          children: v.intl.string(v.t.mgZKZP)
        })
      }) : null]
    })
  }