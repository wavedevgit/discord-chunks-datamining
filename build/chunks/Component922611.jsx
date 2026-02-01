/** Chunk was on 71447 **/
/** chunk id: 922611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => h,
  g: () => f
}), require("./65821.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk290863 = require("./290863.js"),
  Chunk102983 = require("./102983.jsx"),
  Chunk912156 = require("./912156.jsx"),
  h = ((i = {})[i.SIZE_24 = 24] = "SIZE_24", i[i.SIZE_40 = 40] = "SIZE_40", i);

function p(e, t) {
  switch (t) {
    case "user":
    case "groupDm":
      return 24 === e ? s._3J.SIZE_24 : s._3J.SIZE_40;
    case "guild":
      return 24 === e ? o.A.Sizes.SMALLER : o.A.Sizes.MEDIUM;
    case "default":
      return 24 === e ? "sm" : "md";
    default:
      throw Error("Unhandled icon type: ".concat(String(t)))
  }
}
let f = Chunk64700.memo(function(e) {
  var t, n;
  let {
    channel: i,
    user: l,
    guild: h,
    isSelected: f = false,
    size: g = 24,
    isTyping: m = false,
    mentionCount: y = 0,
    isMentionLowImportance: A = false
  } = e, v = null != (t = null == i ? true : i.isPrivate()) && t, b = null != (n = null == i ? true : i.isMultiUserDM()) && n, E = null == l ? true : l.id, O = (0, a.bG)([u.A], () => null != E ? u.A.getStatus(E) : null, [E]), x = (0, a.bG)([u.A], () => null != E && u.A.isMobileOnline(E), [E]);
  if (v || b) return (0, r.jsx)(c.h, {
    channel: null != i ? i : null,
    user: l,
    "aria-hidden": true,
    size: p(g, "user"),
    status: O,
    isMobile: x,
    isTyping: m,
    mentionCount: y,
    isMentionLowImportance: A
  });
  if (null == h) return (0, r.jsx)(s.oyn, {
    size: p(g, "default"),
    color: s.LU0.colors.INTERACTIVE_ICON_DEFAULT
  });
  {
    if (null == i) return (0, r.jsx)(o.A, {
      guild: h,
      size: p(g, "guild"),
      active: true,
      showTooltip: false
    });
    let e = 40 === g ? d.Q.MEDIUM_40 : d.Q.TINY_24;
    return (0, r.jsx)(d.A, {
      channel: i,
      guild: h,
      size: e,
      isTyping: m
    })
  }
})