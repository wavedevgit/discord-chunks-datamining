/** Chunk was on 53937 **/
l.d(t, {
  Z: () => d
}), l(474991), l(398202), l(301563);
var n = l(200651);
l(192379);
var r = l(120356),
  i = l.n(r),
  s = l(729594),
  a = l(817857);
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function u(e) {
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

function d(e) {
  let {
    className: t,
    embed: {
      url: l,
      thumbnail: r
    }
  } = e;
  if (null == l || null == r) return null;
  let s = u(l);
  if (null == s) return null;
  let o = s.query.iframe_url;
  if (null == o || Array.isArray(o) || null == u(o)) return null;
  let {
    width: d,
    height: c
  } = r, h = d, m = c;
  return (d > 500 || c > 400) && (d > c ? (h = 500, m = 500 * c / d) : (h = 400 * d / c, m = 400)), (0, n.jsx)("iframe", {
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