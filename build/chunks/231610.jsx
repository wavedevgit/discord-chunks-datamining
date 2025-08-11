/** Chunk was on 22988 **/
/** chunk id: 231610, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.js"),
  Chunk290348 = require("./290348.js"),
  Chunk783454 = require("./783454.js"),
  Chunk893729 = require("./893729.js"),
  Chunk619326 = require("./619326.js"),
  Chunk553204 = require("./553204.js"),
  Chunk388032 = require("./388032.js"),
  Chunk301849 = require("./301849.js"),
  Chunk181517 = require("./181517.js");

function h() {
  let {
    editStateId: e,
    guildId: t
  } = (0, Chunk727843.N)(), [, h] = Chunk290348.p9(module, exports), [f, b] = Chunk290348.Ek(module, exports), x = Chunk290348.qs(module, exports);

  function j() {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("22942").then(require.bind(require, 660727));
      return n => {
        var i, l;
        return <e{...i = function(e) {
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
        }({}, n), l = l = {
          guildId: t,
          onUploadIcon: e => h({
            icon: e,
            unicodeEmoji: null
          }),
          onSelectUnicodeEmoji: e => h({
            icon: null,
            unicodeEmoji: e
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i} />
      }
    })
  }
  let v = (0, Chunk723047.mY)();
  return <Chunk783454.Z title={Chunk388032.intl.string(Chunk388032.t["Ah+sQ0"])} description={Chunk388032.intl.string(Chunk388032.t.ixbWiI)}><Chunk481060.Kqy direction={"vertical"} gap={24}>{<Chunk481060.hjN title={Chunk388032.intl.string(Chunk388032.t["6OUqDQ"])} disabled={v}><Chunk619326.Z value={f} onChange={b} disabled={v} /></Chunk481060.hjN>}{<Chunk481060.hjN title={Chunk388032.intl.string(Chunk388032.t["zn8/AQ"])} disabled={v}>{<Chunk481060.R94 type={Chunk481060.R94.Types.DESCRIPTION} className={Chunk301849.formDescription} disabled={v}>{Chunk388032.intl.string(Chunk388032.t.AqHUra)}</Chunk481060.R94>}{<Chunk481060.Kqy direction={"horizontal"} gap={16}>{<Chunk553204.Z role={x} aria-label={Chunk388032.intl.string(Chunk388032.t.mD1oGB)} onClick={j} disabled={v} />}{<Chunk481060.zxk variant={"secondary"} onClick={j} disabled={v} text={Chunk388032.intl.string(Chunk388032.t.mD1oGB)} />}</Chunk481060.Kqy>}</Chunk481060.hjN>}{<Chunk481060.Rny><div className={Chunk181517.previewContainer} aria-hidden={true}>{<Chunk893729.Z guildId={exports} role={x} className={Chunk181517.messageContainer} theme={"light"} />}{<Chunk893729.Z guildId={exports} role={x} className={Chunk181517.messageContainer} theme={"dark"} />}</div></Chunk481060.Rny>}</Chunk481060.Kqy></Chunk783454.Z>
}