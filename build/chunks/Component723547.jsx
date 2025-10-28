/** Chunk was on 32945 **/
/** chunk id: 723547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => s
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820762 = require("./820762.js");

function s(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e;
  return (0, a.jsx)("div", {
    className: o.popup,
    children: (0, a.jsxs)("div", {
      className: o.content,
      children: [(0, a.jsx)(r.P3F, {
        className: o.closeIcon,
        onClick: () => t(l.L.USER_DISMISS),
        children: (0, a.jsx)(r.Dio, {
          size: "xs"
        })
      }), (0, a.jsx)(r.Text, {
        className: o.description,
        variant: "text-md/normal",
        children: i.intl.string(i.t["Ny/0ui"])
      }), (0, a.jsx)(r.Button, {
        variant: "primary",
        size: "sm",
        text: i.intl.string(i.t.TYo738),
        fullWidth: true,
        onClick: () => {
          t(l.L.TAKE_ACTION), n()
        }
      })]
    })
  })
}