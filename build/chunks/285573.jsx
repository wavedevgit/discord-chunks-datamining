/** Chunk was on 34779 **/
/** chunk id: 285573, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk239091 = require("./239091.js"),
  Chunk146773 = require("./146773.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk98597 = require("./98597.jsx"),
  Chunk473403 = require("./473403.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk915887 = require("./915887.js");
let O = (0, Chunk146773.B)(function(e) {
  let {
    guild: t,
    selectedChannelId: l,
    position: c,
    disableManageChannels: O,
    sorting: _,
    sortingType: y,
    sortingPosition: C,
    connectChannelDragSource: v,
    connectChannelDropTarget: j,
    tabIndex: E
  } = e, S = (0, s.e7)([u.Z, d.ZP], () => {
    let e = d.ZP.getDirectoryChannelIds(t.id);
    return 0 === e.length ? null : u.Z.getChannel(e[0])
  }), x = (0, s.e7)([u.Z], () => u.Z.getChannel(null == S ? true : S.parent_id)), I = l === (null == S ? true : S.id), P = (0, s.e7)([h.Z], () => null != x ? h.Z.can(g.Plq.MANAGE_CHANNELS, x) : null != t && h.Z.can(g.Plq.MANAGE_CHANNELS, t)), N = i.useCallback(e => {
    null != S && (0, a.jW)(e, async () => {
      let {
        default: e
      } = await n.e("70623").then(n.bind(n, 99334));
      return t => {
        var n, i;
        return <e{...n = function(e) {
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
        }), n} />
      }
    })
  }, [S]);
  if (null == S) return null;
  let w = (0, p.jo)(c, C),
    Z = (0, p.CN)(S, _, y),
    T = <div className={o()(w, {
        [b.disabled]: Z,
        [b.selected]: I
      })} data-dnd-name={S.name}><f.ZP className={b.iconVisibility} channel={S} guild={t} selected={I} onContextMenu={N} forceInteractable={true} resolvedUnreadSetting={m.i.ONLY_MENTIONS}>{<p.eP channel={S} tabIndex={E} />}{<p.hR channel={S} disableManageChannels={O} tabIndex={E} />}</f.ZP></div>;
  return P && (T = j(v(T))), T
})