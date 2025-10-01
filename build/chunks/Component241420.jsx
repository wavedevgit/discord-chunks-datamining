/** Chunk was on 59500 **/
/** chunk id: 241420, original params: i,s,t (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk546957 = require("./546957.jsx"),
  Chunk190014 = require("./190014.jsx"),
  Chunk301812 = require("./301812.jsx"),
  Chunk988043 = require("./988043.jsx"),
  Chunk919539 = require("./919539.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function R(i) {
  let {
    guildId: s
  } = i;
  return (0, n.jsxs)(a.Z, {
    children: [(0, n.jsx)(o.Z, {
      ingress: u.f4.SERVER_PRIVACY_MODAL,
      guildId: s
    }), (0, n.jsx)(c.Z, {
      ingress: u.f4.SERVER_PRIVACY_MODAL,
      guildId: s
    }), (0, n.jsx)(l.Z, {
      ingress: u.f4.SERVER_PRIVACY_MODAL,
      guildId: s
    }), (0, n.jsx)(d.Z, {
      ingress: u.f4.SERVER_PRIVACY_MODAL,
      guildId: s
    }), (0, n.jsx)(r.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: g.intl.format(g.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function p(i) {
  let {
    guild: s,
    transitionState: t,
    onClose: r
  } = i, a = "".concat(g.intl.string(g.t.BayiAg), "—").concat(null != s ? s.name : "??");
  return (0, n.jsx)(e.Modal, {
    transitionState: t,
    size: "sm",
    title: a,
    actions: [{
      onClick: () => r(),
      variant: "primary",
      text: g.intl.string(g.t.i4jeWV)
    }],
    onClose: () => Promise.resolve(r()),
    children: (0, n.jsx)(R, {
      guildId: s.id
    })
  })
}