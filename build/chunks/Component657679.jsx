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
    } = e, [o, c] = r.useState("");
    r.useEffect(() => {
      c(null != s ? s : "")
    }, [s]);
    let d = t.name,
      {
        title: u,
        options: m
      } = t.data,
      b = r.useCallback(e => {
        null != e && (c(e), n(e))
      }, [n]);
    return (0, l.jsx)("div", {
      className: i.QB,
      children: (0, l.jsx)(a.l6P, {
        label: u,
        value: o,
        required: t.should_submit_data,
        onSelectionChange: b,
        options: m,
        selectionMode: "single",
        fullWidth: true
      })
    }, d)
  },
  o = e => {
    let {
      elements: t,
      onChange: n,
      state: r
    } = e, a = t.map(e => {
      var t, a;
      let i = e.name;
      return (0, l.jsx)(s, {
        element: e,
        initialOption: null != (t = null == r || null == (a = r[i]) ? true : a.value) ? t : true,
        onChange: e => n(i, e)
      }, i)
    });
    return (0, l.jsx)("div", {
      children: a
    })
  }