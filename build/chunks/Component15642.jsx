/** Chunk was on web.js **/
/** chunk id: 15642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
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
  Chunk60044 = require("./60044.js");
let h = 4,
  m = 6,
  g = 1e3;

function E(e) {
  let {
    giftIntentType: t,
    recipientUser: n,
    channel: E
  } = e, b = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), y = i.useRef(null), [O, v] = i.useState(0), {
    createMultipleConfettiAt: I
  } = i.useContext(c.h), T = i.useCallback(e => ({
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
  i.useEffect(() => {
    var e;
    if (b) return;
    let t = null == (e = y.current) ? true : e.getBoundingClientRect();
    if (null == t) return;
    let n = T({
      confettiSize: 8
    });
    new o.sW(g, () => {
      I(t.left + t.width / 2, t.top + t.height / 2, n, 60)
    }).delay()
  }, [I, y, b, T]);
  let S = i.useCallback(() => {
    var e;
    if (v(O + 1), b) return;
    let t = null == (e = y.current) ? true : e.getBoundingClientRect();
    if (null != t && O % h == 0) {
      let e = T({
        confettiSize: 8
      });
      I(t.left + t.width / 2, t.top + t.height / 2, e, 60)
    }
  }, [I, y, b, O, T]);
  return (0, r.jsx)(f.Z, {
    contentClassName: p.messageContentContainer,
    iconContainerClassName: p.iconContainer,
    iconNode: (0, r.jsx)(s.Dkj, {
      colorClass: p.icon
    }),
    children: (0, r.jsx)(u.Z, {
      innerRef: y,
      giftIntentType: t,
      recipientUser: n,
      analyticsPage: (0, d.mE)(E),
      analyticsSection: _.jXE.CHANNEL,
      onMouseEnter: S
    })
  })
}