/** Chunk was on 82124 **/
/** chunk id: 771027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Tu: () => m,
  UM: () => g,
  j1: () => h
}), require("./388685.js"), require("./387201.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
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

function h(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([o.Z], () => o.Z.getUserAffinitiesMap(), []), l = null == t ? true : t.guild_id, a = new Set((0, i.e7)([u.ZP], () => null == t ? [] : u.ZP.getVoiceStatesForChannel(t).map(e => e.user.id), [t])), p = (0, i.Wu)([s.ZP, c.default], () => s.ZP.getMembers(l).map(e => c.default.getUser(e.userId)).filter(d.lm).filter(e => !a.has(e.id)), [l, a]);
  return r.useMemo(() => p.toSorted((e, t) => {
    var r, i, l, a;
    let {
      id: o
    } = e, {
      id: s
    } = t;
    return (null != (l = null == (r = n.get(s)) ? true : r.vcProbability) ? l : 0) - (null != (a = null == (i = n.get(o)) ? true : i.vcProbability) ? a : 0)
  }), [p, n]).slice(0, 5)
}

function g(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      enabled: n
    } = (0, a.o)({
      autoTrackExposure: false,
      guildId: e.guild_id,
      location: "VoiceInviteSuggestionsUtils"
    }),
    {
      collapsed: l = false
    } = t,
    o = (0, i.e7)([f.Z], () => f.Z.getShouldShowPopover(e.id), [e.id]);
  return {
    shouldShow: n && o && !l,
    dismiss: r.useCallback(() => {
      (0, p.o)(e.id)
    }, [e])
  }
}

function m(e) {
  let [t, n] = r.useState(false), [a, o] = r.useState(false), s = (0, i.e7)([l.Z], () => l.Z.keyboardModeEnabled);
  r.useEffect(() => {
    let t = e.current;
    if (null == t) return;
    n(false), o(false);
    let r = () => n(true),
      i = () => n(false),
      l = () => o(true),
      a = e => {
        t.contains(e.relatedTarget) || o(false)
      };
    return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", i), t.addEventListener("focusin", l), t.addEventListener("focusout", a), () => {
      t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", i), t.removeEventListener("focusin", l), t.removeEventListener("focusout", a)
    }
  }, [e]);
  let c = s && a;
  return {
    isHovering: t,
    isFocusing: c,
    isHoveringOrFocusing: t || c
  }
}