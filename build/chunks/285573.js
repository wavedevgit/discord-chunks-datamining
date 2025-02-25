/** Chunk was on 64615 **/
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(239091),
  c = n(146773),
  u = n(592125),
  d = n(984933),
  p = n(496675),
  h = n(98597),
  f = n(473403),
  g = n(981631),
  m = n(490897),
  b = n(436804);
let v = (0, c.B)(function(e) {
  let {
    guild: t,
    selectedChannelId: l,
    position: c,
    disableManageChannels: v,
    sorting: y,
    sortingType: O,
    sortingPosition: j,
    connectChannelDragSource: _,
    connectChannelDropTarget: x,
    tabIndex: C
  } = e, P = (0, a.e7)([u.Z, d.ZP], () => {
    let e = d.ZP.getDirectoryChannelIds(t.id);
    return 0 === e.length ? null : u.Z.getChannel(e[0])
  }), S = (0, a.e7)([u.Z], () => u.Z.getChannel(null == P ? void 0 : P.parent_id)), N = l === (null == P ? void 0 : P.id), Z = (0, a.e7)([p.Z], () => null != S ? p.Z.can(g.Plq.MANAGE_CHANNELS, S) : null != t && p.Z.can(g.Plq.MANAGE_CHANNELS, t)), I = i.useCallback(e => {
    null != P && (0, s.jW)(e, async () => {
      let {
        default: e
      } = await n.e("70623").then(n.bind(n, 99334));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = function(e) {
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
        }({}, t), i = i = {
          channel: P
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })
  }, [P]);
  if (null == P) return null;
  let w = (0, h.jo)(c, j),
    E = (0, h.CN)(P, y, O),
    T = (0, r.jsx)("div", {
      className: o()(w, {
        [b.disabled]: E,
        [b.selected]: N
      }),
      "data-dnd-name": P.name,
      children: (0, r.jsxs)(f.Z, {
        className: b.iconVisibility,
        channel: P,
        guild: t,
        selected: N,
        onContextMenu: I,
        forceInteractable: !0,
        resolvedUnreadSetting: m.i.ONLY_MENTIONS,
        children: [(0, r.jsx)(h.eP, {
          channel: P,
          tabIndex: C
        }), (0, r.jsx)(h.hR, {
          channel: P,
          disableManageChannels: v,
          tabIndex: C
        })]
      })
    });
  return Z && (T = x(_(T))), T
})