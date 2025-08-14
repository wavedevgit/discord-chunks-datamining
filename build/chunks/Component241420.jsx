/** Chunk was on 98775 **/
/** chunk id: 241420, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk546957 = require("./546957.jsx"),
  Chunk190014 = require("./190014.jsx"),
  Chunk301812 = require("./301812.jsx"),
  Chunk988043 = require("./988043.jsx"),
  Chunk919539 = require("./919539.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942465 = require("./942465.js");

function f(t) {
  let {
    guildId: n
  } = t;
  return (0, i.jsxs)(a.Z, {
    children: [(0, i.jsx)(u.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, i.jsx)(c.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, i.jsx)(s.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, i.jsx)(r.Z, {
      ingress: o.f4.SERVER_PRIVACY_MODAL,
      guildId: n
    }), (0, i.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: d.intl.format(d.t.LNsV09, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function _(t) {
  let {
    guild: n,
    transitionState: e,
    onClose: a
  } = t, r = "".concat(d.intl.string(d.t.BayiAg), "—").concat(null != n ? n.name : "??");
  return (0, i.jsxs)(l.Y0X, {
    transitionState: e,
    size: l.CgR.SMALL,
    "aria-label": r,
    parentComponent: "PrivacySettings",
    children: [(0, i.jsx)(l.xBx, {
      children: (0, i.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: r
      })
    }), (0, i.jsx)(l.hzk, {
      className: g.content,
      children: (0, i.jsx)(f, {
        guildId: n.id
      })
    }), (0, i.jsx)(l.mzw, {
      children: (0, i.jsx)(l.zxk, {
        variant: "primary",
        text: d.intl.string(d.t.i4jeWV),
        onClick: () => a()
      })
    })]
  })
}