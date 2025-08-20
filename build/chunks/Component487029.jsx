/** Chunk was on 84927 **/
/** chunk id: 487029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk649093 = require("./649093.js");

function E(e) {
  let {
    guildId: t,
    channel: n,
    width: E,
    height: C,
    keepOpen: j,
    interactive: v = true,
    analyticsSource: T,
    onClose: I
  } = e, P = function(e) {
    let [t, n] = (0, i.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
    return l.useMemo(() => {
      let r = [],
        l = [...e, N.X8],
        s = (e, l) => {
          var s, i;
          for (let a of null != (i = null == (s = t.get(e)) ? true : s.sort((e, t) => h.default.compare(e.soundId, t.soundId))) ? i : []) {
            let e = n.has(a.soundId);
            (e && l || !e && !l) && a.available && r.push(a)
          }
        };
      return l.forEach(e => s(e, true)), l.forEach(e => s(e, false)), r
    }, [t, n, e])
  }((0, y.h)(n, true)), S = (0, O.j)(), _ = l.useRef(null), [R, w] = l.useState(true), D = (0, i.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: A
  } = (0, o.ZP)(a.Z.SOUNDBOARD_WHEEL), Z = l.useCallback(e => {
    (0, p.GN)(e, n.id, A), I()
  }, [A, n.id, I]);
  l.useEffect(() => {
    f.w(), u.DZ.loadIfNecessary()
  }, []), l.useEffect(() => {
    0 === P.length && 0 === S.length && I()
  }, [P.length, S, I]), l.useEffect(() => () => {
    let e = _.current;
    j || null == e || Z(e)
  }, [j, Z]), (0, c.Z)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: T,
      guild_id: t,
      media_session_id: D
    }
  }, {
    disableTrack: !v
  });
  let k = l.useCallback(e => {
      _.current = e, w(null == e ? true : e.soundId)
    }, []),
    M = l.useCallback(e => {
      if (null == e) return void k(null);
      let t = P[e];
      null != t && k(t)
    }, [k, P]),
    B = l.useCallback(e => {
      if (null == e) return;
      let t = P[e];
      null != t && Z(t)
    }, [P, Z]),
    L = l.useMemo(() => P.map(e => (0, r.jsx)(b.ZP, {
      interactive: v,
      className: m.soundButton,
      sound: e,
      focused: R === e.soundId,
      channel: n
    }, e.soundId)), [R, n, v, P]);
  return 0 === P.length ? null : (0, r.jsx)(o.Gt, {
    value: A,
    children: (0, r.jsx)(x.Z, {
      wheelWidth: E,
      wheelHeight: C,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !j,
      activeItem: R,
      onItemSelect: M,
      onItemAction: B,
      onClose: I,
      interactive: v,
      children: L
    })
  })
}