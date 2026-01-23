/** Chunk was on 31748 **/
/** chunk id: 927421, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./638769.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk594061 = require("./594061.js"),
  Chunk383501 = require("./383501.js"),
  Chunk661191 = require("./661191.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk536432 = require("./536432.js"),
  Chunk933204 = require("./933204.js"),
  Chunk805143 = require("./805143.js"),
  Chunk375366 = require("./375366.jsx"),
  Chunk69217 = require("./69217.jsx"),
  Chunk980504 = require("./980504.js"),
  Chunk342129 = require("./342129.js");

function v(e) {
  let {
    guildId: t,
    channel: n,
    width: v,
    height: O,
    keepOpen: x,
    interactive: S = true,
    analyticsSource: C,
    onClose: N
  } = e, I = function(e) {
    let [t, n] = (0, a.yK)([g.A], () => [g.A.getSounds(), g.A.getFavorites()]);
    return l.useMemo(() => {
      let r = [],
        l = [...e, b.mV],
        i = (e, l) => {
          var i, a;
          for (let o of null != (i = null == (a = t.get(e)) ? true : a.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? i : []) {
            let e = n.has(o.soundId);
            (e && l || !e && !l) && o.available && r.push(o)
          }
        };
      return l.forEach(e => i(e, true)), l.forEach(e => i(e, false)), r
    }, [t, n, e])
  }((0, h.Y)(n, true)), j = (0, _.T)(), T = l.useRef(null), [w, P] = l.useState(true), R = (0, a.bG)([d.A], () => d.A.getMediaSessionId()), {
    analyticsLocations: D
  } = (0, s.Ay)(o.A.SOUNDBOARD_WHEEL), k = l.useCallback(e => {
    (0, m.Ak)(e, n.id, D), N()
  }, [D, n.id, N]);
  l.useEffect(() => {
    p.E7(), u.bW.loadIfNecessary()
  }, []), l.useEffect(() => {
    0 === I.length && 0 === j.length && N()
  }, [I.length, j, N]), l.useEffect(() => () => {
    let e = T.current;
    x || null == e || k(e)
  }, [x, k]), (0, c.A)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: C,
      guild_id: t,
      media_session_id: R
    }
  }, {
    disableTrack: !S
  });
  let L = l.useCallback(e => {
      T.current = e, P(null == e ? true : e.soundId)
    }, []),
    M = l.useCallback(e => {
      if (null == e) return void L(null);
      let t = I[e];
      null != t && L(t)
    }, [L, I]),
    U = l.useCallback(e => {
      if (null == e) return;
      let t = I[e];
      null != t && k(t)
    }, [I, k]),
    V = l.useMemo(() => I.map(e => (0, r.jsx)(A.Ay, {
      interactive: S,
      className: E.a,
      sound: e,
      focused: w === e.soundId,
      channel: n
    }, e.soundId)), [w, n, S, I]);
  return 0 === I.length ? null : (0, r.jsx)(s.f5, {
    value: D,
    children: (0, r.jsx)(y.A, {
      wheelWidth: v,
      wheelHeight: O,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !x,
      activeItem: w,
      onItemSelect: M,
      onItemAction: U,
      onClose: N,
      interactive: S,
      children: V
    })
  })
}