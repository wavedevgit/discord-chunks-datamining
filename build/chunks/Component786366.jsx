/** Chunk was on 93979 **/
/** chunk id: 786366, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
    description: o
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
      children: [(0, l.jsx)(i.X6q, {
        variant: "text-xs/semibold",
        children: t
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: o
      })]
    })]
  })
}

function m(e) {
  let {
    user: n
  } = e, t = (0, r.e7)([s.Z], () => {
    var e;
    return null == (e = s.Z.getUserProfile(n.id)) ? true : e.application
  }), {
    hasMessageContent: m,
    hasGuildPresences: f,
    hasGuildMembers: p
  } = (0, c.w)({
    flags: null == t ? true : t.flags
  });
  return (0, l.jsxs)(o.zJ, {
    fade: true,
    className: d.scroller,
    children: [m && (0, l.jsx)(u, {
      icon: i.kBi,
      title: a.intl.string(a.t["7Tmhfn"]),
      description: a.intl.string(a.t["eu5x7+"])
    }), f && (0, l.jsx)(u, {
      icon: i.iWm,
      title: a.intl.string(a.t.awYSsL),
      description: a.intl.string(a.t.TpsXoK)
    }), p && (0, l.jsx)(u, {
      icon: i.BFJ,
      title: a.intl.string(a.t.WuKeSE),
      description: a.intl.string(a.t.wOBmtb)
    }), (0, l.jsx)(i.Text, {
      variant: "text-xs/normal",
      children: a.intl.format(a.t.b6nqk5, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })
    })]
  })
}