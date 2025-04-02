/** Chunk was on 53937 **/
t.d(l, {
  Z: () => u
}), t(474991), t(398202), t(301563);
var n = t(200651);
t(192379);
var r = t(120356),
  i = t.n(r),
  s = t(729594),
  a = t(817857);
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function d(e) {
  let l = null,
    t = null,
    n = null;
  try {
    l = (n = s.parse(e, !0)).host, t = n.pathname
  } catch (e) {
    return null
  }
  return null != n && o.test(null != l ? l : "") && null != t ? n : null
}

function u(e) {
  let {
    className: l,
    embed: {
      url: t,
      thumbnail: r
    }
  } = e;
  if (null == t || null == r) return null;
  let s = d(t);
  if (null == s) return null;
  let o = s.query.iframe_url;
  if (null == o || Array.isArray(o) || null == d(o)) return null;
  let {
    width: u,
    height: c
  } = r, h = u, m = c;
  return (u > 500 || c > 400) && (u > c ? (h = 500, m = 500 * c / u) : (h = 400 * u / c, m = 400)), (0, n.jsx)("iframe", {
    className: i()(a.embedAmazonMusic, l),
    src: o,
    style: {
      width: h,
      height: m
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}