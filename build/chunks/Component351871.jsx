/** Chunk was on web.js **/
/** chunk id: 351871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk201327 = require("./201327.js"),
  Chunk539541 = require("./539541.jsx");

function s(e) {
  null != e && e.getTracks().forEach(e => e.stop())
}
async function l(e) {
  let {
    deviceId: t,
    width: n,
    height: r,
    disabled: i
  } = e;
  if (i) return null;
  try {
    return await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: n * window.devicePixelRatio,
        height: r * window.devicePixelRatio,
        frameRate: 30,
        deviceId: t
      }
    })
  } catch (e) {
    return null
  }
}

function c(e) {
  let {
    deviceId: t,
    width: n,
    height: c,
    disabled: u
  } = e, [d, f] = i.useState();
  return i.useEffect(() => {
    let e = l({
      deviceId: t,
      width: n,
      height: c,
      disabled: u
    }).then(e => {
      let t = null != e ? (0, a.ju)(e) : null;
      return f(t), {
        stream: e,
        streamId: t
      }
    });
    return () => {
      e.then(e => {
        let {
          stream: t,
          streamId: n
        } = e;
        s(t), null != n && (0, a.it)(n)
      })
    }
  }, [t, n, c, u]), null == d ? (0, r.jsx)("div", {
    className: "media-engine-video",
    style: {
      width: n,
      height: c
    }
  }) : (0, r.jsx)(o.A, {
    streamId: d,
    style: {
      width: n,
      height: c
    }
  })
}
c.defaultProps = {
  disabled: false,
  width: 320,
  height: 180
}