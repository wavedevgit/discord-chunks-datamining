/** Chunk was on 86642 **/
/** chunk id: 575464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk51144 = require("./51144.js"),
  Chunk469407 = require("./469407.js");

function m(e) {
  var t, n;
  let {
    user: r,
    row: m,
    hideDiscriminator: g,
    comparator: b,
    selected: y,
    checked: C,
    disabled: _ = false,
    inlineUsername: v = true,
    onClick: x,
    onMouseEnter: O,
    "aria-setsize": E,
    "aria-posinset": j
  } = e, S = (0, o.e7)([p.Z], () => p.Z.getStatus(r.id)), P = (0, a.JA)(String(r.id));
  return (0, i.jsx)(s.P3F, (t = function(e) {
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
    id: "user-row-".concat(m),
    className: l()(h.friendWrapper, {
      [h.disabled]: _
    }),
    onClick: () => {
      null != x && x(r.id)
    },
    onMouseEnter: () => {
      null != O && O(m)
    }
  }, P), n = n = {
    role: "option",
    "aria-selected": C,
    "aria-disabled": _,
    "aria-setsize": E,
    "aria-posinset": j,
    children: (0, i.jsxs)(d.Z, {
      align: d.Z.Align.CENTER,
      className: l()(h.friend, {
        [h.friendSelected]: y,
        [h.twoRows]: !v
      }),
      children: [(0, i.jsx)(u.Z, {
        user: r,
        status: S,
        className: h.avatar
      }), (0, i.jsxs)(d.Z, {
        className: h.match,
        align: d.Z.Align.BASELINE,
        direction: v ? d.Z.Direction.HORIZONTAL : d.Z.Direction.VERTICAL,
        children: [(0, i.jsx)(s.Text, {
          tag: "strong",
          className: h.nickname,
          "aria-hidden": true,
          variant: "text-md/medium",
          children: null != b && b === r.tag ? f.ZP.getName(r) : null != b && "" !== b ? b : f.ZP.getName(r)
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, i.jsx)(c.Z, {
            user: r,
            hideDiscriminator: g,
            className: h.discordTag,
            usernameClass: h.__invalid_weightMedium,
            discriminatorClass: h.__invalid_weightMedium,
            forceUsername: true
          })
        })]
      }), (0, i.jsx)(s.FZ5, {
        checked: C,
        disabled: _
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