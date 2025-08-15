/** Chunk was on 66866 **/
/** chunk id: 275344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  v: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk904245 = require("./904245.js"),
  Chunk375954 = require("./375954.js"),
  Chunk918088 = require("./918088.js");
let d = Chunk647438.createContext(true);

function p(e) {
  var t;
  let n = null != (t = i.useContext(d)) ? t : e;
  return a()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function m(e) {
  let {
    message: t,
    children: n
  } = e, l = (0, o.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), a = null != l;
  return i.useEffect(() => {
    a || s.Z.focusMessage({
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
  return (0, u.r8)(t) ? n : (0, r.jsx)(m, {
    message: t,
    children: n
  })
}