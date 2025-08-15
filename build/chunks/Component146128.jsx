/** Chunk was on web.js **/
/** chunk id: 146128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BV: () => b,
  Rm: () => g,
  aO: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk633302 = require("./633302.js"),
  Chunk375954 = require("./375954.js"),
  Chunk378364 = require("./378364.js"),
  Chunk197344 = require("./197344.js"),
  Chunk978636 = require("./978636.js"),
  Chunk643420 = require("./643420.jsx"),
  Chunk131333 = require("./131333.jsx"),
  Chunk981631 = require("./981631.js");

function m(e) {
  if (null == e || null == u.Z.emojiAnimationTriggers) returnfalse;
  for (let t of u.Z.emojiAnimationTriggers) {
    let n = l.ZP.getByName(t);
    if (null != n) {
      if (":".concat(n.uniqueName, ":") === e) returntrue;
      for (let t in n.diversityChildren) {
        let r = n.diversityChildren[t];
        if (":".concat(r.uniqueName, ":") === e) returntrue
      }
    }
  }
  returnfalse
}
let g = Chunk73800.createContext({
  triggerAnimation: () => {},
  untriggerAnimation: () => {}
});

function E(e) {
  let {
    children: t
  } = e, {
    triggerAnimation: n,
    untriggerAnimation: a
  } = i.useContext(g), s = (0, o.bp)(), l = i.useMemo(() => ({
    triggerAnimation: e => {
      s !== h.IlC.OVERLAY && m(e) && n(e)
    },
    untriggerAnimation: e => {
      s !== h.IlC.OVERLAY && m(e) && a(e)
    }
  }), [s, n, a]);
  return (0, r.jsx)(g.Provider, {
    value: l,
    children: t
  })
}

function b(e) {
  let {
    children: t
  } = e, n = d.Z.useIsEligible(), a = i.useCallback((e, t) => {
    switch (t) {
      case u.O.THROW_EMOJI:
        return (0, r.jsx)(p.t, {
          children: e
        });
      case u.O.SNOW:
        return (0, r.jsx)(_.k, {
          children: e
        })
    }
  }, []);
  return n && null != u.Z.emojiAnimationType ? a((0, r.jsx)(E, {
    children: t
  }), u.Z.emojiAnimationType) : t
}

function y(e) {
  let {
    emojiRef: t,
    channelId: n,
    messageId: r,
    emojiName: o
  } = e, s = (0, a.e7)([c.Z], () => c.Z.getMessage(n, r)), {
    triggerAnimation: l
  } = i.useContext(g);
  return i.useEffect(() => {
    if (!u.Z.triggerEmojiAnimationFromSentMessage || (null == s ? true : s.state) !== h.yb.SENT || (0, f.JL)(r)) return;
    let {
      top: e,
      bottom: n
    } = t.getBoundingClientRect();
    e >= 0 && n <= window.innerHeight && (l(o), (0, f.i9)(r))
  }, [o, t, null == s ? true : s.state, r, l]), null
}

function O(e) {
  let {
    channelId: t,
    messageId: n,
    emojiName: i,
    disable: l,
    emojiRef: c
  } = e, u = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), f = d.Z.useIsEligible(), _ = (0, o.bp)();
  return l || _ === h.IlC.OVERLAY || !f || null == n || null == t || u || null == c || !m(i) ? null : (0, r.jsx)(y, {
    emojiRef: c,
    channelId: t,
    messageId: n,
    emojiName: i
  })
}