/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => g
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(898531),
  s = n(314897),
  l = n(131951),
  c = n(682901),
  u = n(388032),
  d = n(151602);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  let f = (0, o.vRw)(),
    {
      videoEnabled: p,
      hasVideoDevice: g
    } = (0, i.cj)([l.Z], () => ({
      videoEnabled: l.Z.isVideoEnabled(),
      hasVideoDevice: l.Z.isVideoAvailable()
    })),
    m = (0, i.e7)([s.default], () => s.default.getId() === e),
    E = (0, a.Z)(),
    {
      enabled: v
    } = (0, c.Z)({
      location: "usePreviewVideoItem"
    });

  function b() {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("50506"), n.e("68880"), n.e("93828"), n.e("84605"), n.e("25292"), n.e("8016"), n.e("22878"), n.e("90508"), n.e("13351"), n.e("95477"), n.e("11212"), n.e("66711"), n.e("97349"), n.e("55186"), n.e("17938"), n.e("53937"), n.e("6380"), n.e("46097"), n.e("84335"), n.e("76540"), n.e("8739"), n.e("18543"), n.e("58059"), n.e("28467"), n.e("18895"), n.e("40580"), n.e("79120"), n.e("30243"), n.e("99393"), n.e("49508"), n.e("68241"), n.e("22646"), n.e("3940"), n.e("25183"), n.e("80284"), n.e("85574"), n.e("68051"), n.e("48923"), n.e("30806"), n.e("30419"), n.e("99839"), n.e("18824"), n.e("60691"), n.e("53485"), n.e("45847"), n.e("84466"), n.e("26593"), n.e("40383"), n.e("21189"), n.e("80606")]).then(n.bind(n, 601572));
      return t => (0, r.jsx)(e, h(_({}, t), {
        videoEnabled: p
      }))
    }, {
      modalKey: "camera-preview",
      contextKey: null != t ? (0, o.VnL)(t) : f
    })
  }
  return (!p || E) && m && g ? (0, r.jsx)(o.sNh, {
    id: "change-video-background",
    label: (0, r.jsx)("div", {
      className: d.item,
      children: p ? u.NW.string(u.t.mZKxHR) : u.NW.string(u.t.vkV939)
    }),
    action: b,
    icon: v && (p ? o.yMH : o.tEF)
  }) : null
}