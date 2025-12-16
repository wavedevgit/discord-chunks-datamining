/** Chunk was on 8193 **/
/** chunk id: 560083, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk794295 = require("./794295.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk930864 = require("./930864.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk987509 = require("./987509.js"),
  Chunk592125 = require("./592125.js"),
  Chunk823379 = require("./823379.js"),
  Chunk164670 = require("./164670.js"),
  Chunk848118 = require("./848118.jsx"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887444 = require("./887444.js");

function y(e) {
  let {
    sku: t,
    guildId: a
  } = e, o = (0, l.q)(t.applicationId), s = r.useMemo(() => (0, p.wQ)(a, t), [a, t]);
  return (0, n.jsxs)("div", {
    className: g.forwardPreview,
    children: [(0, n.jsxs)("div", {
      className: g.linkContainer,
      children: [(0, n.jsx)(i.Z, {
        title: t.name,
        href: s,
        children: (0, n.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-link",
          lineClamp: 1,
          children: t.name
        })
      }), (0, n.jsxs)("div", {
        className: g.applicationInfo,
        children: [(0, n.jsx)(c.xPt, {
          size: "xs",
          color: "currentColor",
          className: g.linkIcon
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: h.intl.formatToPlainString(h.t["CqpEC+"], {
            applicationName: null == o ? true : o.name
          })
        })]
      })]
    }), (0, n.jsx)(m.A, {
      containerClassName: g.cardImage,
      foregroundImageClassName: g.cardImage,
      backgroundImageClassName: g.cardImage,
      sku: t,
      shape: "square"
    })]
  })
}

function v(e) {
  var t, a, {
      sku: i,
      guildId: l,
      source: m,
      onClose: g
    } = e,
    v = function(e, t) {
      if (null == e) return {};
      var a, n, r = function(e, t) {
        if (null == e) return {};
        var a, n, r = {},
          c = Object.keys(e);
        for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) a = c[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
      }
      return r
    }(e, ["sku", "guildId", "source", "onClose"]);
  let O = r.useCallback(async (e, t, a) => {
    let {
      withMessage: n,
      closeAfterSend: r
    } = t;
    a(true);
    try {
      let t = (await Promise.all(e.map(b.qx))).filter(f.lm);
      if (0 === t.length) return void a(false);
      r && g();
      let c = (0, p.l8)(l, i);
      for (let e of t) {
        let t = u.Z.getChannel(e);
        null != t && await o.Z.sendMessage(t.id, d.ZP.parse(t, c + (null != n ? n : "")), false, {
          location: w.dy.SOCIAL_LAYER_STOREFRONT
        })
      }
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(h.intl.string(h.t.iufib1), c.ToastType.FAILURE))
    } finally {
      a(false)
    }
  }, [g, l, i]);
  return (0, n.jsx)(s.ForwardModal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
        return Object.getOwnPropertyDescriptor(a, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = a[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, v), a = a = {
    onClose: g,
    source: m,
    customPreview: (0, n.jsx)(y, {
      sku: i,
      guildId: l
    }),
    customSubtitle: h.intl.string(h.t.yiaXeN),
    customSendHandler: O
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
  }), t))
}