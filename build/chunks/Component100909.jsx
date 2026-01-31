/** Chunk was on 37214 **/
/** chunk id: 100909, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk317525 = require("./317525.js"),
  Chunk912702 = require("./912702.js"),
  Chunk871109 = require("./871109.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk468277 = require("./468277.js");

function g(e) {
  let {
    guildProductListing: t,
    guildId: r
  } = e, o = (0, a.bG)([u.A], () => {
    var e;
    return u.A.getRole(r, null != (e = null == t ? true : t.role_id) ? e : f.dJq)
  });
  return null == o ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.Heading, {
      className: O.L,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, n.jsx)(s.EpV, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(s.hKd, {
        horizontal: true,
        size: 8
      }), b.intl.string(b.t.bi7buI)]
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      children: b.intl.format(b.t["4kglOW"], {
        roleName: o.name
      })
    })]
  })
}

function m(e) {
  var t, r;
  let {
    guildId: l,
    productId: a
  } = e, u = function(e, t) {
    if (null == e) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["guildId", "productId"]), [f] = o.useState(() => d.A.getGuildProduct(a));
  i()(null != f, "guildProductListing cannot be null");
  let m = async e => {
    try {
      await p.Oo(l, a)
    } catch (r) {
      var t;
      throw e(null != (t = r.message) ? t : b.intl.string(b.t.OzgkxM)), r
    }
  };
  return (0, n.jsx)(c.ConfirmModal, (t = function(e) {
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
  }({}, u), r = r = {
    title: b.intl.string(b.t["/gaTp6"]),
    confirmText: b.intl.string(b.t.E4nVWA),
    onConfirm: m,
    children: (0, n.jsxs)("div", {
      className: O.j,
      children: [(0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: b.intl.format(b.t.CPQsjo, {
          productName: f.name
        })
      }), (0, n.jsx)(g, {
        guildProductListing: f,
        guildId: l
      })]
    })
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
}