/** Chunk was on web.js **/
/** chunk id: 275344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p,
  v: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk904245 = require("./904245.js"),
  Chunk375954 = require("./375954.js"),
  Chunk918088 = require("./918088.js");
let d = Chunk73800.createContext(true);

function f(e) {
  var t;
  let n = null != (t = i.useContext(d)) ? t : e;
  return a()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function _(e) {
  let {
    message: t,
    children: n
  } = e, o = (0, s.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), a = null != o;
  return i.useEffect(() => {
    a || l.Z.focusMessage({
      channelId: t.channel_id,
      messageId: t.id
    })
  }, [a, t.channel_id, t.id]), <d.Provider value={null != o ? o : t}>{n}</d.Provider>
}

function p(e) {
  let {
    message: t,
    children: n
  } = e;
  return (0, u.r8)(t) ? n : <_ message={t}>{n}</_>
}