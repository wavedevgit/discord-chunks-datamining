/** Chunk was on 97492 **/
/** chunk id: 802085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
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
let _ = Chunk64700.memo(function(e) {
    let {
      message: t,
      notice: n,
      compact: l = false,
      onDismiss: i
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: a()(v.K1, {
          [v.oE]: l
        }),
        children: [(0, r.jsx)("div", {
          className: v.Oz,
          children: (0, r.jsx)(u.lmn, {
            size: "xs",
            color: "currentColor",
            className: v.F_
          })
        }), (0, r.jsx)("div", {
          className: v.jC,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: (0, b.Tz)(n, true, t.channel_id)
          })
        })]
      }), (0, r.jsx)("div", {
        className: a()(v.ah, {
          [v.oE]: l
        }),
        children: (0, r.jsx)(g.A, {
          message: t,
          onDeleteMessage: i,
          children: (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            tag: "span",
            className: v.C2,
            children: j.intl.format(j.t["Nd3Gh+"], {
              helpUrl: h.A.getArticleURL(O.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
            })
          })
        })
      })]
    })
  }),
  C = Chunk64700.memo(function(e) {
    var t, n;
    let {
      className: i,
      compact: s,
      message: u,
      children: h,
      content: b,
      onUpdate: g
    } = e, O = null == (n = u.editedTimestamp) ? true : n.toString(), C = l.useRef(false), S = (0, c.bG)([p.A], () => p.A.getMessage(u.id), [u.id]), I = l.useCallback(() => {
      (null == S ? true : S.isBlockedEdit) ? (0, f.j)(u.id) : d.A.deleteMessage(u.channel_id, u.id, true)
    }, [u, S]);
    return l.useLayoutEffect(() => {
      C.current ? null != g && g() : C.current = true
    }, [g, u.content, b, O, h]), (0, r.jsxs)("div", {
      id: (0, m.CJ)(u),
      className: a()(i, E.PT, {
        [x.BK]: true,
        [x.nB]: "rtl" === o()(u.content),
        [v.Dy]: null == S ? true : S.isBlockedEdit,
        [v.bv]: !(null == S ? true : S.isBlockedEdit)
      }),
      children: [null != h ? h : (0, A._A)(u, b), (null == S ? true : S.isBlockedEdit) && null != u.timestamp && (0, r.jsxs)(r.Fragment, {
        children: [" ", (0, r.jsx)(y.A, {
          timestamp: u.timestamp,
          isEdited: true,
          isInline: false,
          children: (0, r.jsxs)("span", {
            className: x.oh,
            children: ["(", j.intl.string(j.t.Z7eEx9), ")"]
          })
        })]
      }), (0, r.jsx)(_, {
        notice: null != (t = null == S ? true : S.errorMessage) ? t : j.intl.string(j.t.zQ69pv),
        message: u,
        compact: s,
        onDismiss: I
      })]
    })
  }, Chunk291812.sP)