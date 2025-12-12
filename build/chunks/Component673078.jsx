/** Chunk was on 95925 **/
/** chunk id: 673078, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk485386 = require("./485386.js"),
  Chunk495437 = require("./495437.js"),
  Chunk240864 = require("./240864.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk234426 = require("./234426.js");

function m(t) {
  let {
    guildProductListing: e,
    guildId: r
  } = t, o = (0, c.e7)([u.Z], () => {
    var t;
    return u.Z.getRole(r, null != (t = null == e ? true : e.role_id) ? t : g.lds)
  });
  return null == o ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(a.Heading, {
      className: b.warningSectionHeader,
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, n.jsx)(a.Mgn, {
        size: "sm",
        color: "currentColor"
      }), (0, n.jsx)(a.LZC, {
        horizontal: true,
        size: 8
      }), p.intl.string(p.t.bi7buI)]
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      children: p.intl.format(p.t["4kglOW"], {
        roleName: o.name
      })
    })]
  })
}

function O(t) {
  var e, r, {
      guildId: i,
      productId: c
    } = t,
    u = function(t, e) {
      if (null == t) return {};
      var r, n, o = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
          i = Object.keys(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
        return o
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
      }
      return o
    }(t, ["guildId", "productId"]);
  let [g] = o.useState(() => f.Z.getGuildProduct(c));
  l()(null != g, "guildProductListing cannot be null");
  let [O, y] = o.useState(false), j = async () => {
    try {
      y(true), await d.mh(i, c)
    } catch (t) {
      s.Z.show({
        title: p.intl.string(p.t.OzgkxM),
        body: t.message
      })
    } finally {
      y(false)
    }
  };
  return (0, n.jsxs)(a.VoidConfirmModal, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = r[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({}, u), r = r = {
    className: b.modalContainer,
    header: p.intl.string(p.t["/gaTp6"]),
    confirmText: p.intl.string(p.t.E4nVWA),
    cancelText: p.intl.string(p.t["ETE/oC"]),
    loading: O,
    onConfirm: j,
    children: [(0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      children: p.intl.format(p.t.CPQsjo, {
        productName: g.name
      })
    }), (0, n.jsx)(m, {
      guildProductListing: g,
      guildId: i
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e))
}