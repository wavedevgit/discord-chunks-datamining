/** Chunk was on 28467 **/
/** chunk id: 387188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Zh: () => O,
  e: () => v,
  iq: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
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
  return null == (0, j.xE)(t.content) ? f.intl.format(f.t.k6Jc9f, {
    username: null,
    usernameHook: () => null
  }) : f.intl.format(f.t.IihHBw, {
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
  } = e, [r, i] = a.useState(false), u = t.getChannelId(), m = (0, j.xE)(t.content), d = a.useCallback(() => {
    null != m && (0, p.rU)(u, t.id, {
      id: m.id,
      name: m.name
    }, p.TW.MESSAGE)
  }, [u, m, t.id]);
  return null == m ? null : (0, s.jsx)(o.ua7, {
    "aria-label": false,
    text: (0, s.jsx)(c.Z, {
      emojiName: m.name,
      size: "jumbo",
      emojiId: m.id,
      animated: m.animated,
      isInteracting: true,
      channelId: u,
      messageId: t.id
    }),
    children: e => {
      var a, p, {
          onMouseEnter: g,
          onMouseLeave: h
        } = e,
        j = function(e, t) {
          if (null == e) return {};
          var n, s, a = function(e, t) {
            if (null == e) return {};
            var n, s, a = {},
              r = Object.keys(e);
            for (s = 0; s < r.length; s++) n = r[s], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            for (s = 0; s < r.length; s++) n = r[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
          }
          return a
        }(e, ["onMouseEnter", "onMouseLeave"]);
      return (0, s.jsx)(o.P3F, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), s.forEach(function(t) {
            var s;
            s = n[t], t in e ? Object.defineProperty(e, t, {
              value: s,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = s
          })
        }
        return e
      }({}, j), p = p = {
        className: l()(n, C.ctaReactionButton),
        onClick: d,
        onMouseEnter: () => {
          i(true), null == g || g()
        },
        onMouseLeave: () => {
          i(false), null == h || h()
        },
        children: (0, s.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          className: C.ctaText,
          children: f.intl.format(f.t.z5Rnl5, {
            renderedEmoji: (0, s.jsx)(c.Z, {
              emojiName: m.name,
              size: "default",
              emojiId: m.id,
              animated: m.animated,
              isInteracting: r,
              channelId: u,
              messageId: t.id,
              className: C.ctaEmoji
            })
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          n.push.apply(n, s)
        }
        return n
      })(Object(p)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(p, e))
      }), a))
    }
  })
}

function b(e) {
  var t;
  let {
    message: n,
    compact: r,
    usernameHook: l
  } = e, c = n.content, [p, O] = a.useState(false), v = (0, u.ZP)(n), b = l(v), y = (0, j.xE)(c), P = a.useCallback(() => {
    null != y && h.S.dispatchToLastSubscribed(x.CkL.INSERT_TEXT, {
      plainText: ":".concat(y.name, ":"),
      rawText: c,
      addSpace: true
    })
  }, [y, c]), N = a.useMemo(() => {
    var e;
    return null == y ? null : {
      src: g.ZP.getEmojiURL({
        id: y.id,
        animated: y.animated,
        size: 48
      }),
      emojiId: y.id,
      name: ":".concat(null != (e = y.originalName) ? e : y.name, ":"),
      animated: y.animated
    }
  }, [y]);
  return (0, s.jsx)(d.Z, {
    iconNode: (0, s.jsx)(i.EO4, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    iconContainerClassName: C.iconContainer,
    timestamp: n.timestamp,
    compact: r,
    contentClassName: C.content,
    children: (0, s.jsx)("span", {
      children: null == y || null == N ? f.intl.format(f.t.k6Jc9f, {
        username: v.nick,
        usernameHook: b
      }) : f.intl.format(f.t.IihHBw, {
        username: v.nick,
        usernameHook: b,
        emojiPreview: (0, s.jsx)(m.Y, {
          node: N,
          isInteracting: p
        }),
        emojiName: (0, s.jsx)(o.P3F, {
          className: C.clickableEmoji,
          tag: "span",
          onClick: P,
          onMouseEnter: () => O(true),
          onMouseLeave: () => O(false),
          children: (0, s.jsx)(o.Text, {
            tag: "span",
            variant: "text-md/medium",
            color: "text-primary",
            children: ":".concat(null != (t = y.originalName) ? t : y.name, ":")
          })
        })
      })
    })
  })
}