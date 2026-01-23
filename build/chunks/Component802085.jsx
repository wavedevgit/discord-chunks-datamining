/** Chunk was on 97492 **/
/** chunk id: 802085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let E = Chunk64700.memo(function(e) {
    let {
      message: t,
      notice: n,
      compact: l = false,
      onDismiss: i
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: s()(j.K1, {
          [j.oE]: l
        }),
        children: [(0, r.jsx)("div", {
          className: j.Oz,
          children: (0, r.jsx)(u.lmn, {
            size: "xs",
            color: "currentColor",
            className: j.F_
          })
        }), (0, r.jsx)("div", {
          className: j.jC,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: (0, g.Tz)(n, true, t.channel_id)
          })
        })]
      }), (0, r.jsx)("div", {
        className: s()(j.ah, {
          [j.oE]: l
        }),
        children: (0, r.jsx)(m.A, {
          message: t,
          onDeleteMessage: i,
          children: (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            tag: "span",
            className: j.C2,
            children: O.intl.format(O.t["Nd3Gh+"], {
              helpUrl: f.A.getArticleURL(_.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
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
      compact: a,
      message: u,
      children: f,
      content: g,
      onUpdate: m
    } = e, _ = null == (n = u.editedTimestamp) ? true : n.toString(), C = l.useRef(false), S = (0, c.bG)([h.A], () => h.A.getMessage(u.id), [u.id]), I = l.useCallback(() => {
      (null == S ? true : S.isBlockedEdit) ? (0, p.j)(u.id) : d.A.deleteMessage(u.channel_id, u.id, true)
    }, [u, S]);
    return l.useLayoutEffect(() => {
      C.current ? null != m && m() : C.current = true
    }, [m, u.content, g, _, f]), (0, r.jsxs)("div", {
      id: (0, b.CJ)(u),
      className: s()(i, x.PT, {
        [v.BK]: true,
        [v.nB]: "rtl" === o()(u.content),
        [j.Dy]: null == S ? true : S.isBlockedEdit,
        [j.bv]: !(null == S ? true : S.isBlockedEdit)
      }),
      children: [null != f ? f : (0, A._A)(u, g), (null == S ? true : S.isBlockedEdit) && null != u.timestamp && (0, r.jsxs)(r.Fragment, {
        children: [" ", (0, r.jsx)(y.A, {
          timestamp: u.timestamp,
          isEdited: true,
          isInline: false,
          children: (0, r.jsxs)("span", {
            className: v.oh,
            children: ["(", O.intl.string(O.t.Z7eEx9), ")"]
          })
        })]
      }), (0, r.jsx)(E, {
        notice: null != (t = null == S ? true : S.errorMessage) ? t : O.intl.string(O.t.zQ69pv),
        message: u,
        compact: a,
        onDismiss: I
      })]
    })
  }, Chunk291812.sP)