/** Chunk was on web.js **/
/** chunk id: 211180, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  x: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk883885 = require("./883885.js"),
  l = require.n(Chunk883885),
  Chunk73153 = require("./73153.js"),
  Chunk900210 = require("./900210.js"),
  Chunk146497 = require("./146497.js"),
  Chunk60317 = require("./60317.js"),
  Chunk652215 = require("./652215.js"),
  Chunk857506 = require("./857506.js"),
  h = function(e) {
    return e[e.NORMAL = 20] = "NORMAL", e[e.LARGE = 32] = "LARGE", e
  }({});
let m = async e => {
  var t;
  let {
    effect: n
  } = e, r = await (0, d.R)(n.channelId, null != (t = n.messageId) ? t : p.dJq, n.emoji.name), i = await (0, f.fz)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, r, n.color);
  return i.assets[0].p = n.url, i
};

function g(e) {
  let {
    className: t,
    effect: n,
    onComplete: a,
    emojiSize: o = 20
  } = e, d = i.useRef(null), p = o * f.YY, h = (p + o) / 2, g = "translateY(".concat(h, "px)");
  return i.useEffect(() => {
    let e;
    if (null != n) return !async function() {
      if (null != d.current) {
        let t = await m({
          effect: n
        });
        (e = l().loadAnimation({
          container: d.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: t
        })).addEventListener("complete", () => {
          null == a || a(), e.destroy()
        }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === u.W.HOVER && c.h.dispatch({
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
  }, [a, n, o]), (0, r.jsx)("div", {
    className: _.Y,
    children: (0, r.jsx)("div", {
      className: s()(_.Q, t),
      style: {
        transform: g,
        height: p,
        width: p
      },
      ref: d
    })
  })
}