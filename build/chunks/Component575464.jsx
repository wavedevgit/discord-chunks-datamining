/** Chunk was on 81985 **/
/** chunk id: 575464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk828377 = require("./828377.js");

function g(e) {
  var t, n;
  let {
    user: i,
    row: g,
    hideDiscriminator: m,
    comparator: b,
    selected: y,
    checked: v,
    disabled: O = false,
    onClick: j,
    onMouseEnter: x,
    "aria-setsize": C,
    "aria-posinset": E
  } = e, S = (0, o.e7)([p.Z], () => p.Z.getStatus(i.id)), _ = (0, a.JA)(String(i.id));
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
    id: "user-row-".concat(g),
    className: l()(h.friendWrapper, {
      [h.disabled]: O
    }),
    onClick: () => {
      null != j && j(i.id)
    },
    onMouseEnter: () => {
      null != x && x(g)
    }
  }, _), n = n = {
    role: "option",
    "aria-selected": v,
    "aria-disabled": O,
    "aria-setsize": C,
    "aria-posinset": E,
    children: (0, r.jsxs)(d.Z, {
      align: d.Z.Align.CENTER,
      className: l()(h.friend, {
        [h.friendSelected]: y
      }),
      children: [(0, r.jsx)(u.Z, {
        user: i,
        status: S,
        className: h.avatar
      }), (0, r.jsxs)(d.Z, {
        className: h.match,
        align: d.Z.Align.BASELINE,
        direction: d.Z.Direction.VERTICAL,
        children: [(0, r.jsx)(s.Text, {
          tag: "strong",
          className: h.nickname,
          "aria-hidden": true,
          variant: "text-md/medium",
          children: null != b && b === i.tag ? f.ZP.getName(i) : null != b && "" !== b ? b : f.ZP.getName(i)
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, r.jsx)(c.Z, {
            user: i,
            hideDiscriminator: m,
            className: h.discordTag,
            usernameClass: h.__invalid_weightMedium,
            discriminatorClass: h.__invalid_weightMedium,
            forceUsername: true
          })
        })]
      }), (0, r.jsx)(s.FZ5, {
        checked: v,
        disabled: O
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