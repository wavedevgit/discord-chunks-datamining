/** Chunk was on web.js **/
/** chunk id: 596956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LD: () => u,
  Qn: () => f,
  SB: () => c,
  TC: () => l,
  Z_: () => d
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk668757 = require("./668757.js"),
  Chunk510990 = require("./510990.js"),
  Chunk476326 = require("./476326.js");
let s = 50;

function l(e, t) {
  if (t.id === e.uri || null != t.id && t.id === e.id) returntrue;
  if (t.item.platform === o.ow.REACT_NATIVE) {
    let {
      item: r
    } = t, {
      filename: i
    } = e;
    if (r.originalUri === e.uri) returntrue;
    if (null != i) {
      var n;
      if (null == (n = r.originalUri) ? true : n.includes(i)) returntrue
    }
  }
  returnfalse
}

function c(e, t) {
  return 0 === t ? 0 : Math.min(Math.floor(e / t * 100), 100)
}
class u {
  sliceBody(e, t) {
    return e instanceof File ? e.slice(t) : e
  }
  doUpload(e, t) {
    return (null == t ? true : t.fileByteRange) != null && (e.body = this.sliceBody(e.body, t.fileByteRange.start)), r.tn.put(e)
  }
}

function d(e) {
  return e.platform === o.ow.REACT_NATIVE && null != e.uri && (0, a.fr)(e.uri) && (0, i.X6)()
}
class f {
  doUpload(e, t) {
    var n, r, a;
    let o, l = (0, i.gi)();
    if (null == l) throw Error("Libdiscore client is not available");
    if ((null == (n = e.body) ? true : n.uri) !== true && "string" == typeof e.body.uri && (o = e.body.uri.startsWith("file://") ? e.body.uri.slice(7) : e.body.uri), true === o || "" === o) throw Error("No file path found in request body");
    let c = {
        path: o,
        byteRangeStart: null == t || null == (r = t.fileByteRange) ? true : r.start,
        byteRangeEnd: null == t || null == (a = t.fileByteRange) ? true : a.end
      },
      u = l.httpRequest(e.url, {
        method: "PUT",
        body: c,
        headers: e.headers
      });
    return new Promise((t, n) => {
      let r = () => {
        var i, a, o, c;
        if (null == (i = e.signal) ? true : i.aborted) {
          n(Error("Request cancelled")), l.cancelHttpRequest(u);
          return
        }
        let d = l.getHttpRequestStatus(u);
        if ((null == d ? true : d.status) === "success") t({
          status: null == (a = d.response) ? true : a.status,
          headers: null == (o = d.response) ? true : o.headers,
          text: null == (c = d.response) ? true : c.body
        });
        else if ((null == d ? true : d.status) === "error") n(Error(d.error));
        else if ((null == d ? true : d.status) === "progressing") {
          if (true !== e.onRequestProgress && null != d.uploaded_bytes && d.uploaded_bytes > 0) {
            let t = {
              loaded: d.uploaded_bytes,
              total: d.total_bytes
            };
            e.onRequestProgress(t)
          }
          setTimeout(r, s)
        } else n(Error("Unknown upload status"))
      };
      r()
    })
  }
  constructor() {
    if (!(0, Chunk668757.X6)()) throw Error("Libdiscore is not loaded")
  }
}