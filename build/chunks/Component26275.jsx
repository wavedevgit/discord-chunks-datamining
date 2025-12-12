/** Chunk was on 23736 **/
/** chunk id: 26275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk698716 = require("./698716.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782589 = require("./782589.js");

function m(e) {
  let {
    quest: t,
    onCtxMenuOpen: n,
    onCtxMenuClose: r,
    onCtxMenuSelect: m
  } = e, p = (0, o.B6)(t.config.expiresAt);
  return (0, a.jsxs)("div", {
    className: u.questAcceptedHeader,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-xxs/medium",
      className: i()(u.flex, u.headerText),
      children: d.intl.format(d.t["pX+fmn"], {
        expirationDate: p
      })
    }), (0, a.jsx)(c.i, {
      onOpen: n,
      onClose: r,
      onSelect: m,
      questContent: s.jn.QUEST_BAR_V2,
      quest: t,
      shouldShowDisclosure: false,
      showShareLink: true,
      sourceQuestContent: s.jn.QUEST_BAR_V2,
      children: e => {
        var t, n;
        return (0, a.jsx)(l.P3F, (t = function(e) {
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
          className: u.submenuWrapper,
          "aria-label": d.intl.string(d.t.DEoVWZ),
          children: (0, a.jsx)(l.xhG, {
            size: "md",
            color: "currentColor",
            className: i()(u.submenuIcon, u.interactiveNormal)
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