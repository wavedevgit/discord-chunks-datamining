/** Chunk was on 30202 **/
/** chunk id: 723547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => o
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820762 = require("./820762.js");

function o(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e;
  return (0, i.jsx)("div", {
    className: l.popup,
    children: (0, i.jsxs)("div", {
      className: l.content,
      children: [(0, i.jsx)(r.P3F, {
        className: l.closeIcon,
        onClick: () => t(s.L.USER_DISMISS),
        children: (0, i.jsx)(r.Dio, {
          size: "xs"
        })
      }), (0, i.jsx)(r.Text, {
        className: l.description,
        variant: "text-md/normal",
        children: a.intl.string(a.t["Ny/0ur"])
      }), (0, i.jsx)(r.zxk, {
        variant: "primary",
        size: "sm",
        text: a.intl.string(a.t.TYo739),
        fullWidth: true,
        onClick: () => {
          t(s.L.TAKE_ACTION), n()
        }
      })]
    })
  })
}