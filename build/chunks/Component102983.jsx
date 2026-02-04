/** Chunk was on 7685 **/
/** chunk id: 102983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk571694 = require("./571694.js"),
  Chunk954376 = require("./954376.jsx"),
  Chunk576692 = require("./576692.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk75379 = require("./75379.js");
let d = Chunk64700.memo(function(e) {
  let {
    channel: t,
    user: n,
    mentionCount: d = 0,
    isMentionLowImportance: h,
    size: g = i._3J.SIZE_32,
    status: f,
    isMobile: p,
    isTyping: I = false,
    "aria-hidden": m = false
  } = e, E = (0, i.FT9)(g), A = r.useMemo(() => {
    if ((null == t ? true : t.isDM()) && null != n) return (0, l.jsx)(i.euF, {
      src: n.getAvatarURL(null == t ? true : t.getGuildId(), (0, i.FT9)(g), false),
      size: g,
      "aria-hidden": m,
      "aria-label": m ? true : n.username,
      status: f,
      isMobile: !(d > 0) && p,
      isTyping: I
    });
    if (null == t ? true : t.isMultiUserDM()) {
      var e;
      return (null == t ? true : t.recipients.length) >= 2 && null == t.icon ? (0, l.jsx)(a.A, {
        "aria-hidden": m,
        recipients: t.recipients,
        size: function(e) {
          switch (e) {
            case i._3J.SIZE_16:
            case i._3J.SIZE_20:
            case i._3J.SIZE_24:
            case i._3J.SIZE_32:
              return e;
            case i._3J.SIZE_40:
            case i._3J.SIZE_48:
              return i._3J.SIZE_40;
            case i._3J.SIZE_56:
            case i._3J.SIZE_80:
            case i._3J.SIZE_96:
            case i._3J.SIZE_120:
              return e;
            default:
              return i._3J.SIZE_32
          }
        }(g),
        isTyping: I,
        status: I ? u.clD.ONLINE : null
      }) : (0, l.jsx)(i.euF, {
        src: null != (e = (0, s.Y)(t)) ? e : true,
        "aria-hidden": m,
        size: g,
        status: I ? u.clD.ONLINE : null,
        isTyping: I
      })
    }
    return (0, l.jsx)(i.euF, {
      src: true,
      "aria-hidden": m,
      size: g
    })
  }, [m, t, p, I, d, g, f, n]);
  return d <= 0 ? A : (0, l.jsx)(o.i, {
    size: E,
    rounded: null == t || !t.isMultiUserDM(),
    lowerBadge: (0, l.jsx)(i.hVq, {
      count: d,
      color: h ? i.LU0.colors.BACKGROUND_ACCENT.css : i.LU0.colors.STATUS_DANGER.css,
      "aria-hidden": true
    }),
    lowerBadgeSize: {
      width: (0, i.o6S)(d)
    },
    children: (0, l.jsx)("div", {
      className: c.R,
      children: A
    })
  })
})