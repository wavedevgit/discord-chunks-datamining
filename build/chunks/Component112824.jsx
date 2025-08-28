/** Chunk was on 88479 **/
/** chunk id: 112824, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => x,
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk647086 = require("./647086.js"),
  Chunk135899 = require("./135899.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824804 = require("./824804.js");

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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  return g.$X.filter(t => (null == e ? true : e.id) !== m._ && u.oz(t, e))
}

function j(e) {
  let {
    guild: t
  } = e, i = (0, s.e7)([c.Z], () => c.Z.getEveryoneRole(t)), u = x(t), m = u.length > 0, j = g.$X.some(e => !d.Z.can(e, t, null, {
    [i.id]: b(h({}, i), {
      permissions: a.Od(i.permissions, e)
    })
  })), _ = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: f.itemContent,
      children: [(0, r.jsx)(o.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: p.intl.string(p.t["+vaUlJ"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: p.intl.format(p.t.RXAtdH, {
          numPerms: u.length
        })
      })]
    }), m ? (0, r.jsx)(o.Mgn, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: f.warning,
      "aria-label": p.intl.string(p.t.bG7Gu7)
    }) : (0, r.jsx)(o.owK, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: f.check,
      "aria-label": p.intl.string(p.t["YQix8/"])
    })]
  });
  return m ? j ? (0, r.jsx)(o.ua7, {
    text: p.intl.string(p.t["E5v/a2"]),
    children: e => (0, r.jsx)("div", b(h({
      className: l()(f.simpleItemWrapper, f.disabled)
    }, e), {
      children: _
    }))
  }) : (0, r.jsx)(o.P3F, {
    onClick: () => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("39627").then(n.bind(n, 193845));
        return n => (0, r.jsx)(e, h({
          guild: t
        }, n))
      })
    },
    className: l()(f.simpleItemWrapper, f.clickable),
    children: _
  }) : (0, r.jsx)("div", {
    className: f.simpleItemWrapper,
    children: _
  })
}