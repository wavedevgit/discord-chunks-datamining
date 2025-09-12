/** Chunk was on 39159 **/
/** chunk id: 748745, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk880419 = require("./880419.jsx"),
  Chunk967647 = require("./967647.jsx"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362320 = require("./362320.js"),
  Chunk961820 = require("./961820.js");

function f(e) {
  let {
    gameInstance: n
  } = e;
  return (0, i.jsx)(o.ua7, {
    "aria-label": m.intl.string(u.default.TZsu1d),
    text: (0, i.jsx)(c.Po, {
      cost: 0
    }),
    children: e => {
      var t, r;
      return (0, i.jsx)(l.zx, (t = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.forEach(function(n) {
            var i;
            i = t[n], n in e ? Object.defineProperty(e, n, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = i
          })
        }
        return e
      }({}, e), r = r = {
        className: a()(g.secondaryButton, p.disableButton),
        innerClassName: g.buttonInner,
        wrapperClassName: g.secondaryButton,
        color: l.Tt.PRIMARY,
        "aria-label": m.intl.string(u.default.TZsu1d),
        onClick: e => {
          e.stopPropagation(), (0, d.Q)(n)
        },
        children: (0, i.jsx)(c.RD, {
          cost: 0,
          isActive: true,
          compact: true
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t.push.apply(t, i)
        }
        return t
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }
  })
}

function v(e) {
  let {
    gameInstance: n,
    onClick: t
  } = e;
  return (0, i.jsxs)(o.P3F, {
    className: p.game,
    onClick: () => t(n),
    children: [(0, i.jsx)("img", {
      className: p.image,
      alt: ""
    }), (0, i.jsxs)("div", {
      className: p.textContainer,
      children: [(0, i.jsx)(o.X6q, {
        variant: "heading-sm/semibold",
        children: n.name
      }), (0, i.jsx)(s.P2, {
        text: m.intl.string(u.default.FFLkm5)
      })]
    }), (0, i.jsx)(f, {
      gameInstance: n
    })]
  })
}