/** Chunk was on 54844 **/
/** chunk id: 356110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk478411 = require("./478411.js");
let s = e => {
    let {
      element: t,
      onChange: n,
      initialOption: s
    } = e, [o, c] = l.useState("");
    l.useEffect(() => {
      c(null != s ? s : "")
    }, [s]);
    let d = t.name,
      {
        title: u,
        options: m
      } = t.data,
      b = l.useCallback(e => {
        null != e && (c(e), n(e))
      }, [n]);
    return (0, r.jsx)("div", {
      className: a.marginBottom8,
      children: (0, r.jsx)(i.PhF, {
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
      state: l
    } = e, i = t.map(e => {
      var t, i;
      let a = e.name;
      return (0, r.jsx)(s, {
        element: e,
        initialOption: null != (i = null == l || null == (t = l[a]) ? true : t.value) ? i : true,
        onChange: e => n(a, e)
      }, a)
    });
    return (0, r.jsx)("div", {
      children: i
    })
  }