/** Chunk was on 837 **/
/** chunk id: 723547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => o
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
      children: [(0, a.jsx)(l.P3F, {
        className: s.closeIcon,
        onClick: () => t(i.L.USER_DISMISS),
        children: (0, a.jsx)(l.Dio, {
          size: "xs"
        })
      }), (0, a.jsx)(l.Text, {
        className: s.description,
        variant: "text-md/normal",
        children: r.intl.string(r.t["Ny/0ui"])
      }), (0, a.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: r.intl.string(r.t.TYo738),
        fullWidth: true,
        onClick: () => {
          t(i.L.TAKE_ACTION), n()
        }
      })]
    })
  })
}