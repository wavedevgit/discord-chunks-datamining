/** Chunk was on web.js **/
/** chunk id: 798476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N3: () => y,
  Z7: () => E,
  ZP: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk813197 = require("./813197.js"),
  Chunk305347 = require("./305347.jsx"),
  Chunk328656 = require("./328656.jsx"),
  Chunk708321 = require("./708321.jsx"),
  Chunk174161 = require("./174161.jsx"),
  Chunk220250 = require("./220250.js"),
  Chunk486324 = require("./486324.js"),
  Chunk541195 = require("./541195.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  let {
    profile: t,
    className: n
  } = e, i = (0, _.TK)(t);
  return null != i ? <div className={o()(n, h.banner)} style={{
      background: i
    }} /> : <b profile={t} className={n} />
}

function b(e) {
  var t;
  let {
    profile: n,
    className: i
  } = e, a = (0, _.nv)(), s = (0, _.qw)({
    profile: n,
    defaultColor: a.hex(),
    forceDefaultColor: null != n.brandColorPrimary
  }), l = null != (t = n.brandColorPrimary) ? t : s;
  return <div className={o()(i, h.banner)} style={{
      background: (0, _.dG)(l)
    }} />
}

function y(e) {
  let {
    profile: t,
    onIconChange: i
  } = e;
  if (null == i) return <div className={h.avatarContainer}><s.ZP mask={s.QS.CLAN_ICON} width={70} height={70}><div className={h.avatarWrapper}><c.Ft guildId={t.id} guildName={t.name} guildIcon={t.icon} iconSize={64} /></div></s.ZP></div>;

  function u(e, t) {
    null != i && (0, a.ZDy)(async () => {
      let {
        default: o
      } = await Promise.all([n.e("91689"), n.e("59732"), n.e("48389")]).then(n.bind(n, 712451));
      return n => <o{...g({
        uploadType: p.pC.GUILD_ICON,
        imageUri: e,
        file: t,
        onCrop: e => {
          let {
            imageUri: t
          } = e;
          return i(t)
        }
      }, n)} />
    }, {})
  }
  return <div className={h.avatarContainer}><a.tEY within={true}><s.ZP mask={s.QS.CLAN_ICON} width={70} height={70}><div className={o()(h.avatarWrapper, h.clickable)}>{<c.Ft guildId={t.id} guildName={t.name} guildIcon={t.icon} iconSize={64} />}{<div className={h.overlay} />}{<a.vdY size={"custom"} className={h.overlayIcon} width={20} height={20} color={"white"} />}{<l.ZP tabIndex={0} onChange={u} />}</div></s.ZP></a.tEY></div>
}

function O(e) {
  let {
    profile: t,
    onIconChange: n,
    className: i,
    disableCTA: a,
    CTAOverride: s,
    onClose: l,
    disableGuildNameClick: c
  } = e, _ = null;
  return null != s ? _ = s : a || (_ = <d.Z profile={t} onComplete={l} />), <div className={o()(h.container, i)}>{<E profile={t} />}{<y onIconChange={n} profile={t} />}{<f.Z profile={t} disableGuildNameClick={c} />}{<u.E profile={t} />}{null != _ && <div className={h.buttonContainer}>{_}</div>}</div>
}