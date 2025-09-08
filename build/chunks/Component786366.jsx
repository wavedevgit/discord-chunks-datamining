/** Chunk was on 72164 **/
/** chunk id: 786366, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./953529.js"), require("./997841.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk597312 = require("./597312.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk860719 = require("./860719.js"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk770978 = require("./770978.js");

function u(e) {
  let {
    icon: n,
    title: t,
    description: r
  } = e;
  return (0, o.jsxs)("div", {
    className: d.row,
    children: [(0, o.jsx)("div", {
      className: d.rowIcon,
      children: (0, o.jsx)(n, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, o.jsxs)("div", {
      className: d.rowText,
      children: [(0, o.jsx)(i.X6q, {
        variant: "text-xs/semibold",
        children: t
      }), (0, o.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: r
      })]
    })]
  })
}

function f(e) {
  let {
    user: n
  } = e, t = (0, l.e7)([a.Z], () => {
    var e;
    return null == (e = a.Z.getUserProfile(n.id)) ? true : e.application
  }), {
    hasMessageContent: f,
    hasGuildPresences: p,
    hasGuildMembers: m
  } = (0, c.w)({
    flags: null == t ? true : t.flags
  });
  return (0, o.jsxs)(r.zJ, {
    fade: true,
    className: d.scroller,
    children: [f && (0, o.jsx)(u, {
      icon: i.kBi,
      title: s.intl.string(s.t["7Tmhfn"]),
      description: s.intl.string(s.t["eu5x7+"])
    }), p && (0, o.jsx)(u, {
      icon: i.iWm,
      title: s.intl.string(s.t.awYSsL),
      description: s.intl.string(s.t.TpsXoK)
    }), m && (0, o.jsx)(u, {
      icon: i.BFJ,
      title: s.intl.string(s.t.WuKeSE),
      description: s.intl.string(s.t.wOBmtb)
    }), (0, o.jsx)(i.Text, {
      variant: "text-xs/normal",
      children: s.intl.format(s.t.b6nqk5, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })
    })]
  })
}