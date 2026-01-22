/** Chunk was on web.js **/
/** chunk id: 875731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk323443 = require("./323443.js"),
  Chunk82149 = require("./82149.js"),
  Chunk446600 = require("./446600.js"),
  Chunk985018 = require("./985018.jsx");

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
  } = null != (t = (0, c.UW)(f)) ? t : {}, _ = (0, a.bG)([u.A], () => u.A.getStageInstanceByChannel(p), [p]), h = i.useRef(null), m = i.useCallback(() => {
    let e = o.A.getChannel(p);
    null != e && l.av(e)
  }, [p]), g = null != (n = null == _ ? true : _.topic) ? n : f.name, E = d.intl.formatToPlainString(d.t["T+DNAA"], {
    channel: g
  });
  return (0, r.jsx)("div", {
    ref: h,
    children: (0, r.jsx)(s.DUT, {
      onClick: m,
      focusProps: {
        ringTarget: h
      },
      children: (0, r.jsx)(s.Heading, {
        variant: "heading-sm/semibold",
        children: E
      })
    })
  })
}
class _ {
  shouldShow(e) {
    return (0, c.IS)(e)
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