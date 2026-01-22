/** Chunk was on 37214 **/
/** chunk id: 100909, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
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
  } = e, o = (0, c.bG)([u.A], () => {
    var e;
    return u.A.getRole(r, null != (e = null == t ? true : t.role_id) ? e : b.dJq)
  });
  return null == o ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(a.Heading, {
      className: O.L,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, n.jsx)(a.EpV, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(a.hKd, {
        horizontal: true,
        size: 8
      }), f.intl.string(f.t.bi7buI)]
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      children: f.intl.format(f.t["4kglOW"], {
        roleName: o.name
      })
    })]
  })
}

function y(e) {
  var t, r;
  let {
    guildId: l,
    productId: c
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
  }(e, ["guildId", "productId"]), [b] = o.useState(() => p.A.getGuildProduct(c));
  i()(null != b, "guildProductListing cannot be null");
  let [y, m] = o.useState(false), j = async () => {
    try {
      m(true), await d.Oo(l, c)
    } catch (e) {
      s.A.show({
        title: f.intl.string(f.t.OzgkxM),
        body: e.message
      })
    } finally {
      m(false)
    }
  };
  return (0, n.jsxs)(a.VoidConfirmModal, (t = function(e) {
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
    className: O.j,
    header: f.intl.string(f.t["/gaTp6"]),
    confirmText: f.intl.string(f.t.E4nVWA),
    cancelText: f.intl.string(f.t["ETE/oC"]),
    loading: y,
    onConfirm: j,
    children: [(0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      children: f.intl.format(f.t.CPQsjo, {
        productName: b.name
      })
    }), (0, n.jsx)(g, {
      guildProductListing: b,
      guildId: l
    })]
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