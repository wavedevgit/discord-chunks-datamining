/** Chunk was on 54844 **/
/** chunk id: 15682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk652339 = require("./652339.js");
let a = e => {
    let {
      onChange: t,
      label: n,
      subtitle: a,
      selected: s
    } = e;
    return (0, r.jsx)("div", {
      className: l.checkboxRow,
      children: (0, r.jsxs)(i.XZJ, {
        type: i.XZJ.Types.INVERTED,
        onChange: () => t(),
        value: s,
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
  s = e => {
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
        let [l, s, o] = e;
        return (0, r.jsx)(a, {
          onChange: () => i(l, s),
          selected: l in n,
          label: s,
          subtitle: o
        }, "".concat(t, "+button"))
      })
    })
  }