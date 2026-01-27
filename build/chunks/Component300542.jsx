/** Chunk was on 2292 **/
/** chunk id: 300542, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk560138 = require("./560138.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk521512 = require("./521512.js");

function d() {
  let e = (0, l.bG)([o.A], () => o.A.affinities.slice(0, 3)),
    t = e[0],
    {
      avatarSrc: r,
      eventHandlers: d
    } = (0, s.A)({
      userId: null == t ? true : t.id,
      size: a._3J.SIZE_24,
      animateOnHover: true
    }),
    m = e => null != e.globalName ? e.globalName : e.username,
    p = i.useMemo(() => e.length >= 2 ? c.intl.formatToPlainString(c.t.c7ETJH, {
      username: m(e[0])
    }) : 1 === e.length ? c.intl.formatToPlainString(c.t.dpjXPL, {
      username: m(e[0])
    }) : "", [e]);
  return 0 === e.length ? null : (0, n.jsxs)("div", {
    className: u.kL,
    children: [(0, n.jsx)(a.euF, function(e) {
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
      className: u.__invalid_icon,
      src: r,
      "aria-label": t.username,
      size: a._3J.SIZE_24
    }, d)), (0, n.jsx)(a.Text, {
      className: u.Qq,
      variant: "text-sm/normal",
      color: "always-white",
      children: p
    })]
  })
}