/** Chunk was on 97492 **/
/** chunk id: 652793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk672117 = require("./672117.js"),
  Chunk397927 = require("./397927.js"),
  Chunk69813 = require("./69813.js"),
  Chunk728444 = require("./728444.js"),
  Chunk811094 = require("./811094.js");

function f(e) {
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
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  var t;
  let {
    id: n,
    className: l,
    innerClassName: h,
    renderIcon: b,
    text: g,
    selected: m,
    trailing: A,
    background: y,
    showUnread: O = false,
    ref: j
  } = e, v = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["id", "className", "innerClassName", "renderIcon", "text", "selected", "trailing", "background", "showUnread", "ref"]), x = (0, a.rm)(n), E = null != (t = (0, s.O)(g)) ? t : "";
  return (0, r.jsx)("li", {
    ref: j,
    children: (0, r.jsxs)(o.sqX, p(f({}, v), {
      buttonProps: p(f({}, x), {
        id: n,
        role: "button"
      }),
      tag: "div",
      "aria-label": E,
      focusProps: {
        offset: {
          top: 1,
          bottom: 1,
          right: 4
        }
      },
      onContextMenu: null != v.onContextMenu ? v.onContextMenu : e => {
        e.stopPropagation()
      },
      className: i()(u.fx, d.iE, {
        [d.J1]: m
      }, l),
      children: [y, O ? (0, r.jsx)("div", {
        className: i()(d.gy, d.WS)
      }) : null, (0, r.jsx)("div", {
        className: i()([d.nf, d.ae, h]),
        children: (0, r.jsxs)("div", {
          className: c.Q,
          children: [(0, r.jsx)("div", {
            className: d.zc,
            children: b(d.Kk)
          }), (0, r.jsx)("div", {
            className: d.UU,
            "aria-hidden": true,
            children: g
          }), A]
        })
      })]
    }))
  })
}