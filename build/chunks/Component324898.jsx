/** Chunk was on 47841 **/
/** chunk id: 324898, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j,
  W: () => x
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
  return p.dR.filter(t => (null == e ? true : e.id) !== m.V && g.Ib(t, e))
}

function j(e) {
  let {
    guild: t
  } = e, i = (0, a.bG)([d.A], () => d.A.getEveryoneRole(t)), g = x(t), m = g.length > 0, j = p.dR.some(e => {
    var n, r;
    return !u.A.can(e, t, null, {
      [i.id]: (n = h({}, i), r = r = {
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
  }), _ = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: b.Ly,
      children: [(0, r.jsx)(c.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: f.intl.string(f.t["+vaUlM"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: f.intl.format(f.t.RXAtdO, {
          numPerms: g.length
        })
      })]
    }), m ? (0, r.jsx)(c.EpV, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: b.$e,
      "aria-label": f.intl.string(f.t["bG7Gu+"])
    }) : (0, r.jsx)(c.yr3, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: b.z6,
      "aria-label": f.intl.string(f.t.YQix8y)
    })]
  });
  return m ? j ? (0, r.jsx)(o.m, {
    text: f.intl.string(f.t["E5v/a/"]),
    children: (0, r.jsx)("div", {
      className: l()(b.ph, b.r9),
      children: _
    })
  }) : (0, r.jsx)(c.DUT, {
    onClick: () => {
      (0, c.mMO)(async () => {
        let {
          default: e
        } = await n.e("94286").then(n.bind(n, 868952));
        return n => (0, r.jsx)(e, h({
          guild: t
        }, n))
      })
    },
    className: l()(b.ph, b.vk),
    children: _
  }) : (0, r.jsx)("div", {
    className: b.ph,
    children: _
  })
}