/** Chunk was on 34779 **/
/** chunk id: 434479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk589440 = require("./589440.js"),
  Chunk481060 = require("./481060.js"),
  Chunk440185 = require("./440185.js"),
  Chunk915887 = require("./915887.js"),
  Chunk768107 = require("./768107.js");

function h(e) {
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

function f(e) {
  var t, {
      id: n,
      className: i,
      innerClassName: f,
      renderIcon: g,
      text: m,
      selected: b,
      trailing: O,
      background: _,
      showUnread: y = false,
      ref: C
    } = e,
    v = function(e, t) {
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
    }(e, ["id", "className", "innerClassName", "renderIcon", "text", "selected", "trailing", "background", "showUnread", "ref"]);
  let j = (0, o.JA)(n),
    E = null != (t = (0, s.qg)(m)) ? t : "";
  return <li ref={C}><a.kL8{...p(h({}, v), {
      buttonProps: p(h({}, j), {
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
      className: l()(u.containerDefault, d.wrapper, {
        [d.modeSelected]: b
      }, i),
      children: [_, y ? (0, r.jsx)("div", {
        className: l()(d.unread, d.unreadImportant)
      }) : null, (0, r.jsx)("div", {
        className: l()([d.link, d.basicChannelRowLink, f]),
        children: (0, r.jsxs)("div", {
          className: c.content,
          children: [(0, r.jsx)("div", {
            className: d.iconContainer,
            children: g(d.icon)
          }), (0, r.jsx)("div", {
            className: d.name,
            "aria-hidden": true,
            children: m
          }), O]
        })
      })]
    })} /></li>
}