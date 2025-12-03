/** Chunk was on 54844 **/
/** chunk id: 356110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100993 = require("./100993.js"),
  Chunk197571 = require("./197571.js");
let o = e => {
    let {
      element: t,
      onChange: n,
      initialOption: o
    } = e, [d, c] = l.useState("");
    l.useEffect(() => {
      c(null != o ? o : "")
    }, [o]);
    let u = t.name,
      {
        title: m,
        options: p
      } = t.data,
      g = l.useCallback(e => {
        null != e && (c(e), n(e))
      }, [n]);
    return (0, r.jsxs)("div", {
      className: s.marginBottom8,
      children: [null != m && (0, r.jsx)("div", {
        className: s.marginBottom8,
        children: (0, r.jsxs)(i.Text, {
          variant: "text-sm/bold",
          children: [m, t.should_submit_data && (0, r.jsx)("span", {
            className: a.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(i.q4e, {
        value: d,
        onChange: g,
        options: p
      })]
    }, u)
  },
  d = e => {
    let {
      elements: t,
      onChange: n,
      state: l
    } = e, i = t.map(e => {
      var t, i;
      let a = e.name;
      return (0, r.jsx)(o, {
        element: e,
        initialOption: null != (i = null == l || null == (t = l[a]) ? true : t.value) ? i : true,
        onChange: e => n(a, e)
      }, a)
    });
    return (0, r.jsx)("div", {
      children: i
    })
  }