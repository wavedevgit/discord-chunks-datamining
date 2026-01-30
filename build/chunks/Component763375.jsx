/** Chunk was on 65787 **/
/** chunk id: 763375, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => S
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

function p(e) {
  let {
    sku: r,
    guildId: t
  } = e, s = (0, c.h)(r.applicationId), l = a.useMemo(() => (0, u.OY)(t, r), [t, r]);
  return (0, n.jsxs)("div", {
    className: b.sq,
    children: [(0, n.jsxs)("div", {
      className: b.kx,
      children: [(0, n.jsx)(_.A, {
        title: r.name,
        href: l,
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-link",
          lineClamp: 1,
          children: r.name
        })
      }), (0, n.jsxs)("div", {
        className: b.Bo,
        children: [(0, n.jsx)(o.qYV, {
          size: "xs",
          color: "currentColor",
          className: b.ds
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: T.intl.formatToPlainString(T.t["CqpEC+"], {
            applicationName: null == s ? true : s.name
          })
        })]
      })]
    }), (0, n.jsx)(R.e, {
      containerClassName: b.wP,
      foregroundImageClassName: b.wP,
      backgroundImageClassName: b.wP,
      sku: r,
      shape: "square"
    })]
  })
}

function S(e) {
  var r, t;
  let {
    sku: _,
    guildId: c,
    source: R,
    onClose: b,
    analyticsLocations: S,
    analyticsContext: w
  } = e, h = function(e, r) {
    if (null == e) return {};
    var t, n, a, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (a = 0, t = Reflect.ownKeys(e); a < t.length; a++) n = t[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }
    if (o = function(e, r) {
        if (null == e) return {};
        var t, n, a = {},
          o = Object.getOwnPropertyNames(e);
        for (n = 0; n < o.length; n++) t = o[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
        return a
      }(e, r), Object.getOwnPropertySymbols)
      for (a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) n = t[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    return o
  }(e, ["sku", "guildId", "source", "onClose", "analyticsLocations", "analyticsContext"]), {
    analyticsLocations: m
  } = (0, l.Ay)(null != S ? S : []), y = a.useCallback(async (e, r, t) => {
    let {
      withMessage: n,
      closeAfterSend: a
    } = r;
    t(true);
    try {
      let r = (await Promise.all(e.map(d.pk))).filter(N.Vq);
      if (0 === r.length) return void t(false);
      a && b();
      let l = (0, u.Q6)(c, _);
      for (let e of r) {
        let r = i.A.getChannel(e);
        null != r && await s.A.sendMessage(r.id, C.Ay.parse(r, l + (null != n ? n : "")), false, {
          location: I.Hx.SOCIAL_LAYER_STOREFRONT
        })
      }(0, o.showToast)((0, o.createToast)(T.intl.string(T.t.kwmYkt), o.ToastType.SUCCESS))
    } catch (e) {
      (0, o.showToast)((0, o.createToast)(T.intl.string(T.t.iufib1), o.ToastType.FAILURE))
    } finally {
      t(false)
    }
  }, [b, c, _]), g = a.useMemo(() => [{
    variant: "secondary",
    text: true,
    onClick: () => {
      O.default.track(P.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
        slayer_storefront_session_id: null == w ? true : w.sessionId,
        guild_id: c,
        sku_id: _.id,
        cta_type: f.Ng.COPY_LINK_BUTTON,
        location_stack: m
      }), (0, A.C)((0, u.OY)(c, _), () => (0, o.showToast)((0, o.createToast)(T.intl.string(T.t["L/PwZf"]), o.ToastType.SUCCESS)))
    },
    icon: o.qYV
  }], [c, _, null == w ? true : w.sessionId, m]);
  return (0, n.jsx)(E.ForwardModal, (r = function(e) {
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
  }({}, h), t = t = {
    onClose: b,
    source: R,
    customPreview: (0, n.jsx)(p, {
      sku: _,
      guildId: c
    }),
    customSubtitle: T.intl.string(T.t.yiaXeN),
    customSendHandler: y,
    additionalActions: g
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
}