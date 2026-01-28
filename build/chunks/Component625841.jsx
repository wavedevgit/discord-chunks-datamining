/** Chunk was on 38660 **/
/** chunk id: 625841, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
let v = "SHOW_MORE";

function f(e) {
  var t, l;
  let {
    deviceType: f,
    location: C,
    showAllDevices: T = false,
    selectedDeviceId: y,
    onSelectDevice: I,
    hideDeviceTypeIcon: N = false,
    label: _
  } = e, D = function(e, t) {
    if (null == e) return {};
    var n, i, s, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, i, s = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s
      }(e, t), Object.getOwnPropertySymbols)
      for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["deviceType", "location", "showAllDevices", "selectedDeviceId", "onSelectDevice", "hideDeviceTypeIcon", "label"]), {
    setDevice: P,
    Icon: G,
    getCanSetDevice: R,
    getWarningMessage: V,
    getLocation: L
  } = {
    [b.oh.AUDIO_INPUT]: {
      setDevice: u.A.setInputDevice,
      Icon: d.cNw,
      getCanSetDevice: e => e.supports(b.O5.AUDIO_INPUT_DEVICE),
      getWarningMessage: () => E.intl.format(E.t["1iK6UW"], {
        onDownloadClick: () => (0, x._)("Help Text Input Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectInputDevices")
    },
    [b.oh.AUDIO_OUTPUT]: {
      setDevice: u.A.setOutputDevice,
      Icon: d.LoC,
      getCanSetDevice: e => e.supports(b.O5.AUDIO_OUTPUT_DEVICE),
      getWarningMessage: () => E.intl.format(E.t.Ow0dbF, {
        onDownloadClick: () => (0, x._)("Help Text Output Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectOutputDevices")
    },
    [b.oh.VIDEO_INPUT]: {
      setDevice: u.A.setVideoDevice,
      Icon: d.xpe,
      getCanSetDevice: e => e.isVideoAvailable(),
      getWarningMessage: () => E.intl.format(E.t["1iK6UW"], {
        onDownloadClick: () => (0, x._)("Help Text Video Devices")
      }),
      getLocation: e => "".concat(e, ".SingleSelectVideoDevices")
    }
  } [f], {
    analyticsLocations: k
  } = (0, g.Ay)(), M = (0, a.bG)([h.A], () => h.A.theme), [w, U] = s.useState(T), H = L(C), [B, Y] = (0, j.tR)(f, {
    location: H
  }), {
    id: F
  } = (0, j.x5)(f), z = (0, a.bG)([p.A], () => R(p.A)), W = (0, i.jsx)(d.po8, {
    messageType: d.YCn.WARNING,
    children: V()
  }), K = s.useCallback(e => {
    if (e === v) U(true), m.default.track(O.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
      device_type: f,
      location: H,
      location_stack: k,
      shown_device_count: B.length,
      hidden_device_count: Y.length
    });
    else {
      var t;
      (null == (t = null == I ? true : I(e)) || t) && P(e, {
        location: H,
        analyticsLocations: k
      })
    }
  }, [f, H, B.length, Y.length, k, I, P]);

  function J(e) {
    let t, s, {
        label: l,
        value: a
      } = e,
      o = arguments.length > 1 && true !== arguments[1] && arguments[1],
      u = l,
      g = (0, j.d)(l);
    null != g && (u = g.prefix, t = g.subName);
    let h = A.A.getCertifiedDeviceName(a, u);
    if (A.A.isCertified(a)) {
      let e = (0, c.qB)(M) ? n(961392) : n(848672);
      s = (0, i.jsx)("img", {
        src: e,
        alt: E.intl.string(E.t.smSKsj)
      })
    }
    return (0, i.jsxs)("div", {
      className: r()(S.Mg, {
        [S.S2]: o && null != t,
        [S.Sy]: !N
      }),
      children: [!N && (0, i.jsx)("div", {
        className: S.Kt,
        children: (0, i.jsx)(G, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.LU0.colors.ICON_MUTED
        })
      }), (0, i.jsx)(d.Text, {
        lineClamp: 2,
        variant: "text-md/medium",
        color: o ? "text-subtle" : "text-default",
        className: S.hV,
        children: h
      }), null != t && (0, i.jsx)(d.Text, {
        lineClamp: 2,
        variant: o ? "text-xs/medium" : "text-md/medium",
        color: "text-muted",
        className: S.VT,
        children: t
      }), null != s && (0, i.jsx)("div", {
        className: S.pN,
        children: s
      })]
    })
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Te, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({
      label: _,
      value: null != y ? y : F,
      onChange: K,
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
          t = B.map(e);
        if (w || 0 === Y.length) {
          let n = Y.map(e);
          return t.concat(n)
        } {
          let e = {
            value: v,
            label: E.intl.string(E.t.E99UMh),
            preventCloseOnSelect: true
          };
          return t.concat(e)
        }
      }(),
      isDisabled: !z,
      popoutPosition: "bottom",
      renderOptionLabel: e => J(e, true),
      renderOptionValue: e => {
        let [t] = e;
        return J(t)
      },
      optionClassName: S.OS
    }, D), l = l = {
      "data-migration-pending": true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
    }), t)), !z && W]
  })
}