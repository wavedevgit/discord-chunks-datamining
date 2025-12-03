/** Chunk was on 86722 **/
/** chunk id: 264333, original params: i,t,s (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk546957 = require("./546957.jsx"),
  Chunk190014 = require("./190014.jsx"),
  Chunk301812 = require("./301812.jsx"),
  Chunk988043 = require("./988043.jsx"),
  Chunk919539 = require("./919539.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function x(i) {
  let {
    guildId: t
  } = i;
  return (0, n.jsxs)(l.Z, {
    children: [(0, n.jsx)(d.Z, {
      ingress: u.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(c.Z, {
      ingress: u.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(a.Z, {
      ingress: u.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(o.Z, {
      ingress: u.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(r.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: R.intl.format(R.t.LNsV04, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function f(i) {
  let {
    guild: t,
    transitionState: s,
    onClose: r
  } = i, l = "".concat(R.intl.string(R.t.BayiAo), "—").concat(null != t ? t.name : "??");
  return (0, n.jsx)(e.Modal, {
    transitionState: s,
    size: "sm",
    title: l,
    actions: [{
      onClick: () => r(),
      variant: "primary",
      text: R.intl.string(R.t.i4jeWR)
    }],
    onClose: () => Promise.resolve(r()),
    children: (0, n.jsx)(x, {
      guildId: t.id
    })
  })
}