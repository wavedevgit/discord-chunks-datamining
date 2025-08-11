/** Chunk was on 54844 **/
/** chunk id: 15682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk521545 = require("./521545.js");
let a = e => {
    let {
      onChange: t,
      label: n,
      subtitle: a,
      selected: s
    } = e;
    return (0, r.jsx)("div", {
      className: i.checkboxRow,
      children: (0, r.jsxs)(l.XZJ, {
        type: l.XZJ.Types.INVERTED,
        onChange: () => t(),
        value: s,
        children: [(0, r.jsx)(l.Text, {
          color: "interactive-active",
          variant: "text-md/semibold",
          children: n
        }), null != a ? (0, r.jsx)(l.Text, {
          color: "interactive-active",
          variant: "text-sm/normal",
          children: a
        }) : null]
      })
    })
  },
  s = e => {
    let {
      element: t,
      state: n,
      onChange: l
    } = e;
    if ((null == t ? true : t.type) !== "checkbox") return null;
    let {
      data: i
    } = t;
    return (0, r.jsx)("div", {
      children: i.map((e, t) => {
        let [i, s, o] = e;
        return (0, r.jsx)(a, {
          onChange: () => l(i, s),
          selected: i in n,
          label: s,
          subtitle: o
        }, "".concat(t, "+button"))
      })
    })
  }