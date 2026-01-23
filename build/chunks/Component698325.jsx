/** Chunk was on 17110 **/
/** chunk id: 698325, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk702805 = require("./702805.js"),
  Chunk155718 = require("./155718.js"),
  Chunk495273 = require("./495273.js"),
  Chunk260509 = require("./260509.js"),
  Chunk317525 = require("./317525.js"),
  Chunk488926 = require("./488926.js"),
  Chunk387255 = require("./387255.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk811221 = require("./811221.js");

function b(e) {
  return t => null != t && !(0, u.N8)(e, t)
}
let x = e => {
    let {
      rolesRow: t
    } = e;
    return (0, n.jsx)("div", {
      "aria-hidden": true,
      className: v.Ni,
      style: {
        backgroundColor: null == t ? true : t.colorString
      }
    })
  },
  g = e => {
    let t, l, {
        guild: g,
        channel: w,
        permission: j,
        onClose: k,
        transitionState: C,
        currentSelectedRoles: S = []
      } = e,
      {
        shouldEveryonePost: O,
        setShouldEveryonePost: N
      } = ((e, t, l) => {
        let n = f.MJ(l, t),
          [r, a] = i.useState(n);
        return {
          shouldEveryonePost: r,
          setShouldEveryonePost: a
        }
      })(0, w, j),
      E = (t = (0, o.bG)([h.A], () => h.A.getSortedRoles(g.id)), i.useMemo(() => (0, y.i)(t).filter(e => b(g.id)(e.id)), [g, t])).map(e => ({
        key: e.key,
        id: e.id,
        label: e.name,
        value: e.id,
        leading: (0, n.jsx)(x, {
          rolesRow: e
        })
      })),
      [M, P] = i.useState(S.map(e => e.id).filter(b(g.id))),
      [R, T] = i.useState(false),
      [_, A] = i.useState(false),
      F = M.length > 0 || O,
      G = (l = (0, o.bG)([h.A], () => h.A.getSortedRoles(g.id)), i.useCallback((e, t) => {
        let n = (0, y.i)(l),
          i = new Set(t),
          a = function(e) {
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
          }({}, w.permissionOverwrites),
          o = [],
          s = [];
        return n.forEach(t => {
          var l, n, d, p, h, y, m, v, b, x;
          let w = t.id,
            j = i.has(w);
          j ? o.push({
            id: w,
            type: c.r2.ROLE,
            allow: j ? r.WQ(null != (l = null == (p = a[w]) ? true : p.allow) ? l : f.x3, e) : r.TF(null != (n = null == (h = a[w]) ? true : h.allow) ? n : f.x3, e),
            deny: r.TF(null != (d = null == (y = a[w]) ? true : y.deny) ? d : f.x3, e)
          }) : (0, u.N8)(g.id, w) ? o.push({
            id: w,
            type: c.r2.ROLE,
            allow: r.TF(null != (m = null == (b = a[w]) ? true : b.allow) ? m : f.x3, e),
            deny: r.WQ(null != (v = null == (x = a[w]) ? true : x.deny) ? v : f.x3, e)
          }) : w in a && s.push(w)
        }, []), (0, d.lS)(w.id, o, s)
      }, [g, l, w])),
      W = async () => {
        if (!F) return;
        T(true), A(false);
        let e = [...M];
        if (O) {
          let t = (0, p.af)(g);
          e.push(t)
        }
        try {
          await G(j, e), k()
        } catch (e) {
          A(true)
        } finally {
          T(false)
        }
      };
    return R ? (0, n.jsx)(s.y$y, {}) : (0, n.jsxs)(a.Modal, {
      title: m.intl.string(m.t.TFGnmk),
      actions: [{
        variant: "secondary",
        text: m.intl.string(m.t["ETE/oC"]),
        onClick: k
      }, {
        variant: "primary",
        text: m.intl.string(m.t["R3BPH+"]),
        onClick: W,
        disabled: !F
      }],
      onClose: k,
      transitionState: C,
      children: [(0, n.jsx)("div", {
        className: v.CI,
        children: (0, n.jsx)(s.ZiE, {
          selectionMode: "multiple",
          maxOptionsVisible: 5,
          placeholder: m.intl.string(m.t["8kKqCW"]),
          value: M,
          options: E,
          onSelectionChange: e => {
            P(e)
          }
        })
      }), (0, n.jsx)("div", {
        className: v.nM,
        children: (0, n.jsx)(s.dOG, {
          label: m.intl.string(m.t["kPwwA/"]),
          description: m.intl.format(m.t.l7Ercq, {}),
          checked: O,
          onChange: N
        })
      }), _ ? (0, n.jsx)("div", {
        className: v.nM,
        children: (0, n.jsx)(s.Text, {
          className: v.z3,
          variant: "text-sm/normal",
          children: m.intl.string(m.t.mgZKZP)
        })
      }) : null]
    })
  }