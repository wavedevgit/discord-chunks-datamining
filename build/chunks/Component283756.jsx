/** Chunk was on web.js **/
/** chunk id: 283756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk249458 = require("./249458.js"),
  Chunk138599 = require("./138599.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk718225 = require("./718225.js");
let d = e => {
  let {
    onPlay: t,
    externalURL: n,
    className: i,
    renderLinkComponent: d,
    inactive: f,
    messageId: _,
    channelId: p
  } = e;
  return (0, r.jsx)(s.G.Consumer, {
    children: e => (0, r.jsxs)("div", {
      className: a()(i, u.wrapper, {
        [u.disableInteractions]: e.disableInteractions
      }),
      children: [f && null == t ? (0, r.jsx)("div", {
        className: u.iconWrapper,
        children: (0, r.jsx)(o.o1U, {
          size: "xs",
          color: "currentColor",
          className: u.iconPlay
        })
      }) : null, null != t ? (0, r.jsx)(o.P3F, {
        onClick: t,
        className: u.iconWrapperActive,
        tabIndex: f ? false : 0,
        "aria-label": c.intl.string(c.t.RscU7I),
        children: (0, r.jsx)(o.o1U, {
          size: "xs",
          color: "currentColor",
          className: u.iconPlay
        })
      }) : null, null != n ? d({
        href: n,
        target: "_blank",
        rel: "noreferrer noopener",
        className: u.iconWrapperActive,
        children: (0, r.jsx)(l.Z, {
          "aria-label": c.intl.string(c.t.wuRE8M),
          className: null != t ? u.iconExternalMargins : u.iconExternal
        }),
        messageId: _,
        channelId: p
      }) : null]
    })
  })
}