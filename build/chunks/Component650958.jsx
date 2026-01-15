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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
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
  var t;
  let {
    deviceType: n,
    analyticsLocations: o,
    asSubmenu: u = false,
    onDeviceSelect: f,
    showAllDevices: _ = false,
    selectedDeviceId: g,
    menuGroupOverrideProps: E,
    menuItemOverrideProps: b,
    computeMenuRadioItemOverrideProps: y
  } = e, {
    setDevice: O,
    getLabel: v,
    getLocation: S
  } = m(n), [I, T] = i.useState(_), C = S(o[o.length - 1]), [A, N] = (0, l.Ls)(n, {
    location: C
  }), P = I ? A.concat(N) : A, {
    id: w,
    name: R
  } = (0, l.p6)(n), D = null != g ? g : w, x = i.useMemo(() => A.concat(N).find(e => {
    let {
      id: t
    } = e;
    return t === D
  }), [A, N, D]), L = P.map(e => {
    let t, {
        id: i,
        disabled: s,
        name: c
      } = e,
      u = c,
      d = (0, l.rX)(c);
    return null != d && (u = d.prefix, t = d.subName), (0, r.jsx)(a.k5B, p({
      id: "".concat(n, "-").concat(i),
      group: "".concat(n, "-devices"),
      disabled: s,
      label: u,
      subtext: null != t && (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        children: t
      }),
      checked: i === D,
      action: () => {
        var e;
        (null == (e = null == f ? true : f(i)) || e) && O(i, {
          analyticsLocations: o
        })
      }
    }, null == y ? true : y(i)), "".concat(n, "-").concat(i))
  }), j = (0, r.jsx)(a.sNh, {
    id: "SHOW_MORE",
    label: d.intl.string(d.t.E99UMh),
    dontCloseOnAction: true,
    action: () => {
      T(true), s.default.track(c.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
        device_type: n,
        location: C,
        shown_device_count: A.length,
        hidden_device_count: N.length,
        location_stack: o
      })
    }
  }), M = !I && (null == N ? true : N.length) > 0;
  return u ? (0, r.jsxs)(a.sNh, h(p({
    id: "".concat(n, "-devices"),
    label: v(),
    subtext: null != (t = null == x ? true : x.name) ? t : R
  }, b), {
    children: [L, M && j]
  })) : (0, r.jsxs)(a.kSQ, h(p({
    label: v()
  }, E), {
    children: [L, M && j]
  }))
}