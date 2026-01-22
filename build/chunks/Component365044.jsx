/** Chunk was on 47841 **/
/** chunk id: 365044, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk627011 = require("./627011.jsx"),
  Chunk72507 = require("./72507.jsx"),
  Chunk41558 = require("./41558.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk815873 = require("./815873.js");

function f(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.kL,
    children: [(0, r.jsxs)("div", {
      className: u.fi,
      children: [(0, r.jsxs)(i.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: u.DD,
        children: [d.intl.string(d.t.tzGY0q), (0, r.jsx)(s.bX, {
          guild: t
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        className: u.Qq,
        children: d.intl.string(d.t.F7bbrh)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        className: u.Qq,
        children: d.intl.format(d.t.ZYA9PV, {
          articleURL: l.A.getArticleURL(o.MVz.GUILD_INVITE_SPLASH)
        })
      }), (0, r.jsx)(a.l, {
        guild: t,
        canManageGuild: n,
        buttonClassName: u.x6
      })]
    }), (0, r.jsx)("div", {
      className: u.fi,
      children: (0, r.jsx)(c.S, {
        guild: t,
        canManageGuild: n
      })
    })]
  })
}