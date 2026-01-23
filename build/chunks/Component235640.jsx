/** Chunk was on 85157 **/
/** chunk id: 235640, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk508675 = require("./508675.js"),
  Chunk824510 = require("./824510.js");

function c(t) {
  let {
    reactionEmoji: e
  } = t, n = (0, l.bG)([a.Ay], () => (null == e ? true : e.emojiId) != null ? a.Ay.getUsableCustomEmojiById(e.emojiId) : null);
  return (0, i.jsxs)("div", {
    className: s.kL,
    children: [(0, i.jsxs)("div", {
      className: s.rf,
      children: [(0, i.jsxs)("div", {
        className: s.lm,
        children: [(0, i.jsx)(d, {
          width: "100%",
          marginBottom: 8
        }), (0, i.jsx)(d, {
          width: "80%",
          marginBottom: 16
        }), (0, i.jsx)(d, {
          width: "50%",
          marginBottom: 8
        }), (0, i.jsx)(d, {
          width: "60%",
          marginBottom: 16
        })]
      }), (0, i.jsx)("div", {
        className: s.oW
      })]
    }), (0, i.jsxs)("div", {
      className: s.qr,
      children: [(0, i.jsxs)("div", {
        className: s.mJ,
        children: [null != e ? (0, i.jsx)(r.A, {
          className: s.Ys,
          emojiId: e.emojiId,
          emojiName: e.emojiName,
          animated: !!(null == n ? true : n.animated)
        }) : (0, i.jsx)(o.nm2, {
          size: "sm",
          color: "currentColor",
          className: s.Ys
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: 17
        })]
      }), (0, i.jsx)(d, {
        width: "24px",
        marginBottom: 0
      }), (0, i.jsx)("div", {
        className: s.Om
      }), (0, i.jsx)(d, {
        width: "24px",
        marginBottom: 0
      })]
    })]
  })
}

function d(t) {
  let {
    width: e,
    marginBottom: n
  } = t;
  return (0, i.jsx)("div", {
    className: s.E3,
    style: {
      width: e,
      marginBottom: n
    }
  })
}