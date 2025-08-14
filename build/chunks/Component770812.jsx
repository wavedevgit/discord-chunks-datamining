/** Chunk was on web.js **/
/** chunk id: 770812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk687476 = require("./687476.js"),
  Chunk761966 = require("./761966.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk454615 = require("./454615.js");
let O = () => {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk780384.ap)(module) ? require("./537381.js") : require("./341048.js")
};

function v(e) {
  let {
    onClose: t,
    guildId: n,
    emojiId: a
  } = e, c = O(), {
    analyticsLocations: v
  } = (0, d.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
  (0, f.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
    properties: {
      location_stack: v,
      emoji_guild_id: n,
      emoji_id: null != a ? a : null
    }
  });
  let I = () => {
      (0, _.uL)(g.Z5c.CHANNEL(n, E.oC.ROLE_SUBSCRIPTIONS), {
        sourceLocationStack: v
      })
    },
    T = (0, o.e7)([p.Z], () => p.Z.getGuild(n)),
    S = (0, o.e7)([h.Z], () => null != n && h.Z.getUserSubscriptionRoles(n).size > 0),
    A = S ? b.intl.string(b.t["GoLM9/"]) : b.intl.formatToPlainString(b.t["h0u/Hh"], {
      serverName: null == T ? true : T.name
    }),
    N = S ? b.intl.string(b.t.PjZ7DQ) : b.intl.string(b.t.p8FG1N);
  return (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsx)("div", {
      className: y.background
    }), (0, r.jsxs)("div", {
      className: y.content,
      children: [(0, r.jsx)(s.zx, {
        look: s.zx.Looks.BLANK,
        size: s.zx.Sizes.ICON,
        className: y.closeButton,
        onClick: t,
        children: (0, r.jsx)(l.Dio, {
          size: "xs",
          color: "currentColor",
          "aria-label": b.intl.string(b.t.cpT0Cg),
          className: y.closeButtonIcon
        })
      }), (0, r.jsx)("img", {
        alt: "",
        src: c,
        className: y.upsellImage
      }), (0, r.jsx)(l.LZC, {
        size: 22
      }), (0, r.jsx)(l.X6q, {
        color: "header-primary",
        variant: "heading-lg/extrabold",
        className: y.header,
        children: b.intl.string(b.t.cBjkc3)
      }), (0, r.jsx)(l.LZC, {
        size: 4
      }), (0, r.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: y.description,
        children: A
      }), (0, r.jsx)(l.LZC, {
        size: 24
      }), (0, r.jsx)(m.Z, {
        onClick: I,
        children: N
      })]
    })]
  })
}