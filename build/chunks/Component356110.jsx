/** Chunk was on 54844 **/
/** chunk id: 356110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100993 = require("./100993.js"),
  Chunk197571 = require("./197571.js");
let d = e => {
    let {
      element: t,
      onChange: n,
      initialOption: d
    } = e, [c, u] = l.useState("");
    l.useEffect(() => {
      u(null != d ? d : "")
    }, [d]);
    let m = t.name,
      {
        title: p,
        options: g
      } = t.data,
      _ = l.useCallback(e => {
        null != e && (u(e), n(e))
      }, [n]);
    return (0, r.jsxs)("div", {
      className: o.marginBottom8,
      children: [null != p && (0, r.jsx)("div", {
        className: o.marginBottom8,
        children: (0, r.jsxs)(a.Text, {
          variant: "text-sm/bold",
          children: [p, t.should_submit_data && (0, r.jsx)("span", {
            className: s.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(i.y6, {
        value: c,
        onChange: _,
        options: g
      })]
    }, m)
  },
  c = e => {
    let {
      elements: t,
      onChange: n,
      state: l
    } = e, i = t.map(e => {
      var t, i;
      let a = e.name;
      return (0, r.jsx)(d, {
        element: e,
        initialOption: null != (i = null == l || null == (t = l[a]) ? true : t.value) ? i : true,
        onChange: e => n(a, e)
      }, a)
    });
    return (0, r.jsx)("div", {
      children: i
    })
  }