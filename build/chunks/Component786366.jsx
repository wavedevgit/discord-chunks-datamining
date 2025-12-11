/** Chunk was on 93979 **/
/** chunk id: 786366, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./953529.js"), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk860719 = require("./860719.js"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800593 = require("./800593.js");

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

function f(e) {
  let {
    user: n
  } = e, t = (0, o.e7)([c.Z], () => {
    var e;
    return null == (e = c.Z.getUserProfile(n.id)) ? true : e.application
  }), {
    hasMessageContent: f,
    hasGuildPresences: m,
    hasGuildMembers: p
  } = (0, a.w)({
    flags: null == t ? true : t.flags
  });
  return (0, l.jsxs)(i.zJl, {
    fade: true,
    className: d.scroller,
    children: [f && (0, l.jsx)(u, {
      icon: r.kBi,
      title: s.intl.string(s.t["7Tmhfu"]),
      description: s.intl.string(s.t.eu5x7z)
    }), m && (0, l.jsx)(u, {
      icon: r.iWm,
      title: s.intl.string(s.t.awYSsM),
      description: s.intl.string(s.t.TpsXoC)
    }), p && (0, l.jsx)(u, {
      icon: r.BFJ,
      title: s.intl.string(s.t.WuKeSJ),
      description: s.intl.string(s.t.wOBmtV)
    }), (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      children: s.intl.format(s.t.b6nqk0, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })
    })]
  })
}