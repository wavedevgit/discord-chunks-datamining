/** Chunk was on web.js **/
/** chunk id: 659859, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HN: () => O,
  _W: () => v,
  _x: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk934551 = require("./934551.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk930101 = require("./930101.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk649963 = require("./649963.js"),
  Chunk486020 = require("./486020.js"),
  Chunk203982 = require("./203982.js"),
  Chunk395031 = require("./395031.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk696007 = require("./696007.js");

function O(e) {
  let {
    message: t,
    rendered: n
  } = e;
  return null == (0, g.Ys)(t.content) ? b.intl.format(b.t.k6Jc9Y, {
    username: null,
    usernameHook: () => null
  }) : b.intl.format(b.t.IihHB0, {
    emojiPreview: n,
    emojiName: null,
    username: null,
    usernameHook: () => null
  })
}

function A(e) {
  let {
    message: t,
    className: n
  } = e, [a, o] = i.useState(false), d = t.getChannelId(), f = (0, g.Ys)(t.content), p = i.useCallback(() => {
    null != f && (0, _.BB)(d, t.id, {
      id: f.id,
      name: f.name
    }, _.qN.MESSAGE)
  }, [d, f, t.id]);
  return null == f ? null : (0, r.jsx)(l.m, {
    asContainer: true,
    "aria-label": false,
    __unsupportedReactNodeAsText: (0, r.jsx)(u.A, {
      emojiName: f.name,
      size: "jumbo",
      emojiId: f.id,
      animated: f.animated,
      isInteracting: true,
      channelId: d,
      messageId: t.id
    }),
    children: (0, r.jsx)(c.DUT, {
      className: s()(n, y.qx),
      onClick: p,
      onMouseEnter: () => {
        o(true)
      },
      onMouseLeave: () => {
        o(false)
      },
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "text-subtle",
        className: y.Ic,
        children: b.intl.format(b.t.z5Rnl8, {
          renderedEmoji: (0, r.jsx)(u.A, {
            emojiName: f.name,
            size: "default",
            emojiId: f.id,
            animated: f.animated,
            isInteracting: a,
            channelId: d,
            messageId: t.id,
            className: y.ti
          })
        })
      })
    })
  })
}

function v(e) {
  let {
    message: t,
    compact: n,
    usernameHook: a
  } = e, s = t.content, [l, u] = i.useState(false), _ = (0, d.Ay)(t), O = a(_), A = (0, g.Ys)(s), v = i.useCallback(() => {
    null != A && m._.dispatchToLastSubscribed(E.jej.INSERT_TEXT, {
      plainText: ":".concat(A.name, ":"),
      rawText: s,
      addSpace: true
    })
  }, [A, s]), S = i.useMemo(() => null == A ? null : {
    src: h.Ay.getEmojiURL({
      id: A.id,
      animated: A.animated,
      size: 48
    }),
    emojiId: A.id,
    name: ":".concat(A.name, ":"),
    animated: A.animated
  }, [A]);
  return (0, r.jsx)(p.A, {
    iconNode: (0, r.jsx)(o.ReactionIcon, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    iconContainerClassName: y.zc,
    timestamp: t.timestamp,
    compact: n,
    contentClassName: y.Qs,
    children: (0, r.jsx)("span", {
      children: null == A || null == S ? b.intl.format(b.t.k6Jc9Y, {
        username: _.nick,
        usernameHook: O
      }) : b.intl.format(b.t.IihHB0, {
        username: _.nick,
        usernameHook: O,
        emojiPreview: (0, r.jsx)(f.X, {
          node: S,
          isInteracting: l
        }),
        emojiName: (0, r.jsx)(c.DUT, {
          className: y.hX,
          tag: "span",
          onClick: v,
          onMouseEnter: () => u(true),
          onMouseLeave: () => u(false),
          children: (0, r.jsx)(c.Text, {
            tag: "span",
            variant: "text-md/medium",
            color: "text-strong",
            children: ":".concat(A.name, ":")
          })
        })
      })
    })
  })
}