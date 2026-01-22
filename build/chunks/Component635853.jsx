/** Chunk was on web.js **/
/** chunk id: 635853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk145497 = require("./145497.jsx"),
  Chunk649640 = require("./649640.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk838934 = require("./838934.js");

function u(e) {
  let {
    name: t,
    onRetry: n
  } = e, u = (0, o.b2)(), d = (0, o.n6)(u.hex()), f = null != t ? t : l.intl.string(l.t.DmIUGK);
  return (0, r.jsxs)("div", {
    className: c.kL,
    children: [(0, r.jsx)("div", {
      className: c.vK,
      style: {
        background: d
      }
    }), (0, r.jsx)("div", {
      className: c.H,
      children: (0, r.jsx)(a.Ay, {
        mask: a.hW.CLAN_ICON,
        width: 70,
        height: 70,
        children: (0, r.jsx)("div", {
          className: c.R3,
          children: (0, r.jsx)(s.B$, {
            guildName: f,
            iconSize: 64
          })
        })
      })
    }), (0, r.jsxs)("div", {
      className: c.wx,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-lg/medium",
        color: "text-strong",
        children: f
      }), (0, r.jsxs)(i.DUT, {
        className: c.z3,
        onClick: n,
        children: [(0, r.jsx)(i.EpV, {
          size: "sm",
          color: "currentColor"
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-feedback-warning",
          children: l.intl.string(l.t.tmGHjc)
        })]
      })]
    })]
  })
}