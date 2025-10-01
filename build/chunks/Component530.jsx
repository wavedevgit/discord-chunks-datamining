/** Chunk was on web.js **/
/** chunk id: 530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk69295 = require("./69295.js");

function E(e) {
  let {
    user: t,
    usernameIcon: n,
    tags: i,
    nickname: E,
    nicknameIcons: b,
    displayNameStyles: y = t.displayNameStyles,
    pronouns: O,
    className: v,
    tagClassName: I,
    isTryItOut: T,
    onOpenProfile: S,
    onClose: A,
    nicknameVariant: C = "heading-lg/bold"
  } = e, N = e => null == S ? e : (0, r.jsx)(s.kL8, {
    onClick: S,
    className: g.clickableUsername,
    "aria-label": m.intl.string(m.t["+Xp3ho"]),
    children: e
  }), R = null != O && O.length > 0, P = (0, c.D)(t), w = (0, d.Y)({
    location: "UserProfileUsername"
  }) && null != y;
  return (0, r.jsxs)("div", {
    className: a()(g.container, {
      [g.bot]: null != P
    }, v),
    children: [(0, r.jsxs)("div", {
      className: g.usernameRow,
      children: [N(w ? (0, r.jsx)(s.Text, {
        variant: C,
        children: (0, r.jsx)(_.Z, {
          userName: E,
          displayNameStyles: y,
          effectDisplayType: f.F.ANIMATED,
          textClassName: g.nicknameWithDisplayNameStyles,
          shouldWrap: true,
          loop: true,
          inProfile: true,
          shouldUnderlineOnHover: null != S
        })
      }) : (0, r.jsx)(s.Text, {
        className: g.nickname,
        variant: C,
        children: E
      })), null != P && (0, r.jsx)(u.Z, {
        type: P,
        verified: t.isVerifiedBot()
      }), null != b && (0, r.jsx)("div", {
        className: g.nicknameIcons,
        children: b
      })]
    }), (0, r.jsxs)("div", {
      className: a()(g.tags, {
        [g.pronouns]: R,
        [g.bot]: null != P
      }),
      children: [!t.isProvisional && N((0, r.jsx)(l.Z, {
        user: t,
        usernameIcon: n,
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
          text: m.intl.string(m.t.GI2A8P),
          delay: h.vB,
          children: (0, r.jsx)(s.Text, {
            className: a()(g.pronounsText, I),
            variant: "text-sm/medium",
            color: "header-primary",
            children: O
          })
        })]
      }), (0, r.jsx)(p.ZP, {
        userId: t.id,
        onClose: A,
        containerClassName: g.guildTagContainer,
        className: g.guildTag
      }), i]
    })]
  })
}