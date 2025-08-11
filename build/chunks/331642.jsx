/** Chunk was on 75708 **/
/** chunk id: 331642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk242291 = require("./242291.js"),
  Chunk830253 = require("./830253.js"),
  Chunk792165 = require("./792165.js"),
  Chunk603074 = require("./603074.js"),
  Chunk294206 = require("./294206.jsx"),
  Chunk388032 = require("./388032.js"),
  Chunk517058 = require("./517058.js");

function x(e) {
  let {
    onSelect: t
  } = e, [n, a] = r.useState(false), o = (0, s.e7)([c.default], () => c.default.getCurrentUser()), u = d.ZP.canUseCustomCallSounds(o), m = r.useRef(null);

  function x(e) {
    u && (a(false), null == t || t(e))
  }
  return <l.yRy targetElementRef={m} shouldShow={n} position={"left"} onRequestClose={() => a(false)} renderPopout={e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(l.VqE, {
        children: (0, i.jsx)(g.Z, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: x,
          gridNotice: u ? null : (0, i.jsx)(p.o, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    }}>{e => {
      var t, r;
      return (0, i.jsx)(h.hU, (t = function(e) {
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
      }({}, e), r = r = {
        ref: m,
        onClick: () => {
          a(!n)
        },
        text: f.intl.string(f.t.uOe0Aw),
        children: (0, i.jsx)(l.vdY, {
          size: "md",
          color: "currentColor",
          className: b.secondaryIcon
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }}</l.yRy>
}

function _(e) {
  let {
    sound: t
  } = e, {
    previewSound: n
  } = (0, m.Z)(t, null), r = 0 === (0, u.pI)() ? f.intl.string(f.t.OASXjo) : f.intl.formatToPlainString(f.t["/8fYOz"], {
    emojiName: t.emojiName,
    soundName: t.name
  });
  return <h.hU onClick={n} text={r}><l.gj8 size={"md"} color={"currentColor"} className={b.secondaryIconActive} /></h.hU>
}

function j(e) {
  let {
    sound: t,
    isGlobal: n,
    onSelect: r
  } = e, s = null != t, c = null == t ? true : t.emojiId, d = null == t ? true : t.emojiName, u = s && (null != d || null != c);
  return <div className={b.soundButtonSettingContainer}>{<div className={b.container}>{u && <o.Z emojiId={c} emojiName={d} className={b.emoji} />}{<l.Text variant={"text-xs/medium"} color={"header-primary"} className={b.soundText}>{null == t ? f.intl.string(f.t.PoWNfX) : n ? f.intl.format(f.t.B6HU6O, {
          soundName: t.name,
          subtextHook: e => (0, i.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "header-secondary",
            tag: "span",
            children: e
          })
        }) : t.name}</l.Text>}{s ? <_ sound={t} /> : <l.gj8 size={"md"} color={"currentColor"} className={b.secondaryIconDisabled} />}</div>}{<div className={b.container}>{<x onSelect={r} />}{s && !n && <h.hU onClick={() => r(null)} text={f.intl.string(f.t.jmtcGB)}><l.XHJ size={"md"} color={a.Z.unsafe_rawColors.RED_400.css} className={b.secondaryIcon} /></h.hU>}</div>}</div>
}