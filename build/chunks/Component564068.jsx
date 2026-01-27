/** Chunk was on web.js **/
/** chunk id: 564068, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk384684 = require("./384684.js"),
  Chunk985242 = require("./985242.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk765490 = require("./765490.js");
let b = () => {
  let e = (0, l.Ay)();
  return (0, o.qB)(e) ? n(454333) : n(674463)
};

function O(e) {
  let {
    onClose: t,
    guildId: n,
    emojiId: o
  } = e, l = b(), {
    analyticsLocations: O
  } = (0, u.Ay)(c.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
  (0, d.A)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
    properties: {
      location_stack: O,
      emoji_guild_id: n,
      emoji_id: null != o ? o : null
    }
  });
  let v = () => {
      (0, f.pX)(m.BVt.CHANNEL(n, g.VV.ROLE_SUBSCRIPTIONS), {
        sourceLocationStack: O
      })
    },
    A = (0, a.bG)([p.A], () => p.A.getGuild(n)),
    I = (0, a.bG)([_.A], () => null != n && _.A.getUserSubscriptionRoles(n).size > 0),
    S = I ? E.intl.string(E.t.GoLM9z) : E.intl.formatToPlainString(E.t["h0u/Hi"], {
      serverName: null == A ? true : A.name
    }),
    T = I ? E.intl.string(E.t.PjZ7Db) : E.intl.string(E.t.p8FG1D);
  return (0, r.jsxs)("div", {
    className: y.kL,
    children: [(0, r.jsx)("div", {
      className: y.Tp
    }), (0, r.jsxs)("div", {
      className: y.Qs,
      children: [(0, r.jsx)(s.DUT, {
        className: y.b,
        "aria-label": E.intl.string(E.t.cpT0Cq),
        onClick: t,
        children: (0, r.jsx)(s.PGe, {
          size: "xs",
          color: "currentColor",
          "aria-label": E.intl.string(E.t.cpT0Cq),
          className: y.yP
        })
      }), (0, r.jsx)("img", {
        alt: "",
        src: l,
        className: y.Tn
      }), (0, r.jsx)(s.hKd, {
        size: 22
      }), (0, r.jsx)(s.Heading, {
        color: "text-strong",
        variant: "heading-lg/extrabold",
        className: y.wx,
        children: E.intl.string(E.t.cBjkcx)
      }), (0, r.jsx)(s.hKd, {
        size: 4
      }), (0, r.jsx)(s.Text, {
        color: "text-default",
        variant: "text-md/normal",
        className: y.h_,
        children: S
      }), (0, r.jsx)(s.hKd, {
        size: 24
      }), (0, r.jsx)(h.A, {
        text: T,
        onClick: v
      })]
    })]
  })
}