/** Chunk was on 84249 **/
/** chunk id: 723547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => o
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk899855 = require("./899855.js");

function o(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e;
  return (0, a.jsx)("div", {
    className: s.popup,
    children: (0, a.jsxs)("div", {
      className: s.content,
      children: [(0, a.jsx)(r.P3F, {
        className: s.closeIcon,
        onClick: () => t(i.L.USER_DISMISS),
        children: (0, a.jsx)(r.Dio, {
          size: "xs"
        })
      }), (0, a.jsx)(r.Text, {
        className: s.description,
        variant: "text-md/normal",
        children: l.intl.string(l.t["Ny/0ui"])
      }), (0, a.jsx)(r.Button, {
        variant: "primary",
        size: "sm",
        text: l.intl.string(l.t.TYo738),
        fullWidth: true,
        onClick: () => {
          t(i.L.TAKE_ACTION), n()
        }
      })]
    })
  })
}