/** Chunk was on 78701 **/
/** chunk id: 241420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
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
  return (0, a.jsxs)(i.Z, {
    children: [(0, a.jsx)(s.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, a.jsx)(l.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, a.jsx)(r.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, a.jsx)(c.Z, {
      ingress: d.f4.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, a.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: _.intl.format(_.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function m(e) {
  let {
    guild: t,
    transitionState: n,
    onClose: i
  } = e, c = "".concat(_.intl.string(_.t.BayiAg), "—").concat(null != t ? t.name : "??");
  return (0, a.jsxs)(o.Y0X, {
    transitionState: n,
    size: o.CgR.SMALL,
    "aria-label": c,
    parentComponent: "PrivacySettings",
    children: [(0, a.jsx)(o.xBx, {
      children: (0, a.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: c
      })
    }), (0, a.jsx)(o.hzk, {
      className: p.content,
      children: (0, a.jsx)(u, {
        guildId: t.id
      })
    }), (0, a.jsx)(o.mzw, {
      children: (0, a.jsx)(o.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.i4jeWV),
        onClick: () => i()
      })
    })]
  })
}