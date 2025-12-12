/** Chunk was on 51235 **/
/** chunk id: 285573, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk98597 = require("./98597.jsx"),
  Chunk473403 = require("./473403.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk642915 = require("./642915.js");
let y = (0, Chunk146773.B)(function(e) {
  let {
    guild: t,
    selectedChannelId: l,
    position: c,
    disableManageChannels: y,
    sorting: O,
    sortingType: v,
    sortingPosition: j,
    connectChannelDragSource: C,
    connectChannelDropTarget: x,
    tabIndex: E
  } = e, S = (0, o.e7)([u.Z, d.ZP], () => {
    let e = d.ZP.getDirectoryChannelIds(t.id);
    return 0 === e.length ? null : u.Z.getChannel(e[0])
  }), I = (0, o.e7)([u.Z], () => u.Z.getChannel(null == S ? true : S.parent_id)), _ = l === (null == S ? true : S.id), P = (0, o.e7)([f.Z], () => null != I ? f.Z.can(g.Plq.MANAGE_CHANNELS, I) : null != t && f.Z.can(g.Plq.MANAGE_CHANNELS, t)), N = i.useCallback(e => {
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
                enumerable: true,
                configurable: true,
                writable: true
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
  let Z = (0, h.jo)(c, j),
    w = (0, h.CN)(S, O, v),
    T = (0, r.jsx)("div", {
      className: a()(Z, {
        [m.disabled]: w,
        [m.selected]: _
      }),
      "data-dnd-name": S.name,
      children: (0, r.jsxs)(p.ZP, {
        className: m.iconVisibility,
        channel: S,
        guild: t,
        selected: _,
        onContextMenu: N,
        forceInteractable: true,
        resolvedUnreadSetting: b.i.ONLY_MENTIONS,
        children: [(0, r.jsx)(h.eP, {
          channel: S,
          tabIndex: E
        }), (0, r.jsx)(h.hR, {
          channel: S,
          disableManageChannels: y,
          tabIndex: E
        })]
      })
    });
  return P && (T = x(C(T))), T
})