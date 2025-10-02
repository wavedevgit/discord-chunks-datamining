/** Chunk was on 9452 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => a,
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk843816 = require("./843816.js");

function a(e) {
  let {
    onClick: t,
    active: n,
    children: r
  } = e;
  return (0, i.jsx)(u.P3F, {
    className: l()(s.item, {
      [s.active]: n
    }),
    onClick: t,
    children: r
  })
}

function o(e) {
  var {
    onClick: t,
    active: n
  } = e, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["onClick", "active"]);
  if ("render" in r) {
    let {
      render: e
    } = r;
    return (0, i.jsx)(a, {
      onClick: t,
      active: n,
      children: (0, i.jsx)(e, {})
    })
  }
  let {
    icon: l,
    title: o,
    trailing: c
  } = r;
  return (0, i.jsxs)(a, {
    onClick: t,
    active: n,
    children: [(0, i.jsxs)("div", {
      className: s.itemContent,
      children: [(0, i.jsx)(l, {
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