/** Chunk was on 69015 **/
/** chunk id: 957656, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk329242 = require("./329242.jsx"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk849317 = require("./849317.js");
let d = e => {
  var r, t, {
      children: i,
      className: s
    } = e,
    c = function(e, r) {
      if (null == e) return {};
      var t, n, o = function(e, r) {
        if (null == e) return {};
        var t, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
      }(e, r);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
      }
      return o
    }(e, ["children", "className"]);
  return (0, n.jsx)(o.Y0X, (r = function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {},
        n = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.forEach(function(r) {
        var n;
        n = t[r], r in e ? Object.defineProperty(e, r, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[r] = n
      })
    }
    return e
  }({
    "data-migration-pending": true,
    className: s
  }, c), t = t = {
    parentComponent: "FamilyCenterCommonModal",
    children: i
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : (function(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(t)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
  }), r))
};
d.ButtonFooter = e => {
  let {
    children: r
  } = e;
  return (0, n.jsx)("div", {
    className: l.footer,
    children: r
  })
}, d.Header = e => {
  let {
    icon: r,
    currentUser: t,
    otherUser: c,
    header: a
  } = e;
  return (0, n.jsxs)("div", {
    className: l.header,
    children: [(0, n.jsx)(i.Z, {
      currentUser: t,
      otherUser: c,
      children: r
    }), (0, n.jsxs)("div", {
      className: l.heading,
      children: [(0, n.jsx)(o.X6q, {
        variant: "text-lg/bold",
        children: a
      }), (0, n.jsx)(s.Z, {
        user: c
      })]
    })]
  })
}, d.Content = e => {
  let {
    children: r
  } = e;
  return (0, n.jsx)("div", {
    className: l.content,
    children: r
  })
}, d.Notice = e => {
  let {
    notice: r
  } = e;
  return (0, n.jsxs)("div", {
    className: l.notice,
    children: [(0, n.jsx)(o.Text, {
      variant: "eyebrow",
      color: "header-primary",
      children: a.intl.string(c.default.cXgKMD)
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: r
    })]
  })
}, d.Error = e => {
  let {
    error: r,
    onDismiss: t
  } = e;
  return null == r ? null : (0, n.jsx)(o.kzN, {
    className: l.error,
    onDismiss: t,
    children: r
  })
};
let u = d