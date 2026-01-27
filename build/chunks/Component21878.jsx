/** Chunk was on 92917 **/
/** chunk id: 21878, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f,
  M: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk843472 = require("./843472.js"),
  Chunk320501 = require("./320501.js"),
  Chunk951727 = require("./951727.js");
let d = Chunk64700.createContext(true);

function p(e) {
  var t;
  let n = null != (t = i.useContext(d)) ? t : e;
  return a()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function m(e) {
  let {
    message: t,
    children: n
  } = e, l = (0, s.bG)([c.A], () => c.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), a = null != l;
  return i.useEffect(() => {
    a || o.A.focusMessage({
      channelId: t.channel_id,
      messageId: t.id
    })
  }, [a, t.channel_id, t.id]), (0, r.jsx)(d.Provider, {
    value: null != l ? l : t,
    children: n
  })
}

function f(e) {
  let {
    message: t,
    children: n
  } = e;
  return (0, u.Ls)(t) ? n : (0, r.jsx)(m, {
    message: t,
    children: n
  })
}