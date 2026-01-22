/** Chunk was on 84018 **/
/** chunk id: 74441, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk532624 = require("./532624.js"),
  Chunk350535 = require("./350535.js"),
  Chunk652215 = require("./652215.js"),
  Chunk39017 = require("./39017.js");
let d = {
  [Chunk652215.hCu.TOGGLE_MUTE]: {
    slash: Chunk397927.z0P,
    default: Chunk397927.cNw
  }
};

function u(e) {
  let {
    value: t,
    action: n,
    shouldShow: a
  } = e, u = (0, r.bG)([l.Ay], () => l.Ay.getKeybindForAction(n, false, true));
  if (null == u || !a) return null;
  let h = o.dI(u.shortcut),
    p = d[n],
    f = t ? p.slash : p.default;
  return (0, i.jsxs)("div", {
    className: c.U$,
    children: [(0, i.jsx)(f, {
      className: c.g4,
      size: "xs",
      color: "currentColor"
    }), (0, i.jsx)(s.Text, {
      variant: "text-xxs/semibold",
      className: c.z2,
      children: h
    })]
  })
}