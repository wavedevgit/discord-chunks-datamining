/** Chunk was on web.js **/
/** chunk id: 905041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk296182 = require("./296182.js"),
  Chunk976853 = require("./976853.js"),
  Chunk902676 = require("./902676.js"),
  Chunk626135 = require("./626135.js"),
  Chunk49012 = require("./49012.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk36998 = require("./36998.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
let g = /^(tel|sms|mailto):([^?;]+)/;

function E(e, t, n, h) {
  let E = (0, a.Z)(null == n ? true : n.getChannelId());
  if (!u.isPlatformEmbedded || null == e || "" === e || E || (null == h ? true : h.shouldHideMediaOptions) === true || !(0, o.Jj)(e)) return null;
  let b = (0, s.F)(e),
    y = e => {
      l.default.track(_.rMx.CONTEXT_MENU_LINK_COPIED, m({
        hostname: b
      }, (0, f.v)())), d.ZP.copy(e), (0, i.showToast)((0, i.createToast)(p.intl.string(p.t["L/PwZW"]), i.ToastType.SUCCESS))
    },
    O = () => {
      y(e)
    },
    v = (n, r) => {
      let i = true === r ? e.replace("tel:", "sms:") : e;
      l.default.track(_.rMx.CONTEXT_MENU_LINK_OPENED, m({
        hostname: b
      }, (0, f.v)())), (0, c.q)({
        href: i,
        trusted: (0, c.r)(e, t),
        shouldConfirm: true
      }, n)
    },
    I = [],
    T = e.match(g);
  if (null != T) {
    let e = () => {
        y(T[2])
      },
      t = p.intl.string("mailto" === T[1] ? p.t.ZYLVKi : p.t["3zozoa"]);
    I.push(<i.sNh id={"copy-native-contact"} label={t} action={e} />), "tel" === T[1] && I.push(<i.sNh id={"native-send-sms"} label={p.intl.string(p.t["+wbjMT"])} action={e => v(e, true)} />)
  }
  return [<i.sNh id={"copy-native-link"} label={p.intl.string(p.t.WqhZsr)} action={O} />, ...I, <i.sNh id={"open-native-link"} label={p.intl.string(p.t.wuRE8P)} action={e => v(e)} />]
}