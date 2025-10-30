/** Chunk was on 54844 **/
/** chunk id: 15682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk641838 = require("./641838.js");
let s = e => {
    let {
      onChange: t,
      label: n,
      subtitle: s,
      selected: o
    } = e;
    return (0, r.jsx)("div", {
      className: a.checkboxRow,
      children: (0, r.jsxs)(i.$q, {
        type: i.M0.INVERTED,
        onChange: () => t(),
        value: o,
        children: [(0, r.jsx)(l.Text, {
          color: "interactive-active",
          variant: "text-md/semibold",
          children: n
        }), null != s ? (0, r.jsx)(l.Text, {
          color: "interactive-active",
          variant: "text-sm/normal",
          children: s
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
        let [l, a, o] = e;
        return (0, r.jsx)(s, {
          onChange: () => i(l, a),
          selected: l in n,
          label: a,
          subtitle: o
        }, "".concat(t, "+button"))
      })
    })
  }