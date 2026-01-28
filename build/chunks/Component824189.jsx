/** Chunk was on 5606 **/
/** chunk id: 824189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk942405 = require("./942405.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c() {
  (0, s.sL)("overlay-settings")
}

function d(e) {
  let {
    className: t,
    game: n
  } = e;
  return (0, s.NP)() && null != n && n.elevated ? (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(i.po8, {
      messageType: i.YCn.WARNING,
      action: (0, r.jsx)(i.Button, {
        variant: "secondary",
        size: "sm",
        text: o.intl.string(o.t["1iI46O"]),
        onClick: c
      }),
      children: o.intl.format(o.t["LJzl+0"], {
        helpCenterLink: l.A.getArticleURL(a.MVz.SYSTEM_SERVICE)
      })
    })
  }) : null
}