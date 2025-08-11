/** Chunk was on web.js **/
/** chunk id: 946196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk709706 = require("./709706.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk791422 = require("./791422.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk709706.Z], () => Chunk709706.Z.getError());
  return module ? <f error={module} /> : null
}
let f = e => {
  let {
    error: t
  } = e, [n, a] = (0, i.useState)(false), d = (0, s.Yzy)(!n, {
    from: {
      opacity: 0,
      translateY: 20
    },
    enter: {
      opacity: 1,
      translateY: 0
    },
    leave: {
      opacity: 0,
      translateY: 80
    }
  }, "respect-motion-settings"), f = (() => {
    switch (t) {
      case l.r.ERROR_DOWNLOADING_DEPENDENCY:
        return c.intl.string(c.t.D9neaG);
      case l.r.ERROR_ACTIVATING_VOICE_FILTER:
        return c.intl.string(c.t.mNMZZm);
      default:
        return c.intl.string(c.t.F8FvU1)
    }
  })();
  return d(e => n ? null : <o.animated.div style={e} className={u.floaterWrapper}><div className={u.visibleFloater}>{<s.Text variant={"text-sm/semibold"} color={"always-white"}>{f}</s.Text>}{<s.RyX onClick={() => a(true)} />}</div></o.animated.div>)
}