/** Chunk was on 9536 **/
/** chunk id: 399614, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710344 = require("./710344.js"),
  Chunk734893 = require("./734893.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk922112 = require("./922112.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551952 = require("./551952.js");

function f(e) {
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = [],
  h = function(e) {
    let {
      guildId: t
    } = e, h = (0, l.Wu)([d.Z], () => {
      var e;
      return null != (e = d.Z.getSettings().resourceChannels) ? e : p
    }), x = i.useMemo(() => h.map(e => b(f({}, e), {
      id: e.channelId
    })), [h]), {
      handleDragStart: j,
      handleDragReset: v,
      handleDragComplete: O
    } = (0, s.Z)(x, c.lq), y = i.useCallback((e, n) => {
      let r = d.Z.getSettings();
      null != r && ((0, c.r2)(e), (0, c.oo)(t, r).then(() => {
        (0, c.mM)(t, e.channelId, n)
      }))
    }, [t]), C = i.useCallback(() => {
      if (null != t) return (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("84725").then(n.bind(n, 462499));
        return n => (0, r.jsx)(e, b(f({}, n), {
          guildId: t,
          onSave: c.r2,
          onIconUpload: y
        }))
      })
    }, [t, y]);
    return (0, r.jsxs)("div", {
      className: m.editResources,
      children: [h.map((e, n) => (0, r.jsx)(u.Z, {
        guildId: t,
        resourceChannel: e,
        index: n,
        onDragStart: j,
        onDragReset: v,
        onDragComplete: O
      }, e.channelId)), h.length < o.x3 && (0, r.jsxs)(a.P3F, {
        className: m.addActionItem,
        onClick: C,
        children: [(0, r.jsx)(a.oFk, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "none",
          children: g.intl.string(g.t["w9/qGY"])
        })]
      })]
    })
  }