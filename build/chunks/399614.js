/** Chunk was on 71567 (60ad2434a2d9f37a.js) **/
"use strict";
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(192379),
  s = n(399606),
  a = n(481060),
  l = n(710344),
  o = n(734893),
  c = n(8426),
  d = n(969632),
  u = n(922112),
  m = n(388032),
  p = n(339945);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
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
let f = [],
  b = function(e) {
    let {
      guildId: t
    } = e, b = (0, s.Wu)([d.Z], () => {
      var e;
      return null !== (e = d.Z.getSettings().resourceChannels) && void 0 !== e ? e : f
    }), x = i.useMemo(() => b.map(e => h(g({}, e), {
      id: e.channelId
    })), [b]), {
      handleDragStart: j,
      handleDragReset: N,
      handleDragComplete: v
    } = (0, l.Z)(x, c.lq), _ = i.useCallback((e, n) => {
      let r = d.Z.getSettings();
      null != r && ((0, c.r2)(e), (0, c.oo)(t, r).then(() => {
        (0, c.mM)(t, e.channelId, n)
      }))
    }, [t]), O = i.useCallback(() => {
      if (null != t) return (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("84725").then(n.bind(n, 462499));
        return n => (0, r.jsx)(e, h(g({}, n), {
          guildId: t,
          onSave: c.r2,
          onIconUpload: _
        }))
      })
    }, [t, _]);
    return (0, r.jsxs)("div", {
      className: p.editResources,
      children: [b.map((e, n) => (0, r.jsx)(u.Z, {
        guildId: t,
        resourceChannel: e,
        index: n,
        onDragStart: j,
        onDragReset: N,
        onDragComplete: v
      }, e.channelId)), b.length < o.x3 && (0, r.jsxs)(a.P3F, {
        className: p.addActionItem,
        onClick: O,
        children: [(0, r.jsx)(a.oFk, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "none",
          children: m.NW.string(m.t["w9/qGR"])
        })]
      })]
    })
  }