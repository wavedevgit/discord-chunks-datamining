/** Chunk was on 58652 **/
/** chunk id: 657679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk473169 = require("./473169.js");
let s = e => {
    let {
      element: t,
      onChange: n,
      initialOption: s
    } = e, [o, d] = r.useState("");
    r.useEffect(() => {
      d(null != s ? s : "")
    }, [s]);
    let c = t.name,
      {
        title: u,
        options: m
      } = t.data,
      p = r.useCallback(e => {
        null != e && (d(e), n(e))
      }, [n]);
    return (0, l.jsx)("div", {
      className: a.QB,
      children: (0, l.jsx)(i.l6P, {
        label: u,
        value: o,
        required: t.should_submit_data,
        onSelectionChange: p,
        options: m,
        selectionMode: "single",
        fullWidth: true
      })
    }, c)
  },
  o = e => {
    let {
      elements: t,
      onChange: n,
      state: r
    } = e, i = t.map(e => {
      var t, i;
      let a = e.name;
      return (0, l.jsx)(s, {
        element: e,
        initialOption: null != (t = null == r || null == (i = r[a]) ? true : i.value) ? t : true,
        onChange: e => n(a, e)
      }, a)
    });
    return (0, l.jsx)("div", {
      children: i
    })
  }