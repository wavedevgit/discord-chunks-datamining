/** Chunk was on web.js **/
/** chunk id: 445924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
  let {
    onChangeAvatar: t,
    onChangeAvatarDecoration: n,
    onClose: o,
    className: s
  } = e;
  return (0, r.jsxs)(i.v2r, {
    className: s,
    onClose: o,
    onSelect: true,
    navId: "user-settings-change-avatar",
    "aria-label": a.intl.string(a.t.ldIeAd),
    children: [(0, r.jsx)(i.sNh, {
      id: "change-avatar",
      action: t,
      label: a.intl.string(a.t["4OynCD"])
    }), (0, r.jsx)(i.sNh, {
      id: "change-avatar-decoration",
      action: n,
      label: a.intl.string(a.t.BVcYCx)
    })]
  })
}