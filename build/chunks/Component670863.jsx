/** Chunk was on web.js **/
/** chunk id: 670863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk962100 = require("./962100.jsx"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk568001 = require("./568001.js"),
  Chunk72897 = require("./72897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk118896 = require("./118896.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = "SHOW_MORE";

function N(e) {
  return ({
    [y.h7.AUDIO_INPUT]: {
      setDevice: u.Z.setInputDevice,
      Icon: c.S6n,
      getCanSetDevice: e => e.supports(y.AN.AUDIO_INPUT_DEVICE),
      getWarningMessage: () => O.intl.format(O.t["1iK6UW"], {
        onDownloadClick: () => (0, p.y)("Help Text Input Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectInputDevices")
    },
    [y.h7.AUDIO_OUTPUT]: {
      setDevice: u.Z.setOutputDevice,
      Icon: c.VWR,
      getCanSetDevice: e => e.supports(y.AN.AUDIO_OUTPUT_DEVICE),
      getWarningMessage: () => O.intl.format(O.t.Ow0dbF, {
        onDownloadClick: () => (0, p.y)("Help Text Output Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectOutputDevices")
    },
    [y.h7.VIDEO_INPUT]: {
      setDevice: u.Z.setVideoDevice,
      Icon: c.xmR,
      getCanSetDevice: e => e.isVideoAvailable(),
      getWarningMessage: () => O.intl.format(O.t["1iK6UW"], {
        onDownloadClick: () => (0, p.y)("Help Text Video Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectVideoDevices")
    }
  })[e]
}

function P(e) {
  var {
    deviceType: t,
    location: a,
    showAllDevices: u = false,
    selectedDeviceId: p,
    onSelectDevice: y,
    hideDeviceTypeIcon: S = false,
    label: A
  } = e, P = T(e, ["deviceType", "location", "showAllDevices", "selectedDeviceId", "onSelectDevice", "hideDeviceTypeIcon", "label"]);
  let {
    setDevice: R,
    Icon: w,
    getCanSetDevice: D,
    getWarningMessage: x,
    getLocation: L
  } = N(t), {
    analyticsLocations: j
  } = (0, d.ZP)(), M = (0, s.e7)([f.Z], () => f.Z.theme), [k, U] = i.useState(u), G = L(a), [Z, B] = (0, E.Ls)(t, {
    location: G
  }), {
    id: F
  } = (0, E.p6)(t), V = null != p ? p : F, H = (0, s.e7)([m.Z], () => D(m.Z)), {
    showDeviceSelectionImprovements: Y
  } = (0, g.V)({
    location: "".concat(G, "/SingleSelectDevices")
  }), W = (0, r.jsx)(c.Wn, {
    messageType: c.QYI.WARNING,
    children: x()
  }), K = i.useCallback(e => {
    if (e === C) U(true), h.default.track(b.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
      device_type: t,
      location: G,
      location_stack: j,
      shown_device_count: Z.length,
      hidden_device_count: B.length
    });
    else {
      var n;
      (null == (n = null == y ? true : y(e)) || n) && R(e, {
        location: G,
        analyticsLocations: j
      })
    }
  }, [t, G, Z.length, B.length, j, y, R]);

  function z(e) {
    let t, i, {
        label: a,
        value: s
      } = e,
      u = arguments.length > 1 && true !== arguments[1] && arguments[1],
      d = a,
      f = (0, E.rX)(a);
    null != f && ((0, g.M)({
      location: "".concat(G, "/SingleSelectDevices.defaultRenderOptionLabel")
    }), d = f.prefix, t = f.subName);
    let p = _.Z.getCertifiedDeviceName(s, d);
    if (_.Z.isCertified(s)) {
      let e = (0, l.ap)(M) ? n(561259) : n(887695);
      i = (0, r.jsx)("img", {
        src: e,
        alt: O.intl.string(O.t.smSKsj)
      })
    }
    return (0, r.jsxs)("div", {
      className: o()(v.deviceContainer, {
        [v.multiLine]: u && null != t,
        [v.withIcon]: !S
      }),
      children: [!S && (0, r.jsx)("div", {
        className: v.deviceIcon,
        children: (0, r.jsx)(w, {
          size: "custom",
          width: 20,
          height: 20,
          color: c.TVs.colors.INTERACTIVE_MUTED
        })
      }), (0, r.jsx)(c.Text, {
        lineClamp: 2,
        variant: "text-md/medium",
        color: u ? "text-subtle" : "text-default",
        className: v.deviceLabel,
        children: p
      }), null != t && (0, r.jsx)(c.Text, {
        lineClamp: 2,
        variant: u ? "text-xs/medium" : "text-md/medium",
        color: "text-muted",
        className: v.deviceSubLabel,
        children: t
      }), null != i && (0, r.jsx)("div", {
        className: v.deviceCertifiedPill,
        children: i
      })]
    })
  }

  function q() {
    let e = e => {
        let {
          id: t,
          name: n
        } = e;
        return {
          value: t,
          label: n
        }
      },
      t = Z.map(e);
    if (k || 0 === B.length) {
      let n = B.map(e);
      return t.concat(n)
    } {
      let e = {
        value: C,
        label: O.intl.string(O.t.E99UMh),
        preventCloseOnSelect: true
      };
      return t.concat(e)
    }
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.q4e, I({
      label: A,
      value: V,
      onChange: K,
      options: q(),
      isDisabled: !H,
      popoutPosition: "bottom",
      renderOptionLabel: e => z(e, Y),
      renderOptionValue: e => {
        let [t] = e;
        return z(t)
      },
      optionClassName: v.singleSelectOption
    }, P)), !H && W]
  })
}