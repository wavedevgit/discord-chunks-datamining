/** Chunk was on web.js **/
/** chunk id: 530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk954677 = require("./954677.js");

function g(e) {
  let {
    user: t,
    usernameIcon: n,
    tags: i,
    nickname: g,
    nicknameIcons: E,
    displayNameStyles: b = t.displayNameStyles,
    pronouns: y,
    className: O,
    tagClassName: v,
    isTryItOut: I,
    onOpenProfile: T,
    onClose: S,
    nicknameVariant: A = "heading-lg/bold"
  } = e, N = e => null == T ? e : (0, r.jsx)(o.kL8, {
    onClick: T,
    className: m.clickableUsername,
    "aria-label": h.intl.string(h.t["+Xp3ho"]),
    children: e
  }), C = null != y && y.length > 0, R = (0, l.D)(t), P = (0, u.Y)({
    location: "UserProfileUsername"
  }) && null != b;
  return (0, r.jsxs)("div", {
    className: a()(m.container, {
      [m.bot]: null != R
    }, O),
    children: [(0, r.jsxs)("div", {
      className: m.usernameRow,
      children: [N(P ? (0, r.jsx)(o.Text, {
        variant: A,
        children: (0, r.jsx)(f.Z, {
          userName: g,
          displayNameStyles: b,
          effectDisplayType: d.F.ANIMATED,
          textClassName: m.nicknameWithDisplayNameStyles,
          shouldWrap: true,
          loop: true,
          inProfile: true
        })
      }) : (0, r.jsx)(o.Text, {
        className: m.nickname,
        variant: A,
        children: g
      })), null != R && (0, r.jsx)(c.Z, {
        type: R,
        verified: t.isVerifiedBot()
      }), null != E && (0, r.jsx)("div", {
        className: m.nicknameIcons,
        children: E
      })]
    }), (0, r.jsxs)("div", {
      className: a()(m.tags, {
        [m.pronouns]: C,
        [m.bot]: null != R
      }),
      children: [!t.isProvisional && N((0, r.jsx)(s.Z, {
        user: t,
        usernameIcon: n,
        forceUsername: true,
        forcePomelo: I,
        className: a()(m.userTag, v),
        usernameClass: m.userTagUsername,
        discriminatorClass: m.userTagDiscriminator,
        hideBotTag: true
      })), C && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          "aria-hidden": "true",
          className: m.dotSpacer
        }), (0, r.jsx)(o.DY3, {
          className: m.pronounsTooltip,
          text: h.intl.string(h.t.GI2A8P),
          delay: p.vB,
          children: (0, r.jsx)(o.Text, {
            className: a()(m.pronounsText, v),
            variant: "text-sm/medium",
            color: "header-primary",
            children: y
          })
        })]
      }), (0, r.jsx)(_.ZP, {
        userId: t.id,
        onClose: S,
        containerClassName: m.guildTagContainer,
        className: m.guildTag
      }), i]
    })]
  })
}