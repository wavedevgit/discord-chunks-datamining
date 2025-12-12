/** Chunk was on 24753 **/
/** chunk id: 13664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk788931 = require("./788931.js");

function o(e) {
  let {
    sendStartNotification: t,
    setSendStartNotification: n
  } = e, o = t ? s.intl.string(s.t.xAT8lI) : s.intl.string(s.t["Y+18hV"]);
  return (0, l.jsx)("div", {
    className: c.notificationToggle,
    children: (0, l.jsx)(i.$q, {
      type: i.M0.INVERTED,
      size: 14,
      className: c.__invalid_checkbox,
      value: t,
      onChange: function() {
        n(!t)
      },
      children: (0, l.jsx)(a.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: (0, l.jsx)(r.u, {
          position: "bottom",
          text: s.intl.string(s.t["4A/xnW"]),
          "aria-label": s.intl.string(s.t["4A/xnW"]),
          children: (0, l.jsx)("span", {
            children: o
          })
        })
      })
    })
  })
}