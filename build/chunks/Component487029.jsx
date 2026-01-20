/** Chunk was on 11010 **/
/** chunk id: 487029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  let {
    guildId: t,
    channel: n,
    width: O,
    height: C,
    keepOpen: S,
    interactive: x = true,
    analyticsSource: I,
    onClose: N
  } = e, T = function(e) {
    let [t, n] = (0, a.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
    return i.useMemo(() => {
      let r = [],
        i = [...e, y.X8],
        l = (e, i) => {
          var l, a;
          for (let o of null != (a = null == (l = t.get(e)) ? true : l.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? a : []) {
            let e = n.has(o.soundId);
            (e && i || !e && !i) && o.available && r.push(o)
          }
        };
      return i.forEach(e => l(e, true)), i.forEach(e => l(e, false)), r
    }, [t, n, e])
  }((0, h.h)(n, true)), j = (0, b.j)(), P = i.useRef(null), [w, Z] = i.useState(true), A = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: R
  } = (0, c.ZP)(o.Z.SOUNDBOARD_WHEEL), D = i.useCallback(e => {
    (0, m.GN)(e, n.id, R), N()
  }, [R, n.id, N]);
  i.useEffect(() => {
    p.w(), u.DZ.loadIfNecessary()
  }, []), i.useEffect(() => {
    0 === T.length && 0 === j.length && N()
  }, [T.length, j, N]), i.useEffect(() => () => {
    let e = P.current;
    S || null == e || D(e)
  }, [S, D]), (0, s.Z)({
    type: l.ImpressionTypes.POPOUT,
    name: l.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: I,
      guild_id: t,
      media_session_id: A
    }
  }, {
    disableTrack: !x
  });
  let M = i.useCallback(e => {
      P.current = e, Z(null == e ? true : e.soundId)
    }, []),
    k = i.useCallback(e => {
      if (null == e) return void M(null);
      let t = T[e];
      null != t && M(t)
    }, [M, T]),
    L = i.useCallback(e => {
      if (null == e) return;
      let t = T[e];
      null != t && D(t)
    }, [T, D]),
    U = i.useMemo(() => T.map(e => (0, r.jsx)(E.ZP, {
      interactive: x,
      className: _.soundButton,
      sound: e,
      focused: w === e.soundId,
      channel: n
    }, e.soundId)), [w, n, x, T]);
  return 0 === T.length ? null : (0, r.jsx)(c.Gt, {
    value: R,
    children: (0, r.jsx)(v.Z, {
      wheelWidth: O,
      wheelHeight: C,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !S,
      activeItem: w,
      onItemSelect: k,
      onItemAction: L,
      onClose: N,
      interactive: x,
      children: U
    })
  })
}