/** Chunk was on 47129 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => a,
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk873395 = require("./873395.js");

function a(e) {
  let {
    onClick: t,
    active: n,
    children: i
  } = e;
  return (0, r.jsx)(o.P3F, {
    className: l()(s.item, {
      [s.active]: n
    }),
    onClick: t,
    children: i
  })
}

function u(e) {
  var {
    onClick: t,
    active: n
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["onClick", "active"]);
  if ("render" in i) {
    let {
      render: e
    } = i;
    return (0, r.jsx)(a, {
      onClick: t,
      active: n,
      children: (0, r.jsx)(e, {})
    })
  }
  let {
    icon: l,
    title: u,
    trailing: c
  } = i;
  return (0, r.jsxs)(a, {
    onClick: t,
    active: n,
    children: [(0, r.jsxs)("div", {
      className: s.itemContent,
      children: [(0, r.jsx)(l, {
        color: "currentColor",
        size: "refresh_sm",
        className: s.icon
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "currentColor",
        children: u
      })]
    }), (0, r.jsx)("div", {
      className: s.itemContent,
      children: c
    })]
  })
}