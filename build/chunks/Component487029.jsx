/** Chunk was on 69813 **/
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
    height: S,
    keepOpen: C,
    interactive: I = true,
    analyticsSource: N,
    onClose: T
  } = e, x = function(e) {
    let [t, n] = (0, a.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
    return l.useMemo(() => {
      let r = [],
        l = [...e, _.X8],
        i = (e, l) => {
          var i, a;
          for (let o of null != (a = null == (i = t.get(e)) ? true : i.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? a : []) {
            let e = n.has(o.soundId);
            (e && l || !e && !l) && o.available && r.push(o)
          }
        };
      return l.forEach(e => i(e, true)), l.forEach(e => i(e, false)), r
    }, [t, n, e])
  }((0, h.h)(n, true)), P = (0, m.j)(), Z = l.useRef(null), [j, w] = l.useState(true), A = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: R
  } = (0, c.ZP)(o.Z.SOUNDBOARD_WHEEL), D = l.useCallback(e => {
    (0, b.GN)(e, n.id, R), T()
  }, [R, n.id, T]);
  l.useEffect(() => {
    p.w(), u.DZ.loadIfNecessary()
  }, []), l.useEffect(() => {
    0 === x.length && 0 === P.length && T()
  }, [x.length, P, T]), l.useEffect(() => () => {
    let e = Z.current;
    C || null == e || D(e)
  }, [C, D]), (0, s.Z)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: N,
      guild_id: t,
      media_session_id: A
    }
  }, {
    disableTrack: !I
  });
  let M = l.useCallback(e => {
      Z.current = e, w(null == e ? true : e.soundId)
    }, []),
    k = l.useCallback(e => {
      if (null == e) return void M(null);
      let t = x[e];
      null != t && M(t)
    }, [M, x]),
    L = l.useCallback(e => {
      if (null == e) return;
      let t = x[e];
      null != t && D(t)
    }, [x, D]),
    U = l.useMemo(() => x.map(e => (0, r.jsx)(v.ZP, {
      interactive: I,
      className: y.soundButton,
      sound: e,
      focused: j === e.soundId,
      channel: n
    }, e.soundId)), [j, n, I, x]);
  return 0 === x.length ? null : (0, r.jsx)(c.Gt, {
    value: R,
    children: (0, r.jsx)(E.Z, {
      wheelWidth: O,
      wheelHeight: S,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !C,
      activeItem: j,
      onItemSelect: k,
      onItemAction: L,
      onClose: T,
      interactive: I,
      children: U
    })
  })
}