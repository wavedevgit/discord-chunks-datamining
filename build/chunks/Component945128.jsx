/** Chunk was on 66663 **/
/** chunk id: 945128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk118589 = require("./118589.js"),
  Chunk753160 = require("./753160.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677881 = require("./677881.js");
let d = e => {
  let {
    onSubmit: t,
    disabled: n
  } = e, d = r.useCallback(async () => {
    await t({
      type: l.rY.Empty
    }), window.location.reload()
  }, [t]);
  return (0, a.jsxs)("div", {
    className: c.container,
    children: [(0, a.jsx)(i.X6q, {
      variant: "heading-lg/bold",
      className: c.title,
      children: o.intl.string(s.default.v52itr)
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: c.description,
      children: o.intl.string(s.default["5am8Dw"])
    }), (0, a.jsx)(i.Kqy, {
      direction: "horizontal",
      justify: "end",
      children: (0, a.jsx)(i.zxk, {
        variant: "primary",
        text: o.intl.string(s.default.GDsHl5),
        onClick: d,
        disabled: n
      })
    })]
  })
}