/** Chunk was on 99799 **/
/** chunk id: 786366, original params: e,t,n (module,exports,require) **/
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
    icon: t,
    title: n,
    description: o
  } = e;
  return (0, r.jsxs)("div", {
    className: d.row,
    children: [(0, r.jsx)("div", {
      className: d.rowIcon,
      children: (0, r.jsx)(t, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: d.rowText,
      children: [(0, r.jsx)(l.X6q, {
        variant: "text-xs/semibold",
        children: n
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: o
      })]
    })]
  })
}

function f(e) {
  let {
    user: t
  } = e, n = (0, i.e7)([c.Z], () => {
    var e;
    return null == (e = c.Z.getUserProfile(t.id)) ? true : e.application
  }), {
    hasMessageContent: f,
    hasGuildPresences: p,
    hasGuildMembers: m
  } = (0, a.w)({
    flags: null == n ? true : n.flags
  });
  return (0, r.jsxs)(o.zJ, {
    fade: true,
    className: d.scroller,
    children: [f && (0, r.jsx)(u, {
      icon: l.kBi,
      title: s.intl.string(s.t["7Tmhfn"]),
      description: s.intl.string(s.t["eu5x7+"])
    }), p && (0, r.jsx)(u, {
      icon: l.iWm,
      title: s.intl.string(s.t.awYSsL),
      description: s.intl.string(s.t.TpsXoK)
    }), m && (0, r.jsx)(u, {
      icon: l.BFJ,
      title: s.intl.string(s.t.WuKeSE),
      description: s.intl.string(s.t.wOBmtb)
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      children: s.intl.format(s.t.b6nqk5, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })
    })]
  })
}