/** Chunk was on 64908 **/
/** chunk id: 557944, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk430824 = require("./430824.js"),
  Chunk399860 = require("./399860.js"),
  Chunk335049 = require("./335049.jsx"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk956606 = require("./956606.js");

function h(e) {
  let {
    editPermissions: t,
    guildId: n,
    hasMemberSearch: l,
    headerText: h,
    onClose: m,
    overwrittenKeys: k,
    search: j,
    searchPlaceholderText: C,
    selectedPermissionCount: v,
    transitionState: E
  } = e, w = (0, a.e7)([d.Z], () => d.Z.getGuild(n), [n]);
  s()(null != w, "");
  let [O, x] = r.useState(null), {
    query: T,
    results: Z,
    setQuery: M
  } = j(n), [P, S] = r.useState({}), _ = r.useMemo(() => Object.keys(P).length, [P]), q = _ + v >= f._n, I = r.useMemo(() => Z.filter(e => {
    let t = (0, p.rE)(e.id, e.type);
    return !k.includes(t)
  }), [k, Z]), N = r.useCallback((e, t) => {
    S(n => {
      let i = (0, p.rE)(e, t),
        r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, n);
      return i in n ? delete r[i] : q || (r[i] = {
        id: e,
        permission: true,
        type: t
      }), r
    })
  }, [q, S]), X = r.useCallback(() => {
    t(P, []), m()
  }, [t, m, P]);
  r.useEffect(() => () => clearTimeout(O), [O]);
  let D = r.useCallback(e => {
      M(e), l && x(t => (clearTimeout(t), 0 === e.length) ? null : setTimeout(() => {
        c.Z.requestMembers(n, e, 200, false)
      }, 500))
    }, [n, l, M, x]),
    H = r.useCallback(e => {
      let t = I[e.rowIndex],
        n = (0, p.rE)(t.id, t.type),
        r = n in P,
        l = q && !r;
      return (0, i.jsx)("div", {
        className: y.item,
        children: (0, i.jsx)(u.XZJ, {
          type: u.XZJ.Types.INVERTED,
          disabled: l,
          value: r,
          onChange: () => N(t.id, t.type),
          children: (0, i.jsx)(b.Z, {
            guild: w,
            id: t.id,
            type: t.type,
            isLocked: false
          })
        })
      }, n)
    }, [I, w, q, N, P]);
  return r.useEffect(() => {
    c.Z.requestMembers(n, true, 200, false)
  }, [n]), (0, i.jsx)(o.Modal, {
    "aria-label": g.intl.string(g.t["N+InBQ"]),
    transitionState: E,
    title: h,
    subtitle: q ? g.intl.string(g.t.XTwtW1) : true,
    onClose: m,
    input: (0, i.jsx)(u.E1j, {
      query: T,
      placeholder: C,
      "aria-label": C,
      onChange: D,
      onClear: () => M("")
    }),
    actions: [{
      text: g.intl.string(g.t["ETE/oK"]),
      onClick: m,
      variant: "secondary"
    }, {
      text: g.intl.string(g.t.OYkgVl),
      onClick: X,
      variant: "primary",
      disabled: 0 === _
    }],
    listProps: {
      renderRow: H,
      sections: [I.length],
      rowHeight: 36,
      sectionHeight: 36
    }
  })
}