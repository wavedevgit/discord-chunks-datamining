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
  Chunk69295 = require("./69295.js");

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
    className: I,
    tagClassName: T,
    isTryItOut: S,
    onOpenProfile: A,
    onClose: C,
    nicknameVariant: N = "heading-lg/bold"
  } = e, R = e => null == A ? e : (0, r.jsx)(s.kL8, {
    onClick: A,
    className: g.clickableUsername,
    "aria-label": m.intl.string(m.t["+Xp3hq"]),
    children: e
  }), P = null != v && v.length > 0, D = (0, c.D)(t), w = (0, d.Z)({
    userId: t.id,
    guildId: n,
    pendingDisplayNameStyles: O
  }), L = null != w;
  return (0, r.jsxs)("div", {
    className: a()(g.container, {
      [g.bot]: null != D
    }, I),
    children: [(0, r.jsxs)("div", {
      className: g.usernameRow,
      children: [R(L ? (0, r.jsx)(s.Text, {
        variant: N,
        children: (0, r.jsx)(_.Z, {
          userName: b,
          displayNameStyles: w,
          effectDisplayType: f.F.ANIMATED,
          textClassName: g.nicknameWithDisplayNameStyles,
          shouldWrap: true,
          loop: true,
          inProfile: true,
          shouldUnderlineOnHover: null != A
        })
      }) : (0, r.jsx)(s.Text, {
        className: g.nickname,
        variant: N,
        children: b
      })), null != D && (0, r.jsx)(u.Z, {
        type: D,
        verified: t.isVerifiedBot()
      }), null != y && (0, r.jsx)("div", {
        className: g.nicknameIcons,
        children: y
      })]
    }), (0, r.jsxs)("div", {
      className: a()(g.tags, {
        [g.pronouns]: P,
        [g.bot]: null != D
      }),
      children: [!t.isProvisional && R((0, r.jsx)(l.Z, {
        user: t,
        usernameIcon: i,
        forceUsername: true,
        forcePomelo: S,
        className: a()(g.userTag, T),
        usernameClass: g.userTagUsername,
        discriminatorClass: g.userTagDiscriminator,
        hideBotTag: true
      })), P && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          "aria-hidden": "true",
          className: g.dotSpacer
        }), (0, r.jsx)(o.u, {
          asContainer: true,
          text: m.intl.string(m.t.GI2A8C),
          delay: h.vB,
          children: (0, r.jsx)(s.Text, {
            className: a()(g.pronounsText, T),
            variant: "text-sm/medium",
            color: "header-primary",
            children: v
          })
        })]
      }), (0, r.jsx)(p.ZP, {
        userId: t.id,
        onClose: C,
        containerClassName: g.guildTagContainer,
        className: g.guildTag
      }), E]
    })]
  })
}