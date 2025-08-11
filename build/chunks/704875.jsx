/** Chunk was on web.js **/
/** chunk id: 704875, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk628692 = require("./628692.jsx"),
  Chunk845537 = require("./845537.js"),
  Chunk653309 = require("./653309.jsx"),
  Chunk227473 = require("./227473.js"),
  Chunk112360 = require("./112360.js"),
  Chunk73433 = require("./73433.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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

function p(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t, n) {
  var i, l;
  let {
    attributes: u,
    children: f,
    element: p,
    decorations: m
  } = e, b = E(null != (i = null == m ? true : m[0]) ? i : {});
  switch (p.type) {
    case "line":
      if (null == (l = p.codeBlockState) ? true : l.isInCodeBlock) return <div{...h(_({
        className: c.codeLine,
        spellCheck: null == p.codeBlockState || null == p.codeBlockState.lang
      }, u), {
        children: f
      })} />;
      return <div{...h(_({}, u), {
        children: f
      })} />;
    case "blockQuote": {
      let e = o()(d.blockquoteContainer, d.slateBlockquoteContainer);
      return <div{...h(_({}, u), {
        className: e,
        children: [(0, r.jsx)("span", {
          contentEditable: false,
          className: d.blockquoteDivider
        }), (0, r.jsx)("blockquote", {
          children: f
        })]
      })} />
    }
    case "emoji":
      return <g attributes={u} className={b}>{<s.dy emoji={p.emoji} />}{f}</g>;
    case "customEmoji":
      return <g attributes={u} className={b}>{<s.wP emoji={p.emoji} />}{f}</g>;
    case "textMention":
      return <g attributes={u} className={b}>{<s.Ox text={p.name} />}{f}</g>;
    case "userMention":
      return <g attributes={u} className={b}>{<s.cB id={p.userId} channelId={n} guildId={t} />}{f}</g>;
    case "roleMention":
      return <g attributes={u} className={b}>{<s.Vq id={p.roleId} guildId={t} />}{f}</g>;
    case "channelMention":
      return <g attributes={u} className={b}>{<s.Io id={p.channelId} />}{f}</g>;
    case "staticRouteLink":
      return <g attributes={u} className={b}>{<s.NY id={p.id} itemId={p.itemId} guildId={t} />}{f}</g>;
    case "soundboard":
      return <g attributes={u} className={b}>{<a.ku soundId={p.soundId} />}{f}</g>;
    case "commandMention":
      return <g attributes={u} className={b}>{<s.Wf text={p.commandName} id={p.commandId} />}{f}</g>;
    case "timestamp":
      return <g attributes={u} className={b}>{<s.EK timestamp={p.parsed} />}{f}</g>;
    case "gameMention":
      return <g attributes={u} className={b}>{<s.N1 id={p.applicationId} />}{f}</g>;
    default:
      return null
  }
}
let g = e => {
  let {
    className: t,
    attributes: n,
    children: i
  } = e, a = o()(u.inlineElement, u.inlineVoid, t);
  return <span{...h(_({}, n), {
    className: a,
    contentEditable: false,
    children: i
  })} />
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