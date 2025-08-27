/** Chunk was on 26196 **/
/** chunk id: 975919, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk135102 = require("./135102.js"),
  Chunk526689 = require("./526689.jsx"),
  Chunk229373 = require("./229373.jsx"),
  Chunk518027 = require("./518027.jsx"),
  Chunk119475 = require("./119475.js"),
  Chunk388032 = require("./388032.jsx");
let d = e => {
  let {
    transitionState: t,
    onClose: n
  } = e, {
    send: d,
    sending: _,
    canSend: f
  } = (0, r.C$)();
  return (0, a.jsx)(o.Modal, {
    title: c.intl.string(u.default.zgFs8P),
    actions: [{
      variant: "primary",
      text: c.intl.string(c.t.TXNS7e),
      onClick: d,
      loading: _,
      disabled: !f()
    }],
    transitionState: t,
    onClose: n,
    input: (0, a.jsx)(l.K, {}),
    actionBarInput: (0, a.jsx)(i.J, {}),
    children: (0, a.jsx)(s.d, {})
  })
}