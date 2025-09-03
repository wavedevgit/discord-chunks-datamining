/** Chunk was on 42944 **/
/** chunk id: 356110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100993 = require("./100993.js"),
  Chunk197571 = require("./197571.js");
let s = e => {
    let {
      element: t,
      onChange: n,
      initialOption: s
    } = e, [c, d] = i.useState("");
    i.useEffect(() => {
      d(null != s ? s : "")
    }, [s]);
    let u = t.name,
      {
        title: _,
        options: m
      } = t.data,
      p = i.useCallback(e => {
        null != e && (d(e), n(e))
      }, [n]);
    return (0, r.jsxs)("div", {
      className: o.marginBottom8,
      children: [null != _ && (0, r.jsx)("div", {
        className: o.marginBottom8,
        children: (0, r.jsxs)(a.Text, {
          variant: "text-sm/bold",
          children: [_, t.should_submit_data && (0, r.jsx)("span", {
            className: l.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(a.q4e, {
        value: c,
        onChange: p,
        options: m
      })]
    }, u)
  },
  c = e => {
    let {
      elements: t,
      onChange: n,
      state: i
    } = e, a = t.map(e => {
      var t, a;
      let l = e.name;
      return (0, r.jsx)(s, {
        element: e,
        initialOption: null != (a = null == i || null == (t = i[l]) ? true : t.value) ? a : true,
        onChange: e => n(l, e)
      }, l)
    });
    return (0, r.jsx)("div", {
      children: a
    })
  }