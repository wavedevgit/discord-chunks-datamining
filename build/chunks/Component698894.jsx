/** Chunk was on 16864 **/
/** chunk id: 698894, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  r: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk333748 = require("./333748.js"),
  Chunk397927 = require("./397927.js"),
  Chunk647053 = require("./647053.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk856229 = require("./856229.js"),
  Chunk806782 = require("./806782.js"),
  Chunk277606 = require("./277606.js");
let f = e => {
  let {
    onComplete: t,
    data: r
  } = e, f = (0, n.useId)(), p = null, h = null, x = r.scopes.some(e => (0, l.RM)(e));
  return r.clientId === s.i.PLAYSTATION_APPLICATION_ID || r.clientId === s.i.PLAYSTATION_STAGING_APPLICATION_ID ? p = d.A : x && (p = u.A), null != r.twoWayLinkCode ? h = c.intl.string(c.t.QhATl2) : x && (h = c.intl.string(c.t.vBPvK3)), (0, a.jsxs)("div", {
    className: o.Qs,
    children: [null != p ? (0, a.jsx)("img", {
      src: p,
      className: o.xX,
      alt: "",
      "aria-labelledby": f
    }) : null, (0, a.jsxs)("div", {
      className: o.gx,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-xl/extrabold",
        id: f,
        children: c.intl.string(c.t.qDtJmD)
      }), null != h ? (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: h
      }) : null]
    }), (0, a.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: o.wC,
      children: (0, a.jsx)(i.Button, {
        variant: "primary",
        text: c.intl.string(c.t.i4jeWR),
        onClick: t
      })
    })]
  })
}