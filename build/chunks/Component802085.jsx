/** Chunk was on 1113 **/
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
        className: s()(x.K1, {
          [x.oE]: l
        }),
        children: [(0, r.jsx)("div", {
          className: x.Oz,
          children: (0, r.jsx)(u.lmn, {
            size: "xs",
            color: "currentColor",
            className: x.F_
          })
        }), (0, r.jsx)("div", {
          className: x.jC,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: (0, f.Tz)(n, true, t.channel_id)
          })
        })]
      }), (0, r.jsx)("div", {
        className: s()(x.ah, {
          [x.oE]: l
        }),
        children: (0, r.jsx)(m.A, {
          message: t,
          onDeleteMessage: i,
          children: (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            tag: "span",
            className: x.C2,
            children: _.intl.format(_.t["Nd3Gh+"], {
              helpUrl: g.A.getArticleURL(O.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
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
      children: g,
      content: f,
      onUpdate: m
    } = e, O = null == (n = u.editedTimestamp) ? true : n.toString(), C = l.useRef(false), S = (0, c.bG)([p.A], () => p.A.getMessage(u.id), [u.id]), I = l.useCallback(() => {
      (null == S ? true : S.isBlockedEdit) ? (0, h.j)(u.id) : d.A.deleteMessage(u.channel_id, u.id, true)
    }, [u, S]);
    return l.useLayoutEffect(() => {
      C.current ? null != m && m() : C.current = true
    }, [m, u.content, f, O, g]), (0, r.jsxs)("div", {
      id: (0, b.CJ)(u),
      className: s()(i, v.PT, {
        [j.BK]: true,
        [j.nB]: "rtl" === o()(u.content),
        [x.Dy]: null == S ? true : S.isBlockedEdit,
        [x.bv]: !(null == S ? true : S.isBlockedEdit)
      }),
      children: [null != g ? g : (0, A._A)(u, f), (null == S ? true : S.isBlockedEdit) && null != u.timestamp && (0, r.jsxs)(r.Fragment, {
        children: [" ", (0, r.jsx)(y.A, {
          timestamp: u.timestamp,
          isEdited: true,
          isInline: false,
          children: (0, r.jsxs)("span", {
            className: j.oh,
            children: ["(", _.intl.string(_.t.Z7eEx9), ")"]
          })
        })]
      }), (0, r.jsx)(E, {
        notice: null != (t = null == S ? true : S.errorMessage) ? t : _.intl.string(_.t.zQ69pv),
        message: u,
        compact: a,
        onDismiss: I
      })]
    })
  }, Chunk291812.sP)