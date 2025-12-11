/** Chunk was on 86948 **/
/** chunk id: 154122, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  J: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk518950 = require("./518950.js"),
  Chunk342386 = require("./342386.js"),
  Chunk51144 = require("./51144.js"),
  Chunk137427 = require("./137427.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116741 = require("./116741.js");
let b = e => {
  let {
    recipient: t,
    isSuccess: r,
    onClose: i
  } = e, {
    avatarSrc: b,
    eventHandlers: m
  } = (0, l.Z)({
    userId: null == t ? true : t.id,
    size: a.EFr.SIZE_56
  }), g = u.ZP.getName(t), y = !r;
  return (0, n.jsxs)("div", {
    className: p.row,
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
      imageClassName: s()({
        [p.erroredAvatar]: y
      }),
      src: b,
      "aria-label": g,
      size: a.EFr.SIZE_32
    }, m)), y ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(a.Text, {
        className: p.error,
        variant: "text-md/medium",
        color: "text-strong",
        children: g
      }), (0, n.jsx)(a.Text, {
        variant: "text-md/medium",
        className: p.error,
        color: "text-strong",
        children: d.intl.format(f.default["Y/oMwY"], {
          userName: g
        })
      })]
    }) : (0, n.jsx)(a.Text, {
      variant: "text-md/medium",
      className: p.displayName,
      color: "text-strong",
      children: g
    }), (0, n.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: d.intl.string(d.t["g33r/P"]),
      icon: a.kBi,
      onClick: () => {
        var e;
        return e = t.id, void((0, c.default)(), o.Z.openPrivateChannel({
          recipientIds: e
        }), i())
      }
    })]
  })
}