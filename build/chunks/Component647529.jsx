/** Chunk was on 73217 **/
/** chunk id: 647529, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk905457 = require("./905457.js"),
  Chunk767688 = require("./767688.js");

function x(e) {
  let {
    guildId: t,
    title: n,
    transitionState: x,
    children: g,
    buttons: j,
    onClose: p
  } = e, f = (0, i.e7)([a.Z], () => a.Z.getGuild(t));
  if (null == f) return null;
  let b = (0, r.jsx)(o.zxk, {
    variant: "primary",
    text: c.intl.string(c.t.i4jeWV),
    onClick: p
  });
  return (0, r.jsxs)(o.Y0X, {
    transitionState: x,
    size: o.CgR.SMALL,
    className: u.container,
    parentComponent: "LeaderboardSettingsBaseModal",
    children: [(0, r.jsxs)(o.xBx, {
      separator: false,
      className: u.modalHeader,
      children: [(0, r.jsx)("div", {
        className: u.gradientSplash
      }), (0, r.jsx)("img", {
        alt: "",
        src: m,
        className: u.heroImage
      }), (0, r.jsx)(o.LZC, {
        size: 16
      }), (0, r.jsx)(o.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: u.title,
        children: n
      }), (0, r.jsx)(o.LZC, {
        size: 4
      }), (0, r.jsxs)("div", {
        className: u.guildContainer,
        children: [(0, r.jsx)(l.Z, {
          size: l.Z.Sizes.SMOL,
          guild: f,
          className: u.guildIcon
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-secondary",
          children: f.name
        })]
      }), (0, r.jsx)(o.olH, {
        onClick: p,
        innerClassName: u.closeButton,
        className: u.close
      })]
    }), g, (0, r.jsxs)(o.mzw, {
      className: u.footer,
      children: [(0, r.jsx)("div", {
        className: u.footerButtons,
        children: null != j ? j : b
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: c.intl.format(c.t.zbMH0d, {
          link: s.Z.getArticleURL(d.BhN.GUILD_LEADERBOARD)
        })
      })]
    })]
  })
}