/** Chunk was on 8193 **/
/** chunk id: 560083, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk794295 = require("./794295.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk930864 = require("./930864.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk987509 = require("./987509.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk823379 = require("./823379.js"),
  Chunk164670 = require("./164670.js"),
  Chunk848118 = require("./848118.jsx"),
  Chunk181268 = require("./181268.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887444 = require("./887444.js");

function I(e) {
  let {
    sku: t,
    guildId: a
  } = e, c = (0, s.q)(t.applicationId), l = r.useMemo(() => (0, h.wQ)(a, t), [a, t]);
  return (0, n.jsxs)("div", {
    className: P.forwardPreview,
    children: [(0, n.jsxs)("div", {
      className: P.linkContainer,
      children: [(0, n.jsx)(i.Z, {
        title: t.name,
        href: l,
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-link",
          lineClamp: 1,
          children: t.name
        })
      }), (0, n.jsxs)("div", {
        className: P.applicationInfo,
        children: [(0, n.jsx)(o.xPt, {
          size: "xs",
          color: "currentColor",
          className: P.linkIcon
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: v.intl.formatToPlainString(v.t["CqpEC+"], {
            applicationName: null == c ? true : c.name
          })
        })]
      })]
    }), (0, n.jsx)(_.A, {
      containerClassName: P.cardImage,
      foregroundImageClassName: P.cardImage,
      backgroundImageClassName: P.cardImage,
      sku: t,
      shape: "square"
    })]
  })
}

function x(e) {
  var t, a, {
      sku: i,
      guildId: s,
      source: _,
      onClose: P,
      analyticsLocations: x,
      analyticsContext: j
    } = e,
    C = function(e, t) {
      if (null == e) return {};
      var a, n, r = function(e, t) {
        if (null == e) return {};
        var a, n, r = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) a = o[n], t.indexOf(a) >= 0 || (r[a] = e[a]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) a = o[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
      }
      return r
    }(e, ["sku", "guildId", "source", "onClose", "analyticsLocations", "analyticsContext"]);
  let {
    analyticsLocations: k
  } = (0, l.ZP)(null != x ? x : []), S = r.useCallback(async (e, t, a) => {
    let {
      withMessage: n,
      closeAfterSend: r
    } = t;
    a(true);
    try {
      let t = (await Promise.all(e.map(b.qx))).filter(w.lm);
      if (0 === t.length) return void a(false);
      r && P();
      let l = (0, h.l8)(s, i);
      for (let e of t) {
        let t = f.Z.getChannel(e);
        null != t && await c.Z.sendMessage(t.id, u.ZP.parse(t, l + (null != n ? n : "")), false, {
          location: g.dy.SOCIAL_LAYER_STOREFRONT
        })
      }(0, o.showToast)((0, o.createToast)(v.intl.string(v.t.kwmYkt), o.ToastType.SUCCESS))
    } catch (e) {
      (0, o.showToast)((0, o.createToast)(v.intl.string(v.t.iufib1), o.ToastType.FAILURE))
    } finally {
      a(false)
    }
  }, [P, s, i]), T = r.useMemo(() => [{
    variant: "secondary",
    text: true,
    onClick: () => {
      p.default.track(O.rMx.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
        slayer_storefront_session_id: null == j ? true : j.sessionId,
        guild_id: s,
        sku_id: i.id,
        cta_type: y.eR.COPY_LINK_BUTTON,
        location_stack: k
      }), (0, m.JG)((0, h.wQ)(s, i), () => (0, o.showToast)((0, o.createToast)(v.intl.string(v.t["L/PwZf"]), o.ToastType.SUCCESS)))
    },
    icon: o.xPt
  }], [s, i, null == j ? true : j.sessionId, k]);
  return (0, n.jsx)(d.ForwardModal, (t = function(e) {
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
  }({}, C), a = a = {
    onClose: P,
    source: _,
    customPreview: (0, n.jsx)(I, {
      sku: i,
      guildId: s
    }),
    customSubtitle: v.intl.string(v.t.yiaXeN),
    customSendHandler: S,
    additionalActions: T
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