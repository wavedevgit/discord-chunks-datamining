/** Chunk was on web.js **/
/** chunk id: 129185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xq: () => y,
  q6: () => O,
  wE: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk7584 = require("./7584.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk320501 = require("./320501.js"),
  Chunk223567 = require("./223567.js"),
  Chunk552122 = require("./552122.js"),
  Chunk401266 = require("./401266.js"),
  Chunk187584 = require("./187584.jsx"),
  Chunk764917 = require("./764917.jsx"),
  Chunk652215 = require("./652215.js");

function m(e) {
  if (null == e || null == u.A.emojiAnimationTriggers) returnfalse;
  for (let t of u.A.emojiAnimationTriggers) {
    let n = o.Ay.getByName(t);
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
let g = Chunk64700.createContext({
  triggerAnimation: () => {},
  untriggerAnimation: () => {}
});

function E(e) {
  let {
    children: t
  } = e, {
    triggerAnimation: n,
    untriggerAnimation: a
  } = i.useContext(g), s = (0, l.Us)(), o = i.useMemo(() => ({
    triggerAnimation: e => {
      s !== h.BRT.OVERLAY && m(e) && n(e)
    },
    untriggerAnimation: e => {
      s !== h.BRT.OVERLAY && m(e) && a(e)
    }
  }), [s, n, a]);
  return (0, r.jsx)(g.Provider, {
    value: o,
    children: t
  })
}

function y(e) {
  let {
    children: t
  } = e, n = d.A.useIsEligible(), a = i.useCallback((e, t) => {
    switch (t) {
      case u.n.THROW_EMOJI:
        return (0, r.jsx)(_.V, {
          children: e
        });
      case u.n.SNOW:
        return (0, r.jsx)(p.i, {
          children: e
        })
    }
  }, []);
  return n && null != u.A.emojiAnimationType ? a((0, r.jsx)(E, {
    children: t
  }), u.A.emojiAnimationType) : t
}

function b(e) {
  let {
    emojiRef: t,
    channelId: n,
    messageId: r,
    emojiName: s
  } = e, o = (0, a.bG)([c.A], () => c.A.getMessage(n, r)), {
    triggerAnimation: l
  } = i.useContext(g);
  return i.useEffect(() => {
    if (!u.A.triggerEmojiAnimationFromSentMessage || (null == o ? true : o.state) !== h.cmJ.SENT || (0, f.AI)(r)) return;
    let {
      top: e,
      bottom: n
    } = t.getBoundingClientRect();
    e >= 0 && n <= window.innerHeight && (l(s), (0, f.IL)(r))
  }, [s, t, null == o ? true : o.state, r, l]), null
}

function O(e) {
  let {
    channelId: t,
    messageId: n,
    emojiName: i,
    disable: o,
    emojiRef: c
  } = e, u = (0, a.bG)([s.A], () => s.A.useReducedMotion), f = d.A.useIsEligible(), p = (0, l.Us)();
  return o || p === h.BRT.OVERLAY || !f || null == n || null == t || u || null == c || !m(i) ? null : (0, r.jsx)(b, {
    emojiRef: c,
    channelId: t,
    messageId: n,
    emojiName: i
  })
}