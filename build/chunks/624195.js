/** Chunk was on 53937 **/
l.d(t, {
  Z: () => u
}), l(474991), l(398202), l(301563);
var n = l(200651);
l(192379);
var r = l(120356),
  i = l.n(r),
  s = l(729594),
  a = l(552249);
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function d(e) {
  let t = null,
    l = null,
    n = null;
  try {
    t = (n = s.parse(e, !0)).host, l = n.pathname
  } catch (e) {
    return null
  }
  return null != n && o.test(null != t ? t : "") && null != l ? n : null
}

function u(e) {
  let {
    className: t,
    embed: {
      url: l,
      thumbnail: r
    }
  } = e;
  if (null == l || null == r) return null;
  let s = d(l);
  if (null == s) return null;
  let o = s.query.iframe_url;
  if (null == o || Array.isArray(o) || null == d(o)) return null;
  let {
    width: u,
    height: c
  } = r, h = u, m = c;
  return (u > 500 || c > 400) && (u > c ? (h = 500, m = 500 * c / u) : (h = 400 * u / c, m = 400)), (0, n.jsx)("iframe", {
    className: i()(a.embedAmazonMusic, t),
    src: o,
    style: {
      width: h,
      height: m
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}