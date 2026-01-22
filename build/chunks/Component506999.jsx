/** Chunk was on 21738 **/
/** chunk id: 506999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk875515 = require("./875515.js");
let s = e => {
  let {
    hasHub: t
  } = e;
  return (0, r.jsxs)("div", {
    className: a.kL,
    children: [(0, r.jsx)("div", {
      className: a.zc,
      children: (0, r.jsx)(i.Pfh, {
        size: "md",
        color: i.LU0.colors.WHITE.css
      })
    }), (0, r.jsx)(i.Text, {
      color: "text-strong",
      variant: "text-lg/semibold",
      className: a.wx,
      children: t ? l.intl.string(l.t.hsSHh8) : l.intl.string(l.t.Wf6iij)
    }), (0, r.jsx)(i.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: a.__invalid_description,
      children: t ? l.intl.string(l.t.FZ2J3Y) : l.intl.string(l.t.TvHcv6)
    }), (0, r.jsx)("div", {
      className: a.rQ
    }), (0, r.jsx)(i.Button, {
      fullWidth: true,
      variant: t ? "secondary" : "active",
      onClick: () => (0, i.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("98363"), n.e("4543")]).then(n.bind(n, 780086));
        return t => (0, r.jsx)(e, function(e) {
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
        }({}, t))
      }),
      text: t ? l.intl.string(l.t.IyjHD9) : l.intl.string(l.t["KU/aN4"])
    })]
  })
}