/** Chunk was on 30202 **/
/** chunk id: 267006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk996073 = require("./996073.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function x(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, l.e7)([u.Z], () => u.Z.getExperimentalEncoders());
  return (0, i.jsx)(d.F, {
    setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
    children: (0, i.jsx)(o.j7V, {
      className: a()(b.marginTop8, b.marginBottom20),
      value: n,
      onChange: c.Z.setExperimentalEncoders,
      hideBorder: t,
      children: f.intl.string(f.t.AxnPm5)
    })
  })
}

function _(e) {
  let {
    refreshStyles: t = false
  } = e, {
    openH264: n,
    hardwareEncoding: s
  } = (0, l.cj)([u.Z], () => ({
    openH264: u.Z.getOpenH264(),
    hardwareEncoding: u.Z.getHardwareEncoding()
  })), _ = r.useRef(null);
  (0, m.Z)(_, g.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
  let j = r.useCallback(e => {
      e ? c.Z.setHardwareEncoding(true) : (0, o.h7j)(e => {
        var t, n;
        return (0, i.jsx)(o.ConfirmModal, (t = function(e) {
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
          header: f.intl.string(f.t.mly1DA),
          confirmText: f.intl.string(f.t.BddRzc),
          cancelText: f.intl.string(f.t["ETE/oK"]),
          onConfirm: () => c.Z.setHardwareEncoding(false)
        }, e), n = n = {
          children: (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: f.intl.format(f.t.aPStAQ, {})
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    }, []),
    E = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
        children: (0, i.jsx)(o.j7V, {
          className: t ? null : a()(b.marginTop8, b.marginBottom20),
          value: n,
          onChange: c.Z.setOpenH264,
          hideBorder: t,
          children: f.intl.string(f.t["71Ve19"])
        })
      }), (0, i.jsx)(d.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
        children: (0, i.jsxs)("div", {
          children: [(0, i.jsx)(o.j7V, {
            style: {
              scrollMarginTop: "48px"
            },
            containerRef: _,
            className: t ? null : a()(b.marginTop8, b.marginBottom20),
            value: s,
            onChange: j,
            note: f.intl.string(f.t.P1UKqq),
            hideBorder: t,
            children: f.intl.string(f.t.Sln58f)
          }), !s && (0, i.jsx)(p.Z, {
            look: p.z.WARNING,
            children: f.intl.string(f.t["Uz6L6+"])
          })]
        })
      }), (0, i.jsx)(x, {
        refreshStyles: t
      })]
    });
  return (0, i.jsx)(d.F, {
    setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    children: t ? E : (0, i.jsx)(o.hjN, {
      className: b.marginBottom20,
      title: f.intl.string(f.t.Tceiq6),
      children: E
    })
  })
}