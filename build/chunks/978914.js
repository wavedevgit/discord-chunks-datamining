/** Chunk was on 97887 **/
/** chunk id: 978914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => f
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk320501 = require("./320501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk401565 = require("./401565.js"),
  Chunk652215 = require("./652215.js");
let p = new Set,
  h = null;

function f(e) {
  var t;
  let {
    id: n
  } = e, {
    loaded: r,
    message: l,
    error: s
  } = (0, i.cf)([u.A, o.A, c.Ay], () => {
    let e = c.Ay.lastMessageId(n),
      t = u.A.getMessageRequestPreview(n);
    if (null == t.message && null != e) {
      let t = o.A.getMessage(n, e);
      if (null != t) return {
        loaded: true,
        error: false,
        message: t
      }
    }
    return t
  }, [n]), a = (0, i.bG)([u.A], () => u.A.shouldLoadMessageRequestPreview(n), [n]);
  return !r && null == l && a && (t = n, p.add(t), null == h && (h = setTimeout(g, 0))), {
    loaded: r,
    error: s,
    message: l
  }
}
async function g() {
  try {
    for (; !l().isEmpty(p);) await m()
  } finally {
    h = null
  }
}
async function m() {
  let e = Array.from(p).slice(0, 25);
  try {
    let t = await s.Bo.get({
      url: d.Rsh.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
      query: {
        channel_ids: e
      },
      rejectWithError: true
    });
    a.h.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
      requestedChannelIds: e,
      supplementalData: t.body
    })
  } catch (t) {
    a.h.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
      requestedChannelIds: e
    })
  } finally {
    for (let t of e) p.delete(t)
  }
}