/** Chunk was on web.js **/
/** chunk id: 351242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");
let o = e => {
  let {
    onChangeAvatar: t,
    onChangeAvatarDecoration: n,
    onClose: o
  } = e;
  return (0, r.jsxs)(i.W1t, {
    "data-menu-needs-review": true,
    onClose: o,
    onSelect: true,
    navId: "user-settings-change-avatar",
    "aria-label": a.intl.string(a.t.ldIeAd),
    children: [(0, r.jsx)(i.Drp, {
      id: "change-avatar",
      action: t,
      label: a.intl.string(a.t["4OynCD"])
    }), (0, r.jsx)(i.Drp, {
      id: "change-avatar-decoration",
      action: n,
      label: a.intl.string(a.t.BVcYCx)
    })]
  })
}