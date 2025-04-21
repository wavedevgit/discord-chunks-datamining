/** Chunk was on 46097 **/
n.d(t, {
  Ld: () => u,
  R_: () => a,
  aw: () => c,
  pU: () => d
}), n(997841), n(35282);
var i = n(630388),
  o = n(406432),
  r = n(828061),
  l = n(981631);
let s = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
  a = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
  u = e => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;

function c(e, t) {
  let {
    filename: n,
    width: a,
    height: u
  } = e;
  if (t && null != a && a > 0 && null != u && u > 0)
    if ((0, o.CO)(n)) return "IMAGE";
    else {
      var c;
      if (!(0, o.NU)(n) || null == e.proxy_url) return "INVALID";
      return (0, i.yE)(null != (c = e.flags) ? c : 0, l.J0y.IS_CLIP) ? "CLIP" : "VIDEO"
    } return null != t && s.test(n) && null != e.url ? "AUDIO" : null != e.url && (0, r.O)(n) ? "PLAINTEXT_PREVIEW" : "OTHER"
}

function d(e) {
  let {
    contentType: t,
    width: n,
    height: i
  } = e;
  if (null != n && n > 0 && null != i && i > 0) {
    if ((0, o.tw)(t)) return "IMAGE";
    else if ((0, o.X2)(t)) return "VIDEO"
  }
  return "VISUAL_PLACEHOLDER"
}