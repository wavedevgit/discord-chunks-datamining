/** Chunk was on 53937 **/
l.d(t, {
  Z: () => m,
  j: () => c
}), l(301563);
var n = l(200651);
l(192379);
var r = l(120356),
  i = l.n(r),
  s = l(729594),
  a = l(388032),
  o = l(461976);
let u = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
  d = (e, t, l) => "https://".concat(e, "/embed/").concat(t, "?locale=").concat(l),
  c = ["PlayStation"],
  h = (e, t) => {
    let {
      host: l,
      pathname: n
    } = t, r = [];
    switch (null != n && (r = n.split("/")), e) {
      case "PlayStation":
        if (null == l || !u.includes(l) || 2 !== r.length) break;
        return {
          embedUrl: d(l, r[1], a.NW.currentLocale), style: {
            width: 400,
            height: 300,
            borderRadius: 6
          }
        }
    }
    return null
  };

function m(e) {
  var t;
  let l = e.embed.url,
    r = null === (t = e.embed.provider) || void 0 === t ? void 0 : t.name;
  if (null == l || null == r) return null;
  let a = null;
  try {
    a = s.parse(l, !0)
  } catch (e) {
    return null
  }
  let u = h(r, a);
  return null == u ? null : (0, n.jsx)("iframe", {
    src: u.embedUrl,
    className: i()(o.embedIFrame, e.className),
    style: u.style,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}