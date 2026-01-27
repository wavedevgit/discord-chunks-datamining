/** Chunk was on 21425 **/
/** chunk id: 625841, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk825468 = require("./825468.jsx"),
  Chunk347481 = require("./347481.js"),
  Chunk430452 = require("./430452.js"),
  Chunk954571 = require("./954571.js"),
  Chunk74848 = require("./74848.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk534393 = require("./534393.js");
let j = "SHOW_MORE";

function S(e) {
  var t, l;
  let {
    deviceType: S,
    location: I,
    showAllDevices: x = false,
    selectedDeviceId: E,
    onSelectDevice: P,
    hideDeviceTypeIcon: T = false,
    label: N
  } = e, w = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["deviceType", "location", "showAllDevices", "selectedDeviceId", "onSelectDevice", "hideDeviceTypeIcon", "label"]), {
    setDevice: C,
    Icon: D,
    getCanSetDevice: L,
    getWarningMessage: k,
    getLocation: G
  } = {
    [h.oh.AUDIO_INPUT]: {
      setDevice: d.A.setInputDevice,
      Icon: u.cNw,
      getCanSetDevice: e => e.supports(h.O5.AUDIO_INPUT_DEVICE),
      getWarningMessage: () => v.intl.format(v.t["1iK6UW"], {
        onDownloadClick: () => (0, m._)("Help Text Input Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectInputDevices")
    },
    [h.oh.AUDIO_OUTPUT]: {
      setDevice: d.A.setOutputDevice,
      Icon: u.LoC,
      getCanSetDevice: e => e.supports(h.O5.AUDIO_OUTPUT_DEVICE),
      getWarningMessage: () => v.intl.format(v.t.Ow0dbF, {
        onDownloadClick: () => (0, m._)("Help Text Output Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectOutputDevices")
    },
    [h.oh.VIDEO_INPUT]: {
      setDevice: d.A.setVideoDevice,
      Icon: u.xpe,
      getCanSetDevice: e => e.isVideoAvailable(),
      getWarningMessage: () => v.intl.format(v.t["1iK6UW"], {
        onDownloadClick: () => (0, m._)("Help Text Video Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectVideoDevices")
    }
  } [S], {
    analyticsLocations: R
  } = (0, p.Ay)(), M = (0, s.bG)([f.A], () => f.A.theme), [V, U] = i.useState(x), W = G(I), [F, K] = (0, b.tR)(S, {
    location: W
  }), {
    id: z
  } = (0, b.x5)(S), H = (0, s.bG)([y.A], () => L(y.A)), Y = (0, r.jsx)(u.po8, {
    messageType: u.YCn.WARNING,
    children: k()
  }), B = i.useCallback(e => {
    if (e === j) U(true), _.default.track(A.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
      device_type: S,
      location: W,
      location_stack: R,
      shown_device_count: F.length,
      hidden_device_count: K.length
    });
    else {
      var t;
      (null == (t = null == P ? true : P(e)) || t) && C(e, {
        location: W,
        analyticsLocations: R
      })
    }
  }, [S, W, F.length, K.length, R, P, C]);

  function J(e) {
    let t, i, {
        label: l,
        value: s
      } = e,
      o = arguments.length > 1 && true !== arguments[1] && arguments[1],
      d = l,
      p = (0, b.d)(l);
    null != p && (d = p.prefix, t = p.subName);
    let f = g.A.getCertifiedDeviceName(s, d);
    if (g.A.isCertified(s)) {
      let e = (0, c.qB)(M) ? n(961392) : n(848672);
      i = (0, r.jsx)("img", {
        src: e,
        alt: v.intl.string(v.t.smSKsj)
      })
    }
    return (0, r.jsxs)("div", {
      className: a()(O.Mg, {
        [O.S2]: o && null != t,
        [O.Sy]: !T
      }),
      children: [!T && (0, r.jsx)("div", {
        className: O.Kt,
        children: (0, r.jsx)(D, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.LU0.colors.ICON_MUTED
        })
      }), (0, r.jsx)(u.Text, {
        lineClamp: 2,
        variant: "text-md/medium",
        color: o ? "text-subtle" : "text-default",
        className: O.hV,
        children: f
      }), null != t && (0, r.jsx)(u.Text, {
        lineClamp: 2,
        variant: o ? "text-xs/medium" : "text-md/medium",
        color: "text-muted",
        className: O.VT,
        children: t
      }), null != i && (0, r.jsx)("div", {
        className: O.pN,
        children: i
      })]
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Te, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      label: N,
      value: null != E ? E : z,
      onChange: B,
      options: function() {
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
          t = F.map(e);
        if (V || 0 === K.length) {
          let n = K.map(e);
          return t.concat(n)
        } {
          let e = {
            value: j,
            label: v.intl.string(v.t.E99UMh),
            preventCloseOnSelect: true
          };
          return t.concat(e)
        }
      }(),
      isDisabled: !H,
      popoutPosition: "bottom",
      renderOptionLabel: e => J(e, true),
      renderOptionValue: e => {
        let [t] = e;
        return J(t)
      },
      optionClassName: O.OS
    }, w), l = l = {
      "data-migration-pending": true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
    }), t)), !H && Y]
  })
}