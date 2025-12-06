/** Chunk was on web.js **/
/** chunk id: 433411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk864106 = require("./864106.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk580747 = require("./580747.js"),
  Chunk345861 = require("./345861.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk642588 = require("./642588.js");

function g(e) {
  let {
    user: t,
    guild: n,
    className: i,
    sectionTitle: f,
    forcedDivider: g = false,
    withTutorial: E = false
  } = e, {
    analyticsLocations: y
  } = (0, l.ZP)(), O = (0, d.Z)("enable_avatar_decoration_uploads"), v = (0, p.i3)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingAvatarDecoration: S,
    errors: I
  } = (0, p.Tb)(null == n ? true : n.id), T = true === S ? null != v : null != S, A = () => {
    (0, u.ps)({
      analyticsLocations: y,
      guild: n
    })
  }, C = () => {
    (0, p.PO)(null, null == n ? true : n.id)
  }, N = E ? s.gtL : o.zx;
  return (0, r.jsxs)(_.Z, {
    className: i,
    forcedDivider: g,
    hasBackground: true,
    title: f,
    errors: I,
    children: [(0, r.jsxs)("div", {
      className: h.buttonsContainer,
      children: [(0, r.jsx)(N, {
        size: o.zx.Sizes.SMALL,
        onClick: A,
        className: a()({
          [h.buttonHighlighted]: E
        }),
        children: m.intl.string(m.t.BVcYCx)
      }), T && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: h.removeButton,
        children: (0, r.jsx)(s.Button, {
          variant: "secondary",
          size: "sm",
          text: (0, c.ad)(t, n) ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.OrokWm),
          onClick: C
        })
      })]
    }), t.isStaff() && O && (0, r.jsx)(b, {
      user: t
    })]
  })
}
let E = "PALUE000000001",
  b = e => {
    let {
      user: t
    } = e;
    return (0, r.jsxs)("div", {
      className: h.overrideButtonsContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/bold",
        children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
      }), (0, r.jsx)(f.Z, {
        onChange: e => {
          null != e && (t.avatarDecoration = {
            asset: e,
            skuID: E
          })
        },
        size: "sm",
        variant: "primary",
        text: m.intl.string(m.t.a9F1Qu)
      })]
    })
  }