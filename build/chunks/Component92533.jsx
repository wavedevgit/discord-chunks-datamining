/** Chunk was on 5533 **/
/** chunk id: 92533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk67734 = require("./67734.jsx"),
  Chunk375263 = require("./375263.jsx"),
  Chunk586382 = require("./586382.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk925525 = require("./925525.js");

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
        children: [d.intl.string(d.t["0r0AzM"]), (0, r.jsx)(o.zA, {
          guild: t
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: u.text,
        children: d.intl.string(d.t.UfqmIS)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: u.text,
        children: d.intl.format(d.t.vBcWUl, {
          articleURL: l.Z.getArticleURL(c.BhN.GUILD_BANNER_SPLASH)
        })
      }), (0, r.jsx)(a.F, {
        guild: t,
        canManageGuild: n,
        buttonClassName: u.button
      })]
    }), (0, r.jsx)("div", {
      className: u.column,
      children: (0, r.jsx)(s.O, {
        guild: t,
        canManageGuild: n
      })
    })]
  })
}