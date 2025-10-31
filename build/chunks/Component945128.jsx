/** Chunk was on 42340 **/
/** chunk id: 945128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk118589 = require("./118589.js"),
  Chunk213360 = require("./213360.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk58571 = require("./58571.js");
let d = e => {
  let {
    onSubmit: t,
    disabled: n
  } = e, d = r.useCallback(async () => {
    await t({
      type: i.rY.Empty
    }), window.location.reload()
  }, [t]);
  return (0, a.jsxs)("div", {
    className: c.container,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-lg/bold",
      className: c.title,
      children: s.intl.string(o.default.v52itt)
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: c.description,
      children: s.intl.string(o.default["5am8D3"])
    }), (0, a.jsx)(l.Kqy, {
      direction: "horizontal",
      justify: "end",
      children: (0, a.jsx)(l.Button, {
        variant: "primary",
        text: s.intl.string(o.default["GDsHl+"]),
        onClick: d,
        disabled: n
      })
    })]
  })
}