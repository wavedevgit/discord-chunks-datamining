/** Chunk was on web.js **/
/** chunk id: 530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk406943 = require("./406943.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk438361 = require("./438361.js");

function g(e) {
  let {
    user: t,
    usernameIcon: n,
    tags: i,
    nickname: g,
    nicknameIcons: E,
    pronouns: b,
    className: y,
    tagClassName: O,
    isTryItOut: v,
    onOpenProfile: I,
    onClose: T,
    nicknameVariant: S = "heading-lg/bold"
  } = e, A = e => null == I ? e : (0, r.jsx)(a.kL8, {
    onClick: I,
    className: m.clickableUsername,
    "aria-label": h.intl.string(h.t["+Xp3ho"]),
    children: e
  }), N = null != b && b.length > 0, C = (0, l.D)(t), R = (0, u.Y)({
    location: "UserProfileUsername"
  }) && null != t.displayNameStyles;
  return (0, r.jsxs)("div", {
    className: o()(m.container, {
      [m.bot]: null != C
    }, y),
    children: [(0, r.jsxs)("div", {
      className: m.usernameRow,
      children: [A(R ? (0, r.jsx)(a.Text, {
        variant: S,
        children: (0, r.jsx)(f.Z, {
          userName: g,
          displayNameStyles: t.displayNameStyles,
          effectDisplayType: d.F.ANIMATED,
          textClassName: m.nicknameWithDisplayNameStyles,
          shouldWrap: true,
          loop: true,
          inProfile: true
        })
      }) : (0, r.jsx)(a.Text, {
        className: m.nickname,
        variant: S,
        children: g
      })), null != C && (0, r.jsx)(c.Z, {
        type: C,
        verified: t.isVerifiedBot()
      }), null != E && (0, r.jsx)("div", {
        className: m.nicknameIcons,
        children: E
      })]
    }), (0, r.jsxs)("div", {
      className: o()(m.tags, {
        [m.pronouns]: N,
        [m.bot]: null != C
      }),
      children: [!t.isProvisional && A((0, r.jsx)(s.Z, {
        user: t,
        usernameIcon: n,
        forceUsername: true,
        forcePomelo: v,
        className: o()(m.userTag, O),
        usernameClass: m.userTagUsername,
        discriminatorClass: m.userTagDiscriminator,
        hideBotTag: true
      })), N && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          "aria-hidden": "true",
          className: m.dotSpacer
        }), (0, r.jsx)(a.DY3, {
          className: m.pronounsTooltip,
          text: h.intl.string(h.t.GI2A8P),
          delay: p.vB,
          children: (0, r.jsx)(a.Text, {
            className: o()(m.pronounsText, O),
            variant: "text-sm/medium",
            color: "header-primary",
            children: b
          })
        })]
      }), (0, r.jsx)(_.ZP, {
        userId: t.id,
        onClose: T,
        containerClassName: m.guildTagContainer,
        className: m.guildTag
      }), i]
    })]
  })
}