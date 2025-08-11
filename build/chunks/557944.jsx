/** Chunk was on 64908 **/
/** chunk id: 557944, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk600164 = require("./600164.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk399860 = require("./399860.js"),
  Chunk335049 = require("./335049.jsx"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969957 = require("./969957.js");

function y(e) {
  let {
    editPermissions: t,
    guildId: n,
    hasMemberSearch: l,
    headerText: s,
    onClose: y,
    overwrittenKeys: k,
    search: C,
    searchPlaceholderText: _,
    selectedPermissionCount: v,
    transitionState: E
  } = e, w = (0, c.e7)([b.Z], () => b.Z.getGuild(n), [n]);
  o()(null != w, "");
  let [O, Z] = i.useState(null), {
    query: N,
    results: T,
    setQuery: B
  } = C(n), [D, I] = i.useState({}), S = i.useMemo(() => Object.keys(D).length, [D]), X = S + v >= f._n, q = i.useMemo(() => T.filter(e => {
    let t = (0, p.rE)(e.id, e.type);
    return !k.includes(t)
  }), [k, T]), z = i.useCallback((e, t) => {
    I(n => {
      let r = (0, p.rE)(e, t),
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
      return r in n ? delete i[r] : X || (i[r] = {
        id: e,
        permission: true,
        type: t
      }), i
    })
  }, [X, I]), M = i.useCallback(() => {
    t(D, []), y()
  }, [t, y, D]);
  i.useEffect(() => () => clearTimeout(O), [O]);
  let P = i.useCallback(e => {
      B(e), l && Z(t => (clearTimeout(t), 0 === e.length) ? null : setTimeout(() => {
        u.Z.requestMembers(n, e, 200, false)
      }, 500))
    }, [n, l, B, Z]),
    R = i.useCallback(e => {
      let t = q[e],
        n = (0, p.rE)(t.id, t.type),
        i = n in D,
        l = X && !i;
      return <div className={j.item}><d.XZJ type={d.XZJ.Types.INVERTED} className={a()({
            [j.checkboxItemDisabled]: l
          })} disabled={l} value={i} onChange={() => z(t.id, t.type)}><x.Z guild={w} id={t.id} type={t.type} isLocked={false} /></d.XZJ></div>
    }, [q, w, X, z, D]);
  return i.useEffect(() => {
    u.Z.requestMembers(n, true, 200, false)
  }, [n]), <d.Y0X aria-label={g.intl.string(g.t["N+InBQ"])} transitionState={E} parentComponent={"AddPermissionsModal"}>{<d.xBx separator={false} direction={h.Z.Direction.VERTICAL}>{<d.X6q variant={"heading-xl/semibold"} className={j.header}>{s}</d.X6q>}{X ? <d.X6q variant={"heading-sm/medium"} color={"text-danger"}>{g.intl.string(g.t.XTwtW1)}</d.X6q> : null}</d.xBx>}{<d.hzk className={j.modalContent}>{<d.E1j className={j.searchBar} query={N} placeholder={_} aria-label={_} onChange={P} onClear={() => B("")} />}{<m.Z role={"listbox"} renderRow={R} rowCount={q.length} rowCountBySection={[q.length]} rowHeight={36} className={j.__invalid_list} />}</d.hzk>}{<d.mzw><d.hE2 direction={"horizontal-reverse"}>{<d.zxk variant={"primary"} text={g.intl.string(g.t.OYkgVl)} type={"submit"} onClick={M} disabled={0 === S} />}{<d.zxk variant={"secondary"} text={g.intl.string(g.t["ETE/oK"])} onClick={y} />}</d.hE2></d.mzw>}</d.Y0X>
}