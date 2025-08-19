/** Chunk was on 1056 **/
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
    } = e, [c, d] = a.useState("");
    a.useEffect(() => {
      d(null != s ? s : "")
    }, [s]);
    let u = t.name,
      {
        title: _,
        options: m
      } = t.data,
      p = a.useCallback(e => {
        null != e && (d(e), n(e))
      }, [n]);
    return (0, r.jsxs)("div", {
      className: l.marginBottom8,
      children: [null != _ && (0, r.jsx)("div", {
        className: l.marginBottom8,
        children: (0, r.jsxs)(i.Text, {
          variant: "text-sm/bold",
          children: [_, t.should_submit_data && (0, r.jsx)("span", {
            className: o.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(i.q4e, {
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
      state: a
    } = e, i = t.map(e => {
      var t, i;
      let o = e.name;
      return (0, r.jsx)(s, {
        element: e,
        initialOption: null != (i = null == a || null == (t = a[o]) ? true : t.value) ? i : true,
        onChange: e => n(o, e)
      }, o)
    });
    return (0, r.jsx)("div", {
      children: i
    })
  }