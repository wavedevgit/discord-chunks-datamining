/** Chunk was on 57336 **/
/** chunk id: 771027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Lb: () => f,
  Tu: () => m,
  j1: () => h
}), require("./388685.js"), require("./387201.js"), require("./642613.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk71133 = require("./71133.js"),
  Chunk752048 = require("./752048.js"),
  Chunk271383 = require("./271383.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk823379 = require("./823379.js");

function h(e) {
  let {
    channel: t
  } = e, n = (0, r.e7)([o.Z], () => o.Z.getUserAffinitiesMap(), []), l = null == t ? true : t.guild_id, a = new Set((0, r.e7)([d.ZP], () => null == t ? [] : d.ZP.getVoiceStatesForChannel(t).map(e => e.user.id), [t])), c = (0, r.e7)([s.ZP, u.default], () => s.ZP.getMembers(l).map(e => u.default.getUser(e.userId)).filter(p.lm).filter(e => !a.has(e.id)), [l, a]);
  return i.useMemo(() => c.toSorted((e, t) => {
    var i, r, l, a;
    let {
      id: o
    } = e, {
      id: s
    } = t;
    return (null != (l = null == (i = n.get(s)) ? true : i.vcProbability) ? l : 0) - (null != (a = null == (r = n.get(o)) ? true : r.vcProbability) ? a : 0)
  }), [c, n]).slice(0, 5)
}

function f(e) {
  let [t, n] = i.useState(false), {
    enabled: l
  } = (0, a.o)({
    autoTrackExposure: false,
    guildId: e.guild_id,
    location: "VoiceUsers"
  }), o = (0, r.e7)([c.Z], () => {
    let t = c.Z.getChannelId();
    return c.Z.isConnected() && t === e.id
  }, [e.id]), s = i.useCallback(() => {
    n(true)
  }, []);
  return i.useEffect(() => {
    o || n(false)
  }, [o]), {
    shouldShow: l && o && !t,
    dismiss: s
  }
}

function m(e) {
  let [t, n] = i.useState(false), [a, o] = i.useState(false), s = (0, r.e7)([l.Z], () => l.Z.keyboardModeEnabled);
  i.useEffect(() => {
    let t = e.current;
    if (null == t) return;
    n(false), o(false);
    let i = () => n(true),
      r = () => n(false),
      l = () => o(true),
      a = e => {
        t.contains(e.relatedTarget) || o(false)
      };
    return t.addEventListener("mouseenter", i), t.addEventListener("mouseleave", r), t.addEventListener("focusin", l), t.addEventListener("focusout", a), () => {
      t.removeEventListener("mouseenter", i), t.removeEventListener("mouseleave", r), t.removeEventListener("focusin", l), t.removeEventListener("focusout", a)
    }
  }, [e]);
  let c = s && a;
  return {
    isHovering: t,
    isFocusing: c,
    isHoveringOrFocusing: t || c
  }
}