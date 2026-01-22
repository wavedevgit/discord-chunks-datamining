/** Chunk was on web.js **/
/** chunk id: 423998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk287809 = require("./287809.js"),
  Chunk45787 = require("./45787.js"),
  Chunk275759 = require("./275759.js"),
  Chunk788868 = require("./788868.js"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk357776 = require("./357776.js");

function g(e) {
  let {
    profileUserId: t
  } = e, n = (0, s.bG)([u.default], () => u.default.getUser(t), [t]), g = (0, s.bG)([u.default], () => u.default.getCurrentUser()), E = (0, s.bG)([f.Ay], () => f.Ay.getFriendAnniversaryYears(t), [t]);
  return i.useEffect(() => {
    (0, c.x)({
      name: a.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
      type: a.ImpressionTypes.VIEW,
      properties: {
        gift_intent_type: p.np.FRIEND_ANNIVERSARY
      }
    })
  }, []), (0, r.jsxs)("div", {
    className: m.kL,
    children: [(0, r.jsx)("div", {
      className: m.b,
      children: (0, r.jsx)(o.K0, {
        icon: o.PGe,
        size: "sm",
        variant: "icon-only",
        "aria-label": h.intl.string(h.t.cpT0Cq),
        onClick: () => (0, d.CK)(t)
      })
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: h.intl.string(h.t.icDVNb)
    }), (0, r.jsxs)("div", {
      className: m.SC,
      children: [null != n && (0, r.jsx)(l.A, {
        size: _._3.SIZE_16,
        user: n
      }), null != g && (0, r.jsx)(l.A, {
        className: m.GM,
        size: _._3.SIZE_16,
        user: g
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-strong",
        children: h.intl.formatToPlainString(h.t.PpG27s, {
          numberOfYears: E
        })
      })]
    })]
  })
}