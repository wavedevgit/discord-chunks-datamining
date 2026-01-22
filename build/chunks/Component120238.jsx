/** Chunk was on 22477 **/
/** chunk id: 120238, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk805866 = require("./805866.js"),
  Chunk646284 = require("./646284.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk141200 = require("./141200.js");
let d = e => {
  let {
    onSubmit: t,
    disabled: n
  } = e, d = l.useCallback(async () => {
    await t({
      type: r.Ij.Empty
    }), window.location.reload()
  }, [t]);
  return (0, a.jsxs)("div", {
    className: c.kL,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: c.DD,
      children: o.intl.string(s.default.v52itt)
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: c.h_,
      children: o.intl.string(s.default["5am8D3"])
    }), (0, a.jsx)(i.BJc, {
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