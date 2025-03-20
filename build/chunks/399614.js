/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(200651),
  i = n(192379),
  s = n(399606),
  a = n(481060),
  l = n(710344),
  o = n(734893),
  A = n(8426),
  c = n(969632),
  d = n(922112),
  u = n(388032),
  g = n(668813);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
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
    } = e, h = (0, s.Wu)([c.Z], () => {
      var e;
      return null !== (e = c.Z.getSettings().resourceChannels) && void 0 !== e ? e : p
    }), C = i.useMemo(() => h.map(e => m(f({}, e), {
      id: e.channelId
    })), [h]), {
      handleDragStart: b,
      handleDragReset: v,
      handleDragComplete: x
    } = (0, l.Z)(C, A.lq), N = i.useCallback((e, n) => {
      let r = c.Z.getSettings();
      null != r && ((0, A.r2)(e), (0, A.oo)(t, r).then(() => {
        (0, A.mM)(t, e.channelId, n)
      }))
    }, [t]), j = i.useCallback(() => {
      if (null != t) return (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("84725").then(n.bind(n, 462499));
        return n => (0, r.jsx)(e, m(f({}, n), {
          guildId: t,
          onSave: A.r2,
          onIconUpload: N
        }))
      })
    }, [t, N]);
    return (0, r.jsxs)("div", {
      className: g.editResources,
      children: [h.map((e, n) => (0, r.jsx)(d.Z, {
        guildId: t,
        resourceChannel: e,
        index: n,
        onDragStart: b,
        onDragReset: v,
        onDragComplete: x
      }, e.channelId)), h.length < o.x3 && (0, r.jsxs)(a.P3F, {
        className: g.addActionItem,
        onClick: j,
        children: [(0, r.jsx)(a.oFk, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "none",
          children: u.NW.string(u.t["w9/qGR"])
        })]
      })]
    })
  }