/** Chunk was on 60831 **/
/** chunk id: 487029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk675478 = require("./675478.js"),
  Chunk19780 = require("./19780.js"),
  Chunk709054 = require("./709054.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk242291 = require("./242291.js"),
  Chunk174470 = require("./174470.js"),
  Chunk549771 = require("./549771.js"),
  Chunk964398 = require("./964398.jsx"),
  Chunk294206 = require("./294206.jsx"),
  Chunk710111 = require("./710111.js"),
  Chunk697453 = require("./697453.js");

function _(e) {
  let {
    guildId: t,
    channel: n,
    width: _,
    height: m,
    keepOpen: I,
    interactive: S = true,
    analyticsSource: b,
    onClose: v
  } = e, x = function(e) {
    let [t, n] = (0, a.Wu)([h.Z], () => [h.Z.getSounds(), h.Z.getFavorites()]);
    return i.useMemo(() => {
      let l = [],
        i = [...e, C.X8],
        r = (e, i) => {
          var r, a;
          for (let o of null != (a = null == (r = t.get(e)) ? true : r.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? a : []) {
            let e = n.has(o.soundId);
            (e && i || !e && !i) && o.available && l.push(o)
          }
        };
      return i.forEach(e => r(e, true)), i.forEach(e => r(e, false)), l
    }, [t, n, e])
  }((0, N.h)(n, true)), P = (0, E.j)(), Z = i.useRef(null), [A, j] = i.useState(true), D = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: R
  } = (0, s.ZP)(o.Z.SOUNDBOARD_WHEEL), w = i.useCallback(e => {
    (0, p.GN)(e, n.id, R), v()
  }, [R, n.id, v]);
  i.useEffect(() => {
    g.w(), c.DZ.loadIfNecessary()
  }, []), i.useEffect(() => {
    0 === x.length && 0 === P.length && v()
  }, [x.length, P, v]), i.useEffect(() => () => {
    let e = Z.current;
    I || null == e || w(e)
  }, [I, w]), (0, u.Z)({
    type: r.ImpressionTypes.POPOUT,
    name: r.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: b,
      guild_id: t,
      media_session_id: D
    }
  }, {
    disableTrack: !S
  });
  let k = i.useCallback(e => {
      Z.current = e, j(null == e ? true : e.soundId)
    }, []),
    U = i.useCallback(e => {
      if (null == e) return void k(null);
      let t = x[e];
      null != t && k(t)
    }, [k, x]),
    M = i.useCallback(e => {
      if (null == e) return;
      let t = x[e];
      null != t && w(t)
    }, [x, w]),
    L = i.useMemo(() => x.map(e => (0, l.jsx)(y.ZP, {
      interactive: S,
      className: T.soundButton,
      sound: e,
      focused: A === e.soundId,
      channel: n
    }, e.soundId)), [A, n, S, x]);
  return 0 === x.length ? null : (0, l.jsx)(s.Gt, {
    value: R,
    children: (0, l.jsx)(O.Z, {
      wheelWidth: _,
      wheelHeight: m,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !I,
      activeItem: A,
      onItemSelect: U,
      onItemAction: M,
      onClose: v,
      interactive: S,
      children: L
    })
  })
}