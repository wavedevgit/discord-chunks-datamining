/** Chunk was on 61344 **/
/** chunk id: 927421, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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

function E(e) {
  let {
    guildId: t,
    channel: n,
    width: E,
    height: O,
    keepOpen: C,
    interactive: S = true,
    analyticsSource: x,
    onClose: j
  } = e, I = function(e) {
    let [t, n] = (0, a.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites()]);
    return r.useMemo(() => {
      let l = [],
        r = [...e, y.mV],
        i = (e, r) => {
          var i, a;
          for (let s of null != (i = null == (a = t.get(e)) ? true : a.sort((e, t) => h.default.compare(e.soundId, t.soundId))) ? i : []) {
            let e = n.has(s.soundId);
            (e && r || !e && !r) && s.available && l.push(s)
          }
        };
      return r.forEach(e => i(e, true)), r.forEach(e => i(e, false)), l
    }, [t, n, e])
  }((0, A.Y)(n, true)), T = (0, g.T)(), N = r.useRef(null), [P, w] = r.useState(true), R = (0, a.bG)([d.A], () => d.A.getMediaSessionId()), {
    analyticsLocations: D
  } = (0, o.Ay)(s.A.SOUNDBOARD_WHEEL), M = r.useCallback(e => {
    (0, m.Ak)(e, n.id, D), j()
  }, [D, n.id, j]);
  r.useEffect(() => {
    p.E7(), u.bW.loadIfNecessary()
  }, []), r.useEffect(() => {
    0 === I.length && 0 === T.length && j()
  }, [I.length, T, j]), r.useEffect(() => () => {
    let e = N.current;
    C || null == e || M(e)
  }, [C, M]), (0, c.A)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: x,
      guild_id: t,
      media_session_id: R
    }
  }, {
    disableTrack: !S
  });
  let L = r.useCallback(e => {
      N.current = e, w(null == e ? true : e.soundId)
    }, []),
    k = r.useCallback(e => {
      if (null == e) return void L(null);
      let t = I[e];
      null != t && L(t)
    }, [L, I]),
    U = r.useCallback(e => {
      if (null == e) return;
      let t = I[e];
      null != t && M(t)
    }, [I, M]),
    G = r.useMemo(() => I.map(e => (0, l.jsx)(_.Ay, {
      interactive: S,
      className: v.a,
      sound: e,
      focused: P === e.soundId,
      channel: n
    }, e.soundId)), [P, n, S, I]);
  return 0 === I.length ? null : (0, l.jsx)(o.f5, {
    value: D,
    children: (0, l.jsx)(b.A, {
      wheelWidth: E,
      wheelHeight: O,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !C,
      activeItem: P,
      onItemSelect: k,
      onItemAction: U,
      onClose: j,
      interactive: S,
      children: G
    })
  })
}