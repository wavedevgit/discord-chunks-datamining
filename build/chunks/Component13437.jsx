/** Chunk was on 86142 **/
/** chunk id: 13437, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk970573 = require("./970573.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk777409 = require("./777409.js");

function u(e) {
  let {
    onDismiss: t
  } = e;
  return (0, l.A)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
  }), (0, r.jsxs)(a.Ay, {
    className: d.ci,
    children: [(0, r.jsx)(a.hE, {
      children: c.intl.string(c.t.bVbB63)
    }), (0, r.jsx)(s.Text, {
      className: d.PK,
      variant: "text-md/normal",
      color: "text-default",
      children: c.intl.string(c.t["0M5fN7"])
    }), (0, r.jsx)(o.A, {
      actionText: c.intl.string(c.t["DSN+hw"]),
      onAction: e => {
        e === o.X.LOGIN_REQUIRED && t()
      }
    }), (0, r.jsx)("div", {
      className: d.o1,
      children: (0, r.jsx)(s.QWc, {
        variant: "secondary",
        size: "md",
        textVariant: "text-sm/medium",
        text: c.intl.string(c.t["9g2mqT"]),
        onClick: t
      })
    })]
  })
}