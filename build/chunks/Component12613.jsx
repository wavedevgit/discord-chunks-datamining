/** Chunk was on 58652 **/
/** chunk id: 12613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk746305 = require("./746305.js");
let i = e => {
    let {
      onChange: t,
      label: n,
      subtitle: i,
      selected: s
    } = e;
    return (0, l.jsx)("div", {
      className: a.y,
      children: (0, l.jsx)(r.Sc0, {
        checked: s,
        onChange: t,
        label: n,
        description: i
      })
    })
  },
  s = e => {
    let {
      element: t,
      state: n,
      onChange: r
    } = e;
    if ((null == t ? true : t.type) !== "checkbox") return null;
    let {
      data: a
    } = t;
    return (0, l.jsx)("div", {
      children: a.map((e, t) => {
        let [a, s, o] = e;
        return (0, l.jsx)(i, {
          onChange: () => r(a, s),
          selected: a in n,
          label: s,
          subtitle: o
        }, "".concat(t, "+button"))
      })
    })
  }