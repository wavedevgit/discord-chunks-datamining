/** Chunk was on 64908 **/
/** chunk id: 557944, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk430824 = require("./430824.js"),
  Chunk399860 = require("./399860.js"),
  Chunk335049 = require("./335049.jsx"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk320692 = require("./320692.js");

function m(e) {
  let {
    editPermissions: t,
    guildId: n,
    hasMemberSearch: l,
    headerText: m,
    onClose: k,
    overwrittenKeys: C,
    search: j,
    searchPlaceholderText: v,
    selectedPermissionCount: E,
    transitionState: w
  } = e, O = (0, o.e7)([b.Z], () => b.Z.getGuild(n), [n]);
  s()(null != O, "");
  let [x, M] = r.useState(null), {
    query: T,
    results: P,
    setQuery: S
  } = j(n), [Z, _] = r.useState({}), q = r.useMemo(() => Object.keys(Z).length, [Z]), I = q + E >= g._n, N = r.useMemo(() => P.filter(e => {
    let t = (0, p.rE)(e.id, e.type);
    return !C.includes(t)
  }), [C, P]), D = r.useCallback((e, t) => {
    _(n => {
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
      return i in n ? delete r[i] : I || (r[i] = {
        id: e,
        permission: true,
        type: t
      }), r
    })
  }, [I, _]), H = r.useCallback(() => {
    t(Z, []), k()
  }, [t, k, Z]);
  r.useEffect(() => () => clearTimeout(x), [x]);
  let R = r.useCallback(e => {
      S(e), l && M(t => (clearTimeout(t), 0 === e.length) ? null : setTimeout(() => {
        d.Z.requestMembers(n, e, 200, false)
      }, 500))
    }, [n, l, S, M]),
    V = r.useCallback(e => {
      let t = N[e.rowIndex],
        n = (0, p.rE)(t.id, t.type),
        r = n in Z,
        l = I && !r;
      return (0, i.jsx)("div", {
        className: y.item,
        children: (0, i.jsx)(u.$q, {
          type: u.M0.INVERTED,
          disabled: l,
          value: r,
          onChange: () => D(t.id, t.type),
          children: (0, i.jsx)(f.Z, {
            guild: O,
            id: t.id,
            type: t.type,
            isLocked: false
          })
        })
      }, n)
    }, [N, O, I, D, Z]);
  return r.useEffect(() => {
    d.Z.requestMembers(n, true, 200, false)
  }, [n]), (0, i.jsx)(a.Modal, {
    "aria-label": h.intl.string(h.t["N+InBa"]),
    transitionState: w,
    title: m,
    subtitle: I ? h.intl.string(h.t["XTwtW/"]) : true,
    onClose: k,
    input: (0, i.jsx)(c.E1j, {
      query: T,
      placeholder: v,
      "aria-label": v,
      onChange: R,
      onClear: () => S("")
    }),
    actions: [{
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: k,
      variant: "secondary"
    }, {
      text: h.intl.string(h.t.OYkgVk),
      onClick: H,
      variant: "primary",
      disabled: 0 === q
    }],
    listProps: {
      renderRow: V,
      sections: [N.length],
      rowHeight: 36,
      sectionHeight: 36
    }
  })
}