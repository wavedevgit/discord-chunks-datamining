/** Chunk was on 88856 **/
/** chunk id: 625651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h,
  f: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk14263 = require("./14263.js"),
  Chunk650774 = require("./650774.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk870246 = require("./870246.js"),
  Chunk158638 = require("./158638.js"),
  Chunk795338 = require("./795338.jsx"),
  Chunk17622 = require("./17622.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk258640 = require("./258640.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551824 = require("./551824.js");

function y(e) {
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

function I(e, t) {
  if (null == e) return {};
  var n, r, o = function(e, t) {
    if (null == e) return {};
    var n, r, o = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
  }
  return o
}

function _(e) {
  var t, n, {
      size: o,
      title: a,
      body: i,
      warningText: l,
      error: u,
      isLoading: d,
      onDeactivate: f
    } = e,
    m = I(e, ["size", "title", "body", "warningText", "error", "isLoading", "onDeactivate"]);
  return (0, r.jsxs)(c.Modal, (t = y({}, m), n = n = {
    size: o,
    title: k.intl.formatToPlainString(v.default.iEBw1N, {
      perk: a
    }),
    subtitle: k.intl.formatToPlainString(v.default["7o0K+/"], {
      perk: a
    }),
    actions: [{
      variant: "secondary",
      text: k.intl.string(k.t["ETE/oK"]),
      onClick: m.onClose
    }, {
      variant: "critical-primary",
      text: k.intl.string(v.default.PYPdl5),
      loading: d,
      onClick: f
    }],
    children: [i, (0, r.jsxs)("div", {
      className: j.warningContainer,
      children: [(0, r.jsx)(s.Text, {
        color: "text-danger",
        variant: "eyebrow",
        children: k.intl.string(v.default.OVt5CA)
      }), (0, r.jsx)(s.Text, {
        className: j.warningText,
        tag: "span",
        variant: "text-sm/medium",
        children: l
      })]
    }), null != u && (0, r.jsx)(s.Text, {
      className: j.errorText,
      color: "text-danger",
      variant: "text-sm/semibold",
      children: u
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

function h(e) {
  var {
    guildId: t,
    powerup: n
  } = e, c = I(e, ["guildId", "powerup"]);
  let {
    onDeactivate: h,
    error: T,
    isLoading: w
  } = (0, O.ZP)(t, n), {
    onClose: S
  } = c, E = o.useCallback(e => {
    h(e).then(() => {
      null == S || S()
    })
  }, [S, h]), P = function(e, t) {
    let n = (0, i.e7)([u.Z], () => u.Z.getMemberCount(e)),
      c = (0, l.Z)(e),
      m = (0, i.e7)([f.Z], () => {
        var t;
        return (null == (t = f.Z.getGuild(e)) ? true : t.vanityURLCode) != null
      }),
      p = (0, b.g1)(e, "Powerup Deactivate Modal"),
      g = (0, i.e7)([d.Z], () => t.skuId !== a.If || null == c ? 0 : d.Z.getSortedRoles(e).reduce((e, t) => {
        var n, r;
        return (null == (n = t.colorStrings) ? true : n.secondaryColor) == null ? e : e + (null != (r = c[t.id]) ? r : 0)
      }, 0), [e, t.skuId, c]);
    return o.useMemo(() => {
      let e;
      switch (t.skuId) {
        case a.If:
          e = g > 0 ? k.intl.formatToPlainString(v.default["4jSvr6"], {
            perk: t.title,
            memberCount: g
          }) : k.intl.formatToPlainString(v.default.cavtEh, {
            perk: t.title
          });
          break;
        case a.A$:
          e = m ? (0, r.jsx)(s.Text, {
            color: "text-danger",
            variant: "text-sm/semibold",
            children: k.intl.string(v.default.hN75yc)
          }) : (0, r.jsx)(s.Text, {
            color: "text-danger",
            variant: "text-sm/semibold",
            children: k.intl.string(v.default.Du91RU)
          });
          break;
        case a.MB:
        case a.Vk:
          e = k.intl.string(v.default.Vf2ZcX);
          break;
        default:
          e = k.intl.formatToPlainString(v.default["4jSvr6"], {
            perk: t.title,
            memberCount: n
          })
      }
      return m && t.skuId === a.XW && (e = (0, r.jsxs)(r.Fragment, {
        children: [e, (0, r.jsx)(s.Text, {
          color: "text-danger",
          variant: "text-sm/semibold",
          children: p ? k.intl.string(v.default.TkNA7e) : k.intl.string(v.default.M4XL5u)
        })]
      })), e
    }, [t, g, n, m, p])
  }(t, n);
  return (0, m.$)(t, n, m.w.DEACTIVATE), (0, r.jsx)(_, y({
    size: n.type === x.Us.LEVEL ? "md" : "sm",
    title: n.title,
    body: (() => {
      switch (n.type) {
        case x.Us.LEVEL:
          return (0, r.jsx)(g.Z, {
            powerup: n
          });
        case x.Us.PERK:
          return (0, r.jsx)(p.m, {
            className: j.image,
            powerup: n
          })
      }
    })(),
    warningText: P,
    error: T,
    isLoading: w,
    onDeactivate: E
  }, c))
}