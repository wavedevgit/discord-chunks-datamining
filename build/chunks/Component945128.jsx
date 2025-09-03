/** Chunk was on 59289 **/
/** chunk id: 945128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk118589 = require("./118589.js"),
  Chunk241945 = require("./241945.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk58571 = require("./58571.js");
let u = e => {
  let {
    onSubmit: t,
    disabled: n
  } = e, u = i.useCallback(async () => {
    await t({
      type: l.rY.Empty
    }), window.location.reload()
  }, [t]);
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-lg/bold",
      className: s.title,
      children: o.intl.string(c.default.v52itr)
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: s.description,
      children: o.intl.string(c.default["5am8Dw"])
    }), (0, r.jsx)(a.Kqy, {
      direction: "horizontal",
      justify: "end",
      children: (0, r.jsx)(a.zxk, {
        variant: "primary",
        text: o.intl.string(c.default.GDsHl5),
        onClick: u,
        disabled: n
      })
    })]
  })
}