/** Chunk was on 31930 **/
/** chunk id: 893729, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518738 = require("./518738.js"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk753206 = require("./753206.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk914933 = require("./914933.js");

function v(e) {
  let {
    guildId: t,
    role: n,
    theme: s,
    content: v = m.intl.string(m.t["6OSasb"]),
    className: C
  } = e, _ = (0, o.e7)([p.default], () => p.default.getCurrentUser()), y = g.ZP.useName(t, null, _), O = (0, c.Kz)(n), S = r.useMemo(() => {
    var e, t;
    return (0, u.e5)((e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, (0, d.ZP)({
      channelId: "0",
      content: v,
      tts: true,
      type: true,
      messageReference: true,
      allowedMentions: true,
      author: _
    })), t = t = {
      state: f.yb.SENT,
      id: "0"
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }, [_, v]), E = {
    nick: y,
    colorString: n.colorString,
    colorStrings: n.colorStrings
  };
  return (0, i.jsx)(a.f6W, {
    theme: s,
    children: e => (0, i.jsx)("div", {
      className: l()(e, b.container, C),
      children: (0, i.jsx)(h.Z, {
        hideTimestamp: true,
        author: E,
        roleIcon: O,
        message: S,
        isGroupStart: true,
        disableInteraction: true
      })
    })
  })
}