/** Chunk was on 91826 **/
/** chunk id: 431913, original params: t,r,i (module,exports,require) **/
require.d(exports, {
  default: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk421380 = require("./421380.js"),
  Chunk493540 = require("./493540.js"),
  Chunk980406 = require("./980406.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  let {
    guildId: r,
    transitionState: i,
    onClose: s
  } = t, [l, R] = n.useState(false), [_, O] = n.useState(false), u = async () => {
    R(true);
    try {
      await (0, E.Bo)(r), s()
    } finally {
      R(false)
    }
  }, A = c.intl.string(c.t["22itmo"]);
  return (0, e.jsx)(a.Modal, {
    size: "md",
    transitionState: i,
    onClose: s,
    "aria-label": A,
    title: A,
    subtitle: c.intl.string(c.t.kdbm9C),
    actions: [{
      variant: "secondary",
      onClick: s,
      text: c.intl.string(c.t["ETE/oC"])
    }, {
      variant: "primary",
      text: c.intl.string(c.t["cY+Oob"]),
      disabled: !_,
      onClick: u,
      loading: l
    }],
    children: (0, e.jsx)(o.Kj, {
      onChange: () => {
        O(t => !t)
      },
      value: _,
      children: (0, T.r)()
    })
  })
}