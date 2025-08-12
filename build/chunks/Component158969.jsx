/** Chunk was on web.js **/
/** chunk id: 158969, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk653603 = require("./653603.js"),
  l = require.n(Chunk653603),
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
  Chunk894139 = require("./894139.js"),
  Chunk966661 = require("./966661.js"),
  Chunk692228 = require("./692228.js");
let T = Chunk73800.memo(function(e) {
  let {
    message: t,
    notice: n,
    compact: i = false,
    onDismiss: o
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(O.blockedNoticeContainer, {
        [O.compact]: i
      }),
      children: [(0, r.jsx)("div", {
        className: O.blockedNoticeIcon,
        children: (0, r.jsx)(u.b7C, {
          size: "xs",
          color: "currentColor",
          className: O.shieldIcon
        })
      }), (0, r.jsx)("div", {
        className: O.blockedNotice,
        children: (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: n
        })
      })]
    }), (0, r.jsx)("div", {
      className: a()(O.ephemeralAccessories, {
        [O.compact]: i
      }),
      children: (0, r.jsx)(h.Z, {
        message: t,
        onDeleteMessage: o,
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "interactive-normal",
          tag: "span",
          className: O.learnMore,
          children: y.intl.format(y.t.Nd3Gh4, {
            helpUrl: p.Z.getArticleURL(b.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })
      })
    })]
  })
});

function S(e) {
  var t, n;
  let {
    className: o,
    compact: s,
    message: u,
    children: p,
    content: h,
    onUpdate: b
  } = e, S = null == (t = u.editedTimestamp) ? true : t.toString(), A = i.useRef(false), N = (0, c.e7)([_.Z], () => _.Z.getMessage(u.id), [u.id]), C = i.useCallback(() => {
    (null == N ? true : N.isBlockedEdit) ? (0, f.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, true)
  }, [u, N]);
  return i.useLayoutEffect(() => {
    A.current ? null != b && b() : A.current = true
  }, [b, u.content, h, S, p]), (0, r.jsxs)("div", {
    id: (0, m.ut)(u),
    className: a()(o, I.markup, {
      [v.messageContent]: true,
      [v.markupRtl]: "rtl" === l()(u.content),
      [O.blockedEdit]: null == N ? true : N.isBlockedEdit,
      [O.blockedSend]: !(null == N ? true : N.isBlockedEdit)
    }),
    children: [null != p ? p : (0, g.L5)(u, h), (null == N ? true : N.isBlockedEdit) && null != u.timestamp && (0, r.jsxs)(r.Fragment, {
      children: [" ", (0, r.jsx)(E.Z, {
        timestamp: u.timestamp,
        isEdited: true,
        isInline: false,
        children: (0, r.jsxs)("span", {
          className: v.edited,
          children: ["(", y.intl.string(y.t.Z7eEx8), ")"]
        })
      })]
    }), (0, r.jsx)(T, {
      notice: null != (n = null == N ? true : N.errorMessage) ? n : y.intl.string(y.t.zQ69pq),
      message: u,
      compact: s,
      onDismiss: C
    })]
  })
}
let A = Chunk73800.memo(S, Chunk930282.HR)