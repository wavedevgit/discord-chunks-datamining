/** Chunk was on 384 **/
/** chunk id: 806742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk734893 = require("./734893.js"),
  Chunk150512 = require("./150512.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk535907 = require("./535907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197530 = require("./197530.js");
let x = function(e) {
  let {
    guildId: t
  } = e, l = (0, s.cj)([p.Z], () => {
    var e;
    return null != (e = p.Z.getSettings().welcomeMessage) ? e : f.z
  }), x = i.useCallback(() => (0, c.ZDy)(async () => {
    let {
      default: e
    } = await n.e("36371").then(n.bind(n, 893626));
    return n => {
      var i, a;
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
      }({}, n), a = a = {
        guildId: t,
        welcomeMessage: l,
        onSave: e => (0, m._N)(e)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
      }), i))
    }
  }), [t, l]), j = (0, s.e7)([g.default], () => g.default.getId());
  return (0, d.pw)(l) ? (0, r.jsx)(c.Button, {
    variant: "primary",
    size: "sm",
    text: h.intl.string(h.t["9Z+aEP"]),
    onClick: x
  }) : (0, r.jsxs)(c.P3F, {
    className: b.editWelcomeSection,
    onClick: x,
    children: [(0, r.jsx)(u.Z, {
      guildId: t,
      welcomeMessage: {
        authorIds: l.authorIds.length > 0 ? l.authorIds : [j],
        message: l.message
      }
    }), (0, r.jsx)(o.u, {
      text: h.intl.string(h.t.bt75uw),
      children: (0, r.jsxs)("div", {
        className: a()(b.actionItemEditButton, b.editWelcomeButton),
        children: [(0, r.jsx)(c.vdY, {
          size: "md",
          color: "currentColor"
        }), (0, r.jsx)(c.nn4, {
          children: h.intl.string(h.t.bt75uw)
        })]
      })
    })]
  })
}