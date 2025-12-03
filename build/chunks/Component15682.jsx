/** Chunk was on 54844 **/
/** chunk id: 15682, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
      className: i.checkboxRow,
      children: (0, r.jsx)(l.Checkbox, {
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