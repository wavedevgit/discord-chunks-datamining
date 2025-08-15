/** Chunk was on 59727 **/
/** chunk id: 15682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk652339 = require("./652339.js");
let l = e => {
    let {
      onChange: t,
      label: n,
      subtitle: l,
      selected: o
    } = e;
    return (0, r.jsx)("div", {
      className: i.checkboxRow,
      children: (0, r.jsxs)(a.XZJ, {
        type: a.XZJ.Types.INVERTED,
        onChange: () => t(),
        value: o,
        children: [(0, r.jsx)(a.Text, {
          color: "interactive-active",
          variant: "text-md/semibold",
          children: n
        }), null != l ? (0, r.jsx)(a.Text, {
          color: "interactive-active",
          variant: "text-sm/normal",
          children: l
        }) : null]
      })
    })
  },
  o = e => {
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
        let [i, o, s] = e;
        return (0, r.jsx)(l, {
          onChange: () => a(i, o),
          selected: i in n,
          label: o,
          subtitle: s
        }, "".concat(t, "+button"))
      })
    })
  }