/** Chunk was on web.js **/
/** chunk id: 620652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => m,
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk500923 = require("./500923.js"),
  l = require.n(Chunk500923),
  Chunk570140 = require("./570140.js"),
  Chunk960020 = require("./960020.js"),
  Chunk831244 = require("./831244.js"),
  Chunk815605 = require("./815605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk994428 = require("./994428.js"),
  m = function(e) {
    return e[e.NORMAL = 20] = "NORMAL", e[e.LARGE = 32] = "LARGE", e
  }({});
let h = async e => {
  var t;
  let {
    effect: n
  } = e, r = await (0, d.T)(n.channelId, null != (t = n.messageId) ? t : p.lds, n.emoji.name), i = await (0, f.aB)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, r, n.color);
  return i.assets[0].p = n.url, i
};

function g(e) {
  let {
    className: t,
    effect: n,
    onComplete: o,
    emojiSize: s = 20
  } = e, d = i.useRef(null), p = s * f.Vz, m = (p + s) / 2, g = "translateY(".concat(m, "px)");
  return i.useEffect(() => {
    let e;
    if (null != n) return !async function() {
      if (null != d.current) {
        let t = await h({
          effect: n
        });
        (e = l().loadAnimation({
          container: d.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: t
        })).addEventListener("complete", () => {
          null == o || o(), e.destroy()
        }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === u.I.HOVER && c.Z.dispatch({
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
  }, [o, n, s]), (0, r.jsx)("div", {
    className: _.effectsWrapper,
    children: (0, r.jsx)("div", {
      className: a()(_.effect, t),
      style: {
        transform: g,
        height: p,
        width: p
      },
      ref: d
    })
  })
}