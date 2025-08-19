/** Chunk was on 1056 **/
/** chunk id: 15682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk652339 = require("./652339.js");
let o = e => {
    let {
      onChange: t,
      label: n,
      subtitle: o,
      selected: l
    } = e;
    return (0, r.jsx)("div", {
      className: i.checkboxRow,
      children: (0, r.jsxs)(a.XZJ, {
        type: a.XZJ.Types.INVERTED,
        onChange: () => t(),
        value: l,
        children: [(0, r.jsx)(a.Text, {
          color: "interactive-active",
          variant: "text-md/semibold",
          children: n
        }), null != o ? (0, r.jsx)(a.Text, {
          color: "interactive-active",
          variant: "text-sm/normal",
          children: o
        }) : null]
      })
    })
  },
  l = e => {
    let {
      element: t,
      state: n,
      onChange: a
    } = e;
    if ((null == t ? true : t.type) !== "checkbox") return null;
    let {
      data: i
    } = t;
    return (0, r.jsx)("div", {
      children: i.map((e, t) => {
        let [i, l, s] = e;
        return (0, r.jsx)(o, {
          onChange: () => a(i, l),
          selected: i in n,
          label: l,
          subtitle: s
        }, "".concat(t, "+button"))
      })
    })
  }