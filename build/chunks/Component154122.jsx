/** Chunk was on 86948 **/
/** chunk id: 154122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk518950 = require("./518950.js"),
  Chunk342386 = require("./342386.js"),
  Chunk51144 = require("./51144.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116741 = require("./116741.js");
let d = e => {
  let {
    recipient: t,
    isSuccess: n,
    onClose: s
  } = e, {
    avatarSrc: d,
    eventHandlers: g
  } = (0, o.Z)({
    userId: null == t ? true : t.id,
    size: a.EFr.SIZE_56
  }), b = u.ZP.getName(t), v = !n;
  return (0, r.jsxs)("div", {
    className: l()(h.row, {
      [h.error]: v
    }),
    children: [(0, r.jsx)(a.qEK, function(e) {
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
      src: d,
      "aria-label": b,
      size: a.EFr.SIZE_32
    }, g)), (0, r.jsxs)("div", {
      className: h.content,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        className: h.displayName,
        children: b
      }), v && (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-strong",
        className: h.errorText,
        children: f.intl.format(p.default["Y/oMwY"], {
          userName: b
        })
      })]
    }), n && (0, r.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: f.intl.string(f.t["g33r/P"]),
      icon: a.kBi,
      onClick: () => {
        var e;
        return e = t.id, void((0, c.default)(), i.Z.openPrivateChannel({
          recipientIds: e
        }), s())
      }
    })]
  })
}