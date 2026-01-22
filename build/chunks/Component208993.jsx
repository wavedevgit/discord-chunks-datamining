/** Chunk was on 84811 **/
/** chunk id: 208993, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk283900 = require("./283900.jsx"),
  Chunk475833 = require("./475833.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk195357 = require("./195357.js");
let d = e => {
  var t, r;
  let {
    children: c,
    className: o
  } = e, s = function(e, t) {
    if (null == e) return {};
    var r, n, l, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          c = Object.getOwnPropertyNames(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
    return c
  }(e, ["children", "className"]);
  return (0, n.jsx)(l.EOs, (t = function(e) {
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
    "data-migration-pending": true,
    className: o
  }, s), r = r = {
    parentComponent: "FamilyCenterCommonModal",
    children: c
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
};
d.ButtonFooter = e => {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: a.qr,
    children: t
  })
}, d.Header = e => {
  let {
    icon: t,
    currentUser: r,
    otherUser: s,
    header: i
  } = e;
  return (0, n.jsxs)("div", {
    className: a.wx,
    children: [(0, n.jsx)(c.A, {
      currentUser: r,
      otherUser: s,
      children: t
    }), (0, n.jsxs)("div", {
      className: a.R_,
      children: [(0, n.jsx)(l.Heading, {
        variant: "text-lg/bold",
        children: i
      }), (0, n.jsx)(o.A, {
        user: s
      })]
    })]
  })
}, d.Content = e => {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: a.Qs,
    children: t
  })
}, d.Notice = e => {
  let {
    notice: t
  } = e;
  return (0, n.jsxs)("div", {
    className: a.lm,
    children: [(0, n.jsx)(l.Text, {
      variant: "eyebrow",
      color: "text-strong",
      children: i.intl.string(s.default.cXgKMD)
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: t
    })]
  })
};
let u = d