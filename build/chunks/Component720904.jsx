/** Chunk was on web.js **/
/** chunk id: 720904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./781311.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk543241 = require("./543241.js"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37388 = require("./37388.js");

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
let T = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function S(e) {
  var t;
  let {
    emoji: n,
    isFocused: i
  } = e, {
    animated: a,
    src: l,
    surrogates: c
  } = n;
  return null == l && null != n.id ? l = p.ZP.getEmojiURL({
    id: n.id,
    animated: !!a,
    size: 20
  }) : null == l && (l = h.ZP.getURL(c)), (0, r.jsx)(s.ua7, {
    text: n.allNamesString,
    hideOnClick: true,
    spacing: 16,
    forceOpen: i,
    children: e => (0, r.jsx)("div", I(O({
      "aria-label": E.intl.formatToPlainString(E.t["/iYSo6"], {
        emojiName: n.name
      }),
      className: o()(b.button, {
        [b.focused]: i
      })
    }, e), {
      children: null == l || "" === l.trim() ? (0, r.jsx)("span", I(O({
        className: o()("emoji", "emoji-text", b.icon)
      }, e), {
        children: c
      })) : (0, r.jsx)("img", {
        className: b.icon,
        src: l,
        alt: ""
      })
    }))
  }, null != (t = n.id) ? t : n.name)
}

function A(e, t) {
  let n = (0, l.MZ)(t.guild_id).filter(e => {
    var n;
    return !(e.useSpriteSheet && T.indexOf(null != (n = e.uniqueName) ? n : "") >= 0) && !h.ZP.isEmojiPremiumLocked({
      emoji: e,
      channel: t,
      intention: g.Hz.REACTION
    })
  });
  n.length > 4 && (n.length = 4);
  let i = f.nc.useSetting(),
    o = (0, d.$R)(t),
    p = (0, a.e7)([_.Z], () => i && o && (t.isPrivate() || _.Z.can(m.Plq.ADD_REACTIONS, t)), [t, o, i]),
    E = n => {
      (0, c.rU)(t.id, e.id, (0, u.g1)(n), c.TW.MESSAGE_CONTEXT_MENU)
    };
  return p && n.length > 0 ? (0, r.jsx)(s.kSQ, {
    className: b.wrapper,
    children: n.map((e, t) => {
      var n;
      return (0, r.jsx)(s.sNh, {
        id: "quickreact-".concat(null != (n = e.id) ? n : t),
        render: t => {
          let {
            isFocused: n
          } = t;
          return (0, r.jsx)(S, {
            emoji: e,
            isFocused: n
          })
        },
        action: () => E(e),
        dontCloseOnActionIfHoldingShiftKey: true
      }, t)
    })
  }) : null
}