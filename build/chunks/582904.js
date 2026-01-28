/** Chunk was on 78528 **/
/** chunk id: 582904, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L7: () => m,
  Z0: () => g,
  kt: () => f
}), require("./896048.js"), require("./638769.js"), require("./839272.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk394577 = require("./394577.js"),
  Chunk21119 = require("./21119.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk605431 = require("./605431.js"),
  Chunk366251 = require("./366251.js");

function f(e) {
  let {
    channel: t
  } = e, {
    totalSuggestions: n
  } = s.A.useConfig({
    location: "useVoiceInviteSuggestions"
  }), i = (0, l.bG)([a.A], () => a.A.getUserAffinitiesMap(), []), p = null == t ? true : t.guild_id, h = new Set((0, l.bG)([u.Ay], () => null == t ? [] : u.Ay.getVoiceStatesForChannel(t).map(e => e.user.id), [t])), f = (0, l.yK)([o.Ay, c.default], () => o.Ay.getMembers(p).map(e => c.default.getUser(e.userId)).filter(d.Vq).filter(e => !h.has(e.id)), [p, h]);
  return r.useMemo(() => f.toSorted((e, t) => {
    var n, r, l, s;
    let {
      id: a
    } = e, {
      id: o
    } = t;
    return (null != (n = null == (l = i.get(o)) ? true : l.vcProbability) ? n : 0) - (null != (r = null == (s = i.get(a)) ? true : s.vcProbability) ? r : 0)
  }), [f, i]).slice(0, n)
}

function g(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      collapsed: n = false
    } = t,
    i = (0, l.bG)([h.A], () => h.A.getShouldShowPopover(e.id), [e.id]);
  return {
    shouldShow: i && !n,
    dismiss: r.useCallback(() => {
      (0, p.w)(e.id)
    }, [e])
  }
}

function m(e) {
  let [t, n] = r.useState(false), [s, a] = r.useState(false), o = (0, l.bG)([i.A], () => i.A.keyboardModeEnabled);
  r.useEffect(() => {
    let t = e.current;
    if (null == t) return;
    n(false), a(false);
    let r = () => n(true),
      l = () => n(false),
      i = () => a(true),
      s = e => {
        t.contains(e.relatedTarget) || a(false)
      };
    return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", l), t.addEventListener("focusin", i), t.addEventListener("focusout", s), () => {
      t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", l), t.removeEventListener("focusin", i), t.removeEventListener("focusout", s)
    }
  }, [e]);
  let c = o && s;
  return {
    isHovering: t,
    isFocusing: c,
    isHoveringOrFocusing: t || c
  }
}