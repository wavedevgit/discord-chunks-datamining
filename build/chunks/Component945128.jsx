/** Chunk was on 89744 **/
/** chunk id: 945128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk241945 = require("./241945.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk58571 = require("./58571.js");
let s = e => {
  let {
    onSubmit: t,
    disabled: n
  } = e, s = i.useCallback(async () => {
    await t({}), window.location.reload()
  }, [t]);
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-lg/bold",
      className: o.title,
      children: c.intl.string(l.default.v52itr)
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: o.description,
      children: c.intl.string(l.default["5am8Dw"])
    }), (0, r.jsx)(a.Kqy, {
      direction: "horizontal",
      justify: "end",
      children: (0, r.jsx)(a.zxk, {
        variant: "primary",
        text: c.intl.string(l.default.GDsHl5),
        onClick: s,
        disabled: n
      })
    })]
  })
}