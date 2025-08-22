/** Chunk was on 54844 **/
/** chunk id: 356110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100993 = require("./100993.js"),
  Chunk197571 = require("./197571.js");
let o = e => {
    let {
      element: t,
      onChange: n,
      initialOption: o
    } = e, [c, d] = i.useState("");
    i.useEffect(() => {
      d(null != o ? o : "")
    }, [o]);
    let u = t.name,
      {
        title: m,
        options: p
      } = t.data,
      g = i.useCallback(e => {
        null != e && (d(e), n(e))
      }, [n]);
    return (0, r.jsxs)("div", {
      className: s.marginBottom8,
      children: [null != m && (0, r.jsx)("div", {
        className: s.marginBottom8,
        children: (0, r.jsxs)(l.Text, {
          variant: "text-sm/bold",
          children: [m, t.should_submit_data && (0, r.jsx)("span", {
            className: a.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(l.q4e, {
        value: c,
        onChange: g,
        options: p
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
      return (0, r.jsx)(o, {
        element: e,
        initialOption: null != (l = null == i || null == (t = i[a]) ? true : t.value) ? l : true,
        onChange: e => n(a, e)
      }, a)
    });
    return (0, r.jsx)("div", {
      children: l
    })
  }