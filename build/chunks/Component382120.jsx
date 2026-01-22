/** Chunk was on 64228 **/
/** chunk id: 382120, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./228524.js"), require("./938796.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk973925 = require("./973925.js"),
  Chunk622543 = require("./622543.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk437102 = require("./437102.js");

function u(e) {
  let {
    icon: l,
    title: t,
    description: i
  } = e;
  return (0, n.jsxs)("div", {
    className: c.nM,
    children: [(0, n.jsx)("div", {
      className: c.aL,
      children: (0, n.jsx)(l, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, n.jsxs)("div", {
      className: c.qg,
      children: [(0, n.jsx)(s.Heading, {
        variant: "text-xs/semibold",
        children: t
      }), (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: i
      })]
    })]
  })
}

function f(e) {
  let {
    user: l
  } = e, t = (0, r.bG)([o.A], () => {
    var e;
    return null == (e = o.A.getUserProfile(l.id)) ? true : e.application
  }), {
    hasMessageContent: f,
    hasGuildPresences: p,
    hasGuildMembers: m
  } = (0, a.Z)({
    flags: null == t ? true : t.flags
  });
  return (0, n.jsxs)(i.IpV, {
    fade: true,
    className: c.XG,
    children: [f && (0, n.jsx)(u, {
      icon: s.oyn,
      title: d.intl.string(d.t["7Tmhfu"]),
      description: d.intl.string(d.t.eu5x7z)
    }), p && (0, n.jsx)(u, {
      icon: s._xR,
      title: d.intl.string(d.t.awYSsM),
      description: d.intl.string(d.t.TpsXoC)
    }), m && (0, n.jsx)(u, {
      icon: s.nFg,
      title: d.intl.string(d.t.WuKeSJ),
      description: d.intl.string(d.t.wOBmtV)
    }), (0, n.jsx)(s.Text, {
      variant: "text-xs/normal",
      children: d.intl.format(d.t.b6nqk0, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })
    })]
  })
}