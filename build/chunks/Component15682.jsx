/** Chunk was on 9273 **/
/** chunk id: 15682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk652339 = require("./652339.js");
let o = e => {
    let {
      onChange: t,
      label: n,
      subtitle: o,
      selected: s
    } = e;
    return (0, r.jsx)("div", {
      className: a.checkboxRow,
      children: (0, r.jsxs)(i.$q, {
        type: i.M0.INVERTED,
        onChange: () => t(),
        value: s,
        children: [(0, r.jsx)(l.Text, {
          color: "interactive-active",
          variant: "text-md/semibold",
          children: n
        }), null != o ? (0, r.jsx)(l.Text, {
          color: "interactive-active",
          variant: "text-sm/normal",
          children: o
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
        let [l, a, s] = e;
        return (0, r.jsx)(o, {
          onChange: () => i(l, a),
          selected: l in n,
          label: a,
          subtitle: s
        }, "".concat(t, "+button"))
      })
    })
  }