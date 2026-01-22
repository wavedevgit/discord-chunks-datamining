/** Chunk was on web.js **/
/** chunk id: 315059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk598104 = require("./598104.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk996316 = require("./996316.js");
let c = function(e) {
  let {
    channel: t,
    avatarSize: n,
    iconSize: c,
    iconClassName: u
  } = e;
  if (t.isDM()) {
    let e = t.getRecipientId(),
      a = o.default.getUser(e);
    if (null == a) return null;
    let s = a.getAvatarURL(null, i.vCh[n].size);
    return (0, r.jsx)(i.euF, {
      "aria-hidden": true,
      className: l.B7,
      size: n,
      src: s
    })
  }
  if (t.isGroupDM()) return (0, r.jsx)(s.A, {
    "aria-hidden": true,
    className: l.w$,
    channel: t,
    size: n
  });
  let d = (0, a.gU)(t);
  return null == d ? null : (0, r.jsx)(d, {
    className: u,
    color: "currentColor",
    size: c
  })
}