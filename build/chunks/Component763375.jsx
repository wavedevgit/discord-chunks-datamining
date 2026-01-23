/** Chunk was on 2644 **/
/** chunk id: 763375, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk9578 = require("./9578.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk911269 = require("./911269.jsx"),
  Chunk451909 = require("./451909.js"),
  Chunk223863 = require("./223863.js"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk403362 = require("./403362.js"),
  Chunk871123 = require("./871123.js"),
  Chunk366523 = require("./366523.jsx"),
  Chunk995393 = require("./995393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk588187 = require("./588187.js");

function P(e) {
  let {
    sku: t,
    guildId: r
  } = e, s = (0, c.h)(t.applicationId), l = o.useMemo(() => (0, y.OY)(r, t), [r, t]);
  return (0, n.jsxs)("div", {
    className: x.sq,
    children: [(0, n.jsxs)("div", {
      className: x.kx,
      children: [(0, n.jsx)(i.A, {
        title: t.name,
        href: l,
        children: (0, n.jsx)(a.Text, {
          variant: "text-md/medium",
          color: "text-link",
          lineClamp: 1,
          children: t.name
        })
      }), (0, n.jsxs)("div", {
        className: x.Bo,
        children: [(0, n.jsx)(a.qYV, {
          size: "xs",
          color: "currentColor",
          className: x.ds
        }), (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: v.intl.formatToPlainString(v.t["CqpEC+"], {
            applicationName: null == s ? true : s.name
          })
        })]
      })]
    }), (0, n.jsx)(O.e, {
      containerClassName: x.wP,
      foregroundImageClassName: x.wP,
      backgroundImageClassName: x.wP,
      sku: t,
      shape: "square"
    })]
  })
}

function j(e) {
  var t, r;
  let {
    sku: i,
    guildId: c,
    source: O,
    onClose: x,
    analyticsLocations: j,
    analyticsContext: k
  } = e, C = function(e, t) {
    if (null == e) return {};
    var r, n, o, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["sku", "guildId", "source", "onClose", "analyticsLocations", "analyticsContext"]), {
    analyticsLocations: I
  } = (0, l.Ay)(null != j ? j : []), T = o.useCallback(async (e, t, r) => {
    let {
      withMessage: n,
      closeAfterSend: o
    } = t;
    r(true);
    try {
      let t = (await Promise.all(e.map(p.pk))).filter(m.Vq);
      if (0 === t.length) return void r(false);
      o && x();
      let l = (0, y.Q6)(c, i);
      for (let e of t) {
        let t = d.A.getChannel(e);
        null != t && await s.A.sendMessage(t.id, _.Ay.parse(t, l + (null != n ? n : "")), false, {
          location: g.Hx.SOCIAL_LAYER_STOREFRONT
        })
      }(0, a.showToast)((0, a.createToast)(v.intl.string(v.t.kwmYkt), a.ToastType.SUCCESS))
    } catch (e) {
      (0, a.showToast)((0, a.createToast)(v.intl.string(v.t.iufib1), a.ToastType.FAILURE))
    } finally {
      r(false)
    }
  }, [x, c, i]), S = o.useMemo(() => [{
    variant: "secondary",
    text: true,
    onClick: () => {
      f.default.track(h.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
        slayer_storefront_session_id: null == k ? true : k.sessionId,
        guild_id: c,
        sku_id: i.id,
        cta_type: w.Ng.COPY_LINK_BUTTON,
        location_stack: I
      }), (0, b.C)((0, y.OY)(c, i), () => (0, a.showToast)((0, a.createToast)(v.intl.string(v.t["L/PwZf"]), a.ToastType.SUCCESS)))
    },
    icon: a.qYV
  }], [c, i, null == k ? true : k.sessionId, I]);
  return (0, n.jsx)(u.ForwardModal, (t = function(e) {
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
  }({}, C), r = r = {
    onClose: x,
    source: O,
    customPreview: (0, n.jsx)(P, {
      sku: i,
      guildId: c
    }),
    customSubtitle: v.intl.string(v.t.yiaXeN),
    customSendHandler: T,
    additionalActions: S
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