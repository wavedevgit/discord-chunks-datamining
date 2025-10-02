/** Chunk was on 9452 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => a,
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk843816 = require("./843816.js");

function a(e) {
  let {
    onClick: t,
    active: n,
    children: l
  } = e;
  return (0, i.jsx)(u.P3F, {
    className: r()(s.item, {
      [s.active]: n
    }),
    onClick: t,
    children: l
  })
}

function o(e) {
  var {
    onClick: t,
    active: n
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, i, l = function(e, t) {
      if (null == e) return {};
      var n, i, l = {},
        r = Object.keys(e);
      for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["onClick", "active"]);
  if ("render" in l) {
    let {
      render: e
    } = l;
    return (0, i.jsx)(a, {
      onClick: t,
      active: n,
      children: (0, i.jsx)(e, {})
    })
  }
  let {
    icon: r,
    title: o,
    trailing: c
  } = l;
  return (0, i.jsxs)(a, {
    onClick: t,
    active: n,
    children: [(0, i.jsxs)("div", {
      className: s.itemContent,
      children: [(0, i.jsx)(r, {
        color: "currentColor",
        size: "refresh_sm",
        className: s.icon
      }), (0, i.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "currentColor",
        children: o
      })]
    }), (0, i.jsx)("div", {
      className: s.itemContent,
      children: c
    })]
  })
}