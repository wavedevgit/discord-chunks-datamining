/** Chunk was on web.js **/
/** chunk id: 445924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");
let a = e => {
  let {
    onChangeAvatar: t,
    onChangeAvatarDecoration: n,
    onClose: a,
    className: s
  } = e;
  return (0, r.jsxs)(i.v2r, {
    className: s,
    onClose: a,
    onSelect: true,
    navId: "user-settings-change-avatar",
    "aria-label": o.intl.string(o.t.ldIeAd),
    children: [(0, r.jsx)(i.sNh, {
      id: "change-avatar",
      action: t,
      label: o.intl.string(o.t["4OynCD"])
    }), (0, r.jsx)(i.sNh, {
      id: "change-avatar-decoration",
      action: n,
      label: o.intl.string(o.t.BVcYCx)
    })]
  })
}