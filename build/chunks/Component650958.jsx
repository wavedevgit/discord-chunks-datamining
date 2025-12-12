/** Chunk was on web.js **/
/** chunk id: 650958, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function p(e) {
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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  return ({
    [u.h7.AUDIO_INPUT]: {
      setDevice: a.Z.setInputDevice,
      getLabel: () => d.intl.string(d.t.ElbIXN),
      getLocation: e => "".concat(e, ".useInputDeviceMenuItems")
    },
    [u.h7.AUDIO_OUTPUT]: {
      setDevice: a.Z.setOutputDevice,
      getLabel: () => d.intl.string(d.t["6Ww0iH"]),
      getLocation: e => "".concat(e, ".useOutputDeviceMenuItems")
    },
    [u.h7.VIDEO_INPUT]: {
      setDevice: a.Z.setVideoDevice,
      getLabel: () => d.intl.string(d.t.F122Gz),
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
    selectedDeviceId: _,
    menuGroupOverrideProps: g,
    menuItemOverrideProps: E,
    computeMenuRadioItemOverrideProps: b
  } = e, {
    setDevice: y,
    getLabel: O,
    getLocation: v
  } = h(t), [S, I] = i.useState(f), T = v(n[n.length - 1]), [C, A] = (0, l.Ls)(t, {
    location: T
  }), N = S ? C.concat(A) : C, {
    id: P,
    name: R
  } = (0, l.p6)(t), w = null != _ ? _ : P, D = N.map(e => {
    let i, {
        id: a,
        disabled: s,
        name: c
      } = e,
      d = c,
      f = (0, l.rX)(c);
    return null != f && (d = f.prefix, i = f.subName), (0, r.jsx)(o.k5B, p({
      id: "".concat(t, "-").concat(a),
      group: "".concat(t, "-devices"),
      disabled: s,
      label: d,
      subtext: null != i && (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: i
      }),
      checked: a === w,
      action: () => {
        var e;
        (null == (e = null == u ? true : u(a)) || e) && y(a, {
          analyticsLocations: n
        })
      }
    }, null == b ? true : b(a)), "".concat(t, "-").concat(a))
  }), x = (0, r.jsx)(o.sNh, {
    id: "SHOW_MORE",
    label: d.intl.string(d.t.E99UMh),
    dontCloseOnAction: true,
    action: () => {
      I(true), s.default.track(c.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
        device_type: t,
        location: T,
        shown_device_count: C.length,
        hidden_device_count: A.length,
        location_stack: n
      })
    }
  }), L = !S && (null == A ? true : A.length) > 0;
  return a ? (0, r.jsxs)(o.sNh, m(p({
    id: "".concat(t, "-devices"),
    label: O(),
    subtext: R
  }, E), {
    children: [D, L && x]
  })) : (0, r.jsxs)(o.kSQ, m(p({
    label: O()
  }, g), {
    children: [D, L && x]
  }))
}