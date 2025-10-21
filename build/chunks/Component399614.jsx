/** Chunk was on 64982 **/
/** chunk id: 399614, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710344 = require("./710344.js"),
  Chunk734893 = require("./734893.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk922112 = require("./922112.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197530 = require("./197530.js");

function p(e) {
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

function f(e, t) {
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
let h = [],
  b = function(e) {
    let {
      guildId: t
    } = e, b = (0, l.Wu)([d.Z], () => {
      var e;
      return null != (e = d.Z.getSettings().resourceChannels) ? e : h
    }), x = i.useMemo(() => b.map(e => f(p({}, e), {
      id: e.channelId
    })), [b]), {
      handleDragStart: j,
      handleDragReset: v,
      handleDragComplete: _
    } = (0, s.Z)(x, c.lq), C = i.useCallback((e, n) => {
      let r = d.Z.getSettings();
      null != r && ((0, c.r2)(e), (0, c.oo)(t, r).then(() => {
        (0, c.mM)(t, e.channelId, n)
      }))
    }, [t]), O = i.useCallback(() => {
      if (null != t) return (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("84725").then(n.bind(n, 462499));
        return n => (0, r.jsx)(e, f(p({}, n), {
          guildId: t,
          onSave: c.r2,
          onIconUpload: C
        }))
      })
    }, [t, C]);
    return (0, r.jsxs)("div", {
      className: m.editResources,
      children: [b.map((e, n) => (0, r.jsx)(u.Z, {
        guildId: t,
        resourceChannel: e,
        index: n,
        onDragStart: j,
        onDragReset: v,
        onDragComplete: _
      }, e.channelId)), b.length < o.x3 && (0, r.jsxs)(a.P3F, {
        className: m.addActionItem,
        onClick: O,
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