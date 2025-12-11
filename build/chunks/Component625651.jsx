/** Chunk was on 31924 **/
/** chunk id: 625651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y,
  f: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk14263 = require("./14263.js"),
  Chunk650774 = require("./650774.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk870246 = require("./870246.js"),
  Chunk158638 = require("./158638.js"),
  Chunk448222 = require("./448222.js"),
  Chunk795338 = require("./795338.jsx"),
  Chunk17622 = require("./17622.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk44542 = require("./44542.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk259819 = require("./259819.js");

function j(e) {
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

function T(e, t) {
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

function h(e) {
  var t, n, {
      size: o,
      title: c,
      body: s,
      warningText: u,
      acknowledgementText: d,
      error: b,
      isLoading: f,
      onDeactivate: m
    } = e,
    p = T(e, ["size", "title", "body", "warningText", "acknowledgementText", "error", "isLoading", "onDeactivate"]);
  let [k, g] = a.useState(false);
  return (0, r.jsxs)(i.Modal, (t = j({}, p), n = n = {
    size: o,
    title: O.intl.formatToPlainString(v.default.iEBw1M, {
      perk: c
    }),
    subtitle: O.intl.formatToPlainString(v.default["7o0K+2"], {
      perk: c
    }),
    actions: [{
      variant: "secondary",
      text: O.intl.string(O.t["ETE/oC"]),
      onClick: p.onClose
    }, {
      variant: "critical-primary",
      text: O.intl.string(v.default.PYPdl4),
      loading: f,
      onClick: m,
      disabled: null != d && !k
    }],
    children: [s, (0, r.jsxs)("div", {
      className: I.warningContainer,
      children: [(0, r.jsx)(i.xvT, {
        color: "text-feedback-critical",
        variant: "eyebrow",
        children: O.intl.string(v.default.OVt5CC)
      }), (0, r.jsx)(i.xvT, {
        className: I.warningText,
        tag: "span",
        variant: "text-sm/medium",
        children: u
      })]
    }), null != b && (0, r.jsx)(i.xvT, {
      className: I.errorText,
      color: "text-feedback-critical",
      variant: "text-sm/semibold",
      children: b
    }), null != d && (0, r.jsx)("div", {
      className: I.acknowledgementContainer,
      children: (0, r.jsx)(l.Checkbox, {
        checked: k,
        onChange: g,
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

function y(e) {
  var {
    guildId: t,
    powerup: n
  } = e, l = T(e, ["guildId", "powerup"]);
  let {
    onDeactivate: y,
    error: w,
    isLoading: C
  } = (0, p.Z)(t, n), {
    onClose: E
  } = l, S = a.useCallback(e => {
    e.stopPropagation(), y().then(() => {
      null == E || E()
    })
  }, [E, y]), N = function(e, t) {
    let n = (0, c.e7)([u.Z], () => u.Z.getMemberCount(e)),
      l = (0, s.Z)(e),
      f = (0, c.e7)([b.Z], () => {
        var t;
        return (null == (t = b.Z.getGuild(e)) ? true : t.vanityURLCode) != null
      }),
      p = (0, m.g1)(e, "Powerup Deactivate Modal"),
      k = (0, c.e7)([d.Z], () => t.skuId !== o.If || null == l ? 0 : d.Z.getSortedRoles(e).reduce((e, t) => {
        var n, r;
        return (null == (n = t.colorStrings) ? true : n.secondaryColor) == null ? e : e + (null != (r = l[t.id]) ? r : 0)
      }, 0), [e, t.skuId, l]);
    return a.useMemo(() => {
      let e;
      switch (t.skuId) {
        case o.If:
          e = k > 0 ? O.intl.formatToPlainString(v.default["4jSvr1"], {
            perk: t.title,
            memberCount: k
          }) : O.intl.formatToPlainString(v.default.cavtEo, {
            perk: t.title
          });
          break;
        case o.A$:
          e = f ? (0, r.jsx)(i.xvT, {
            color: "text-feedback-critical",
            variant: "text-sm/semibold",
            children: O.intl.string(v.default.hN75yb)
          }) : (0, r.jsx)(i.xvT, {
            color: "text-feedback-critical",
            variant: "text-sm/semibold",
            children: O.intl.string(v.default.Du91Rb)
          });
          break;
        case o.MB:
        case o.Vk:
          e = O.intl.string(v.default.Vf2ZcR);
          break;
        default:
          e = O.intl.formatToPlainString(v.default["4jSvr1"], {
            perk: t.title,
            memberCount: null != n ? n : 0
          })
      }
      return f && t.skuId === o.XW && (e = (0, r.jsxs)(r.Fragment, {
        children: [e, (0, r.jsx)(i.xvT, {
          color: "text-feedback-critical",
          variant: "text-sm/semibold",
          children: p ? O.intl.string(v.default.TkNA7b) : O.intl.string(v.default.M4XL5n)
        })]
      })), e
    }, [t, k, n, f, p])
  }(t, n);
  return (0, f.$)(t, n, f.w.DEACTIVATE), (0, r.jsx)(h, j({
    size: n.type === x.Us.LEVEL ? "md" : "sm",
    title: n.title,
    body: (() => {
      switch (n.type) {
        case x.Us.LEVEL:
          return (0, r.jsx)(g.Z, {
            powerup: n
          });
        case x.Us.PERK:
          return (0, r.jsx)(k.m, {
            className: I.image,
            powerup: n
          })
      }
    })(),
    warningText: N,
    error: w,
    isLoading: C,
    onDeactivate: S
  }, l))
}