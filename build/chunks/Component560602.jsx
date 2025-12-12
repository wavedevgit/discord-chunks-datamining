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
  Chunk628903 = require("./628903.js");

function g(e) {
  return t => null != t && !(0, p.pM)(e, t)
}
let b = e => {
    let {
      rolesRow: t
    } = e;
    return (0, n.jsx)("div", {
      "aria-hidden": true,
      className: y.roleCircle,
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
      let n = m.Uu(l, t),
        [i, a] = r.useState(n);
      return {
        shouldEveryonePost: i,
        setShouldEveryonePost: a
      }
    })(0, l, k), H = function(e) {
      let t = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(e.id));
      return r.useMemo(() => (0, v.K)(t).filter(t => g(e.id)(t.id)), [e, t])
    }(t), N = H.reduce((e, t) => (e.set(t.id, t), e), new Map), P = H.map(e => ({
      key: e.key,
      label: e.name,
      value: e.id
    })), [E, R] = r.useState(j.map(e => e.id).filter(g(t.id))), [Z, _] = r.useState(false), [M, K] = r.useState(false), B = E.length > 0 || S, I = function(e, t) {
      let l = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(e.id));
      return r.useCallback((n, r) => {
        let a = (0, v.K)(l),
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
          f = [];
        return a.forEach(t => {
          var l, r, a, c, h, v, w, y, g, b;
          let k = t.id,
            x = o.has(k);
          x ? u.push({
            id: k,
            type: d.BN.ROLE,
            allow: x ? i.IH(null != (c = null == (l = s[k]) ? true : l.allow) ? c : m.Hn, n) : i.Od(null != (h = null == (r = s[k]) ? true : r.allow) ? h : m.Hn, n),
            deny: i.Od(null != (v = null == (a = s[k]) ? true : a.deny) ? v : m.Hn, n)
          }) : (0, p.pM)(e.id, k) ? u.push({
            id: k,
            type: d.BN.ROLE,
            allow: i.Od(null != (g = null == (w = s[k]) ? true : w.allow) ? g : m.Hn, n),
            deny: i.IH(null != (b = null == (y = s[k]) ? true : y.deny) ? b : m.Hn, n)
          }) : k in s && f.push(k)
        }, []), (0, c.kU)(t.id, u, f)
      }, [e, l, t])
    }(t, l), T = async () => {
      if (!B) return;
      _(true), K(false);
      let e = [...E];
      if (S) {
        let l = (0, f.lV)(t);
        e.push(l)
      }
      try {
        await I(k, e), x()
      } catch (e) {
        K(true)
      } finally {
        _(false)
      }
    };
    return Z ? (0, n.jsx)(u.$jN, {}) : (0, n.jsxs)(a.Modal, {
      title: w.intl.string(w.t.TFGnmk),
      actions: [{
        variant: "secondary",
        text: w.intl.string(w.t["ETE/oC"]),
        onClick: x
      }, {
        variant: "primary",
        text: w.intl.string(w.t["R3BPH+"]),
        onClick: T,
        disabled: !B
      }],
      onClose: x,
      transitionState: O,
      children: [(0, n.jsx)(s.d, {
        closeOnSelect: false,
        className: y.roleSelector,
        maxVisibleItems: 5,
        placeholder: w.intl.string(w.t["8kKqCW"]),
        multi: true,
        value: E,
        options: P,
        onChange: e => {
          R(e)
        },
        renderOptionPrefix: e => null != e ? (0, n.jsx)(b, {
          rolesRow: N.get(e.value)
        }) : null
      }), (0, n.jsx)("div", {
        className: y.row,
        children: (0, n.jsx)(u.rsf, {
          label: w.intl.string(w.t["kPwwA/"]),
          description: w.intl.format(w.t.l7Ercq, {}),
          checked: S,
          onChange: C
        })
      }), M ? (0, n.jsx)("div", {
        className: y.row,
        children: (0, n.jsx)(u.Text, {
          className: y.error,
          variant: "text-sm/normal",
          children: w.intl.string(w.t.mgZKZP)
        })
      }) : null]
    })
  }