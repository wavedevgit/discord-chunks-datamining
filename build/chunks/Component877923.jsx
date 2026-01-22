/** Chunk was on web.js **/
/** chunk id: 877923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk67414 = require("./67414.jsx"),
  Chunk147036 = require("./147036.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk731875 = require("./731875.js");
let h = 6,
  m = 1e3;

function g(e) {
  let {
    giftIntentType: t,
    recipientUser: n,
    channel: g
  } = e, E = (0, a.bG)([l.A], () => l.A.useReducedMotion), b = i.useRef(null), {
    createMultipleConfettiAt: y
  } = i.useContext(c.x), O = i.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - h,
      maxValue: e.confettiSize + h
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
      r = new s.J_(m, () => {
        y(t.left + t.width / 2, t.top + t.height / 2, n, 60)
      });
    return r.delay(), () => {
      r.cancel()
    }
  }, [y, b, E, O]), (0, r.jsx)(f.A, {
    contentClassName: _.o9,
    iconContainerClassName: _.zc,
    iconNode: (0, r.jsx)(o.XFE, {
      colorClass: _.Kk
    }),
    children: (0, r.jsx)(u.A, {
      innerRef: b,
      giftIntentType: t,
      recipientUser: n,
      analyticsPage: (0, d.DJ)(g),
      analyticsSection: p.JJy.CHANNEL
    })
  })
}