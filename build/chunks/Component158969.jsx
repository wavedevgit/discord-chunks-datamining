/** Chunk was on 62987 **/
/** chunk id: 158969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk177119 = require("./177119.js"),
  Chunk724913 = require("./724913.js"),
  Chunk430864 = require("./430864.js");
let O = Chunk647438.memo(function(e) {
    let {
      message: t,
      notice: n,
      compact: i = false,
      onDismiss: l
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: a()(v.blockedNoticeContainer, {
          [v.compact]: i
        }),
        children: [(0, r.jsx)("div", {
          className: v.blockedNoticeIcon,
          children: (0, r.jsx)(u.b7C, {
            size: "xs",
            color: "currentColor",
            className: v.shieldIcon
          })
        }), (0, r.jsx)("div", {
          className: v.blockedNotice,
          children: (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            children: n
          })
        })]
      }), (0, r.jsx)("div", {
        className: a()(v.ephemeralAccessories, {
          [v.compact]: i
        }),
        children: (0, r.jsx)(m.Z, {
          message: t,
          onDeleteMessage: l,
          children: (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            tag: "span",
            className: v.learnMore,
            children: C.intl.format(C.t.Nd3Gh4, {
              helpUrl: f.Z.getArticleURL(_.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
            })
          })
        })
      })]
    })
  }),
  E = Chunk647438.memo(function(e) {
    var t, n;
    let {
      className: l,
      compact: o,
      message: u,
      children: f,
      content: m,
      onUpdate: _
    } = e, E = null == (t = u.editedTimestamp) ? true : t.toString(), S = i.useRef(false), I = (0, c.e7)([h.Z], () => h.Z.getMessage(u.id), [u.id]), P = i.useCallback(() => {
      (null == I ? true : I.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, true)
    }, [u, I]);
    return i.useLayoutEffect(() => {
      S.current ? null != _ && _() : S.current = true
    }, [_, u.content, m, E, f]), (0, r.jsxs)("div", {
      id: (0, g.ut)(u),
      className: a()(l, j.markup, {
        [x.messageContent]: true,
        [x.markupRtl]: "rtl" === s()(u.content),
        [v.blockedEdit]: null == I ? true : I.isBlockedEdit,
        [v.blockedSend]: !(null == I ? true : I.isBlockedEdit)
      }),
      children: [null != f ? f : (0, b.L5)(u, m), (null == I ? true : I.isBlockedEdit) && null != u.timestamp && (0, r.jsxs)(r.Fragment, {
        children: [" ", (0, r.jsx)(y.Z, {
          timestamp: u.timestamp,
          isEdited: true,
          isInline: false,
          children: (0, r.jsxs)("span", {
            className: x.edited,
            children: ["(", C.intl.string(C.t.Z7eEx8), ")"]
          })
        })]
      }), (0, r.jsx)(O, {
        notice: null != (n = null == I ? true : I.errorMessage) ? n : C.intl.string(C.t.zQ69pq),
        message: u,
        compact: o,
        onDismiss: P
      })]
    })
  }, Chunk930282.HR)