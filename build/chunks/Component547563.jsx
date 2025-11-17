/** Chunk was on 69844 **/
/** chunk id: 547563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./35282.js");
var r, a, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159635 = require("./159635.js"),
  s = require.n(Chunk159635),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk15470 = require("./15470.jsx"),
  Chunk960904 = require("./960904.js"),
  Chunk830121 = require("./830121.js"),
  Chunk746878 = require("./746878.js"),
  Chunk241209 = require("./241209.jsx");

function g(e) {
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
}
let _ = /^discord.gg\/[a-zA-Z0-9-]+/,
  f = (r = g({}, Chunk241209.Z.rules), a = a = {
    heading: g({}, Chunk15470.i.heading),
    image: g({}, s().defaultRules.image),
    inviteLink: {
      order: Chunk241209.Z.rules.link.order + 1,
      match: (e, t) => t.inline ? _.exec(e) : null,
      parse: (e, t, n) => {
        let r = (0, p.zO)(e[0]);
        return null == r || r.type !== u.g.INVITE ? {
          type: "text",
          content: e[0]
        } : {
          type: "inviteLink",
          content: [{
            type: "text",
            content: e[0]
          }],
          onClick: () => {
            var e;
            c.ZP.acceptInviteAndTransitionToInviteChannel({
              inviteKey: r.code,
              context: {
                location: "Application Directory"
              }
            }), null == (e = n.closeModal) || e.call(n)
          }
        }
      },
      react: (e, t, n) => (0, i.jsx)(o.Anchor, {
        onClick: t => {
          t.preventDefault(), e.onClick()
        },
        children: (0, m.S)(e, t, n)
      }, n.key)
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
  }), r)