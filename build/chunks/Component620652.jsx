/** Chunk was on 38626 **/
/** chunk id: 620652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => g,
  Z: () => j
});
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk500923 = require("./500923.js"),
  c = require.n(Chunk500923),
  Chunk570140 = require("./570140.js"),
  Chunk960020 = require("./960020.js"),
  Chunk831244 = require("./831244.js"),
  Chunk815605 = require("./815605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk994428 = require("./994428.js"),
  g = ((i = {})[i.NORMAL = 20] = "NORMAL", i[i.LARGE = 32] = "LARGE", i);
let b = async e => {
  var t;
  let {
    effect: n
  } = e, i = await (0, h.T)(n.channelId, null != (t = n.messageId) ? t : m.lds, n.emoji.name), r = await (0, p.aB)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, i, n.color);
  return r.assets[0].p = n.url, r
};

function j(e) {
  let {
    className: t,
    effect: n,
    onComplete: i,
    emojiSize: o = 20
  } = e, s = l.useRef(null), h = o * p.Vz, m = (h + o) / 2;
  return l.useEffect(() => {
    let e;
    if (null != n) return !async function() {
      if (null != s.current) {
        let t = await b({
          effect: n
        });
        (e = c().loadAnimation({
          container: s.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: t
        })).addEventListener("complete", () => {
          null == i || i(), e.destroy()
        }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === d.I.HOVER && u.Z.dispatch({
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
  }, [i, n, o]), (0, r.jsx)("div", {
    className: f.effectsWrapper,
    children: (0, r.jsx)("div", {
      className: a()(f.effect, t),
      style: {
        transform: "translateY(".concat(m, "px)"),
        height: h,
        width: h
      },
      ref: s
    })
  })
}