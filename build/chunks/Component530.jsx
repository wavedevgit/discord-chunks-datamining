/** Chunk was on web.js **/
/** chunk id: 530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk406943 = require("./406943.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk386725 = require("./386725.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk367701 = require("./367701.js");

function E(e) {
  let {
    user: t,
    guildId: n,
    usernameIcon: i,
    tags: E,
    nickname: b,
    nicknameIcons: y,
    pendingDisplayNameStyles: O,
    pronouns: v,
    className: S,
    tagClassName: I,
    isTryItOut: T,
    onOpenProfile: C,
    onClose: A,
    nicknameVariant: N = "heading-lg/bold"
  } = e, P = e => null == C ? e : (0, r.jsx)(s.kL8, {
    onClick: C,
    className: g.clickableUsername,
    "aria-label": h.intl.string(h.t["+Xp3hq"]),
    children: e
  }), R = null != v && v.length > 0, w = (0, c.D)(t), D = (0, d.Z)({
    userId: t.id,
    guildId: n,
    pendingDisplayNameStyles: O
  }), x = null != D;
  return (0, r.jsxs)("div", {
    className: a()(g.container, {
      [g.bot]: null != w
    }, S),
    children: [(0, r.jsxs)("div", {
      className: g.usernameRow,
      children: [P(x ? (0, r.jsx)(s.Text, {
        variant: N,
        children: (0, r.jsx)(p.Z, {
          userName: b,
          displayNameStyles: D,
          effectDisplayType: f.F.ANIMATED,
          textClassName: g.nicknameWithDisplayNameStyles,
          shouldWrap: true,
          loop: true,
          inProfile: true,
          shouldUnderlineOnHover: null != C
        })
      }) : (0, r.jsx)(s.Text, {
        className: g.nickname,
        variant: N,
        children: b
      })), null != w && (0, r.jsx)(u.Z, {
        type: w,
        verified: t.isVerifiedBot()
      }), null != y && (0, r.jsx)("div", {
        className: g.nicknameIcons,
        children: y
      })]
    }), (0, r.jsxs)("div", {
      className: a()(g.tags, {
        [g.pronouns]: R,
        [g.bot]: null != w
      }),
      children: [!t.isProvisional && P((0, r.jsx)(l.Z, {
        user: t,
        usernameIcon: i,
        forceUsername: true,
        forcePomelo: T,
        className: a()(g.userTag, I),
        usernameClass: g.userTagUsername,
        discriminatorClass: g.userTagDiscriminator,
        hideBotTag: true
      })), R && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          "aria-hidden": "true",
          className: g.dotSpacer
        }), (0, r.jsx)(o.u, {
          asContainer: true,
          text: h.intl.string(h.t.GI2A8C),
          delay: m.vB,
          children: (0, r.jsx)(s.Text, {
            className: a()(g.pronounsText, I),
            variant: "text-sm/medium",
            color: "header-primary",
            children: v
          })
        })]
      }), (0, r.jsx)(_.ZP, {
        userId: t.id,
        onClose: A,
        containerClassName: g.guildTagContainer,
        className: g.guildTag
      }), E]
    })]
  })
}