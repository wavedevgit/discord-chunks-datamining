/** Chunk was on 22173 (61d976ec9ebaf5d5.js) **/
n.d(t, {
  M: () => g,
  Z: () => v
});
var i, o = n(200651),
  r = n(192379),
  a = n(120356),
  s = n.n(a),
  l = n(500923),
  c = n.n(l),
  u = n(570140),
  d = n(960020),
  h = n(831244),
  p = n(815605),
  m = n(981631),
  f = n(405037),
  g = ((i = {})[i.NORMAL = 16] = "NORMAL", i[i.NORMAL_NEW = 20] = "NORMAL_NEW", i[i.LARGE = 32] = "LARGE", i);
let b = async e => {
  var t;
  let {
    effect: n
  } = e, i = await (0, h.T)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : m.lds, n.emoji.name), o = await (0, p.aB)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, i, n.color);
  return o.assets[0].p = n.url, o
};

function v(e) {
  let {
    className: t,
    effect: n,
    onComplete: i,
    emojiSize: a = 16
  } = e, l = r.useRef(null), h = a * p.Vz, m = (h + a) / 2;
  return r.useEffect(() => {
    let e;
    if (null != n) return async function() {
      if (null != l.current) {
        let t = await b({
          effect: n
        });
        (e = c().loadAnimation({
          container: l.current,
          renderer: "svg",
          loop: !1,
          autoplay: !0,
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
  }, [i, n, a]), (0, o.jsx)("div", {
    className: f.effectsWrapper,
    children: (0, o.jsx)("div", {
      className: s()(f.effect, t),
      style: {
        transform: "translateY(".concat(m, "px)"),
        height: h,
        width: h
      },
      ref: l
    })
  })
}