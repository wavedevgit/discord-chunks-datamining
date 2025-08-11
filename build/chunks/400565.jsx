/** Chunk was on 34779 **/
/** chunk id: 400565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk686546 = require("./686546.js"),
  Chunk598077 = require("./598077.js"),
  Chunk865112 = require("./865112.js"),
  Chunk926487 = require("./926487.js");
let c = e => {
    let {
      mask: t
    } = e;
    return null == t ? null : <div className={a.maskBackground} style={{
        backgroundColor: t.color.css
      }}><img className={a.maskIcon} alt={""} src={t.icon} /></div>
  },
  u = Chunk73800.memo(function(e) {
    let {
      item: t
    } = e, n = null, i = false;
    if (null != t.icon_name) n = <img alt={""} src={s.VH[(0, s.RB)(t.icon_name)]} />;
    else if (null != t.other_user) {
      let e = t.other_user instanceof o.Z ? t.other_user : new o.Z(t.other_user);
      n = <img alt={""} className={a.image} src={e.getAvatarURL(true, 40)} />, i = true
    } else n = null != t.icon_url ? <img alt={""} className={a.image} src={t.icon_url} /> : <img alt={""} src={s.VH[(0, s.q7)(t)]} />;
    let u = (0, s.Vi)(t.type);
    return <div className={a.container}>{<l.ZP mask={null == u ? l.QS.AVATAR_DEFAULT : l.QS.AVATAR_STATUS_ROUND_16} width={40} height={40} rightOverhang={3} bottomOverhang={3} className={a.mask}><div className={a.imageContainer} style={i ? true : {
            backgroundColor: (0, s.Vu)(t)
          }}>{n}</div></l.ZP>}{<c mask={u} />}</div>
  })