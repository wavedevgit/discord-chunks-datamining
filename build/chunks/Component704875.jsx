/** Chunk was on web.js **/
/** chunk id: 704875, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk628692 = require("./628692.jsx"),
  Chunk845537 = require("./845537.jsx"),
  Chunk653309 = require("./653309.jsx"),
  Chunk884878 = require("./884878.js"),
  Chunk299477 = require("./299477.js"),
  Chunk960324 = require("./960324.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t, n) {
  var i, l;
  let {
    attributes: u,
    children: f,
    element: _,
    decorations: m
  } = e, b = E(null != (i = null == m ? true : m[0]) ? i : {});
  switch (_.type) {
    case "line":
      if (null == (l = _.codeBlockState) ? true : l.isInCodeBlock) return (0, r.jsx)("div", h(p({
        className: c.codeLine,
        spellCheck: null == _.codeBlockState || null == _.codeBlockState.lang
      }, u), {
        children: f
      }));
      return (0, r.jsx)("div", h(p({}, u), {
        children: f
      }));
    case "blockQuote": {
      let e = a()(d.blockquoteContainer, d.slateBlockquoteContainer);
      return (0, r.jsxs)("div", h(p({}, u), {
        className: e,
        children: [(0, r.jsx)("span", {
          contentEditable: false,
          className: d.blockquoteDivider
        }), (0, r.jsx)("blockquote", {
          children: f
        })]
      }))
    }
    case "emoji":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.dy, {
          emoji: _.emoji
        }), f]
      });
    case "customEmoji":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.wP, {
          emoji: _.emoji
        }), f]
      });
    case "textMention":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.Ox, {
          text: _.name
        }), f]
      });
    case "userMention":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.cB, {
          id: _.userId,
          channelId: n,
          guildId: t
        }), f]
      });
    case "roleMention":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.Vq, {
          id: _.roleId,
          guildId: t
        }), f]
      });
    case "channelMention":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.Io, {
          id: _.channelId
        }), f]
      });
    case "staticRouteLink":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.NY, {
          id: _.id,
          itemId: _.itemId,
          guildId: t
        }), f]
      });
    case "soundboard":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(o.ku, {
          soundId: _.soundId
        }), f]
      });
    case "commandMention":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.Wf, {
          text: _.commandName,
          id: _.commandId
        }), f]
      });
    case "timestamp":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.EK, {
          timestamp: _.parsed
        }), f]
      });
    case "gameMention":
      return (0, r.jsxs)(g, {
        attributes: u,
        className: b,
        children: [(0, r.jsx)(s.N1, {
          id: _.applicationId
        }), f]
      });
    default:
      return null
  }
}
let g = e => {
  let {
    className: t,
    attributes: n,
    children: i
  } = e, o = a()(u.inlineElement, u.inlineVoid, t);
  return (0, r.jsx)("span", h(p({}, n), {
    className: o,
    contentEditable: false,
    children: i
  }))
};

function E(e) {
  return Object.entries(e).filter(e => {
    let [t] = e;
    return "anchor" !== t && "focus" !== t
  }).map(e => {
    let [t, n] = e;
    returntrue === n && t in l.U ? l.U[t] : null
  }).filter(e => null != e).join(" ")
}