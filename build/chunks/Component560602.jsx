/** Chunk was on 78704 **/
/** chunk id: 560602, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => g
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
  Chunk357378 = require("./357378.js");

function y(e) {
  return t => null != t && !(0, u.pM)(e, t)
}
let w = e => {
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
  g = e => {
    let {
      guild: t,
      channel: l,
      permission: g,
      onClose: j,
      transitionState: k,
      currentSelectedRoles: x = []
    } = e, {
      shouldEveryonePost: O,
      setShouldEveryonePost: S
    } = ((e, t, l) => {
      let n = h.Uu(l, t),
        [i, a] = r.useState(n);
      return {
        shouldEveryonePost: i,
        setShouldEveryonePost: a
      }
    })(0, l, g), C = (function(e) {
      let t = (0, o.e7)([p.Z], () => p.Z.getSortedRoles(e.id));
      return r.useMemo(() => (0, b.K)(t).filter(t => y(e.id)(t.id)), [e, t])
    })(t).map(e => ({
      key: e.key,
      id: e.id,
      label: e.name,
      value: e.id,
      leading: (0, n.jsx)(w, {
        rolesRow: e
      })
    })), [H, N] = r.useState(x.map(e => e.id).filter(y(t.id))), [E, P] = r.useState(false), [R, Z] = r.useState(false), M = H.length > 0 || O, K = function(e, t) {
      let l = (0, o.e7)([p.Z], () => p.Z.getSortedRoles(e.id));
      return r.useCallback((n, r) => {
        let a = (0, b.K)(l),
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
          f = [],
          p = [];
        return a.forEach(t => {
          var l, r, a, c, b, m, v, y, w, g;
          let j = t.id,
            k = o.has(j);
          k ? f.push({
            id: j,
            type: d.BN.ROLE,
            allow: k ? i.IH(null != (c = null == (l = s[j]) ? true : l.allow) ? c : h.Hn, n) : i.Od(null != (b = null == (r = s[j]) ? true : r.allow) ? b : h.Hn, n),
            deny: i.Od(null != (m = null == (a = s[j]) ? true : a.deny) ? m : h.Hn, n)
          }) : (0, u.pM)(e.id, j) ? f.push({
            id: j,
            type: d.BN.ROLE,
            allow: i.Od(null != (w = null == (v = s[j]) ? true : v.allow) ? w : h.Hn, n),
            deny: i.IH(null != (g = null == (y = s[j]) ? true : y.deny) ? g : h.Hn, n)
          }) : j in s && p.push(j)
        }, []), (0, c.kU)(t.id, f, p)
      }, [e, l, t])
    }(t, l), B = async () => {
      if (!M) return;
      P(true), Z(false);
      let e = [...H];
      if (O) {
        let l = (0, f.lV)(t);
        e.push(l)
      }
      try {
        await K(g, e), j()
      } catch (e) {
        Z(true)
      } finally {
        P(false)
      }
    };
    return E ? (0, n.jsx)(s.$jN, {}) : (0, n.jsxs)(a.Modal, {
      title: m.intl.string(m.t.TFGnmk),
      actions: [{
        variant: "secondary",
        text: m.intl.string(m.t["ETE/oC"]),
        onClick: j
      }, {
        variant: "primary",
        text: m.intl.string(m.t["R3BPH+"]),
        onClick: B,
        disabled: !M
      }],
      onClose: j,
      transitionState: k,
      children: [(0, n.jsx)("div", {
        className: v.roleSelector,
        children: (0, n.jsx)(s.VcW, {
          selectionMode: "multiple",
          maxOptionsVisible: 5,
          placeholder: m.intl.string(m.t["8kKqCW"]),
          value: H,
          options: C,
          onSelectionChange: e => {
            N(e)
          }
        })
      }), (0, n.jsx)("div", {
        className: v.row,
        children: (0, n.jsx)(s.rsf, {
          label: m.intl.string(m.t["kPwwA/"]),
          description: m.intl.format(m.t.l7Ercq, {}),
          checked: O,
          onChange: S
        })
      }), R ? (0, n.jsx)("div", {
        className: v.row,
        children: (0, n.jsx)(s.Text, {
          className: v.error,
          variant: "text-sm/normal",
          children: m.intl.string(m.t.mgZKZP)
        })
      }) : null]
    })
  }