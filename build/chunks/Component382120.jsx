/** Chunk was on 63974 **/
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
    className: c.nM,
    children: [(0, l.jsx)("div", {
      className: c.aL,
      children: (0, l.jsx)(t, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, l.jsxs)("div", {
      className: c.qg,
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
    hasGuildPresences: f,
    hasGuildMembers: m
  } = (0, o.Z)({
    flags: null == n ? true : n.flags
  });
  return (0, l.jsxs)(i.IpV, {
    fade: true,
    className: c.XG,
    children: [p && (0, l.jsx)(u, {
      icon: s.oyn,
      title: d.intl.string(d.t["7Tmhfu"]),
      description: d.intl.string(d.t.eu5x7z)
    }), f && (0, l.jsx)(u, {
      icon: s._xR,
      title: d.intl.string(d.t.awYSsM),
      description: d.intl.string(d.t.TpsXoC)
    }), m && (0, l.jsx)(u, {
      icon: s.nFg,
      title: d.intl.string(d.t.WuKeSJ),
      description: d.intl.string(d.t.wOBmtV)
    }), (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      children: d.intl.format(d.t.b6nqk0, {
        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
      })
    })]
  })
}