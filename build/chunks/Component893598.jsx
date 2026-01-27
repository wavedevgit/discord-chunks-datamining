/** Chunk was on web.js **/
/** chunk id: 893598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk692051 = require("./692051.js"),
  Chunk8475 = require("./8475.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk942676 = require("./942676.js");
let d = e => {
  let {
    onPlay: t,
    externalURL: n,
    className: i,
    renderLinkComponent: d,
    inactive: f,
    messageId: p,
    channelId: _
  } = e;
  return (0, r.jsx)(s.Y.Consumer, {
    children: e => (0, r.jsxs)("div", {
      className: a()(i, u.iE, {
        [u.y7]: e.disableInteractions
      }),
      children: [f && null == t ? (0, r.jsx)("div", {
        className: u.P0,
        children: (0, r.jsx)(o.udU, {
          size: "xs",
          color: "currentColor",
          className: u._R
        })
      }) : null, null != t ? (0, r.jsx)(o.DUT, {
        onClick: t,
        className: u.Rw,
        tabIndex: f ? false : 0,
        "aria-label": c.intl.string(c.t.RscU7I),
        children: (0, r.jsx)(o.udU, {
          size: "xs",
          color: "currentColor",
          className: u._R
        })
      }) : null, null != n ? d({
        href: n,
        target: "_blank",
        rel: "noreferrer noopener",
        className: u.Rw,
        children: (0, r.jsx)(l.A, {
          "aria-label": c.intl.string(c.t.wuRE8M),
          className: null != t ? u._L : u.Zl
        }),
        messageId: p,
        channelId: _
      }) : null]
    })
  })
}