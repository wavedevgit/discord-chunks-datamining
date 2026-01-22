/** Chunk was on 29384 **/
/** chunk id: 519387, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk136722 = require("./136722.js"),
  Chunk158954 = require("./158954.js"),
  Chunk595738 = require("./595738.jsx"),
  Chunk376092 = require("./376092.js"),
  Chunk985018 = require("./985018.jsx");

function p(t) {
  let {
    defaultMemberPermissions: i,
    onClose: n,
    transitionState: p
  } = t, c = [];
  for (let t of l.Q) r.zy(i, t) && c.push(t);
  return (0, s.jsx)(a.Modal, {
    "aria-label": o.intl.string(o.t.vusPtq),
    transitionState: p,
    title: o.intl.string(o.t["4gMlpQ"]),
    onClose: n,
    actions: [{
      variant: "primary",
      text: o.intl.string(o.t.i4jeWR),
      onClick: n
    }],
    children: (0, s.jsx)(e.A, {
      grantedPermissions: c
    })
  })
}