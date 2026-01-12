/** Chunk was on 86948 **/
/** chunk id: 154122, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  J: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk518950 = require("./518950.js"),
  Chunk342386 = require("./342386.js"),
  Chunk51144 = require("./51144.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116741 = require("./116741.js");
let p = e => {
  let {
    recipient: t,
    isSuccess: r,
    onClose: s
  } = e, {
    avatarSrc: p,
    eventHandlers: m
  } = (0, o.Z)({
    userId: null == t ? true : t.id,
    size: a.EFr.SIZE_56
  }), g = u.ZP.getName(t), h = !r;
  return (0, n.jsxs)("div", {
    className: i()(b.row, {
      [b.error]: h
    }),
    children: [(0, n.jsx)(a.qEK, function(e) {
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
      src: p,
      "aria-label": g,
      size: a.EFr.SIZE_32
    }, m)), (0, n.jsxs)("div", {
      className: b.content,
      children: [(0, n.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        className: b.displayName,
        children: g
      }), h && (0, n.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-strong",
        className: b.errorText,
        children: f.intl.format(d.default["Y/oMwY"], {
          userName: g
        })
      })]
    }), r && (0, n.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: f.intl.string(f.t["g33r/P"]),
      icon: a.kBi,
      onClick: () => {
        var e;
        return e = t.id, void((0, c.default)(), l.Z.openPrivateChannel({
          recipientIds: e
        }), s())
      }
    })]
  })
}