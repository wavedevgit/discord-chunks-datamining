/** Chunk was on 22988 **/
/** chunk id: 229190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js"),
  Chunk404922 = require("./404922.js");

function o(e) {
  let {
    showSecondaryColor: t,
    palette: n,
    onPrimaryColorChange: o,
    onSecondaryColorChange: c
  } = e, d = i.useRef(null);
  return (0, l.Tbt)(d), <div className={s.popoutContainer}>{<l.Text variant={"text-xs/semibold"} color={"header-secondary"} className={s.customColorsHeader}>{a.intl.string(a.t.JhNpg4)}</l.Text>}{<div ref={d} className={s.colorPickersContainer}>{<div className={s.colorColumn}>{<div className={s.colorSwatch} style={{
            backgroundColor: n.primary
          }} />}{<l.Text variant={"text-xs/medium"} color={"text-default"}>{a.intl.string(a.t.C3KTQk)}</l.Text>}{<l.Z$W className={s.colorPicker} value={n.primary} eagerUpdate={true} wrapperComponentType={"div"} showEyeDropper={true} onChange={o} />}</div>}{t && <div className={s.colorColumn}>{<div className={s.colorSwatch} style={{
            backgroundColor: n.secondary
          }} />}{<l.Text variant={"text-xs/medium"} color={"text-default"}>{a.intl.string(a.t["8elvy8"])}</l.Text>}{<l.Z$W className={s.colorPicker} value={n.secondary} eagerUpdate={true} wrapperComponentType={"div"} showEyeDropper={true} onChange={c} />}</div>}</div>}</div>
}

function c(e) {
  let {
    shouldShow: t,
    showSecondaryColor: n,
    onRequestClose: i,
    children: a,
    palette: s,
    onPrimaryColorChange: c,
    onSecondaryColorChange: d,
    popoutTargetRef: u
  } = e;
  return <l.yRy targetElementRef={u} renderPopout={() => (0, r.jsx)(o, {
      showSecondaryColor: n,
      palette: s,
      onPrimaryColorChange: c,
      onSecondaryColorChange: d
    })} position={"top"} shouldShow={t} onRequestClose={i} animation={l.yRy.Animation.TRANSLATE} animationPosition={"right"}>{a}</l.yRy>
}