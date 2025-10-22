/** Chunk was on web.js **/
/** chunk id: 433411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk785735 = require("./785735.js");

function E(e) {
  let {
    user: t,
    guild: n,
    className: a,
    sectionTitle: _,
    forcedDivider: E = false,
    withTutorial: b = false,
    isTryItOutFlow: O = false
  } = e, {
    analyticsLocations: v
  } = (0, c.ZP)(), I = null != n, {
    userAvatarDecoration: T,
    guildAvatarDecoration: S,
    pendingAvatarDecoration: A,
    pendingErrors: C
  } = (0, p.$U)(t, n), N = (0, f.Z)("enable_avatar_decoration_uploads"), R = i.useCallback(() => (0, d.ps)({
    analyticsLocations: v,
    isTryItOutFlow: O,
    guild: n
  }), [v, O, n]), P = O || true !== A ? null != A : (I ? S : T) != null;

  function w() {
    (0, p.PO)(null == n ? true : n.id, null)
  }
  let D = b ? l.gtL : s.zx;
  return (0, r.jsxs)(h.Z, {
    className: a,
    forcedDivider: E,
    hasBackground: true,
    title: _,
    errors: C,
    children: [(0, r.jsxs)("div", {
      className: g.buttonsContainer,
      children: [(0, r.jsx)(D, {
        size: s.zx.Sizes.SMALL,
        onClick: R,
        className: o()({
          [g.buttonHighlighted]: b
        }),
        children: m.intl.string(m.t.BVcYCx)
      }), P && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: g.removeButton,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: (0, u.ad)(t, n) ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.OrokWm),
          onClick: w
        })
      })]
    }), t.isStaff() && N && (0, r.jsx)(y, {
      user: t
    })]
  })
}
let b = "PALUE000000001",
  y = e => {
    let {
      user: t
    } = e;
    return (0, r.jsxs)("div", {
      className: g.overrideButtonsContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-xs/bold",
        children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
      }), (0, r.jsx)(_.Z, {
        onChange: e => {
          null != e && (t.avatarDecoration = {
            asset: e,
            skuID: b
          })
        },
        size: "sm",
        variant: "primary",
        text: m.intl.string(m.t.a9F1Qu)
      })]
    })
  }