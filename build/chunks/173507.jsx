/** Chunk was on web.js **/
/** chunk id: 173507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t) {
  let s = arguments.length > 2 && true !== arguments[2] && arguments[2],
    c = () => (0, i.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("8895"), n.e("84605"), n.e("8016"), n.e("49508"), n.e("17938"), n.e("94136"), n.e("25548"), n.e("2686"), n.e("76540"), n.e("22646"), n.e("25183"), n.e("3940"), n.e("4192"), n.e("27458"), n.e("37082"), n.e("72762"), n.e("88712"), n.e("30419"), n.e("66317"), n.e("89001"), n.e("18824"), n.e("75708"), n.e("62117"), n.e("5458"), n.e("43876")]).then(n.bind(n, 601572));
      return n => <t{...u(l({}, n), {
        onEnable: e,
        videoEnabled: false
      })} />
    }, {
      modalKey: "camera-preview",
      contextKey: t === a.IlC.POPOUT ? i.u1M : i.z1l
    });
  o.qF.getSetting() || s ? c() : null == e || e()
}