/** Chunk was on web.js **/
/** chunk id: 261600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk922482 = require("./922482.js"),
  Chunk750154 = require("./750154.js"),
  Chunk427679 = require("./427679.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  var t, n;
  let {
    activity: f
  } = e, {
    channelId: p
  } = null != (t = (0, c.rq)(f)) ? t : {}, _ = (0, a.e7)([u.Z], () => u.Z.getStageInstanceByChannel(p), [p]), m = i.useRef(null), h = i.useCallback(() => {
    let e = s.Z.getChannel(p);
    null != e && l.Cq(e)
  }, [p]), g = null != (n = null == _ ? true : _.topic) ? n : f.name, E = d.intl.formatToPlainString(d.t["T+DNAA"], {
    channel: g
  });
  return (0, r.jsx)("div", {
    ref: m,
    children: (0, r.jsx)(o.P3F, {
      onClick: h,
      focusProps: {
        ringTarget: m
      },
      children: (0, r.jsx)(o.Heading, {
        variant: "heading-sm/semibold",
        children: E
      })
    })
  })
}
class _ {
  shouldShow(e) {
    return (0, c.JE)(e)
  }
  createHeader(e) {
    return {
      subtitle: d.intl.string(d.t["+AJFJy"]),
      icon: null
    }
  }
  constructor() {
    f(this, "body", p)
  }
}