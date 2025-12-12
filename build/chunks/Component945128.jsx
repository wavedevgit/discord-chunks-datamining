/** Chunk was on 23736 **/
/** chunk id: 945128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk118589 = require("./118589.js"),
  Chunk693473 = require("./693473.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk725915 = require("./725915.js");
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
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: c.title,
      children: o.intl.string(s.default.v52itt)
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: c.description,
      children: o.intl.string(s.default["5am8D3"])
    }), (0, a.jsx)(i.Kqy, {
      direction: "horizontal",
      justify: "end",
      children: (0, a.jsx)(i.Button, {
        variant: "primary",
        text: o.intl.string(s.default["GDsHl+"]),
        onClick: d,
        disabled: n
      })
    })]
  })
}