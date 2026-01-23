/** Chunk was on web.js **/
/** chunk id: 810396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk296948 = require("./296948.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk609425 = require("./609425.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk534400 = require("./534400.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk47202 = require("./47202.js");

function E(e) {
  let {
    user: t,
    guildId: n,
    usernameIcon: i,
    tags: E,
    nickname: y,
    nicknameIcons: b,
    pendingDisplayNameStyles: O,
    pronouns: v,
    primaryGuild: A,
    className: I,
    tagClassName: S,
    isTryItOut: T,
    onOpenProfile: C,
    onClose: N,
    nicknameVariant: R = "heading-lg/bold"
  } = e, w = e => null == C ? e : (0, r.jsx)(o.sqX, {
    onClick: C,
    className: g.pt,
    "aria-label": m.intl.string(m.t["+Xp3hq"]),
    children: e
  }), P = null != v && v.length > 0, D = (0, c.r)(t), x = (0, d.A)({
    userId: t.id,
    guildId: n,
    pendingDisplayNameStyles: O
  }), L = null != x;
  return (0, r.jsxs)("div", {
    className: a()(g.kL, {
      [g.Od]: null != D
    }, I),
    children: [(0, r.jsxs)("div", {
      className: g.Fj,
      children: [w(L ? (0, r.jsx)(o.Text, {
        variant: R,
        children: (0, r.jsx)(p.A, {
          userName: y,
          displayNameStyles: x,
          effectDisplayType: f.G.ANIMATED,
          textClassName: g.iA,
          shouldWrap: true,
          loop: true,
          inProfile: true,
          shouldUnderlineOnHover: null != C
        })
      }) : (0, r.jsx)(o.Text, {
        className: g.$R,
        variant: R,
        children: y
      })), null != D && (0, r.jsx)(u.A, {
        type: D,
        verified: t.isVerifiedBot()
      }), null != b && (0, r.jsx)("div", {
        className: g.t4,
        children: b
      })]
    }), (0, r.jsxs)("div", {
      className: a()(g._A, {
        [g.hI]: P,
        [g.Od]: null != D
      }),
      children: [!t.isProvisional && w((0, r.jsx)(l.A, {
        user: t,
        usernameIcon: i,
        forceUsername: true,
        forcePomelo: T,
        className: a()(g.a1, S),
        usernameClass: g.eb,
        discriminatorClass: g.sw,
        hideBotTag: true
      })), P && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          "aria-hidden": "true",
          className: g.SC
        }), (0, r.jsx)(s.m, {
          asContainer: true,
          text: m.intl.string(m.t.GI2A8C),
          delay: h.In,
          children: (0, r.jsx)(o.Text, {
            className: a()(g.kc, S),
            variant: "text-sm/medium",
            color: "text-strong",
            children: v
          })
        })]
      }), (0, r.jsx)(_.Ay, {
        primaryGuild: A,
        userId: t.id,
        onClose: N,
        containerClassName: g.L4,
        className: g.Mp
      }), E]
    })]
  })
}