/** Chunk was on 2686 **/
/** chunk id: 893729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk882101 = require("./882101.js");

function y(e) {
  let {
    guildId: t,
    role: n,
    theme: l,
    content: y = g.intl.string(g.t["6OSasb"]),
    className: j
  } = e, O = (0, u.e7)([m.default], () => m.default.getCurrentUser()), S = p.ZP.useName(t, null, O), _ = (0, c.Kz)(n), E = i.useMemo(() => {
    var e, t;
    return (0, s.e5)((e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, (0, d.ZP)({
      channelId: "0",
      content: y,
      tts: true,
      type: true,
      messageReference: true,
      allowedMentions: true,
      author: O
    })), t = t = {
      state: v.yb.SENT,
      id: "0"
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }, [O, y]), P = {
    nick: S,
    colorString: n.colorString,
    colorStrings: n.colorStrings
  };
  return (0, r.jsx)(a.f6W, {
    theme: l,
    children: e => (0, r.jsx)("div", {
      className: o()(e, b.container, j),
      children: (0, r.jsx)(f.Z, {
        hideTimestamp: true,
        author: P,
        roleIcon: _,
        message: E,
        isGroupStart: true,
        disableInteraction: true
      })
    })
  })
}