/** Chunk was on web.js **/
/** chunk id: 290794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tu: () => u,
  hd: () => c,
  y0: () => s,
  y5: () => o
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let a = Chunk64700.createContext(true);

function s() {
  let e = i.useContext(a);
  if (null == e) throw Error("No PollContextProvider found");
  return e
}

function o(e) {
  let {
    children: t,
    message: n,
    poll: s
  } = e, o = i.useMemo(() => ({
    message: n,
    poll: s
  }), [n, s]);
  return (0, r.jsx)(a.Provider, {
    value: o,
    children: t
  })
}

function l() {
  let {
    poll: e
  } = s();
  return e.resources
}

function c(e) {
  return l().styles[e]
}

function u() {
  let {
    message: e
  } = s(), t = e.getChannelId();
  return i.useMemo(() => ({
    channelId: t,
    messageId: e.id
  }), [e.id, t])
}