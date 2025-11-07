/** Chunk was on web.js **/
/** chunk id: 650958, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk626135 = require("./626135.js"),
  Chunk72897 = require("./72897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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

function m(e) {
  return ({
    [u.h7.AUDIO_INPUT]: {
      setDevice: o.Z.setInputDevice,
      getLabel: () => d.intl.string(d.t.ElbIXN),
      getLocation: e => "".concat(e, ".useInputDeviceMenuItems")
    },
    [u.h7.AUDIO_OUTPUT]: {
      setDevice: o.Z.setOutputDevice,
      getLabel: () => d.intl.string(d.t["6Ww0iH"]),
      getLocation: e => "".concat(e, ".useOutputDeviceMenuItems")
    },
    [u.h7.VIDEO_INPUT]: {
      setDevice: o.Z.setVideoDevice,
      getLabel: () => d.intl.string(d.t.F122Gz),
      getLocation: e => "".concat(e, ".useVideoDeviceMenuItems")
    }
  })[e]
}

function g(e) {
  let {
    deviceType: t,
    analyticsLocations: n,
    asSubmenu: o = false,
    onDeviceSelect: u,
    showAllDevices: f = false,
    selectedDeviceId: p,
    menuGroupOverrideProps: g,
    menuItemOverrideProps: E,
    computeMenuRadioItemOverrideProps: b
  } = e, {
    setDevice: y,
    getLabel: O,
    getLocation: v
  } = m(t), [I, S] = i.useState(f), T = v(n[n.length - 1]), [A, C] = (0, l.Ls)(t, {
    location: T
  }), N = I ? A.concat(C) : A, {
    id: R,
    name: P
  } = (0, l.p6)(t), w = null != p ? p : R, D = N.map(e => {
    let i, {
        id: o,
        disabled: s,
        name: c
      } = e,
      d = c,
      f = (0, l.rX)(c);
    return null != f && (d = f.prefix, i = f.subName), (0, r.jsx)(a.k5B, _({
      id: "".concat(t, "-").concat(o),
      group: "".concat(t, "-devices"),
      disabled: s,
      label: d,
      subtext: null != i && (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        children: i
      }),
      checked: o === w,
      action: () => {
        var e;
        (null == (e = null == u ? true : u(o)) || e) && y(o, {
          analyticsLocations: n
        })
      }
    }, null == b ? true : b(o)), "".concat(t, "-").concat(o))
  }), x = (0, r.jsx)(a.sNh, {
    id: "SHOW_MORE",
    label: d.intl.string(d.t.E99UMh),
    dontCloseOnAction: true,
    action: () => {
      S(true), s.default.track(c.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
        device_type: t,
        location: T,
        shown_device_count: A.length,
        hidden_device_count: C.length,
        location_stack: n
      })
    }
  }), L = !I && (null == C ? true : C.length) > 0;
  return o ? (0, r.jsxs)(a.sNh, h(_({
    id: "".concat(t, "-devices"),
    label: O(),
    subtext: P
  }, E), {
    children: [D, L && x]
  })) : (0, r.jsxs)(a.kSQ, h(_({
    label: O()
  }, g), {
    children: [D, L && x]
  }))
}