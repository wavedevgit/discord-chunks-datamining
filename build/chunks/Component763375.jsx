/** Chunk was on 2644 **/
/** chunk id: 763375, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => P
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

function v(e) {
  let {
    sku: t,
    guildId: a
  } = e, c = (0, i.h)(t.applicationId), l = n.useMemo(() => (0, m.OY)(a, t), [a, t]);
  return (0, r.jsxs)("div", {
    className: h.sq,
    children: [(0, r.jsxs)("div", {
      className: h.kx,
      children: [(0, r.jsx)(s.A, {
        title: t.name,
        href: l,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-link",
          lineClamp: 1,
          children: t.name
        })
      }), (0, r.jsxs)("div", {
        className: h.Bo,
        children: [(0, r.jsx)(o.qYV, {
          size: "xs",
          color: "currentColor",
          className: h.ds
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: x.intl.formatToPlainString(x.t["CqpEC+"], {
            applicationName: null == c ? true : c.name
          })
        })]
      })]
    }), (0, r.jsx)(_.e, {
      containerClassName: h.wP,
      foregroundImageClassName: h.wP,
      backgroundImageClassName: h.wP,
      sku: t,
      shape: "square"
    })]
  })
}

function P(e) {
  var t, a;
  let {
    sku: s,
    guildId: i,
    source: _,
    onClose: h,
    analyticsLocations: P,
    analyticsContext: k
  } = e, C = function(e, t) {
    if (null == e) return {};
    var a, r, n, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, a = Reflect.ownKeys(e); n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var a, r, n = {},
          o = Object.getOwnPropertyNames(e);
        for (r = 0; r < o.length; r++) a = o[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
        return n
      }(e, t), Object.getOwnPropertySymbols)
      for (n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    return o
  }(e, ["sku", "guildId", "source", "onClose", "analyticsLocations", "analyticsContext"]), {
    analyticsLocations: T
  } = (0, l.Ay)(null != P ? P : []), S = n.useCallback(async (e, t, a) => {
    let {
      withMessage: r,
      closeAfterSend: n
    } = t;
    a(true);
    try {
      let t = (await Promise.all(e.map(b.pk))).filter(O.Vq);
      if (0 === t.length) return void a(false);
      n && h();
      let l = (0, m.Q6)(i, s);
      for (let e of t) {
        let t = u.A.getChannel(e);
        null != t && await c.A.sendMessage(t.id, f.Ay.parse(t, l + (null != r ? r : "")), false, {
          location: j.Hx.SOCIAL_LAYER_STOREFRONT
        })
      }(0, o.showToast)((0, o.createToast)(x.intl.string(x.t.kwmYkt), o.ToastType.SUCCESS))
    } catch (e) {
      (0, o.showToast)((0, o.createToast)(x.intl.string(x.t.iufib1), o.ToastType.FAILURE))
    } finally {
      a(false)
    }
  }, [h, i, s]), E = n.useMemo(() => [{
    variant: "secondary",
    text: true,
    onClick: () => {
      p.default.track(w.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
        slayer_storefront_session_id: null == k ? true : k.sessionId,
        guild_id: i,
        sku_id: s.id,
        cta_type: g.Ng.COPY_LINK_BUTTON,
        location_stack: T
      }), (0, y.C)((0, m.OY)(i, s), () => (0, o.showToast)((0, o.createToast)(x.intl.string(x.t["L/PwZf"]), o.ToastType.SUCCESS)))
    },
    icon: o.qYV
  }], [i, s, null == k ? true : k.sessionId, T]);
  return (0, r.jsx)(d.ForwardModal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
        return Object.getOwnPropertyDescriptor(a, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = a[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, C), a = a = {
    onClose: h,
    source: _,
    customPreview: (0, r.jsx)(v, {
      sku: s,
      guildId: i
    }),
    customSubtitle: x.intl.string(x.t.yiaXeN),
    customSendHandler: S,
    additionalActions: E
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      a.push.apply(a, r)
    }
    return a
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
  }), t))
}