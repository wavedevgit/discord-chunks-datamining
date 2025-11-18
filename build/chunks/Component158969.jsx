/** Chunk was on 71264 **/
/** chunk id: 158969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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
  Chunk713921 = require("./713921.js"),
  Chunk136907 = require("./136907.js"),
  Chunk602009 = require("./602009.js");
let O = Chunk473749.memo(function(e) {
    let {
      message: t,
      notice: n,
      compact: r = false,
      onDismiss: l
    } = e;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)("div", {
        className: a()(_.blockedNoticeContainer, {
          [_.compact]: r
        }),
        children: [(0, i.jsx)("div", {
          className: _.blockedNoticeIcon,
          children: (0, i.jsx)(u.b7C, {
            size: "xs",
            color: "currentColor",
            className: _.shieldIcon
          })
        }), (0, i.jsx)("div", {
          className: _.blockedNotice,
          children: (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            children: n
          })
        })]
      }), (0, i.jsx)("div", {
        className: a()(_.ephemeralAccessories, {
          [_.compact]: r
        }),
        children: (0, i.jsx)(m.Z, {
          message: t,
          onDeleteMessage: l,
          children: (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            tag: "span",
            className: _.learnMore,
            children: v.intl.format(v.t["Nd3Gh+"], {
              helpUrl: f.Z.getArticleURL(C.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
            })
          })
        })
      })]
    })
  }),
  E = Chunk473749.memo(function(e) {
    var t, n;
    let {
      className: l,
      compact: o,
      message: u,
      children: f,
      content: m,
      onUpdate: C
    } = e, E = null == (t = u.editedTimestamp) ? true : t.toString(), S = r.useRef(false), P = (0, c.e7)([h.Z], () => h.Z.getMessage(u.id), [u.id]), I = r.useCallback(() => {
      (null == P ? true : P.isBlockedEdit) ? (0, p.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, true)
    }, [u, P]);
    return r.useLayoutEffect(() => {
      S.current ? null != C && C() : S.current = true
    }, [C, u.content, m, E, f]), (0, i.jsxs)("div", {
      id: (0, g.ut)(u),
      className: a()(l, j.markup, {
        [x.messageContent]: true,
        [x.markupRtl]: "rtl" === s()(u.content),
        [_.blockedEdit]: null == P ? true : P.isBlockedEdit,
        [_.blockedSend]: !(null == P ? true : P.isBlockedEdit)
      }),
      children: [null != f ? f : (0, b.L5)(u, m), (null == P ? true : P.isBlockedEdit) && null != u.timestamp && (0, i.jsxs)(i.Fragment, {
        children: [" ", (0, i.jsx)(y.Z, {
          timestamp: u.timestamp,
          isEdited: true,
          isInline: false,
          children: (0, i.jsxs)("span", {
            className: x.edited,
            children: ["(", v.intl.string(v.t.Z7eEx9), ")"]
          })
        })]
      }), (0, i.jsx)(O, {
        notice: null != (n = null == P ? true : P.errorMessage) ? n : v.intl.string(v.t.zQ69pv),
        message: u,
        compact: o,
        onDismiss: I
      })]
    })
  }, Chunk930282.HR)