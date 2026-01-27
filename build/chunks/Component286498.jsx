/** Chunk was on 41727 **/
/** chunk id: 286498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk966327 = require("./966327.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk290863 = require("./290863.js"),
  Chunk427262 = require("./427262.js"),
  Chunk318880 = require("./318880.js");

function g(e) {
  var t, n;
  let {
    user: l,
    row: g,
    hideDiscriminator: m,
    comparator: b,
    selected: A,
    checked: y,
    disabled: _ = false,
    onClick: O,
    onMouseEnter: j,
    "aria-setsize": v,
    "aria-posinset": x
  } = e, E = (0, a.bG)([p.A], () => p.A.getStatus(l.id)), C = (0, s.rm)(String(l.id));
  return (0, r.jsx)(o.DUT, (t = function(e) {
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
    className: i()(f.Se, {
      [f.r9]: _
    }),
    onClick: () => {
      null != O && O(l.id)
    },
    onMouseEnter: () => {
      null != j && j(g)
    }
  }, C), n = n = {
    role: "option",
    "aria-selected": y,
    "aria-disabled": _,
    "aria-setsize": v,
    "aria-posinset": x,
    children: (0, r.jsxs)(d.A, {
      align: d.A.Align.CENTER,
      className: i()(f.Bc, {
        [f.oz]: A
      }),
      children: [(0, r.jsx)(u.A, {
        user: l,
        status: E,
        className: f.my
      }), (0, r.jsxs)(d.A, {
        className: f.YW,
        align: d.A.Align.BASELINE,
        direction: d.A.Direction.VERTICAL,
        children: [(0, r.jsx)(o.Text, {
          tag: "strong",
          className: f.$R,
          "aria-hidden": true,
          variant: "text-md/medium",
          children: null != b && b === l.tag ? h.Ay.getName(l) : null != b && "" !== b ? b : h.Ay.getName(l)
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, r.jsx)(c.A, {
            user: l,
            hideDiscriminator: m,
            className: f.xK,
            usernameClass: f.__invalid_weightMedium,
            discriminatorClass: f.__invalid_weightMedium,
            forceUsername: true
          })
        })]
      }), (0, r.jsx)(o.P7L, {
        checked: y,
        disabled: _
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