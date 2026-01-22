/** Chunk was on 52532 **/
/** chunk id: 192991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk71393 = require("./71393.js"),
  Chunk200662 = require("./200662.js"),
  Chunk739174 = require("./739174.jsx"),
  Chunk73510 = require("./73510.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk650659 = require("./650659.js");

function k(e) {
  let {
    editPermissions: t,
    guildId: n,
    hasMemberSearch: l,
    headerText: k,
    onClose: m,
    overwrittenKeys: C,
    search: j,
    searchPlaceholderText: v,
    selectedPermissionCount: w,
    transitionState: E
  } = e, O = (0, o.bG)([b.A], () => b.A.getGuild(n), [n]);
  s()(null != O, "");
  let [x, A] = i.useState(null), {
    query: T,
    results: M,
    setQuery: P
  } = j(n), [S, I] = i.useState({}), q = i.useMemo(() => Object.keys(S).length, [S]), N = q + w >= f.iW, V = i.useMemo(() => M.filter(e => {
    let t = (0, p.Eu)(e.id, e.type);
    return !C.includes(t)
  }), [C, M]), W = i.useCallback((e, t) => {
    I(n => {
      let r = (0, p.Eu)(e, t),
        i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, n);
      return r in n ? delete i[r] : N || (i[r] = {
        id: e,
        permission: true,
        type: t
      }), i
    })
  }, [N, I]), D = i.useCallback(() => {
    t(S, []), m()
  }, [t, m, S]);
  i.useEffect(() => () => clearTimeout(x), [x]);
  let G = i.useCallback(e => {
      P(e), l && A(t => (clearTimeout(t), 0 === e.length) ? null : setTimeout(() => {
        d.A.requestMembers(n, e, 200, false)
      }, 500))
    }, [n, l, P, A]),
    H = i.useCallback(e => {
      let t = V[e.rowIndex],
        n = (0, p.Eu)(t.id, t.type),
        i = n in S,
        l = N && !i;
      return (0, r.jsx)("div", {
        className: y.A,
        children: (0, r.jsx)(u.Kj, {
          type: u.Xo.INVERTED,
          disabled: l,
          value: i,
          onChange: () => W(t.id, t.type),
          children: (0, r.jsx)(g.A, {
            guild: O,
            id: t.id,
            type: t.type,
            isLocked: false
          })
        })
      }, n)
    }, [V, O, N, W, S]);
  return i.useEffect(() => {
    d.A.requestMembers(n, true, 200, false)
  }, [n]), (0, r.jsx)(a.Modal, {
    "aria-label": h.intl.string(h.t["N+InBa"]),
    transitionState: E,
    title: k,
    subtitle: N ? h.intl.string(h.t["XTwtW/"]) : true,
    onClose: m,
    input: (0, r.jsx)(c.IWV, {
      query: T,
      placeholder: v,
      "aria-label": v,
      onChange: G,
      onClear: () => P("")
    }),
    actions: [{
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: m,
      variant: "secondary"
    }, {
      text: h.intl.string(h.t.OYkgVk),
      onClick: D,
      variant: "primary",
      disabled: 0 === q
    }],
    listProps: {
      renderRow: H,
      sections: [V.length],
      rowHeight: 36,
      sectionHeight: 36
    }
  })
}