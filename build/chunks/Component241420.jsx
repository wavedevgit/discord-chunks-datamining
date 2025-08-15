/** Chunk was on 97162 **/
/** chunk id: 241420, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => g
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

function u(e) {
  let {
    guildId: t
  } = e;
  return (0, n.jsxs)(r.Z, {
    children: [(0, n.jsx)(s.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(l.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(o.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(c.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: p.intl.format(p.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function g(e) {
  let {
    guild: t,
    transitionState: a,
    onClose: r
  } = e, c = "".concat(p.intl.string(p.t.BayiAg), "—").concat(null != t ? t.name : "??");
  return (0, n.jsxs)(i.Y0X, {
    transitionState: a,
    size: i.CgR.SMALL,
    "aria-label": c,
    parentComponent: "PrivacySettings",
    children: [(0, n.jsx)(i.xBx, {
      children: (0, n.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        children: c
      })
    }), (0, n.jsx)(i.hzk, {
      className: _.content,
      children: (0, n.jsx)(u, {
        guildId: t.id
      })
    }), (0, n.jsx)(i.mzw, {
      children: (0, n.jsx)(i.zxk, {
        variant: "primary",
        text: p.intl.string(p.t.i4jeWV),
        onClick: () => r()
      })
    })]
  })
}