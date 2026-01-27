/** Chunk was on web.js **/
/** chunk id: 4103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk775602 = require("./775602.js"),
  Chunk21161 = require("./21161.jsx");
let l = 4,
  c = 4,
  u = 2,
  d = 30,
  f = 1e3;

function p(e) {
  let {
    enabled: t
  } = e, n = (0, i.bG)([o.A], () => o.A.useReducedMotion), p = r.useRef(null), _ = r.useRef(0), {
    createMultipleConfettiAt: h
  } = r.useContext(s.x), m = r.useMemo(() => ({
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
    let e = new a.J_(f, g);
    return e.delay(), () => e.cancel()
  }, [t, n, g]), {
    giftButtonRef: p,
    handleMouseEnter: r.useCallback(() => {
      t && (_.current += 1, _.current % l == 0 && g())
    }, [t, g])
  }
}