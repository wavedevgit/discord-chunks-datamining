/** Chunk was on 59500 **/
/** chunk id: 241420, original params: n,i,t (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk546957 = require("./546957.jsx"),
  Chunk190014 = require("./190014.jsx"),
  Chunk301812 = require("./301812.jsx"),
  Chunk988043 = require("./988043.jsx"),
  Chunk919539 = require("./919539.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942465 = require("./942465.js");

function g(n) {
  let {
    guildId: i
  } = n;
  return (0, s.jsxs)(r.Z, {
    children: [(0, s.jsx)(d.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: i
    }), (0, s.jsx)(l.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: i
    }), (0, s.jsx)(c.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: i
    }), (0, s.jsx)(a.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: i
    }), (0, s.jsx)(e.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: x.intl.format(x.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function h(n) {
  let {
    guild: i,
    transitionState: t,
    onClose: r
  } = n, a = "".concat(x.intl.string(x.t.BayiAg), "—").concat(null != i ? i.name : "??");
  return (0, s.jsxs)(e.Y0X, {
    transitionState: t,
    size: e.CgR.SMALL,
    "aria-label": a,
    parentComponent: "PrivacySettings",
    children: [(0, s.jsx)(e.xBx, {
      children: (0, s.jsx)(e.X6q, {
        variant: "heading-lg/semibold",
        children: a
      })
    }), (0, s.jsx)(e.hzk, {
      className: u.content,
      children: (0, s.jsx)(g, {
        guildId: i.id
      })
    }), (0, s.jsx)(e.mzw, {
      children: (0, s.jsx)(e.zxk, {
        variant: "primary",
        text: x.intl.string(x.t.i4jeWV),
        onClick: () => r()
      })
    })]
  })
}