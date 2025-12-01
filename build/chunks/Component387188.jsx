/** Chunk was on web.js **/
/** chunk id: 387188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Zh: () => O,
  e: () => v,
  iq: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk590956 = require("./590956.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk222677 = require("./222677.js"),
  Chunk768581 = require("./768581.js"),
  Chunk585483 = require("./585483.js"),
  Chunk139688 = require("./139688.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk871320 = require("./871320.js");

function O(e) {
  let {
    message: t,
    rendered: n
  } = e;
  return null == (0, g.xE)(t.content) ? b.intl.format(b.t.k6Jc9Y, {
    username: null,
    usernameHook: () => null
  }) : b.intl.format(b.t.IihHB0, {
    emojiPreview: n,
    emojiName: null,
    username: null,
    usernameHook: () => null
  })
}

function v(e) {
  let {
    message: t,
    className: n
  } = e, [a, s] = i.useState(false), d = t.getChannelId(), f = (0, g.xE)(t.content), p = i.useCallback(() => {
    null != f && (0, _.rU)(d, t.id, {
      id: f.id,
      name: f.name
    }, _.TW.MESSAGE)
  }, [d, f, t.id]);
  return null == f ? null : (0, r.jsx)(l.u, {
    asContainer: true,
    "aria-label": false,
    __unsupportedReactNodeAsText: (0, r.jsx)(u.Z, {
      emojiName: f.name,
      size: "jumbo",
      emojiId: f.id,
      animated: f.animated,
      isInteracting: true,
      channelId: d,
      messageId: t.id
    }),
    children: (0, r.jsx)(c.P3F, {
      className: o()(n, y.ctaReactionButton),
      onClick: p,
      onMouseEnter: () => {
        s(true)
      },
      onMouseLeave: () => {
        s(false)
      },
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "text-secondary",
        className: y.ctaText,
        children: b.intl.format(b.t.z5Rnl8, {
          renderedEmoji: (0, r.jsx)(u.Z, {
            emojiName: f.name,
            size: "default",
            emojiId: f.id,
            animated: f.animated,
            isInteracting: a,
            channelId: d,
            messageId: t.id,
            className: y.ctaEmoji
          })
        })
      })
    })
  })
}

function S(e) {
  let {
    message: t,
    compact: n,
    usernameHook: a
  } = e, o = t.content, [l, u] = i.useState(false), _ = (0, d.ZP)(t), O = a(_), v = (0, g.xE)(o), S = i.useCallback(() => {
    null != v && h.S.dispatchToLastSubscribed(E.CkL.INSERT_TEXT, {
      plainText: ":".concat(v.name, ":"),
      rawText: o,
      addSpace: true
    })
  }, [v, o]), I = i.useMemo(() => null == v ? null : {
    src: m.ZP.getEmojiURL({
      id: v.id,
      animated: v.animated,
      size: 48
    }),
    emojiId: v.id,
    name: ":".concat(v.name, ":"),
    animated: v.animated
  }, [v]);
  return (0, r.jsx)(p.Z, {
    iconNode: (0, r.jsx)(s.EO4, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    iconContainerClassName: y.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    contentClassName: y.content,
    children: (0, r.jsx)("span", {
      children: null == v || null == I ? b.intl.format(b.t.k6Jc9Y, {
        username: _.nick,
        usernameHook: O
      }) : b.intl.format(b.t.IihHB0, {
        username: _.nick,
        usernameHook: O,
        emojiPreview: (0, r.jsx)(f.Y, {
          node: I,
          isInteracting: l
        }),
        emojiName: (0, r.jsx)(c.P3F, {
          className: y.clickableEmoji,
          tag: "span",
          onClick: S,
          onMouseEnter: () => u(true),
          onMouseLeave: () => u(false),
          children: (0, r.jsx)(c.Text, {
            tag: "span",
            variant: "text-md/medium",
            color: "text-primary",
            children: ":".concat(v.name, ":")
          })
        })
      })
    })
  })
}