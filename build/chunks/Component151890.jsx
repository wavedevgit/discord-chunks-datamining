/** Chunk was on 28636 **/
/** chunk id: 151890, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./747238.js");
var r, l, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk791332 = require("./791332.js"),
  s = require.n(Chunk791332),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk179389 = require("./179389.jsx"),
  Chunk167189 = require("./167189.js"),
  Chunk833291 = require("./833291.js"),
  Chunk365526 = require("./365526.js"),
  Chunk558179 = require("./558179.jsx");

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
  b = (r = g({}, Chunk558179.A.rules), l = l = {
    heading: g({}, Chunk179389.i.heading),
    image: g({}, s().defaultRules.image),
    inviteLink: {
      order: Chunk558179.A.rules.link.order + 1,
      match: (e, t) => t.inline ? _.exec(e) : null,
      parse: (e, t, n) => {
        let r = (0, p.br)(e[0]);
        return null == r || r.type !== u.I.INVITE ? {
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
            c.Ay.acceptInviteAndTransitionToInviteChannel({
              inviteKey: r.code,
              context: {
                location: "Application Directory"
              }
            }), null == (e = n.closeModal) || e.call(n)
          }
        }
      },
      react: (e, t, n) => (0, i.jsx)(o.MzZ, {
        onClick: t => {
          t.preventDefault(), e.onClick()
        },
        children: (0, h.t)(e, t, n)
      }, n.key)
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(l)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
  }), r)