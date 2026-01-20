/** Chunk was on web.js **/
/** chunk id: 41054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk707306 = require("./707306.js");
let c = function(e) {
  let {
    channel: t,
    avatarSize: n,
    iconSize: c,
    iconClassName: u
  } = e;
  if (t.isDM()) {
    let e = t.getRecipientId(),
      a = s.default.getUser(e);
    if (null == a) return null;
    let o = a.getAvatarURL(null, i.ny6[n].size);
    return (0, r.jsx)(i.qEK, {
      "aria-hidden": true,
      className: l.searchResultDMChannelIcon,
      size: n,
      src: o
    })
  }
  if (t.isGroupDM()) return (0, r.jsx)(o.Z, {
    "aria-hidden": true,
    className: l.searchResultGDMChannelIcon,
    channel: t,
    size: n
  });
  let d = (0, a.KS)(t);
  return null == d ? null : (0, r.jsx)(d, {
    className: u,
    color: "currentColor",
    size: c
  })
}