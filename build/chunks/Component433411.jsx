/** Chunk was on web.js **/
/** chunk id: 433411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk864106 = require("./864106.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk580747 = require("./580747.js"),
  Chunk345861 = require("./345861.jsx"),
  Chunk350327 = require("./350327.js"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk642588 = require("./642588.js");

function b(e) {
  let {
    user: t,
    guild: n,
    className: a,
    sectionTitle: p,
    forcedDivider: b = false,
    withTutorial: y = false,
    isTryItOut: v = false
  } = e, {
    analyticsLocations: S
  } = (0, c.ZP)(), I = (0, f.Z)("enable_avatar_decoration_uploads"), T = (0, m.i3)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingAvatarDecoration: A,
    errors: C
  } = (0, m.wE)({
    guildId: null == n ? true : n.id,
    isTryItOut: v
  }), N = i.useCallback(() => (0, d.ps)({
    analyticsLocations: S,
    guild: n,
    isTryItOut: v
  }), [S, n, v]), P = v || true !== A ? null != A : null != T;

  function R() {
    v ? (0, _.Xz)(null) : (0, m.PO)(null, null == n ? true : n.id)
  }
  let w = y ? l.gtL : s.zx;
  return (0, r.jsxs)(h.Z, {
    className: a,
    forcedDivider: b,
    hasBackground: true,
    title: p,
    errors: C,
    children: [(0, r.jsxs)("div", {
      className: E.buttonsContainer,
      children: [(0, r.jsx)(w, {
        size: s.zx.Sizes.SMALL,
        onClick: N,
        className: o()({
          [E.buttonHighlighted]: y
        }),
        children: g.intl.string(g.t.BVcYCx)
      }), P && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: E.removeButton,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: (0, u.ad)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
          onClick: R
        })
      })]
    }), t.isStaff() && I && (0, r.jsx)(O, {
      user: t
    })]
  })
}
let y = "PALUE000000001",
  O = e => {
    let {
      user: t
    } = e;
    return (0, r.jsxs)("div", {
      className: E.overrideButtonsContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-xs/bold",
        children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
      }), (0, r.jsx)(p.Z, {
        onChange: e => {
          null != e && (t.avatarDecoration = {
            asset: e,
            skuID: y
          })
        },
        size: "sm",
        variant: "primary",
        text: g.intl.string(g.t.a9F1Qu)
      })]
    })
  }