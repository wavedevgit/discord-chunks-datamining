/** Chunk was on 77870 **/
/** chunk id: 582904, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L7: () => g,
  Z0: () => f,
  kt: () => h
}), require("./896048.js"), require("./638769.js"), require("./839272.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk21119 = require("./21119.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk605431 = require("./605431.js"),
  Chunk366251 = require("./366251.js");

function h(e) {
  let {
    channel: t
  } = e, n = (0, l.bG)([s.A], () => s.A.getUserAffinitiesMap(), []), i = null == t ? true : t.guild_id, d = new Set((0, l.bG)([c.Ay], () => null == t ? [] : c.Ay.getVoiceStatesForChannel(t).map(e => e.user.id), [t])), p = (0, l.yK)([a.Ay, o.default], () => a.Ay.getMembers(i).map(e => o.default.getUser(e.userId)).filter(u.Vq).filter(e => !d.has(e.id)), [i, d]);
  return r.useMemo(() => p.toSorted((e, t) => {
    var r, l, i, s;
    let {
      id: a
    } = e, {
      id: o
    } = t;
    return (null != (r = null == (i = n.get(o)) ? true : i.vcProbability) ? r : 0) - (null != (l = null == (s = n.get(a)) ? true : s.vcProbability) ? l : 0)
  }), [p, n]).slice(0, 5)
}

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      collapsed: n = false
    } = t,
    i = (0, l.bG)([p.A], () => p.A.getShouldShowPopover(e.id), [e.id]);
  return {
    shouldShow: i && !n,
    dismiss: r.useCallback(() => {
      (0, d.w)(e.id)
    }, [e])
  }
}

function g(e) {
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