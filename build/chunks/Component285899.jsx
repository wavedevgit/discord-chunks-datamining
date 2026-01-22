/** Chunk was on 74488 **/
/** chunk id: 285899, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  O: () => j,
  default: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk503852 = require("./503852.js"),
  Chunk661685 = require("./661685.js"),
  Chunk898190 = require("./898190.js"),
  Chunk490557 = require("./490557.jsx"),
  Chunk193157 = require("./193157.jsx"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438619 = require("./438619.js");

function O(e) {
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
}

function g(e, t) {
  if (null == e) return {};
  var r, n, a, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        l = Object.getOwnPropertyNames(e);
      for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }(e, t), Object.getOwnPropertySymbols)
    for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
  return l
}

function j(e) {
  var t, r;
  let {
    size: l,
    title: i,
    body: c,
    warningText: u,
    acknowledgementText: d,
    error: f,
    isLoading: p,
    onDeactivate: j
  } = e, P = g(e, ["size", "title", "body", "warningText", "acknowledgementText", "error", "isLoading", "onDeactivate"]), [I, y] = a.useState(false);
  return (0, n.jsxs)(o.Modal, (t = O({}, P), r = r = {
    size: l,
    title: b.intl.formatToPlainString(m.default.iEBw1M, {
      perk: i
    }),
    subtitle: b.intl.formatToPlainString(m.default["7o0K+2"], {
      perk: i
    }),
    actions: [{
      variant: "secondary",
      text: b.intl.string(b.t["ETE/oC"]),
      onClick: P.onClose
    }, {
      variant: "critical-primary",
      text: b.intl.string(m.default.PYPdl4),
      loading: p,
      onClick: j,
      disabled: null != d && !I
    }],
    children: [c, (0, n.jsxs)("div", {
      className: k.UW,
      children: [(0, n.jsx)(o.EYj, {
        color: "text-feedback-critical",
        variant: "eyebrow",
        children: b.intl.string(m.default.OVt5CC)
      }), (0, n.jsx)(o.EYj, {
        className: k.i4,
        tag: "span",
        variant: "text-sm/medium",
        children: u
      })]
    }), null != f && (0, n.jsx)(o.EYj, {
      className: k.kc,
      color: "text-feedback-critical",
      variant: "text-sm/semibold",
      children: f
    }), null != d && (0, n.jsx)("div", {
      className: k.ud,
      children: (0, n.jsx)(s.Checkbox, {
        checked: I,
        onChange: y,
        label: d,
        labelType: "secondary"
      })
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

function P(e) {
  let {
    guildId: t,
    powerup: r
  } = e, s = g(e, ["guildId", "powerup"]), {
    onDeactivate: m,
    error: b,
    isLoading: P
  } = (0, u.A)(t, r), {
    onClose: I
  } = s, y = a.useCallback(e => {
    e.stopPropagation(), m().then(() => {
      null == I || I()
    })
  }, [I, m]), v = function(e, t) {
    let {
      warningText: r,
      vanityUrlWarning: s
    } = (0, c.A)(e, t);
    return a.useMemo(() => t.skuId === l.FB ? (0, n.jsx)(o.EYj, {
      color: "text-feedback-critical",
      variant: "text-sm/semibold",
      children: r
    }) : null != s ? (0, n.jsxs)(n.Fragment, {
      children: [r, (0, n.jsx)(o.EYj, {
        color: "text-feedback-critical",
        variant: "text-sm/semibold",
        children: s
      })]
    }) : r, [t.skuId, r, s])
  }(t, r);
  return (0, i.Z)(t, r, i.q.DEACTIVATE), (0, n.jsx)(j, O({
    size: r.type === p.o9.LEVEL ? "md" : "sm",
    title: r.title,
    body: (() => {
      switch (r.type) {
        case p.o9.LEVEL:
          return (0, n.jsx)(f.A, {
            powerup: r
          });
        case p.o9.PERK:
          return (0, n.jsx)(d.l, {
            className: k.Sl,
            powerup: r
          })
      }
    })(),
    warningText: v,
    error: b,
    isLoading: P,
    onDeactivate: y
  }, s))
}