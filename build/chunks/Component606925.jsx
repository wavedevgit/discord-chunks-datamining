/** Chunk was on web.js **/
/** chunk id: 606925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk915863 = require("./915863.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk289356 = require("./289356.js");

function u(e) {
  let {
    platform: t,
    color: n,
    look: u,
    onAction: d,
    Icon: f
  } = e;
  if ((0, i.e7)([a.Z], () => a.Z.getAccounts().some(e => e.type === t.type))) return null;
  let _ = () => {
      null == d || d(), (0, o.Z)({
        platformType: t.type,
        location: "Activity Action"
      })
    },
    p = null != f ? (0, r.jsx)(f, {
      className: c.platformIcon
    }) : (0, r.jsx)("img", {
      alt: "",
      className: c.platformIcon,
      src: t.icon.whiteSVG
    });
  return (0, r.jsx)(s.Z, {
    onClick: _,
    color: n,
    look: u,
    fullWidth: true,
    children: (0, r.jsxs)("div", {
      className: c.flex,
      children: [p, l.intl.format(l.t.XWSHTU, {
        platform: t.name
      })]
    })
  }, "connect-platform-activity")
}