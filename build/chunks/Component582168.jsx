/** Chunk was on web.js **/
/** chunk id: 582168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk376398 = require("./376398.js"),
  Chunk825040 = require("./825040.jsx");

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
      let t = null != e ? (0, o.N7)(e) : null;
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
        s(t), null != n && (0, o.jC)(n)
      })
    }
  }, [t, n, c, u]), null == d ? (0, r.jsx)("div", {
    className: "media-engine-video",
    style: {
      width: n,
      height: c
    }
  }) : (0, r.jsx)(a.Z, {
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