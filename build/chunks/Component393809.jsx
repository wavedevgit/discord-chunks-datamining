/** Chunk was on 31835 **/
/** chunk id: 393809, original params: t,r,n (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk53365 = require("./53365.js"),
  Chunk377176 = require("./377176.js"),
  Chunk388032 = require("./388032.jsx");

function l(t) {
  let {
    guildId: r,
    transitionState: n,
    onClose: l
  } = t, [A, _] = e.useState(false), [u, N] = e.useState(false), s = async () => {
    _(true);
    try {
      await (0, o.zo)(r), l()
    } finally {
      _(false)
    }
  }, O = c.intl.string(c.t["22itmp"]);
  return (0, i.jsx)(a.Modal, {
    size: "md",
    transitionState: n,
    onClose: l,
    "aria-label": O,
    title: O,
    subtitle: c.intl.string(c.t.kdbm9P),
    actions: [{
      variant: "secondary",
      onClick: l,
      text: c.intl.string(c.t["ETE/oK"])
    }, {
      variant: "primary",
      text: c.intl.string(c.t["cY+Ooa"]),
      disabled: !u,
      onClick: s,
      loading: A
    }],
    children: (0, i.jsx)(E.XZJ, {
      onChange: () => {
        N(t => !t)
      },
      size: 20,
      type: E.XZJ.Types.INVERTED,
      value: u,
      children: (0, i.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: (0, T.f)()
      })
    })
  })
}