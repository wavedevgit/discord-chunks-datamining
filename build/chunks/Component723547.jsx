/** Chunk was on 3020 **/
/** chunk id: 723547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => o
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820762 = require("./820762.js");

function o(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e;
  return (0, a.jsx)("div", {
    className: s.popup,
    children: (0, a.jsxs)("div", {
      className: s.content,
      children: [(0, a.jsx)(i.P3F, {
        className: s.closeIcon,
        onClick: () => t(l.L.USER_DISMISS),
        children: (0, a.jsx)(i.Dio, {
          size: "xs"
        })
      }), (0, a.jsx)(i.Text, {
        className: s.description,
        variant: "text-md/normal",
        children: r.intl.string(r.t["Ny/0ui"])
      }), (0, a.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: r.intl.string(r.t.TYo738),
        fullWidth: true,
        onClick: () => {
          t(l.L.TAKE_ACTION), n()
        }
      })]
    })
  })
}