/** Chunk was on 97492 **/
/** chunk id: 286498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  var t, n;
  let {
    user: l,
    row: b,
    hideDiscriminator: g,
    comparator: m,
    selected: A,
    checked: y,
    disabled: O = false,
    onClick: j,
    onMouseEnter: v,
    "aria-setsize": x,
    "aria-posinset": E
  } = e, _ = (0, s.bG)([f.A], () => f.A.getStatus(l.id)), C = (0, a.rm)(String(l.id));
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
    id: "user-row-".concat(b),
    className: i()(h.Se, {
      [h.r9]: O
    }),
    onClick: () => {
      null != j && j(l.id)
    },
    onMouseEnter: () => {
      null != v && v(b)
    }
  }, C), n = n = {
    role: "option",
    "aria-selected": y,
    "aria-disabled": O,
    "aria-setsize": x,
    "aria-posinset": E,
    children: (0, r.jsxs)(d.A, {
      align: d.A.Align.CENTER,
      className: i()(h.Bc, {
        [h.oz]: A
      }),
      children: [(0, r.jsx)(u.A, {
        user: l,
        status: _,
        className: h.my
      }), (0, r.jsxs)(d.A, {
        className: h.YW,
        align: d.A.Align.BASELINE,
        direction: d.A.Direction.VERTICAL,
        children: [(0, r.jsx)(o.Text, {
          tag: "strong",
          className: h.$R,
          "aria-hidden": true,
          variant: "text-md/medium",
          children: null != m && m === l.tag ? p.Ay.getName(l) : null != m && "" !== m ? m : p.Ay.getName(l)
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, r.jsx)(c.A, {
            user: l,
            hideDiscriminator: g,
            className: h.xK,
            usernameClass: h.__invalid_weightMedium,
            discriminatorClass: h.__invalid_weightMedium,
            forceUsername: true
          })
        })]
      }), (0, r.jsx)(o.P7L, {
        checked: y,
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