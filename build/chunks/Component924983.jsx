/** Chunk was on web.js **/
/** chunk id: 924983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => f,
  Y: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk31336 = require("./31336.js"),
  Chunk358085 = require("./358085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk216482 = require("./216482.js");
let d = ["Hotspot Options", "Dismissible Contents", "Design Systems", "Intl Testing", "i18n", "Web Setting Tree Tool", "Minor Reward Capping Config", "Payment Flow Modals", "Virtual Currency Configuration", "Orbs", "Quest Preview Tool", "Revenue Storybook", "Payment Components", "Orb Components", "Virtual Currency", "Nitro Components"];

function f(e) {
  let {
    legacy: t = true
  } = e, n = (0, l.isMac)() ? "CMD + OPT + O" : "CTRL + ALT + O";
  return (0, r.jsx)(o.P3F, {
    className: a()(u.container, {
      [u.legacy]: t
    }),
    onClick: () => (0, s.d8)(),
    "aria-label": "Open DevTools",
    children: (0, r.jsx)(o.Text, {
      tag: "span",
      variant: "text-xxs/normal",
      color: "currentColor",
      children: c.intl.format(c.t["3EjT81"], {
        keybind: n,
        bugIcon: () => (0, r.jsx)(o.nnZ, {
          size: "custom",
          color: "currentColor",
          width: 10,
          height: 10
        })
      })
    })
  })
}