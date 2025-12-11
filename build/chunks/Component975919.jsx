/** Chunk was on 58973 **/
/** chunk id: 975919, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk135102 = require("./135102.js"),
  Chunk526689 = require("./526689.jsx"),
  Chunk229373 = require("./229373.jsx"),
  Chunk518027 = require("./518027.jsx"),
  Chunk990551 = require("./990551.js"),
  Chunk388032 = require("./388032.jsx");
let d = e => {
  let {
    transitionState: t,
    onClose: n
  } = e, {
    send: d,
    sending: b,
    canSend: f
  } = (0, o.C$)();
  return (0, r.jsx)(a.Modal, {
    title: u.intl.string(i.default.zgFs8C),
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.TXNS7S),
      onClick: d,
      loading: b,
      disabled: !f()
    }],
    transitionState: t,
    onClose: n,
    input: (0, r.jsx)(c.K, {}),
    actionBarInput: (0, r.jsx)(s.J, {}),
    children: (0, r.jsx)(l.d, {})
  })
}