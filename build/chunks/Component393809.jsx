/** Chunk was on 31835 **/
/** chunk id: 393809, original params: t,r,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53365 = require("./53365.js"),
  Chunk377176 = require("./377176.js"),
  Chunk388032 = require("./388032.jsx");

function A(t) {
  let {
    guildId: r,
    transitionState: n,
    onClose: A
  } = t, [_, u] = e.useState(false), [N, s] = e.useState(false), O = async () => {
    u(true);
    try {
      await (0, T.zo)(r), A()
    } finally {
      u(false)
    }
  }, I = l.intl.string(l.t["22itmp"]);
  return (0, i.jsx)(a.Modal, {
    size: "md",
    transitionState: n,
    onClose: A,
    "aria-label": I,
    title: I,
    subtitle: l.intl.string(l.t.kdbm9P),
    actions: [{
      variant: "secondary",
      onClick: A,
      text: l.intl.string(l.t["ETE/oK"])
    }, {
      variant: "primary",
      text: l.intl.string(l.t["cY+Ooa"]),
      disabled: !N,
      onClick: O,
      loading: _
    }],
    children: (0, i.jsx)(E.$q, {
      onChange: () => {
        s(t => !t)
      },
      size: 20,
      type: E.M0.INVERTED,
      value: N,
      children: (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: (0, c.f)()
      })
    })
  })
}