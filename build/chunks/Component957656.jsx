/** Chunk was on 69015 **/
/** chunk id: 957656, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk329242 = require("./329242.jsx"),
  Chunk744038 = require("./744038.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167154 = require("./167154.js");
let d = e => {
  var t, r, {
      children: c,
      className: i
    } = e,
    l = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.keys(e);
        for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["children", "className"]);
  return (0, n.jsx)(o.Y0X, (t = function(e) {
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
    className: i
  }, l), r = r = {
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
    className: s.footer,
    children: t
  })
}, d.Header = e => {
  let {
    icon: t,
    currentUser: r,
    otherUser: l,
    header: a
  } = e;
  return (0, n.jsxs)("div", {
    className: s.header,
    children: [(0, n.jsx)(c.Z, {
      currentUser: r,
      otherUser: l,
      children: t
    }), (0, n.jsxs)("div", {
      className: s.heading,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-lg/bold",
        children: a
      }), (0, n.jsx)(i.Z, {
        user: l
      })]
    })]
  })
}, d.Content = e => {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: s.content,
    children: t
  })
}, d.Notice = e => {
  let {
    notice: t
  } = e;
  return (0, n.jsxs)("div", {
    className: s.notice,
    children: [(0, n.jsx)(o.Text, {
      variant: "eyebrow",
      color: "header-primary",
      children: a.intl.string(l.default.cXgKMD)
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: t
    })]
  })
};
let u = d