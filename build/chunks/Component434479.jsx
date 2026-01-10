/** Chunk was on 81985 **/
/** chunk id: 434479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk589440 = require("./589440.js"),
  Chunk481060 = require("./481060.js"),
  Chunk879917 = require("./879917.js"),
  Chunk642915 = require("./642915.js"),
  Chunk323453 = require("./323453.js");

function p(e) {
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

function f(e, t) {
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
  var t, {
      id: n,
      className: i,
      innerClassName: h,
      renderIcon: g,
      text: m,
      selected: b,
      trailing: y,
      background: v,
      showUnread: O = false,
      ref: j
    } = e,
    x = function(e, t) {
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
  let C = (0, a.JA)(n),
    E = null != (t = (0, o.q)(m)) ? t : "";
  return (0, r.jsx)("li", {
    ref: j,
    children: (0, r.jsxs)(s.kL8, f(p({}, x), {
      buttonProps: f(p({}, C), {
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
      onContextMenu: null != x.onContextMenu ? x.onContextMenu : e => {
        e.stopPropagation()
      },
      className: l()(u.containerDefault, d.wrapper, {
        [d.modeSelected]: b
      }, i),
      children: [v, O ? (0, r.jsx)("div", {
        className: l()(d.unread, d.unreadImportant)
      }) : null, (0, r.jsx)("div", {
        className: l()([d.link, d.basicChannelRowLink, h]),
        children: (0, r.jsxs)("div", {
          className: c.content,
          children: [(0, r.jsx)("div", {
            className: d.iconContainer,
            children: g(d.icon)
          }), (0, r.jsx)("div", {
            className: d.name,
            "aria-hidden": true,
            children: m
          }), y]
        })
      })]
    }))
  })
}