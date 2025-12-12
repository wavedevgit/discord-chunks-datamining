/** Chunk was on 31924 **/
/** chunk id: 625651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I,
  f: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk870246 = require("./870246.js"),
  Chunk268574 = require("./268574.js"),
  Chunk448222 = require("./448222.js"),
  Chunk795338 = require("./795338.jsx"),
  Chunk17622 = require("./17622.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk259819 = require("./259819.js");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, a = function(e, t) {
    if (null == e) return {};
    var n, r, a = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
  }
  return a
}

function x(e) {
  var t, n, {
      size: o,
      title: l,
      body: s,
      warningText: u,
      acknowledgementText: d,
      error: b,
      isLoading: f,
      onDeactivate: x
    } = e,
    I = v(e, ["size", "title", "body", "warningText", "acknowledgementText", "error", "isLoading", "onDeactivate"]);
  let [O, j] = a.useState(false);
  return (0, r.jsxs)(i.Modal, (t = g({}, I), n = n = {
    size: o,
    title: p.intl.formatToPlainString(m.default.iEBw1M, {
      perk: l
    }),
    subtitle: p.intl.formatToPlainString(m.default["7o0K+2"], {
      perk: l
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: I.onClose
    }, {
      variant: "critical-primary",
      text: p.intl.string(m.default.PYPdl4),
      loading: f,
      onClick: x,
      disabled: null != d && !O
    }],
    children: [s, (0, r.jsxs)("div", {
      className: k.warningContainer,
      children: [(0, r.jsx)(i.xvT, {
        color: "text-feedback-critical",
        variant: "eyebrow",
        children: p.intl.string(m.default.OVt5CC)
      }), (0, r.jsx)(i.xvT, {
        className: k.warningText,
        tag: "span",
        variant: "text-sm/medium",
        children: u
      })]
    }), null != b && (0, r.jsx)(i.xvT, {
      className: k.errorText,
      color: "text-feedback-critical",
      variant: "text-sm/semibold",
      children: b
    }), null != d && (0, r.jsx)("div", {
      className: k.acknowledgementContainer,
      children: (0, r.jsx)(c.Checkbox, {
        checked: O,
        onChange: j,
        label: d,
        labelType: "secondary"
      })
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function I(e) {
  var {
    guildId: t,
    powerup: n
  } = e, c = v(e, ["guildId", "powerup"]);
  let {
    onDeactivate: m,
    error: p,
    isLoading: I
  } = (0, u.Z)(t, n), {
    onClose: O
  } = c, j = a.useCallback(e => {
    e.stopPropagation(), m().then(() => {
      null == O || O()
    })
  }, [O, m]), T = function(e, t) {
    let {
      warningText: n,
      vanityUrlWarning: c
    } = (0, s.Z)(e, t);
    return a.useMemo(() => t.skuId === o.A$ ? (0, r.jsx)(i.xvT, {
      color: "text-feedback-critical",
      variant: "text-sm/semibold",
      children: n
    }) : null != c ? (0, r.jsxs)(r.Fragment, {
      children: [n, (0, r.jsx)(i.xvT, {
        color: "text-feedback-critical",
        variant: "text-sm/semibold",
        children: c
      })]
    }) : n, [t.skuId, n, c])
  }(t, n);
  return (0, l.$)(t, n, l.w.DEACTIVATE), (0, r.jsx)(x, g({
    size: n.type === f.Us.LEVEL ? "md" : "sm",
    title: n.title,
    body: (() => {
      switch (n.type) {
        case f.Us.LEVEL:
          return (0, r.jsx)(b.Z, {
            powerup: n
          });
        case f.Us.PERK:
          return (0, r.jsx)(d.m, {
            className: k.image,
            powerup: n
          })
      }
    })(),
    warningText: T,
    error: p,
    isLoading: I,
    onDeactivate: j
  }, c))
}