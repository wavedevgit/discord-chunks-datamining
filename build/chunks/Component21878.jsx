/** Chunk was on web.js **/
/** chunk id: 21878, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  M: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk843472 = require("./843472.js"),
  Chunk320501 = require("./320501.js"),
  Chunk951727 = require("./951727.js");
let d = Chunk64700.createContext(true);

function f(e) {
  var t;
  let n = null != (t = i.useContext(d)) ? t : e;
  return s()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function p(e) {
  let {
    message: t,
    children: n
  } = e, a = (0, o.bG)([c.A], () => c.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), s = null != a;
  return i.useEffect(() => {
    s || l.A.focusMessage({
      channelId: t.channel_id,
      messageId: t.id
    })
  }, [s, t.channel_id, t.id]), (0, r.jsx)(d.Provider, {
    value: null != a ? a : t,
    children: n
  })
}

function _(e) {
  let {
    message: t,
    children: n
  } = e;
  return (0, u.Ls)(t) ? n : (0, r.jsx)(p, {
    message: t,
    children: n
  })
}