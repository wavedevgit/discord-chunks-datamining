/** Chunk was on 53937 **/
t.d(l, {
  Z: () => m,
  j: () => c
}), t(301563);
var n = t(200651);
t(192379);
var r = t(120356),
  i = t.n(r),
  s = t(729594),
  a = t(388032),
  o = t(461976);
let d = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
  u = (e, l, t) => "https://".concat(e, "/embed/").concat(l, "?locale=").concat(t),
  c = ["PlayStation"],
  h = (e, l) => {
    let {
      host: t,
      pathname: n
    } = l, r = [];
    switch (null != n && (r = n.split("/")), e) {
      case "PlayStation":
        if (null == t || !d.includes(t) || 2 !== r.length) break;
        return {
          embedUrl: u(t, r[1], a.NW.currentLocale), style: {
            width: 400,
            height: 300,
            borderRadius: 6
          }
        }
    }
    return null
  };

function m(e) {
  var l;
  let t = e.embed.url,
    r = null === (l = e.embed.provider) || void 0 === l ? void 0 : l.name;
  if (null == t || null == r) return null;
  let a = null;
  try {
    a = s.parse(t, !0)
  } catch (e) {
    return null
  }
  let d = h(r, a);
  return null == d ? null : (0, n.jsx)("iframe", {
    src: d.embedUrl,
    className: i()(o.embedIFrame, e.className),
    style: d.style,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}