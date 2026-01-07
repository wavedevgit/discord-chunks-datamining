/** Chunk was on web.js **/
/** chunk id: 894300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk865066 = require("./865066.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c() {
  (0, o.sU)("overlay-settings")
}

function u(e) {
  let {
    className: t,
    game: n
  } = e;
  return (0, o.hi)() && null != n && n.elevated ? (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(i.Wn, {
      messageType: i.QYI.WARNING,
      action: (0, r.jsx)(i.Button, {
        variant: "secondary",
        size: "sm",
        text: l.intl.string(l.t["1iI46O"]),
        onClick: c
      }),
      children: l.intl.format(l.t["LJzl+0"], {
        helpCenterLink: a.Z.getArticleURL(s.BhN.SYSTEM_SERVICE)
      })
    })
  }) : null
}