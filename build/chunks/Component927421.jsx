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
    analyticsSource: N,
    onClose: C
  } = e, j = function(e) {
    let [t, n] = (0, a.yK)([b.A], () => [b.A.getSounds(), b.A.getFavorites()]);
    return r.useMemo(() => {
      let l = [],
        r = [...e, _.mV],
        i = (e, r) => {
          var i, a;
          for (let s of null != (i = null == (a = t.get(e)) ? true : a.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? i : []) {
            let e = n.has(s.soundId);
            (e && r || !e && !r) && s.available && l.push(s)
          }
        };
      return r.forEach(e => i(e, true)), r.forEach(e => i(e, false)), l
    }, [t, n, e])
  }((0, h.Y)(n, true)), T = (0, m.T)(), I = r.useRef(null), [w, R] = r.useState(true), P = (0, a.bG)([d.A], () => d.A.getMediaSessionId()), {
    analyticsLocations: D
  } = (0, o.Ay)(s.A.SOUNDBOARD_WHEEL), k = r.useCallback(e => {
    (0, g.Ak)(e, n.id, D), C()
  }, [D, n.id, C]);
  r.useEffect(() => {
    p.E7(), u.bW.loadIfNecessary()
  }, []), r.useEffect(() => {
    0 === j.length && 0 === T.length && C()
  }, [j.length, T, C]), r.useEffect(() => () => {
    let e = I.current;
    x || null == e || k(e)
  }, [x, k]), (0, c.A)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: N,
      guild_id: t,
      media_session_id: P
    }
  }, {
    disableTrack: !S
  });
  let L = r.useCallback(e => {
      I.current = e, R(null == e ? true : e.soundId)
    }, []),
    M = r.useCallback(e => {
      if (null == e) return void L(null);
      let t = j[e];
      null != t && L(t)
    }, [L, j]),
    U = r.useCallback(e => {
      if (null == e) return;
      let t = j[e];
      null != t && k(t)
    }, [j, k]),
    V = r.useMemo(() => j.map(e => (0, l.jsx)(y.Ay, {
      interactive: S,
      className: E.a,
      sound: e,
      focused: w === e.soundId,
      channel: n
    }, e.soundId)), [w, n, S, j]);
  return 0 === j.length ? null : (0, l.jsx)(o.f5, {
    value: D,
    children: (0, l.jsx)(A.A, {
      wheelWidth: v,
      wheelHeight: O,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !x,
      activeItem: w,
      onItemSelect: M,
      onItemAction: U,
      onClose: C,
      interactive: S,
      children: V
    })
  })
}