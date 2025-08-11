/** Chunk was on 54844 **/
/** chunk id: 356110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk843716 = require("./843716.js"),
  Chunk20493 = require("./20493.js");
let o = e => {
    let {
      element: t,
      onChange: n,
      initialOption: o
    } = e, [c, d] = l.useState("");
    l.useEffect(() => {
      d(null != o ? o : "")
    }, [o]);
    let u = t.name,
      {
        title: m,
        options: p
      } = t.data,
      g = l.useCallback(e => {
        null != e && (d(e), n(e))
      }, [n]);
    return <div className={s.marginBottom8}>{null != m && <div className={s.marginBottom8}><i.Text variant={"text-sm/bold"}>{m}{t.should_submit_data && <span className={a.required}>{"*"}</span>}</i.Text></div>}{<i.q4e value={c} onChange={g} options={p} />}</div>
  },
  c = e => {
    let {
      elements: t,
      onChange: n,
      state: l
    } = e, i = t.map(e => {
      var t, i;
      let a = e.name;
      return <o element={e} initialOption={null != (i = null == l || null == (t = l[a]) ? true : t.value) ? i : true} onChange={e => n(a, e)} />
    });
    return <div>{i}</div>
  }