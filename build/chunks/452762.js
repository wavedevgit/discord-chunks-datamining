/** Chunk was on web.js **/
/** chunk id: 452762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx");
let l = 4,
  c = 4,
  u = 2,
  d = 30,
  f = 1e3;

function p(e) {
  let {
    enabled: t
  } = e, n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), p = r.useRef(null), _ = r.useRef(0), {
    createMultipleConfettiAt: h
  } = r.useContext(s.h), m = r.useMemo(() => ({
    size: {
      type: "static-random",
      minValue: c - u,
      maxValue: c + u
    },
    velocity: {
      type: "static-random",
      minValue: {
        x: false,
        y: false
      },
      maxValue: {
        x: 10,
        y: false
      }
    },
    dragCoefficient: {
      type: "static",
      value: .001
    }
  }), []), g = r.useCallback(() => {
    var e;
    if (n) return;
    let t = null == (e = p.current) ? true : e.getBoundingClientRect();
    null != t && h(t.left + t.width / 2, t.top + t.height / 2, m, d)
  }, [h, n, m]);
  return r.useEffect(() => {
    if (!t || n) return;
    let e = new a.sW(f, g);
    return e.delay(), () => e.cancel()
  }, [t, n, g]), {
    giftButtonRef: p,
    handleMouseEnter: r.useCallback(() => {
      t && (_.current += 1, _.current % l == 0 && g())
    }, [t, g])
  }
}