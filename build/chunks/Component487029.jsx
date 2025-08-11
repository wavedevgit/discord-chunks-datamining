/** Chunk was on 82096 **/
/** chunk id: 487029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk840558 = require("./840558.js");

function m(e) {
  let {
    guildId: t,
    channel: n,
    width: m,
    height: C,
    keepOpen: v,
    interactive: T = true,
    analyticsSource: j,
    onClose: I
  } = e, _ = function(e) {
    let [t, n] = (0, o.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
    return l.useMemo(() => {
      let r = [],
        l = [...e, x.X8],
        i = (e, l) => {
          var i, o;
          for (let s of null != (o = null == (i = t.get(e)) ? true : i.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? o : []) {
            let e = n.has(s.soundId);
            (e && l || !e && !l) && s.available && r.push(s)
          }
        };
      return l.forEach(e => i(e, true)), l.forEach(e => i(e, false)), r
    }, [t, n, e])
  }((0, N.h)(n, true)), S = (0, O.j)(), P = l.useRef(null), [A, R] = l.useState(true), w = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: D
  } = (0, a.ZP)(s.Z.SOUNDBOARD_WHEEL), Z = l.useCallback(e => {
    (0, p.GN)(e, n.id, D), I()
  }, [D, n.id, I]);
  l.useEffect(() => {
    h.w(), u.DZ.loadIfNecessary()
  }, []), l.useEffect(() => {
    0 === _.length && 0 === S.length && I()
  }, [_.length, S, I]), l.useEffect(() => () => {
    let e = P.current;
    v || null == e || Z(e)
  }, [v, Z]), (0, c.Z)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: j,
      guild_id: t,
      media_session_id: w
    }
  }, {
    disableTrack: !T
  });
  let k = l.useCallback(e => {
      P.current = e, R(null == e ? true : e.soundId)
    }, []),
    M = l.useCallback(e => {
      if (null == e) return void k(null);
      let t = _[e];
      null != t && k(t)
    }, [k, _]),
    U = l.useCallback(e => {
      if (null == e) return;
      let t = _[e];
      null != t && Z(t)
    }, [_, Z]),
    B = l.useMemo(() => _.map(e => (0, r.jsx)(b.ZP, {
      interactive: T,
      className: E.soundButton,
      sound: e,
      focused: A === e.soundId,
      channel: n
    }, e.soundId)), [A, n, T, _]);
  return 0 === _.length ? null : (0, r.jsx)(a.Gt, {
    value: D,
    children: (0, r.jsx)(y.Z, {
      wheelWidth: m,
      wheelHeight: C,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !v,
      activeItem: A,
      onItemSelect: M,
      onItemAction: U,
      onClose: I,
      interactive: T,
      children: B
    })
  })
}