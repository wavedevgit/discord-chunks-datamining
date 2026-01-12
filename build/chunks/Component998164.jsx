/** Chunk was on 9536 **/
/** chunk id: 998164, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710344 = require("./710344.js"),
  Chunk734893 = require("./734893.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk430677 = require("./430677.jsx"),
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
let p = [];

function h() {
  return (0, r.jsx)("div", {
    className: m.actionItemContainer,
    children: (0, r.jsxs)("div", {
      className: m.actionItem,
      children: [(0, r.jsx)("div", {
        className: m.actionItemEmojiWrapper,
        children: (0, r.jsx)(a.snC, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 22
        })
      }), (0, r.jsx)("div", {
        className: m.actionItemText,
        children: (0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: g.intl.string(g.t["K/i3iQ"])
        })
      })]
    })
  })
}

function x(e) {
  let {
    guildId: t,
    onAddAction: l
  } = e, s = i.useCallback(() => {
    if (null != t) return (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("7590"), n.e("88575")]).then(n.bind(n, 380716));
      return n => (0, r.jsx)(e, b(f({}, n), {
        guildId: t,
        onSave: l
      }))
    })
  }, [t, l]);
  return (0, r.jsxs)(a.P3F, {
    className: m.addActionItem,
    onClick: s,
    children: [(0, r.jsx)(a.oFk, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "none",
      children: g.intl.string(g.t.qce3EM)
    })]
  })
}
let j = function(e) {
  let {
    guildId: t
  } = e, n = (0, l.Wu)([d.Z], () => {
    var e;
    return null != (e = d.Z.getSettings().newMemberActions) ? e : p
  }), a = i.useCallback((e, t) => {
    (0, c.vR)(e, t)
  }, []), g = i.useCallback((e, r, i, l) => {
    var a;
    let s = null == (a = n[e]) ? true : a.channelId,
      o = r.channelId;
    null != s && null != d.Z.getSettings() && (null == d.Z.getPendingDataForChannel(o) && l && (0, c.gi)(t, s, i), (0, c.el)(s, r))
  }, [n, t]), j = i.useCallback(e => {
    var t;
    let r = null == (t = n[e]) ? true : t.channelId;
    null != r && (0, c.Hr)(r)
  }, [n]), v = n.map(e => b(f({}, e), {
    id: e.channelId
  })), O = i.useCallback(e => {
    (0, c.hS)(e)
  }, []), {
    handleDragStart: y,
    handleDragReset: C,
    handleDragComplete: N
  } = (0, s.Z)(v, O);
  return (0, r.jsxs)("div", {
    className: m.section,
    children: [n.map((e, n) => (0, r.jsx)(u.Z, {
      guildId: t,
      action: e,
      actionIndex: n,
      onChange: g,
      onDelete: j,
      onDragStart: y,
      onDragReset: C,
      onDragComplete: N
    }, e.channelId)), (0, r.jsx)(h, {}), n.length < o.O9 && (0, r.jsx)(x, {
      guildId: t,
      onAddAction: a
    })]
  })
}