/** Chunk was on 24753 **/
/** chunk id: 13664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk628737 = require("./628737.js");

function c(e) {
  let {
    sendStartNotification: t,
    setSendStartNotification: n
  } = e, c = t ? s.intl.string(s.t.xAT8lI) : s.intl.string(s.t["Y+18hV"]);
  return (0, r.jsx)("div", {
    className: o.notificationToggle,
    children: (0, r.jsx)(i.$q, {
      type: i.M0.INVERTED,
      size: 14,
      className: o.__invalid_checkbox,
      value: t,
      onChange: function() {
        n(!t)
      },
      children: (0, r.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (0, r.jsx)(l.u, {
          position: "bottom",
          text: s.intl.string(s.t["4A/xnW"]),
          "aria-label": s.intl.string(s.t["4A/xnW"]),
          children: (0, r.jsx)("span", {
            children: c
          })
        })
      })
    })
  })
}