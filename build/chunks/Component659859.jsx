/** Chunk was on 94857 **/
/** chunk id: 659859, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  HN: () => f,
  _W: () => E,
  _x: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function f(e) {
  let {
    message: s,
    rendered: t
  } = e;
  return null == (0, A.Ys)(s.content) ? N.intl.format(N.t.k6Jc9Y, {
    username: null,
    usernameHook: () => null
  }) : N.intl.format(N.t.IihHB0, {
    emojiPreview: t,
    emojiName: null,
    username: null,
    usernameHook: () => null
  })
}

function v(e) {
  let {
    message: s,
    className: t
  } = e, [a, r] = l.useState(false), m = s.getChannelId(), d = (0, A.Ys)(s.content), h = l.useCallback(() => {
    null != d && (0, g.BB)(m, s.id, {
      id: d.id,
      name: d.name
    }, g.qN.MESSAGE)
  }, [m, d, s.id]);
  return null == d ? null : (0, n.jsx)(o.m, {
    asContainer: true,
    "aria-label": false,
    __unsupportedReactNodeAsText: (0, n.jsx)(u.A, {
      emojiName: d.name,
      size: "jumbo",
      emojiId: d.id,
      animated: d.animated,
      isInteracting: true,
      channelId: m,
      messageId: s.id
    }),
    children: (0, n.jsx)(c.DUT, {
      className: i()(t, C.qx),
      onClick: h,
      onMouseEnter: () => {
        r(true)
      },
      onMouseLeave: () => {
        r(false)
      },
      children: (0, n.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "text-subtle",
        className: C.Ic,
        children: N.intl.format(N.t.z5Rnl8, {
          renderedEmoji: (0, n.jsx)(u.A, {
            emojiName: d.name,
            size: "default",
            emojiId: d.id,
            animated: d.animated,
            isInteracting: a,
            channelId: m,
            messageId: s.id,
            className: C.ti
          })
        })
      })
    })
  })
}

function E(e) {
  let {
    message: s,
    compact: t,
    usernameHook: a
  } = e, i = s.content, [o, u] = l.useState(false), g = (0, m.Ay)(s), f = a(g), v = (0, A.Ys)(i), E = l.useCallback(() => {
    null != v && j._.dispatchToLastSubscribed(x.jej.INSERT_TEXT, {
      plainText: ":".concat(v.name, ":"),
      rawText: i,
      addSpace: true
    })
  }, [v, i]), I = l.useMemo(() => null == v ? null : {
    src: p.Ay.getEmojiURL({
      id: v.id,
      animated: v.animated,
      size: 48
    }),
    emojiId: v.id,
    name: ":".concat(v.name, ":"),
    animated: v.animated
  }, [v]);
  return (0, n.jsx)(h.A, {
    iconNode: (0, n.jsx)(r.ReactionIcon, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    iconContainerClassName: C.zc,
    timestamp: s.timestamp,
    compact: t,
    contentClassName: C.Qs,
    children: (0, n.jsx)("span", {
      children: null == v || null == I ? N.intl.format(N.t.k6Jc9Y, {
        username: g.nick,
        usernameHook: f
      }) : N.intl.format(N.t.IihHB0, {
        username: g.nick,
        usernameHook: f,
        emojiPreview: (0, n.jsx)(d.X, {
          node: I,
          isInteracting: o
        }),
        emojiName: (0, n.jsx)(c.DUT, {
          className: C.hX,
          tag: "span",
          onClick: E,
          onMouseEnter: () => u(true),
          onMouseLeave: () => u(false),
          children: (0, n.jsx)(c.Text, {
            tag: "span",
            variant: "text-md/medium",
            color: "text-strong",
            children: ":".concat(v.name, ":")
          })
        })
      })
    })
  })
}