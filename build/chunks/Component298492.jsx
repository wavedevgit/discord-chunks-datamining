/** Chunk was on 73987 **/
/** chunk id: 298492, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk854627 = require("./854627.js"),
  Chunk12901 = require("./12901.js"),
  Chunk427262 = require("./427262.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk712685 = require("./712685.js");
let b = e => {
  let {
    recipient: t,
    isSuccess: r,
    onClose: s
  } = e, {
    avatarSrc: b,
    eventHandlers: g
  } = (0, c.A)({
    userId: null == t ? true : t.id,
    size: l._3J.SIZE_56
  }), m = u.Ay.getName(t), y = !r;
  return (0, n.jsxs)("div", {
    className: i()(p.nM, {
      [p.z3]: y
    }),
    children: [(0, n.jsx)(l.euF, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      src: b,
      "aria-label": m,
      size: l._3J.SIZE_32
    }, g)), (0, n.jsxs)("div", {
      className: p.Qs,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        className: p.QC,
        children: m
      }), y && (0, n.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-strong",
        className: p.kc,
        children: f.intl.format(d.default["Y/oMwY"], {
          userName: m
        })
      })]
    }), r && (0, n.jsx)(l.Button, {
      variant: "secondary",
      size: "sm",
      text: f.intl.string(f.t["g33r/P"]),
      icon: l.oyn,
      onClick: () => {
        var e;
        return e = t.id, void((0, o.default)(), a.A.openPrivateChannel({
          recipientIds: e
        }), s())
      }
    })]
  })
}