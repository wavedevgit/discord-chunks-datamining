/** Chunk was on 68197 **/
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
    user: i,
    row: m,
    hideDiscriminator: g,
    comparator: b,
    selected: y,
    checked: _,
    disabled: C = false,
    inlineUsername: v = true,
    onClick: x,
    onMouseEnter: O,
    "aria-setsize": j,
    "aria-posinset": E
  } = e, S = (0, o.e7)([p.Z], () => p.Z.getStatus(i.id)), I = (0, a.JA)(String(i.id));
  return (0, r.jsx)(s.P3F, (t = function(e) {
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
  }({
    id: "user-row-".concat(m),
    className: l()(f.friendWrapper, {
      [f.disabled]: C
    }),
    onClick: () => {
      null != x && x(i.id)
    },
    onMouseEnter: () => {
      null != O && O(m)
    }
  }, I), n = n = {
    role: "option",
    "aria-selected": _,
    "aria-disabled": C,
    "aria-setsize": j,
    "aria-posinset": E,
    children: (0, r.jsxs)(d.Z, {
      align: d.Z.Align.CENTER,
      className: l()(f.friend, {
        [f.friendSelected]: y,
        [f.twoRows]: !v
      }),
      children: [(0, r.jsx)(u.Z, {
        user: i,
        status: S,
        className: f.avatar
      }), (0, r.jsxs)(d.Z, {
        className: f.match,
        align: d.Z.Align.BASELINE,
        direction: v ? d.Z.Direction.HORIZONTAL : d.Z.Direction.VERTICAL,
        children: [(0, r.jsx)(s.Text, {
          tag: "strong",
          className: f.nickname,
          "aria-hidden": true,
          variant: "text-md/medium",
          children: null != b && b === i.tag ? h.ZP.getName(i) : null != b && "" !== b ? b : h.ZP.getName(i)
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, r.jsx)(c.Z, {
            user: i,
            hideDiscriminator: g,
            className: f.discordTag,
            usernameClass: f.__invalid_weightMedium,
            discriminatorClass: f.__invalid_weightMedium,
            forceUsername: true
          })
        })]
      }), (0, r.jsx)(s.XZJ, {
        displayOnly: true,
        size: 22,
        value: _,
        disabled: C,
        className: f.checkbox
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}