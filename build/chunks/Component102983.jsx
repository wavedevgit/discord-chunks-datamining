/** Chunk was on 71447 **/
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
    size: p = l._3J.SIZE_32,
    status: f,
    isMobile: g,
    isTyping: m = false,
    "aria-hidden": y = false
  } = e, A = (0, l.FT9)(p), v = r.useMemo(() => {
    if ((null == t ? true : t.isDM()) && null != n) return (0, i.jsx)(l.euF, {
      src: n.getAvatarURL(null == t ? true : t.getGuildId(), (0, l.FT9)(p), false),
      size: p,
      "aria-hidden": y,
      "aria-label": y ? true : n.username,
      status: f,
      isMobile: !(d > 0) && g,
      isTyping: m
    });
    if (null == t ? true : t.isMultiUserDM()) {
      var e;
      return (null == t ? true : t.recipients.length) >= 2 && null == t.icon ? (0, i.jsx)(s.A, {
        "aria-hidden": y,
        recipients: t.recipients,
        size: function(e) {
          switch (e) {
            case l._3J.SIZE_16:
            case l._3J.SIZE_20:
            case l._3J.SIZE_24:
            case l._3J.SIZE_32:
              return e;
            case l._3J.SIZE_40:
            case l._3J.SIZE_48:
              return l._3J.SIZE_40;
            case l._3J.SIZE_56:
            case l._3J.SIZE_80:
            case l._3J.SIZE_96:
            case l._3J.SIZE_120:
              return e;
            default:
              return l._3J.SIZE_32
          }
        }(p),
        isTyping: m,
        status: m ? u.clD.ONLINE : null
      }) : (0, i.jsx)(l.euF, {
        src: null != (e = (0, a.Y)(t)) ? e : true,
        "aria-hidden": y,
        size: p,
        status: m ? u.clD.ONLINE : null,
        isTyping: m
      })
    }
    return (0, i.jsx)(l.euF, {
      src: true,
      "aria-hidden": y,
      size: p
    })
  }, [y, t, g, m, d, p, f, n]);
  return d <= 0 ? v : (0, i.jsx)(o.i, {
    size: A,
    rounded: null == t || !t.isMultiUserDM(),
    lowerBadge: (0, i.jsx)(l.hVq, {
      count: d,
      color: h ? l.LU0.colors.BACKGROUND_ACCENT.css : l.LU0.colors.STATUS_DANGER.css,
      "aria-hidden": true
    }),
    lowerBadgeSize: {
      width: (0, l.o6S)(d)
    },
    children: (0, i.jsx)("div", {
      className: c.R,
      children: v
    })
  })
})