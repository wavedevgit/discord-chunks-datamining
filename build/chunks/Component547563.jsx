/** Chunk was on 92504 **/
/** chunk id: 547563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./35282.js");
var a, r, Chunk54381 = require("./54381.js");
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

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}
let g = /^discord.gg\/[a-zA-Z0-9-]+/,
  b = (a = f({}, Chunk241209.Z.rules), r = r = {
    heading: f({}, Chunk15470.i.heading),
    image: f({}, s().defaultRules.image),
    inviteLink: {
      order: Chunk241209.Z.rules.link.order + 1,
      match: (e, t) => t.inline ? g.exec(e) : null,
      parse: (e, t, n) => {
        let a = (0, p.zO)(e[0]);
        return null == a || a.type !== u.g.INVITE ? {
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
              inviteKey: a.code,
              context: {
                location: "Application Directory"
              }
            }), null == (e = n.closeModal) || e.call(n)
          }
        }
      },
      react: (e, t, n) => (0, i.jsx)(o.eee, {
        onClick: t => {
          t.preventDefault(), e.onClick()
        },
        children: (0, m.S)(e, t, n)
      }, n.key)
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e))
  }), a)