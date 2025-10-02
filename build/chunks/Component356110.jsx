/** Chunk was on 44559 **/
/** chunk id: 356110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378722 = require("./378722.js"),
  Chunk10198 = require("./10198.js");
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
        children: (0, r.jsxs)(l.Text, {
          variant: "text-sm/bold",
          children: [_, t.should_submit_data && (0, r.jsx)("span", {
            className: a.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(l.q4e, {
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
    } = e, l = t.map(e => {
      var t, l;
      let a = e.name;
      return (0, r.jsx)(s, {
        element: e,
        initialOption: null != (l = null == i || null == (t = i[a]) ? true : t.value) ? l : true,
        onChange: e => n(a, e)
      }, a)
    });
    return (0, r.jsx)("div", {
      children: l
    })
  }