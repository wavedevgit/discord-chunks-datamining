/** Chunk was on 54844 **/
/** chunk id: 356110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk984019 = require("./984019.js"),
  Chunk478411 = require("./478411.js");
let c = e => {
    let {
      element: t,
      onChange: n,
      initialOption: c
    } = e, [d, u] = l.useState("");
    l.useEffect(() => {
      u(null != c ? c : "")
    }, [c]);
    let m = t.name,
      {
        title: b,
        options: p
      } = t.data,
      g = l.useCallback(e => {
        null != e && (u(e), n(e))
      }, [n]);
    return (0, r.jsxs)("div", {
      children: [null != b && (0, r.jsx)("div", {
        className: o.marginBottom8,
        children: (0, r.jsxs)(a.Text, {
          variant: "text-sm/bold",
          children: [b, t.should_submit_data && (0, r.jsx)("span", {
            className: s.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(i.y6, {
        value: d,
        onChange: g,
        options: p
      })]
    }, m)
  },
  d = e => {
    let {
      elements: t,
      onChange: n,
      state: l
    } = e, i = t.map(e => {
      var t, i;
      let a = e.name;
      return (0, r.jsx)(c, {
        element: e,
        initialOption: null != (i = null == l || null == (t = l[a]) ? true : t.value) ? i : true,
        onChange: e => n(a, e)
      }, a)
    });
    return (0, r.jsx)("div", {
      children: i
    })
  }