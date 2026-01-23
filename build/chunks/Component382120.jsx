/** Chunk was on 64228 **/
/** chunk id: 382120, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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
    icon: t,
    title: n,
    description: i
  } = e;
  return (0, l.jsxs)("div", {
    className: d.nM,
    children: [(0, l.jsx)("div", {
      className: d.aL,
      children: (0, l.jsx)(t, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, l.jsxs)("div", {
      className: d.qg,
      children: [(0, l.jsx)(s.Heading, {
        variant: "text-xs/semibold",
        children: n
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: i
      })]
    })]
  })
}

function p(e) {
  let {
    user: t
  } = e, n = (0, r.bG)([a.A], () => {
    var e;
    return null == (e = a.A.getUserProfile(t.id)) ? true : e.application
  }), {
    hasMessageContent: p,
    hasGuildPresences: m,
    hasGuildMembers: f
  } = (0, o.Z)({
    flags: null == n ? true : n.flags
  });
  return (0, l.jsxs)(i.IpV, {
    fade: true,
    className: d.XG,
    children: [p && (0, l.jsx)(u, {
      icon: s.oyn,
      title: c.intl.string(c.t["7Tmhfu"]),
      description: c.intl.string(c.t.eu5x7z)
    }), m && (0, l.jsx)(u, {
      icon: s._xR,
      title: c.intl.string(c.t.awYSsM),
      description: c.intl.string(c.t.TpsXoC)
    }), f && (0, l.jsx)(u, {
      icon: s.nFg,
      title: c.intl.string(c.t.WuKeSJ),
      description: c.intl.string(c.t.wOBmtV)
    }), (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      children: c.intl.format(c.t.b6nqk0, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })
    })]
  })
}