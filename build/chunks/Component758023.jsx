/** Chunk was on 39048 **/
/** chunk id: 758023, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk374084 = require("./374084.js"),
  Chunk913423 = require("./913423.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk817136 = require("./817136.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659233 = require("./659233.js");
let x = function(e) {
  let {
    guildId: t
  } = e, l = (0, a.cf)([p.A], () => {
    var e;
    return null != (e = p.A.getSettings().welcomeMessage) ? e : f.p
  }), x = i.useCallback(() => (0, c.mMO)(async () => {
    let {
      default: e
    } = await n.e("94194").then(n.bind(n, 930345));
    return n => {
      var i, s;
      return (0, r.jsx)(e, (i = function(e) {
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
      }({}, n), s = s = {
        guildId: t,
        welcomeMessage: l,
        onSave: e => (0, m.hL)(e)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
      }), i))
    }
  }), [t, l]), j = (0, a.bG)([g.default], () => g.default.getId());
  return (0, d.Fn)(l) ? (0, r.jsx)(c.Button, {
    variant: "primary",
    size: "sm",
    text: h.intl.string(h.t["9Z+aEP"]),
    onClick: x
  }) : (0, r.jsxs)(c.DUT, {
    className: b.ab,
    onClick: x,
    children: [(0, r.jsx)(u.A, {
      guildId: t,
      welcomeMessage: {
        authorIds: l.authorIds.length > 0 ? l.authorIds : [j],
        message: l.message
      }
    }), (0, r.jsx)(o.m, {
      text: h.intl.string(h.t.bt75uw),
      children: (0, r.jsxs)("div", {
        className: s()(b.Md, b.Tu),
        children: [(0, r.jsx)(c.R2l, {
          size: "md",
          color: "currentColor"
        }), (0, r.jsx)(c.AC4, {
          children: h.intl.string(h.t.bt75uw)
        })]
      })
    })]
  })
}