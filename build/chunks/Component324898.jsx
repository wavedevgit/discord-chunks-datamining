/** Chunk was on 47841 **/
/** chunk id: 324898, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j,
  W: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk488926 = require("./488926.js"),
  Chunk349828 = require("./349828.js"),
  Chunk124759 = require("./124759.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk690450 = require("./690450.js");

function x(e) {
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

function h(e) {
  return b.dR.filter(t => (null == e ? true : e.id) !== g.V && f.Ib(t, e))
}

function j(e) {
  let {
    guild: t
  } = e, i = (0, a.bG)([d.A], () => d.A.getEveryoneRole(t)), f = h(t), g = f.length > 0, j = b.dR.some(e => {
    var n, r;
    return !u.A.can(e, t, null, {
      [i.id]: (n = x({}, i), r = r = {
        permissions: s.TF(i.permissions, e)
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
  }), O = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: p.Ly,
      children: [(0, r.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: m.intl.string(m.t["+vaUlM"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: m.intl.format(m.t.RXAtdO, {
          numPerms: f.length
        })
      })]
    }), g ? (0, r.jsx)(o.EpV, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: p.$e,
      "aria-label": m.intl.string(m.t["bG7Gu+"])
    }) : (0, r.jsx)(o.yr3, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: p.z6,
      "aria-label": m.intl.string(m.t.YQix8y)
    })]
  });
  return g ? j ? (0, r.jsx)(c.m, {
    text: m.intl.string(m.t["E5v/a/"]),
    children: (0, r.jsx)("div", {
      className: l()(p.ph, p.r9),
      children: O
    })
  }) : (0, r.jsx)(o.DUT, {
    onClick: () => {
      (0, o.mMO)(async () => {
        let {
          default: e
        } = await n.e("94286").then(n.bind(n, 868952));
        return n => (0, r.jsx)(e, x({
          guild: t
        }, n))
      })
    },
    className: l()(p.ph, p.vk),
    children: O
  }) : (0, r.jsx)("div", {
    className: p.ph,
    children: O
  })
}