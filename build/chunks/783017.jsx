/** Chunk was on 84992 **/
/** chunk id: 783017, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk526167 = require("./526167.js"),
  Chunk741245 = require("./741245.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk361488 = require("./361488.js"),
  Chunk667325 = require("./667325.js"),
  Chunk552039 = require("./552039.js");
let Z = t => {
    switch (t) {
      case H.Yk.PREMIUM_UPDATED:
        return o.intl.string(o.t["75Wt0N"]);
      case H.Yk.PREMIUM_ACTIVATED:
        return o.intl.string(o.t.QWljxM);
      default:
        return o.intl.string(o.t.X79Az8)
    }
  },
  g = t => {
    let {
      type: e,
      text: n,
      buttonText: s,
      hideClose: H,
      onClose: o
    } = t, g = (0, a.e7)([u.default], () => {
      let t = u.default.getCurrentUser();
      return l()(null != t, "UserSettingsProfileCustomization: user cannot be undefined"), t
    }), x = (0, L.rO)() ? h.Z : m.Z, f = Z(e);
    return <div className={M.container}>{<C.X6q className={M.header} variant={"display-md"} color={"header-primary"}>{f}</C.X6q>}{<div className={M.nameplatePreviewContainer}>{<d.Z playsInline={true} muted={true} autoPlay={true} loop={true} className={M.nameplateGlow}><source src={x} /></d.Z>}{<c.Z user={g} isHighlighted={true} nameplate={null} nameplateData={g.nameplate} className={M.nameplatePreview} nameplatePreviewSize={"large"} />}</div>}{<div className={M.textContainer}>{n}</div>}{!H && <div className={M.footer}><r.z variant={"expressive"} fullWidth={true} text={s} onClick={o} /></div>}</div>
  }