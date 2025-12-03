/** Chunk was on 27978 **/
/** chunk id: 913583, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk760213 = require("./760213.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk307847 = require("./307847.js");

function d(e) {
  let {
    onDismiss: t
  } = e;
  return (0, l.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
  }), (0, r.jsxs)(a.ZP, {
    className: u.chooseAccountAuthBox,
    children: [(0, r.jsx)(a.Dx, {
      children: c.intl.string(c.t.bVbB63)
    }), (0, r.jsx)(s.Text, {
      className: u.chooseAccountHelpText,
      variant: "text-md/normal",
      color: "text-default",
      children: c.intl.string(c.t["0M5fN7"])
    }), (0, r.jsx)(o.Z, {
      actionText: c.intl.string(c.t["DSN+hw"]),
      onAction: e => {
        e === o.W.LOGIN_REQUIRED && t()
      }
    }), (0, r.jsx)("div", {
      className: u.actions,
      children: (0, r.jsx)(s.Avr, {
        variant: "secondary",
        size: "md",
        textVariant: "text-sm/medium",
        text: c.intl.string(c.t["9g2mqT"]),
        onClick: t
      })
    })]
  })
}