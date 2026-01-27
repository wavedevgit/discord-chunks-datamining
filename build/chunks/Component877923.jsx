/** Chunk was on 92917 **/
/** chunk id: 877923, original params: e,t,n (module,exports,require) **/
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

function g(e) {
  let {
    giftIntentType: t,
    recipientUser: n,
    channel: g
  } = e, h = (0, l.bG)([o.A], () => o.A.useReducedMotion), _ = i.useRef(null), {
    createMultipleConfettiAt: b
  } = i.useContext(c.x), A = i.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - 6,
      maxValue: e.confettiSize + 6
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
    if (h) return;
    let t = null == (e = _.current) ? true : e.getBoundingClientRect();
    if (null == t) return;
    let n = A({
        confettiSize: 8
      }),
      r = new a.J_(1e3, () => {
        b(t.left + t.width / 2, t.top + t.height / 2, n, 60)
      });
    return r.delay(), () => {
      r.cancel()
    }
  }, [b, _, h, A]), (0, r.jsx)(p.A, {
    contentClassName: f.o9,
    iconContainerClassName: f.zc,
    iconNode: (0, r.jsx)(s.XFE, {
      colorClass: f.Kk
    }),
    children: (0, r.jsx)(u.A, {
      innerRef: _,
      giftIntentType: t,
      recipientUser: n,
      analyticsPage: (0, d.DJ)(g),
      analyticsSection: m.JJy.CHANNEL
    })
  })
}