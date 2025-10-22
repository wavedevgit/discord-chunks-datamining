/** Chunk was on 9145 **/
/** chunk id: 575464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk51144 = require("./51144.js"),
  Chunk964725 = require("./964725.js");

function g(e) {
  var t, n;
  let {
    user: r,
    row: g,
    hideDiscriminator: b,
    comparator: C,
    selected: y,
    checked: _,
    disabled: v = false,
    inlineUsername: x = true,
    onClick: O,
    onMouseEnter: j,
    "aria-setsize": E,
    "aria-posinset": S
  } = e, P = (0, o.e7)([h.Z], () => h.Z.getStatus(r.id)), I = (0, a.JA)(String(r.id));
  return (0, i.jsx)(c.P3F, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({
    id: "user-row-".concat(g),
    className: l()(m.friendWrapper, {
      [m.disabled]: v
    }),
    onClick: () => {
      null != O && O(r.id)
    },
    onMouseEnter: () => {
      null != j && j(g)
    }
  }, I), n = n = {
    role: "option",
    "aria-selected": _,
    "aria-disabled": v,
    "aria-setsize": E,
    "aria-posinset": S,
    children: (0, i.jsxs)(p.Z, {
      align: p.Z.Align.CENTER,
      className: l()(m.friend, {
        [m.friendSelected]: y,
        [m.twoRows]: !x
      }),
      children: [(0, i.jsx)(d.Z, {
        user: r,
        status: P,
        className: m.avatar
      }), (0, i.jsxs)(p.Z, {
        className: m.match,
        align: p.Z.Align.BASELINE,
        direction: x ? p.Z.Direction.HORIZONTAL : p.Z.Direction.VERTICAL,
        children: [(0, i.jsx)(c.Text, {
          tag: "strong",
          className: m.nickname,
          "aria-hidden": true,
          variant: "text-md/medium",
          children: null != C && C === r.tag ? f.ZP.getName(r) : null != C && "" !== C ? C : f.ZP.getName(r)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, i.jsx)(u.Z, {
            user: r,
            hideDiscriminator: b,
            className: m.discordTag,
            usernameClass: m.__invalid_weightMedium,
            discriminatorClass: m.__invalid_weightMedium,
            forceUsername: true
          })
        })]
      }), (0, i.jsx)(s.$q, {
        displayOnly: true,
        size: 22,
        value: _,
        disabled: v,
        className: m.checkbox
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}