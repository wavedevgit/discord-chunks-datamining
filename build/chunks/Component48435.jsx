/** Chunk was on web.js **/
/** chunk id: 48435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk954571 = require("./954571.js"),
  Chunk74848 = require("./74848.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

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
    [u.oh.AUDIO_INPUT]: {
      setDevice: s.A.setInputDevice,
      getLabel: () => d.intl.string(d.t.ElbIXN),
      getLocation: e => "".concat(e, ".useInputDeviceMenuItems")
    },
    [u.oh.AUDIO_OUTPUT]: {
      setDevice: s.A.setOutputDevice,
      getLabel: () => d.intl.string(d.t["6Ww0iH"]),
      getLocation: e => "".concat(e, ".useOutputDeviceMenuItems")
    },
    [u.oh.VIDEO_INPUT]: {
      setDevice: s.A.setVideoDevice,
      getLabel: () => d.intl.string(d.t.F122Gz),
      getLocation: e => "".concat(e, ".useVideoDeviceMenuItems")
    }
  })[e]
}

function g(e) {
  var t;
  let {
    deviceType: n,
    analyticsLocations: s,
    asSubmenu: u = false,
    onDeviceSelect: f,
    showAllDevices: _ = false,
    selectedDeviceId: g,
    menuGroupOverrideProps: E,
    menuItemOverrideProps: b,
    computeMenuRadioItemOverrideProps: y
  } = e, {
    setDevice: O,
    getLabel: A,
    getLocation: v
  } = m(n), [S, I] = i.useState(_), T = v(s[s.length - 1]), [C, N] = (0, l.tR)(n, {
    location: T
  }), R = S ? C.concat(N) : C, {
    id: w,
    name: P
  } = (0, l.x5)(n), D = null != g ? g : w, x = i.useMemo(() => C.concat(N).find(e => {
    let {
      id: t
    } = e;
    return t === D
  }), [C, N, D]), L = R.map(e => {
    let t, {
        id: i,
        disabled: o,
        name: c
      } = e,
      u = c,
      d = (0, l.d)(c);
    return null != d && (u = d.prefix, t = d.subName), (0, r.jsx)(a.iDA, p({
      id: "".concat(n, "-").concat(i),
      group: "".concat(n, "-devices"),
      disabled: o,
      label: u,
      subtext: null != t && (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        children: t
      }),
      checked: i === D,
      action: () => {
        var e;
        (null == (e = null == f ? true : f(i)) || e) && O(i, {
          analyticsLocations: s
        })
      }
    }, null == y ? true : y(i)), "".concat(n, "-").concat(i))
  }), j = (0, r.jsx)(a.Drp, {
    id: "SHOW_MORE",
    label: d.intl.string(d.t.E99UMh),
    dontCloseOnAction: true,
    action: () => {
      I(true), o.default.track(c.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
        device_type: n,
        location: T,
        shown_device_count: C.length,
        hidden_device_count: N.length,
        location_stack: s
      })
    }
  }), M = !S && (null == N ? true : N.length) > 0;
  return u ? (0, r.jsxs)(a.Drp, h(p({
    id: "".concat(n, "-devices"),
    label: A(),
    subtext: null != (t = null == x ? true : x.name) ? t : P
  }, b), {
    children: [L, M && j]
  })) : (0, r.jsxs)(a.rXV, h(p({
    label: A()
  }, E), {
    children: [L, M && j]
  }))
}