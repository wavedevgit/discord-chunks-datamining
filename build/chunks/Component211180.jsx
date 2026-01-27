/** Chunk was on 7034 **/
/** chunk id: 211180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y,
  x: () => g
});
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk883885 = require("./883885.js"),
  u = require.n(Chunk883885),
  Chunk73153 = require("./73153.js"),
  Chunk900210 = require("./900210.js"),
  Chunk146497 = require("./146497.js"),
  Chunk60317 = require("./60317.js"),
  Chunk652215 = require("./652215.js"),
  Chunk857506 = require("./857506.js"),
  g = ((i = {})[i.NORMAL = 20] = "NORMAL", i[i.LARGE = 32] = "LARGE", i);
let b = async e => {
  var t;
  let {
    effect: n
  } = e, i = await (0, p.R)(n.channelId, null != (t = n.messageId) ? t : m.dJq, n.emoji.name), l = await (0, h.fz)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, i, n.color);
  return l.assets[0].p = n.url, l
};

function y(e) {
  let {
    className: t,
    effect: n,
    onComplete: i,
    emojiSize: o = 20
  } = e, s = r.useRef(null), p = o * h.YY, m = (p + o) / 2;
  return r.useEffect(() => {
    let e;
    if (null != n) return !async function() {
      if (null != s.current) {
        let t = await b({
          effect: n
        });
        (e = u().loadAnimation({
          container: s.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: t
        })).addEventListener("complete", () => {
          null == i || i(), e.destroy()
        }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === d.W.HOVER && c.h.dispatch({
          type: "BURST_REACTION_ANIMATION_ADD",
          channelId: n.channelId,
          messageId: n.messageId,
          emoji: n.emoji,
          animation: e
        })
      }
    }(), () => {
      null != e && e.destroy()
    }
  }, [i, n, o]), (0, l.jsx)("div", {
    className: f.Y,
    children: (0, l.jsx)("div", {
      className: a()(f.Q, t),
      style: {
        transform: "translateY(".concat(m, "px)"),
        height: p,
        width: p
      },
      ref: s
    })
  })
}