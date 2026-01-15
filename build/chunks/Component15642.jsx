/** Chunk was on web.js **/
/** chunk id: 15642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk674701 = require("./674701.jsx"),
  Chunk934415 = require("./934415.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk56324 = require("./56324.js");
let m = 6,
  h = 1e3;

function g(e) {
  let {
    giftIntentType: t,
    recipientUser: n,
    channel: g
  } = e, E = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), b = i.useRef(null), {
    createMultipleConfettiAt: y
  } = i.useContext(c.h), O = i.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - m,
      maxValue: e.confettiSize + m
    },
    velocity: {
      type: "static-random",
      minValue: {
        x: false,
        y: false
      },
      maxValue: {
        x: 180,
        y: 0
      }
    }
  }), []);
  return i.useEffect(() => {
    var e;
    if (E) return;
    let t = null == (e = b.current) ? true : e.getBoundingClientRect();
    if (null == t) return;
    let n = O({
        confettiSize: 8
      }),
      r = new o.sW(h, () => {
        y(t.left + t.width / 2, t.top + t.height / 2, n, 60)
      });
    return r.delay(), () => {
      r.cancel()
    }
  }, [y, b, E, O]), (0, r.jsx)(f.Z, {
    contentClassName: _.messageContentContainer,
    iconContainerClassName: _.iconContainer,
    iconNode: (0, r.jsx)(s.Dkj, {
      colorClass: _.icon
    }),
    children: (0, r.jsx)(u.Z, {
      innerRef: b,
      giftIntentType: t,
      recipientUser: n,
      analyticsPage: (0, d.mE)(g),
      analyticsSection: p.jXE.CHANNEL
    })
  })
}