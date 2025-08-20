/** Chunk was on 40226 **/
/** chunk id: 15682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk652339 = require("./652339.js");
let a = e => {
    let {
      onChange: t,
      label: n,
      subtitle: a,
      selected: o
    } = e;
    return (0, r.jsx)("div", {
      className: l.checkboxRow,
      children: (0, r.jsxs)(i.XZJ, {
        type: i.XZJ.Types.INVERTED,
        onChange: () => t(),
        value: o,
        children: [(0, r.jsx)(i.Text, {
          color: "interactive-active",
          variant: "text-md/semibold",
          children: n
        }), null != a ? (0, r.jsx)(i.Text, {
          color: "interactive-active",
          variant: "text-sm/normal",
          children: a
        }) : null]
      })
    })
  },
  o = e => {
    let {
      element: t,
      state: n,
      onChange: i
    } = e;
    if ((null == t ? true : t.type) !== "checkbox") return null;
    let {
      data: l
    } = t;
    return (0, r.jsx)("div", {
      children: l.map((e, t) => {
        let [l, o, s] = e;
        return (0, r.jsx)(a, {
          onChange: () => i(l, o),
          selected: l in n,
          label: o,
          subtitle: s
        }, "".concat(t, "+button"))
      })
    })
  }