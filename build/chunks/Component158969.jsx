/** Chunk was on 81985 **/
/** chunk id: 158969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
  Chunk530472 = require("./530472.jsx"),
  Chunk453687 = require("./453687.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk318713 = require("./318713.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk402157 = require("./402157.js"),
  Chunk549578 = require("./549578.js"),
  Chunk960324 = require("./960324.js");
let E = Chunk473749.memo(function(e) {
    let {
      message: t,
      notice: n,
      compact: i = false,
      onDismiss: l
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: a()(j.blockedNoticeContainer, {
          [j.compact]: i
        }),
        children: [(0, r.jsx)("div", {
          className: j.blockedNoticeIcon,
          children: (0, r.jsx)(u.b7C, {
            size: "xs",
            color: "currentColor",
            className: j.shieldIcon
          })
        }), (0, r.jsx)("div", {
          className: j.blockedNotice,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: n
          })
        })]
      }), (0, r.jsx)("div", {
        className: a()(j.ephemeralAccessories, {
          [j.compact]: i
        }),
        children: (0, r.jsx)(g.Z, {
          message: t,
          onDeleteMessage: l,
          children: (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            tag: "span",
            className: j.learnMore,
            children: O.intl.format(O.t["Nd3Gh+"], {
              helpUrl: h.Z.getArticleURL(v.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
            })
          })
        })
      })]
    })
  }),
  S = Chunk473749.memo(function(e) {
    var t, n;
    let {
      className: l,
      compact: o,
      message: u,
      children: h,
      content: g,
      onUpdate: v
    } = e, S = null == (t = u.editedTimestamp) ? true : t.toString(), _ = i.useRef(false), I = (0, c.e7)([f.Z], () => f.Z.getMessage(u.id), [u.id]), P = i.useCallback(() => {
      (null == I ? true : I.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, true)
    }, [u, I]);
    return i.useLayoutEffect(() => {
      _.current ? null != v && v() : _.current = true
    }, [v, u.content, g, S, h]), (0, r.jsxs)("div", {
      id: (0, m.ut)(u),
      className: a()(l, C.markup, {
        [x.messageContent]: true,
        [x.markupRtl]: "rtl" === s()(u.content),
        [j.blockedEdit]: null == I ? true : I.isBlockedEdit,
        [j.blockedSend]: !(null == I ? true : I.isBlockedEdit)
      }),
      children: [null != h ? h : (0, b.L5)(u, g), (null == I ? true : I.isBlockedEdit) && null != u.timestamp && (0, r.jsxs)(r.Fragment, {
        children: [" ", (0, r.jsx)(y.Z, {
          timestamp: u.timestamp,
          isEdited: true,
          isInline: false,
          children: (0, r.jsxs)("span", {
            className: x.edited,
            children: ["(", O.intl.string(O.t.Z7eEx9), ")"]
          })
        })]
      }), (0, r.jsx)(E, {
        notice: null != (n = null == I ? true : I.errorMessage) ? n : O.intl.string(O.t.zQ69pv),
        message: u,
        compact: o,
        onDismiss: P
      })]
    })
  }, Chunk930282.HR)