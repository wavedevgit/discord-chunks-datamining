/** Chunk was on web.js **/
/** chunk id: 387188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Zh: () => A,
  e: () => N,
  iq: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk739566 = require("./739566.js"),
  Chunk590956 = require("./590956.js"),
  Chunk834129 = require("./834129.js"),
  Chunk222677 = require("./222677.js"),
  Chunk768581 = require("./768581.js"),
  Chunk585483 = require("./585483.js"),
  Chunk139688 = require("./139688.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk841935 = require("./841935.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function A(e) {
  let {
    message: t,
    rendered: n
  } = e;
  return null == (0, m.xE)(t.content) ? E.intl.format(E.t.k6Jc9f, {
    username: null,
    usernameHook: () => null
  }) : E.intl.format(E.t.IihHBw, {
    emojiPreview: n,
    emojiName: null,
    username: null,
    usernameHook: () => null
  })
}

function N(e) {
  let {
    message: t,
    className: n
  } = e, [o, s] = i.useState(false), u = t.getChannelId(), d = (0, m.xE)(t.content), f = i.useCallback(() => {
    null != d && (0, _.rU)(u, t.id, {
      id: d.id,
      name: d.name
    }, _.TW.MESSAGE)
  }, [u, d, t.id]);
  return null == d ? null : <l.ua7 aria-label={false} text={(0, r.jsx)(c.Z, {
      emojiName: d.name,
      size: "jumbo",
      emojiId: d.id,
      animated: d.animated,
      isInteracting: true,
      channelId: u,
      messageId: t.id
    })}>{e => {
      var {
        onMouseEnter: i,
        onMouseLeave: _
      } = e, p = T(e, ["onMouseEnter", "onMouseLeave"]);
      return (0, r.jsx)(l.P3F, I(O({}, p), {
        className: a()(n, b.ctaReactionButton),
        onClick: f,
        onMouseEnter: () => {
          s(true), null == i || i()
        },
        onMouseLeave: () => {
          s(false), null == _ || _()
        },
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          className: b.ctaText,
          children: E.intl.format(E.t.z5Rnl5, {
            renderedEmoji: (0, r.jsx)(c.Z, {
              emojiName: d.name,
              size: "default",
              emojiId: d.id,
              animated: d.animated,
              isInteracting: o,
              channelId: u,
              messageId: t.id,
              className: b.ctaEmoji
            })
          })
        })
      }))
    }}</l.ua7>
}

function C(e) {
  var t;
  let {
    message: n,
    compact: o,
    usernameHook: a
  } = e, c = n.content, [_, y] = i.useState(false), O = (0, u.ZP)(n), v = a(O), I = (0, m.xE)(c), T = i.useCallback(() => {
    null != I && h.S.dispatchToLastSubscribed(g.CkL.INSERT_TEXT, {
      plainText: ":".concat(I.name, ":"),
      rawText: c,
      addSpace: true
    })
  }, [I, c]), S = i.useMemo(() => {
    var e;
    return null == I ? null : {
      src: p.ZP.getEmojiURL({
        id: I.id,
        animated: I.animated,
        size: 48
      }),
      emojiId: I.id,
      name: ":".concat(null != (e = I.originalName) ? e : I.name, ":"),
      animated: I.animated
    }
  }, [I]);
  return <f.Z iconNode={(0, r.jsx)(s.EO4, {
      size: "refresh_sm",
      color: "currentColor"
    })} iconContainerClassName={b.iconContainer} timestamp={n.timestamp} compact={o} contentClassName={b.content}><span>{null == I || null == S ? E.intl.format(E.t.k6Jc9f, {
        username: O.nick,
        usernameHook: v
      }) : E.intl.format(E.t.IihHBw, {
        username: O.nick,
        usernameHook: v,
        emojiPreview: (0, r.jsx)(d.Y, {
          node: S,
          isInteracting: _
        }),
        emojiName: (0, r.jsx)(l.P3F, {
          className: b.clickableEmoji,
          tag: "span",
          onClick: T,
          onMouseEnter: () => y(true),
          onMouseLeave: () => y(false),
          children: (0, r.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/medium",
            color: "text-primary",
            children: ":".concat(null != (t = I.originalName) ? t : I.name, ":")
          })
        })
      })}</span></f.Z>
}