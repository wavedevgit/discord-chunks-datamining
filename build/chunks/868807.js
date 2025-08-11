/** Chunk was on web.js **/
/** chunk id: 868807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => h
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk375954 = require("./375954.js"),
  Chunk306680 = require("./306680.js"),
  Chunk748902 = require("./748902.js"),
  Chunk981631 = require("./981631.js");
let f = 25,
  _ = new Set,
  p = null;

function h(e) {
  let {
    id: t
  } = e, {
    loaded: n,
    message: r,
    error: i
  } = (0, o.cj)([u.Z, l.Z, c.ZP], () => {
    let e = c.ZP.lastMessageId(t),
      n = u.Z.getMessageRequestPreview(t);
    if (null == n.message && null != e) {
      let n = l.Z.getMessage(t, e);
      if (null != n) return {
        loaded: true,
        error: false,
        message: n
      }
    }
    return n
  }, [t]), a = (0, o.e7)([u.Z], () => u.Z.shouldLoadMessageRequestPreview(t), [t]);
  return !n && null == r && a && m(t), {
    loaded: n,
    error: i,
    message: r
  }
}

function m(e) {
  _.add(e), null == p && (p = setTimeout(g, 0))
}
async function g() {
  try {
    for (; !i().isEmpty(_);) await E()
  } finally {
    p = null
  }
}
async function E() {
  let e = Array.from(_).slice(0, f);
  try {
    let t = await Chunk544891.tn.get({
      url: Chunk981631.ANM.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
      query: {
        channel_ids: module
      },
      rejectWithError: true
    });
    Chunk570140.Z.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
      requestedChannelIds: module,
      supplementalData: exports.body
    })
  } catch (t) {
    Chunk570140.Z.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
      requestedChannelIds: module
    })
  } finally {
    for (let t of module) _.delete(exports)
  }
}