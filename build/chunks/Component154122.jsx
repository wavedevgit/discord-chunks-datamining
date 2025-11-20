/** Chunk was on 86948 **/
/** chunk id: 154122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk518950 = require("./518950.js"),
  Chunk342386 = require("./342386.js"),
  Chunk51144 = require("./51144.js"),
  Chunk606097 = require("./606097.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456577 = require("./456577.js");
let f = e => {
  let {
    recipient: t,
    isSuccess: n,
    onClose: i
  } = e, {
    avatarSrc: f,
    eventHandlers: p
  } = (0, l.Z)({
    userId: null == t ? true : t.id,
    size: s.EFr.SIZE_56
  }), m = u.ZP.getName(t), y = !n;
  return (0, r.jsxs)("div", {
    className: h.row,
    children: [(0, r.jsx)(s.qEK, function(e) {
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
      imageClassName: a()({
        [h.erroredAvatar]: y
      }),
      src: f,
      "aria-label": m,
      size: s.EFr.SIZE_32
    }, p)), y ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.Text, {
        className: h.error,
        variant: "text-md/medium",
        color: "text-primary",
        children: m
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        className: h.error,
        color: "text-primary",
        children: b.intl.format(d.default["Y/oMwY"], {
          userName: m
        })
      })]
    }) : (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: h.displayName,
      color: "text-primary",
      children: m
    }), (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      text: b.intl.string(b.t["g33r/P"]),
      icon: s.kBi,
      onClick: () => {
        var e;
        return e = t.id, void((0, c.default)(), o.Z.openPrivateChannel({
          recipientIds: e
        }), i())
      }
    })]
  })
}