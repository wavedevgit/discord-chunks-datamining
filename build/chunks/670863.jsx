/** Chunk was on web.js **/
/** chunk id: 670863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.js"),
  Chunk962100 = require("./962100.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk72897 = require("./72897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk583453 = require("./583453.js"),
  Chunk20493 = require("./20493.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = "SHOW_MORE";

function I(e) {
  return ({
    [p.h7.AUDIO_INPUT]: {
      setDevice: s.Z.setInputDevice,
      Icon: a.S6n,
      getCanSetDevice: e => e.supports(p.AN.AUDIO_INPUT_DEVICE),
      getWarningMessage: () => h.intl.format(h.t["1iK6UV"], {
        onDownloadClick: () => (0, c.y)("Help Text Input Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectInputDevices")
    },
    [p.h7.AUDIO_OUTPUT]: {
      setDevice: s.Z.setOutputDevice,
      Icon: a.VWR,
      getCanSetDevice: e => e.supports(p.AN.AUDIO_OUTPUT_DEVICE),
      getWarningMessage: () => h.intl.format(h.t.Ow0dbG, {
        onDownloadClick: () => (0, c.y)("Help Text Output Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectOutputDevices")
    },
    [p.h7.VIDEO_INPUT]: {
      setDevice: s.Z.setVideoDevice,
      Icon: a.xmR,
      getCanSetDevice: e => e.isVideoAvailable(),
      getWarningMessage: () => h.intl.format(h.t["1iK6UV"], {
        onDownloadClick: () => (0, c.y)("Help Text Video Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectVideoDevices")
    }
  })[e]
}

function T(e) {
  var t, {
      deviceType: n,
      location: s,
      showAllDevices: c = false,
      selectedDeviceId: p,
      onSelectDevice: E,
      hideDeviceTypeIcon: O = false
    } = e,
    T = y(e, ["deviceType", "location", "showAllDevices", "selectedDeviceId", "onSelectDevice", "hideDeviceTypeIcon"]);
  let {
    setDevice: S,
    Icon: A,
    getCanSetDevice: N,
    getWarningMessage: C,
    getLocation: R
  } = I(n), {
    analyticsLocations: P
  } = (0, l.ZP)(), [w, D] = i.useState(c), L = R(s), [x, M] = (0, f.Ls)(n, {
    location: L
  }), {
    id: k
  } = (0, f.p6)(n), j = null != p ? p : k, U = (0, o.e7)([u.Z], () => N(u.Z)), G = <a.R94 type={a.R94.Types.DESCRIPTION} className={g.marginTop8}>{C()}</a.R94>, B = i.useCallback(e => {
    if (e === v) D(true), d.default.track(_.rMx.DEVICES_LIST_SHOW_MORE_CLICKED, {
      device_type: n,
      location: L,
      location_stack: P,
      shown_device_count: x.length,
      hidden_device_count: M.length
    });
    else {
      var t;
      (null == (t = null == E ? true : E(e)) || t) && S(e, {
        location: L,
        analyticsLocations: P
      })
    }
  }, [n, L, x.length, M.length, P, E, S]);

  function Z(e) {
    let {
      label: t
    } = e;
    return <div className={m.selectedDevice}>{!O && <A size={"custom"} width={20} height={20} color={a.TVs.colors.INTERACTIVE_MUTED} />}{<a.Text lineClamp={1} variant={"text-md/normal"} color={"text-secondary"}>{t}</a.Text>}</div>
  }
  let F = null != (t = T.renderOptionLabel) ? t : Z;

  function V() {
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
      t = x.map(e);
    if (w || 0 === M.length) {
      let n = M.map(e);
      return t.concat(n)
    } {
      let e = {
        value: v,
        label: h.intl.string(h.t.E99UMj),
        preventCloseOnSelect: true
      };
      return t.concat(e)
    }
  }
  return <r.Fragment>{<a.q4e{...b({
      value: j,
      onChange: B,
      options: V(),
      isDisabled: !U,
      className: m.selector,
      popoutPosition: "bottom",
      renderOptionLabel: F,
      renderOptionValue: e => {
        let [t] = e;
        return F(t)
      }
    }, T)} />}{!U && G}</r.Fragment>
}