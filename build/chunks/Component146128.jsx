/** Chunk was on web.js **/
/** chunk id: 146128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BV: () => b,
  Rm: () => g,
  aO: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk633302 = require("./633302.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk375954 = require("./375954.js"),
  Chunk378364 = require("./378364.js"),
  Chunk197344 = require("./197344.js"),
  Chunk978636 = require("./978636.js"),
  Chunk643420 = require("./643420.jsx"),
  Chunk131333 = require("./131333.jsx"),
  Chunk981631 = require("./981631.js");

function h(e) {
  if (null == e || null == u.Z.emojiAnimationTriggers) returnfalse;
  for (let t of u.Z.emojiAnimationTriggers) {
    let n = s.ZP.getByName(t);
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
let g = Chunk473749.createContext({
  triggerAnimation: () => {},
  untriggerAnimation: () => {}
});

function E(e) {
  let {
    children: t
  } = e, {
    triggerAnimation: n,
    untriggerAnimation: a
  } = i.useContext(g), o = (0, l.bp)(), s = i.useMemo(() => ({
    triggerAnimation: e => {
      o !== m.IlC.OVERLAY && h(e) && n(e)
    },
    untriggerAnimation: e => {
      o !== m.IlC.OVERLAY && h(e) && a(e)
    }
  }), [o, n, a]);
  return (0, r.jsx)(g.Provider, {
    value: s,
    children: t
  })
}

function b(e) {
  let {
    children: t
  } = e, n = d.Z.useIsEligible(), a = i.useCallback((e, t) => {
    switch (t) {
      case u.O.THROW_EMOJI:
        return (0, r.jsx)(_.t, {
          children: e
        });
      case u.O.SNOW:
        return (0, r.jsx)(p.k, {
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
    if (!u.Z.triggerEmojiAnimationFromSentMessage || (null == s ? true : s.state) !== m.yb.SENT || (0, f.JL)(r)) return;
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
    disable: s,
    emojiRef: c
  } = e, u = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), f = d.Z.useIsEligible(), p = (0, l.bp)();
  return s || p === m.IlC.OVERLAY || !f || null == n || null == t || u || null == c || !h(i) ? null : (0, r.jsx)(y, {
    emojiRef: c,
    channelId: t,
    messageId: n,
    emojiName: i
  })
}