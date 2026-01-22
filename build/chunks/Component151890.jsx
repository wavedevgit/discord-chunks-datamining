/** Chunk was on 28636 **/
/** chunk id: 151890, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./747238.js");
var l, a, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk280230 = require("./280230.js"),
  s = require.n(Chunk280230),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk179389 = require("./179389.jsx"),
  Chunk167189 = require("./167189.js"),
  Chunk833291 = require("./833291.js"),
  Chunk365526 = require("./365526.js"),
  Chunk558179 = require("./558179.jsx");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let f = /^discord.gg\/[a-zA-Z0-9-]+/,
  g = (l = b({}, Chunk558179.A.rules), a = a = {
    heading: b({}, Chunk179389.i.heading),
    image: b({}, s().defaultRules.image),
    inviteLink: {
      order: Chunk558179.A.rules.link.order + 1,
      match: (e, t) => t.inline ? f.exec(e) : null,
      parse: (e, t, n) => {
        let l = (0, p.br)(e[0]);
        return null == l || l.type !== u.I.INVITE ? {
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
            o.Ay.acceptInviteAndTransitionToInviteChannel({
              inviteKey: l.code,
              context: {
                location: "Application Directory"
              }
            }), null == (e = n.closeModal) || e.call(n)
          }
        }
      },
      react: (e, t, n) => (0, r.jsx)(c.MzZ, {
        onClick: t => {
          t.preventDefault(), e.onClick()
        },
        children: (0, h.t)(e, t, n)
      }, n.key)
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
  }), l)