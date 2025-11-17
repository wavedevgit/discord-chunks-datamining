/** Chunk was on 31835 **/
/** chunk id: 393809, original params: t,r,n (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk53365 = require("./53365.js"),
  Chunk377176 = require("./377176.js"),
  Chunk388032 = require("./388032.jsx");

function l(t) {
  let {
    guildId: r,
    transitionState: n,
    onClose: l
  } = t, [A, _] = e.useState(false), [u, N] = e.useState(false), O = async () => {
    _(true);
    try {
      await (0, o.zo)(r), l()
    } finally {
      _(false)
    }
  }, s = c.intl.string(c.t["22itmo"]);
  return (0, i.jsx)(a.Modal, {
    size: "md",
    transitionState: n,
    onClose: l,
    "aria-label": s,
    title: s,
    subtitle: c.intl.string(c.t.kdbm9C),
    actions: [{
      variant: "secondary",
      onClick: l,
      text: c.intl.string(c.t["ETE/oC"])
    }, {
      variant: "primary",
      text: c.intl.string(c.t["cY+Oob"]),
      disabled: !u,
      onClick: O,
      loading: A
    }],
    children: (0, i.jsx)(E.$q, {
      onChange: () => {
        N(t => !t)
      },
      value: u,
      children: (0, T.f)()
    })
  })
}