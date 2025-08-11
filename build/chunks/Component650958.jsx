/** Chunk was on web.js **/
/** chunk id: 650958, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
      setDevice: a.Z.setInputDevice,
      getLabel: () => d.intl.string(d.t.ElbIXF),
      getLocation: e => "".concat(e, ".useInputDeviceMenuItems")
    },
    [u.h7.AUDIO_OUTPUT]: {
      setDevice: a.Z.setOutputDevice,
      getLabel: () => d.intl.string(d.t["6Ww0iI"]),
      getLocation: e => "".concat(e, ".useOutputDeviceMenuItems")
    },
    [u.h7.VIDEO_INPUT]: {
      setDevice: a.Z.setVideoDevice,
      getLabel: () => d.intl.string(d.t.F122Gx),
      getLocation: e => "".concat(e, ".useVideoDeviceMenuItems")
    }
  })[e]
}

function g(e) {
  let {
    deviceType: t,
    analyticsLocations: n,
    asSubmenu: a = false,
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
  } = m(t), [I, T] = i.useState(f), S = v(n[n.length - 1]), [A, N] = (0, l.Ls)(t, {
    location: S
  }), C = I ? A.concat(N) : A, {
    id: R,
    name: P
  } = (0, l.p6)(t), w = null != p ? p : R, D = C.map(e => {
    let {
      id: i,
      disabled: a,
      name: s
    } = e;
    return (0, r.jsx)(o.k5B, _({
      id: "".concat(t, "-").concat(i),
      group: "".concat(t, "-devices"),
      disabled: a,
      label: s,
      checked: i === w,
      action: () => {
        var e;
        (null == (e = null == u ? true : u(i)) || e) && y(i, {
          analyticsLocations: n
        })
      }
    }, null == b ? true : b(i)), "".concat(t, "-").concat(i))
  }), L = (0, r.jsx)(o.sNh, {
    id: "SHOW_MORE",
    label: d.intl.string(d.t.E99UMj),
    dontCloseOnAction: true,
    action: () => {
      T(true), s.default.track(c.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
        device_type: t,
        location: S,
        shown_device_count: A.length,
        hidden_device_count: N.length,
        location_stack: n
      })
    }
  }), x = !I && (null == N ? true : N.length) > 0;
  return a ? (0, r.jsxs)(o.sNh, h(_({
    id: "".concat(t, "-devices"),
    label: O(),
    subtext: P
  }, E), {
    children: [D, x && L]
  })) : (0, r.jsxs)(o.kSQ, h(_({
    label: O()
  }, g), {
    children: [D, x && L]
  }))
}