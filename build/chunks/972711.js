/** Chunk was on web.js **/
/** chunk id: 972711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YL: () => c,
  gd: () => d,
  gp: () => f,
  nd: () => u,
  ph: () => l
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk306173 = require("./306173.js"),
  Chunk509929 = require("./509929.js"),
  Chunk565150 = require("./565150.js");
let o = 50;

function l(e, t) {
  if (t.id === e.uri || null != t.id && t.id === e.id) returntrue;
  if (t.item.platform === s.xz.REACT_NATIVE) {
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
    return (null == t ? true : t.fileByteRange) != null && (e.body = this.sliceBody(e.body, t.fileByteRange.start)), r.Bo.put(e)
  }
}

function d(e) {
  return e.platform === s.xz.REACT_NATIVE && null != e.uri && (0, a.a$)(e.uri) && (0, i.xd)()
}
class f {
  doUpload(e, t) {
    var n, r, a;
    let s, l = (0, i.uU)();
    if (null == l) throw Error("Libdiscore client is not available");
    if ((null == (n = e.body) ? true : n.uri) !== true && "string" == typeof e.body.uri && (s = e.body.uri.startsWith("file://") ? e.body.uri.slice(7) : e.body.uri), true === s || "" === s) throw Error("No file path found in request body");
    let c = {
        path: s,
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
        var i, a, s, c;
        if (null == (i = e.signal) ? true : i.aborted) {
          n(Error("Request cancelled")), l.cancelHttpRequest(u);
          return
        }
        let d = l.getHttpRequestStatus(u);
        if ((null == d ? true : d.status) === "success") t({
          status: null == (a = d.response) ? true : a.status,
          headers: null == (s = d.response) ? true : s.headers,
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
          setTimeout(r, o)
        } else n(Error("Unknown upload status"))
      };
      r()
    })
  }
  constructor() {
    if (!(0, i.xd)()) throw Error("Libdiscore is not loaded")
  }
}