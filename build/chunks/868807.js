/** Chunk was on 40184 **/
/** chunk id: 868807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => h
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk375954 = require("./375954.js"),
  Chunk306680 = require("./306680.js"),
  Chunk748902 = require("./748902.js"),
  Chunk981631 = require("./981631.js");
let p = new Set,
  f = null;

function h(e) {
  var t;
  let {
    id: n
  } = e, {
    loaded: i,
    message: r,
    error: a
  } = (0, l.cj)([u.Z, s.Z, c.ZP], () => {
    let e = c.ZP.lastMessageId(n),
      t = u.Z.getMessageRequestPreview(n);
    if (null == t.message && null != e) {
      let t = s.Z.getMessage(n, e);
      if (null != t) return {
        loaded: true,
        error: false,
        message: t
      }
    }
    return t
  }, [n]), o = (0, l.e7)([u.Z], () => u.Z.shouldLoadMessageRequestPreview(n), [n]);
  return !i && null == r && o && (t = n, p.add(t), null == f && (f = setTimeout(m, 0))), {
    loaded: i,
    error: a,
    message: r
  }
}
async function m() {
  try {
    for (; !r().isEmpty(p);) await g()
  } finally {
    f = null
  }
}
async function g() {
  let e = Array.from(p).slice(0, 25);
  try {
    let t = await a.tn.get({
      url: d.ANM.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
      query: {
        channel_ids: e
      },
      rejectWithError: true
    });
    o.Z.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
      requestedChannelIds: e,
      supplementalData: t.body
    })
  } catch (t) {
    o.Z.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
      requestedChannelIds: e
    })
  } finally {
    for (let t of e) p.delete(t)
  }
}