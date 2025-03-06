/** Chunk was on 53494 **/
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
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
  b = n(691878);
let v = (0, c.B)(function(e) {
  let {
    guild: t,
    selectedChannelId: o,
    position: c,
    disableManageChannels: v,
    sorting: y,
    sortingType: _,
    sortingPosition: O,
    connectChannelDragSource: j,
    connectChannelDropTarget: C,
    tabIndex: x
  } = e, S = (0, a.e7)([u.Z, d.ZP], () => {
    let e = d.ZP.getDirectoryChannelIds(t.id);
    return 0 === e.length ? null : u.Z.getChannel(e[0])
  }), P = (0, a.e7)([u.Z], () => u.Z.getChannel(null == S ? void 0 : S.parent_id)), I = o === (null == S ? void 0 : S.id), N = (0, a.e7)([p.Z], () => null != P ? p.Z.can(g.Plq.MANAGE_CHANNELS, P) : null != t && p.Z.can(g.Plq.MANAGE_CHANNELS, t)), Z = i.useCallback(e => {
    null != S && (0, s.jW)(e, async () => {
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
          channel: S
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
  }, [S]);
  if (null == S) return null;
  let w = (0, h.jo)(c, O),
    E = (0, h.CN)(S, y, _),
    T = (0, r.jsx)("div", {
      className: l()(w, {
        [b.disabled]: E,
        [b.selected]: I
      }),
      "data-dnd-name": S.name,
      children: (0, r.jsxs)(f.ZP, {
        className: b.iconVisibility,
        channel: S,
        guild: t,
        selected: I,
        onContextMenu: Z,
        forceInteractable: !0,
        resolvedUnreadSetting: m.i.ONLY_MENTIONS,
        children: [(0, r.jsx)(h.eP, {
          channel: S,
          tabIndex: x
        }), (0, r.jsx)(h.hR, {
          channel: S,
          disableManageChannels: v,
          tabIndex: x
        })]
      })
    });
  return N && (T = C(j(T))), T
})