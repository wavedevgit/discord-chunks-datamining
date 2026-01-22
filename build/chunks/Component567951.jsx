/** Chunk was on 83006 **/
/** chunk id: 567951, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  y: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk457417 = require("./457417.js"),
  Chunk199029 = require("./199029.jsx"),
  Chunk254608 = require("./254608.jsx"),
  Chunk137508 = require("./137508.jsx"),
  Chunk520650 = require("./520650.js"),
  Chunk985018 = require("./985018.jsx");
let d = e => {
  let {
    transitionState: t,
    onClose: r
  } = e, {
    send: d,
    sending: f,
    canSend: b
  } = (0, l.Vw)();
  return (0, n.jsx)(a.Modal, {
    title: u.intl.string(i.default.zgFs8C),
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.TXNS7S),
      onClick: d,
      loading: f,
      disabled: !b()
    }],
    transitionState: t,
    onClose: r,
    input: (0, n.jsx)(s.l, {}),
    actionBarInput: (0, n.jsx)(c.t, {}),
    children: (0, n.jsx)(o.o, {})
  })
}