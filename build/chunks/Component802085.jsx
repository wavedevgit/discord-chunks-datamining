/** Chunk was on 61344 **/
/** chunk id: 802085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk877413 = require("./877413.js"),
  o = require.n(Chunk877413),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk986692 = require("./986692.js"),
  Chunk93474 = require("./93474.js"),
  Chunk975571 = require("./975571.js"),
  Chunk465364 = require("./465364.js"),
  Chunk986350 = require("./986350.jsx"),
  Chunk860227 = require("./860227.js"),
  Chunk291812 = require("./291812.jsx"),
  Chunk449859 = require("./449859.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk397405 = require("./397405.js"),
  Chunk679740 = require("./679740.js"),
  Chunk206314 = require("./206314.js");
let S = Chunk64700.memo(function(e) {
    let {
      message: t,
      notice: n,
      compact: r = false,
      onDismiss: i
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)("div", {
        className: a()(E.K1, {
          [E.oE]: r
        }),
        children: [(0, l.jsx)("div", {
          className: E.Oz,
          children: (0, l.jsx)(u.lmn, {
            size: "xs",
            color: "currentColor",
            className: E.F_
          })
        }), (0, l.jsx)("div", {
          className: E.jC,
          children: (0, l.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: (0, m.Tz)(n, true, t.channel_id)
          })
        })]
      }), (0, l.jsx)("div", {
        className: a()(E.ah, {
          [E.oE]: r
        }),
        children: (0, l.jsx)(g.A, {
          message: t,
          onDeleteMessage: i,
          children: (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            tag: "span",
            className: E.C2,
            children: v.intl.format(v.t["Nd3Gh+"], {
              helpUrl: f.A.getArticleURL(y.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
            })
          })
        })
      })]
    })
  }),
  x = Chunk64700.memo(function(e) {
    var t, n;
    let {
      className: i,
      compact: s,
      message: u,
      children: f,
      content: m,
      onUpdate: g
    } = e, y = null == (n = u.editedTimestamp) ? true : n.toString(), x = r.useRef(false), j = (0, c.bG)([p.A], () => p.A.getMessage(u.id), [u.id]), I = r.useCallback(() => {
      (null == j ? true : j.isBlockedEdit) ? (0, h.j)(u.id) : d.A.deleteMessage(u.channel_id, u.id, true)
    }, [u, j]);
    return r.useLayoutEffect(() => {
      x.current ? null != g && g() : x.current = true
    }, [g, u.content, m, y, f]), (0, l.jsxs)("div", {
      id: (0, A.CJ)(u),
      className: a()(i, C.PT, {
        [O.BK]: true,
        [O.nB]: "rtl" === o()(u.content),
        [E.Dy]: null == j ? true : j.isBlockedEdit,
        [E.bv]: !(null == j ? true : j.isBlockedEdit)
      }),
      children: [null != f ? f : (0, b._A)(u, m), (null == j ? true : j.isBlockedEdit) && null != u.timestamp && (0, l.jsxs)(l.Fragment, {
        children: [" ", (0, l.jsx)(_.A, {
          timestamp: u.timestamp,
          isEdited: true,
          isInline: false,
          children: (0, l.jsxs)("span", {
            className: O.oh,
            children: ["(", v.intl.string(v.t.Z7eEx9), ")"]
          })
        })]
      }), (0, l.jsx)(S, {
        notice: null != (t = null == j ? true : j.errorMessage) ? t : v.intl.string(v.t.zQ69pv),
        message: u,
        compact: s,
        onDismiss: I
      })]
    })
  }, Chunk291812.sP)