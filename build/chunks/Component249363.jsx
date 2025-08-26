/** Chunk was on 88479 **/
/** chunk id: 249363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk586382 = require("./586382.jsx"),
  Chunk594980 = require("./594980.jsx"),
  Chunk515025 = require("./515025.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk112913 = require("./112913.js");

function m(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e;
  return (0, r.jsxs)(i.hjN, {
    className: u.container,
    children: [(0, r.jsxs)("div", {
      className: u.column,
      children: [(0, r.jsxs)(i.vwX, {
        className: u.title,
        children: [d.intl.string(d.t.tzGY0t), (0, r.jsx)(a.hH, {
          guild: t
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: u.text,
        children: d.intl.string(d.t.F7bbrq)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: u.text,
        children: d.intl.format(d.t.ZYA9PT, {
          articleURL: l.Z.getArticleURL(c.BhN.GUILD_INVITE_SPLASH)
        })
      }), (0, r.jsx)(s.c, {
        guild: t,
        canManageGuild: n,
        buttonClassName: u.button
      })]
    }), (0, r.jsx)("div", {
      className: u.column,
      children: (0, r.jsx)(o.h, {
        guild: t,
        canManageGuild: n
      })
    })]
  })
}