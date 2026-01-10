/** Chunk was on 84249 **/
/** chunk id: 26275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk698716 = require("./698716.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782589 = require("./782589.js");

function h() {
  let {
    quest: e,
    onCtxMenuOpen: t,
    onCtxMenuClose: n,
    onCtxMenuSelect: i
  } = r.useContext(u.A), h = (0, c.B6)(e.config.expiresAt);
  return (0, a.jsxs)("div", {
    className: p.questAcceptedHeader,
    children: [(0, a.jsx)(s.Text, {
      variant: "text-xxs/medium",
      className: l()(p.flex, p.headerText),
      children: m.intl.format(m.t["pX+fmn"], {
        expirationDate: h
      })
    }), (0, a.jsx)(d.i, {
      onOpen: t,
      onClose: n,
      onSelect: i,
      questContent: o.jn.QUEST_BAR_V2,
      quest: e,
      shouldShowDisclosure: false,
      showShareLink: true,
      sourceQuestContent: o.jn.QUEST_BAR_V2,
      children: e => {
        var t, n;
        return (0, a.jsx)(s.P3F, (t = function(e) {
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
          className: p.submenuWrapper,
          "aria-label": m.intl.string(m.t.DEoVWZ),
          children: (0, a.jsx)(s.xhG, {
            size: "md",
            color: "currentColor",
            className: l()(p.submenuIcon, p.interactiveNormal)
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