/** Chunk was on 54844 **/
/** chunk id: 15682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
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
      selected: s
    } = e;
    return (0, r.jsx)("div", {
      className: l.checkboxRow,
      children: (0, r.jsx)(i.Checkbox, {
        checked: s,
        onChange: t,
        label: n,
        description: a
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