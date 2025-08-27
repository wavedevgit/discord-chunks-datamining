/** Chunk was on web.js **/
/** chunk id: 316027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699516 = require("./699516.js"),
  Chunk973186 = require("./973186.js");

function l(e) {
  let {
    user: t,
    guildId: n,
    iconColor: l
  } = e, c = (0, i.e7)([o.Z], () => o.Z.isBlocked(t.id));
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)(a.qEK, {
      className: s.avatar,
      size: a.EFr.SIZE_56,
      src: t.getAvatarURL(n, 64),
      "aria-label": t.username
    }), (0, r.jsx)("div", {
      className: s.avatarIconContainer,
      children: c ? (0, r.jsx)(a.t6m, {
        color: l
      }) : (0, r.jsx)(a.kZF, {
        color: l
      })
    })]
  })
}