/** Chunk was on 82124 **/
/** chunk id: 158969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk653603 = require("./653603.js"),
  s = require.n(Chunk653603),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk232961 = require("./232961.js"),
  Chunk223606 = require("./223606.js"),
  Chunk63063 = require("./63063.js"),
  Chunk937889 = require("./937889.js"),
  Chunk530472 = require("./530472.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk318713 = require("./318713.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk402157 = require("./402157.js"),
  Chunk549578 = require("./549578.js"),
  Chunk960324 = require("./960324.js");
let S = Chunk473749.memo(function(e) {
    let {
      message: t,
      notice: n,
      compact: i = false,
      onDismiss: l
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: a()(x.blockedNoticeContainer, {
          [x.compact]: i
        }),
        children: [(0, r.jsx)("div", {
          className: x.blockedNoticeIcon,
          children: (0, r.jsx)(u.b7C, {
            size: "xs",
            color: "currentColor",
            className: x.shieldIcon
          })
        }), (0, r.jsx)("div", {
          className: x.blockedNotice,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: (0, g.k$)(n, true, t.channel_id)
          })
        })]
      }), (0, r.jsx)("div", {
        className: a()(x.ephemeralAccessories, {
          [x.compact]: i
        }),
        children: (0, r.jsx)(m.Z, {
          message: t,
          onDeleteMessage: l,
          children: (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            tag: "span",
            className: x.learnMore,
            children: j.intl.format(j.t["Nd3Gh+"], {
              helpUrl: h.Z.getArticleURL(O.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
            })
          })
        })
      })]
    })
  }),
  _ = Chunk473749.memo(function(e) {
    var t, n;
    let {
      className: l,
      compact: o,
      message: u,
      children: h,
      content: g,
      onUpdate: m
    } = e, O = null == (t = u.editedTimestamp) ? true : t.toString(), _ = i.useRef(false), I = (0, c.e7)([f.Z], () => f.Z.getMessage(u.id), [u.id]), P = i.useCallback(() => {
      (null == I ? true : I.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, true)
    }, [u, I]);
    return i.useLayoutEffect(() => {
      _.current ? null != m && m() : _.current = true
    }, [m, u.content, g, O, h]), (0, r.jsxs)("div", {
      id: (0, b.ut)(u),
      className: a()(l, E.markup, {
        [C.messageContent]: true,
        [C.markupRtl]: "rtl" === s()(u.content),
        [x.blockedEdit]: null == I ? true : I.isBlockedEdit,
        [x.blockedSend]: !(null == I ? true : I.isBlockedEdit)
      }),
      children: [null != h ? h : (0, y.L5)(u, g), (null == I ? true : I.isBlockedEdit) && null != u.timestamp && (0, r.jsxs)(r.Fragment, {
        children: [" ", (0, r.jsx)(v.Z, {
          timestamp: u.timestamp,
          isEdited: true,
          isInline: false,
          children: (0, r.jsxs)("span", {
            className: C.edited,
            children: ["(", j.intl.string(j.t.Z7eEx9), ")"]
          })
        })]
      }), (0, r.jsx)(S, {
        notice: null != (n = null == I ? true : I.errorMessage) ? n : j.intl.string(j.t.zQ69pv),
        message: u,
        compact: o,
        onDismiss: P
      })]
    })
  }, Chunk930282.HR)