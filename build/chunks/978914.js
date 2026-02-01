/** Chunk was on 61344 **/
/** chunk id: 978914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => f
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  r = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk320501 = require("./320501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk401565 = require("./401565.js"),
  Chunk652215 = require("./652215.js");
let h = new Set,
  p = null;

function f(e) {
  var t;
  let {
    id: n
  } = e, {
    loaded: l,
    message: r,
    error: a
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
  }, [n]), s = (0, i.bG)([u.A], () => u.A.shouldLoadMessageRequestPreview(n), [n]);
  return !l && null == r && s && (t = n, h.add(t), null == p && (p = setTimeout(m, 0))), {
    loaded: l,
    error: a,
    message: r
  }
}
async function m() {
  try {
    for (; !r().isEmpty(h);) await g()
  } finally {
    p = null
  }
}
async function g() {
  let e = Array.from(h).slice(0, 25);
  try {
    let t = await a.Bo.get({
      url: d.Rsh.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
      query: {
        channel_ids: e
      },
      rejectWithError: true
    });
    s.h.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
      requestedChannelIds: e,
      supplementalData: t.body
    })
  } catch (t) {
    s.h.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
      requestedChannelIds: e
    })
  } finally {
    for (let t of e) h.delete(t)
  }
}