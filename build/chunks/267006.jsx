/** Chunk was on 75708 **/
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
  Chunk494620 = require("./494620.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.js"),
  Chunk20493 = require("./20493.js");

function x(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, l.e7)([u.Z], () => u.Z.getExperimentalEncoders());
  return <d.F setting={h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS}><o.j7V className={a()(b.marginTop8, b.marginBottom20)} value={n} onChange={c.Z.setExperimentalEncoders} hideBorder={t}>{f.intl.string(f.t.AxnPm5)}</o.j7V></d.F>
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
        return <o.ConfirmModal{...t = function(e) {
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
        }), t} />
      })
    }, []),
    E = <i.Fragment>{<d.F setting={h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264}><o.j7V className={t ? null : a()(b.marginTop8, b.marginBottom20)} value={n} onChange={c.Z.setOpenH264} hideBorder={t}>{f.intl.string(f.t["71Ve19"])}</o.j7V></d.F>}{<d.F setting={h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION}><div>{<o.j7V style={{
              scrollMarginTop: "48px"
            }} containerRef={_} className={t ? null : a()(b.marginTop8, b.marginBottom20)} value={s} onChange={j} note={f.intl.string(f.t.P1UKqq)} hideBorder={t}>{f.intl.string(f.t.Sln58f)}</o.j7V>}{!s && <p.Z look={p.z.WARNING}>{f.intl.string(f.t["Uz6L6+"])}</p.Z>}</div></d.F>}{<x refreshStyles={t} />}</i.Fragment>;
  return <d.F setting={h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO}>{t ? E : (0, i.jsx)(o.hjN, {
      className: b.marginBottom20,
      title: f.intl.string(f.t.Tceiq6),
      children: E
    })}</d.F>
}