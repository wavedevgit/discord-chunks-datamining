/** Chunk was on 86948 **/
/** chunk id: 154122, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  J: () => m
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
  Chunk606097 = require("./606097.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456577 = require("./456577.js");
let m = e => {
  let {
    recipient: t,
    isSuccess: r,
    onClose: i
  } = e, {
    avatarSrc: m,
    eventHandlers: b
  } = (0, l.Z)({
    userId: null == t ? true : t.id,
    size: a.EFr.SIZE_56
  }), y = u.ZP.getName(t), h = !r;
  return (0, n.jsxs)("div", {
    className: f.row,
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
        [f.erroredAvatar]: h
      }),
      src: m,
      "aria-label": y,
      size: a.EFr.SIZE_32
    }, b)), h ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(a.Text, {
        className: f.error,
        variant: "text-md/medium",
        color: "text-primary",
        children: y
      }), (0, n.jsx)(a.Text, {
        variant: "text-md/medium",
        className: f.error,
        color: "text-primary",
        children: p.intl.format(d.default["Y/oMwY"], {
          userName: y
        })
      })]
    }) : (0, n.jsx)(a.Text, {
      variant: "text-md/medium",
      className: f.displayName,
      color: "text-primary",
      children: y
    }), (0, n.jsx)(a.Button, {
      variant: "secondary",
      size: "sm",
      text: p.intl.string(p.t["g33r/P"]),
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