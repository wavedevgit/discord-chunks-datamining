/** Chunk was on 17534 **/
/** chunk id: 506792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk442433 = require("./442433.js"),
  Chunk676002 = require("./676002.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js"),
  Chunk557534 = require("./557534.jsx"),
  Chunk166444 = require("./166444.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk728444 = require("./728444.js");
let A = (0, Chunk676002.a)(function(e) {
  let {
    guild: t,
    selectedChannelId: i,
    position: c,
    disableManageChannels: A,
    sorting: y,
    sortingType: O,
    sortingPosition: _,
    connectChannelDragSource: j,
    connectChannelDropTarget: x,
    tabIndex: v
  } = e, E = (0, a.bG)([u.A, d.Ay], () => {
    let e = d.Ay.getDirectoryChannelIds(t.id);
    return 0 === e.length ? null : u.A.getChannel(e[0])
  }), C = (0, a.bG)([u.A], () => u.A.getChannel(null == E ? true : E.parent_id)), S = i === (null == E ? true : E.id), I = (0, a.bG)([h.A], () => null != C ? h.A.can(f.xBc.MANAGE_CHANNELS, C) : null != t && h.A.can(f.xBc.MANAGE_CHANNELS, t)), N = l.useCallback(e => {
    null != E && (0, o.L3)(e, async () => {
      let {
        default: e
      } = await n.e("29559").then(n.bind(n, 994058));
      return t => {
        var n, l;
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
        }({}, t), l = l = {
          channel: E
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    })
  }, [E]);
  if (null == E) return null;
  let T = (0, p.O6)(c, _),
    P = (0, p.h$)(E, y, O),
    w = (0, r.jsx)("div", {
      className: s()(T, {
        [b.r9]: P,
        [b.wH]: S
      }),
      "data-dnd-name": E.name,
      children: (0, r.jsxs)(g.Ay, {
        className: b.Ki,
        channel: E,
        guild: t,
        selected: S,
        onContextMenu: N,
        forceInteractable: true,
        resolvedUnreadSetting: m.e.ONLY_MENTIONS,
        children: [(0, r.jsx)(p.gQ, {
          channel: E,
          tabIndex: v
        }), (0, r.jsx)(p.Jd, {
          channel: E,
          disableManageChannels: A,
          tabIndex: v
        })]
      })
    });
  return I && (w = x(j(w))), w
})