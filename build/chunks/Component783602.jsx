/** Chunk was on 22477 **/
/** chunk id: 783602, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk270045 = require("./270045.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk729836 = require("./729836.js");

function h() {
  let {
    quest: e,
    onCtxMenuOpen: t,
    onCtxMenuClose: n,
    onCtxMenuSelect: i
  } = l.useContext(u.T), h = (0, c.S5)(e.config.expiresAt);
  return (0, a.jsxs)("div", {
    className: p.pS,
    children: [(0, a.jsx)(s.Text, {
      variant: "text-xxs/medium",
      className: r()(p.Uu, p.TK),
      children: m.intl.format(m.t["pX+fmn"], {
        expirationDate: h
      })
    }), (0, a.jsx)(d.C, {
      onOpen: t,
      onClose: n,
      onSelect: i,
      questContent: o.uF.QUEST_BAR_V2,
      quest: e,
      shouldShowDisclosure: false,
      showShareLink: true,
      sourceQuestContent: o.uF.QUEST_BAR_V2,
      children: e => {
        var t, n;
        return (0, a.jsx)(s.DUT, (t = function(e) {
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
        }({}, e), n = n = {
          className: p.rb,
          "aria-label": m.intl.string(m.t.DEoVWZ),
          children: (0, a.jsx)(s.jNK, {
            size: "md",
            color: "currentColor",
            className: r()(p.Bx, p.U9)
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })]
  })
}