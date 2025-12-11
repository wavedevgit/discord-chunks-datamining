/** Chunk was on 9536 **/
/** chunk id: 112824, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => x,
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk647086 = require("./647086.js"),
  Chunk135899 = require("./135899.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk146473 = require("./146473.js");

function h(e) {
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

function x(e) {
  return f.$X.filter(t => (null == e ? true : e.id) !== m._ && g.oz(t, e))
}

function j(e) {
  let {
    guild: t
  } = e, i = (0, s.e7)([d.Z], () => d.Z.getEveryoneRole(t)), g = x(t), m = g.length > 0, j = f.$X.some(e => {
    var n, r;
    return !u.Z.can(e, t, null, {
      [i.id]: (n = h({}, i), r = r = {
        permissions: a.Od(i.permissions, e)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n)
    })
  }), v = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: b.itemContent,
      children: [(0, r.jsx)(c.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: p.intl.string(p.t["+vaUlM"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: p.intl.format(p.t.RXAtdO, {
          numPerms: g.length
        })
      })]
    }), m ? (0, r.jsx)(c.Mgn, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: b.warning,
      "aria-label": p.intl.string(p.t["bG7Gu+"])
    }) : (0, r.jsx)(c.owK, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: b.check,
      "aria-label": p.intl.string(p.t.YQix8y)
    })]
  });
  return m ? j ? (0, r.jsx)(o.u, {
    text: p.intl.string(p.t["E5v/a/"]),
    children: (0, r.jsx)("div", {
      className: l()(b.simpleItemWrapper, b.disabled),
      children: v
    })
  }) : (0, r.jsx)(c.P3F, {
    onClick: () => {
      (0, c.ZDy)(async () => {
        let {
          default: e
        } = await n.e("39627").then(n.bind(n, 193845));
        return n => (0, r.jsx)(e, h({
          guild: t
        }, n))
      })
    },
    className: l()(b.simpleItemWrapper, b.clickable),
    children: v
  }) : (0, r.jsx)("div", {
    className: b.simpleItemWrapper,
    children: v
  })
}