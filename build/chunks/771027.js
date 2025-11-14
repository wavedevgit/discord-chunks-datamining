/** Chunk was on 34740 **/
/** chunk id: 771027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Tu: () => g,
  UM: () => m,
  j1: () => f
}), require("./388685.js"), require("./387201.js"), require("./642613.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk71133 = require("./71133.js"),
  Chunk752048 = require("./752048.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk823379 = require("./823379.js"),
  Chunk406463 = require("./406463.js"),
  Chunk78332 = require("./78332.js");

function f(e) {
  let {
    channel: t
  } = e, n = (0, r.e7)([o.Z], () => o.Z.getUserAffinitiesMap(), []), l = null == t ? true : t.guild_id, a = new Set((0, r.e7)([u.ZP], () => null == t ? [] : u.ZP.getVoiceStatesForChannel(t).map(e => e.user.id), [t])), p = (0, r.e7)([s.ZP, c.default], () => s.ZP.getMembers(l).map(e => c.default.getUser(e.userId)).filter(d.lm).filter(e => !a.has(e.id)), [l, a]);
  return i.useMemo(() => p.toSorted((e, t) => {
    var i, r, l, a;
    let {
      id: o
    } = e, {
      id: s
    } = t;
    return (null != (l = null == (i = n.get(s)) ? true : i.vcProbability) ? l : 0) - (null != (a = null == (r = n.get(o)) ? true : r.vcProbability) ? a : 0)
  }), [p, n]).slice(0, 5)
}

function m(e) {
  let {
    enabled: t
  } = (0, a.o)({
    autoTrackExposure: false,
    guildId: e.guild_id,
    location: "VoiceInviteSuggestionsUtils"
  }), n = (0, r.e7)([h.Z], () => h.Z.getShouldShowPopover(e.id), [e.id]);
  return {
    shouldShow: t && n,
    dismiss: i.useCallback(() => {
      (0, p.o)(e.id)
    }, [e])
  }
}

function g(e) {
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