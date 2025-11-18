/** Chunk was on 93979 **/
/** chunk id: 786366, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js"), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk860719 = require("./860719.js"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888842 = require("./888842.js");

function u(e) {
  let {
    icon: n,
    title: t,
    description: i
  } = e;
  return (0, l.jsxs)("div", {
    className: d.row,
    children: [(0, l.jsx)("div", {
      className: d.rowIcon,
      children: (0, l.jsx)(n, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, l.jsxs)("div", {
      className: d.rowText,
      children: [(0, l.jsx)(r.Heading, {
        variant: "text-xs/semibold",
        children: t
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: i
      })]
    })]
  })
}

function m(e) {
  let {
    user: n
  } = e, t = (0, o.e7)([a.Z], () => {
    var e;
    return null == (e = a.Z.getUserProfile(n.id)) ? true : e.application
  }), {
    hasMessageContent: m,
    hasGuildPresences: p,
    hasGuildMembers: f
  } = (0, s.w)({
    flags: null == t ? true : t.flags
  });
  return (0, l.jsxs)(i.zJl, {
    fade: true,
    className: d.scroller,
    children: [m && (0, l.jsx)(u, {
      icon: r.kBi,
      title: c.intl.string(c.t["7Tmhfu"]),
      description: c.intl.string(c.t.eu5x7z)
    }), p && (0, l.jsx)(u, {
      icon: r.iWm,
      title: c.intl.string(c.t.awYSsM),
      description: c.intl.string(c.t.TpsXoC)
    }), f && (0, l.jsx)(u, {
      icon: r.BFJ,
      title: c.intl.string(c.t.WuKeSJ),
      description: c.intl.string(c.t.wOBmtV)
    }), (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      children: c.intl.format(c.t.b6nqk0, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })
    })]
  })
}