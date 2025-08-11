/** Chunk was on 31649 **/
/** chunk id: 926563, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk228168 = require("./228168.js"),
  Chunk200051 = require("./200051.js");

function b(t) {
  let {
    user: e,
    previewText: n,
    previewEmoji: b,
    previewStatus: S,
    placeHolderText: g,
    transitionState: j,
    label: O
  } = t, v = (0, i.ZP)(e.id);
  return <c.Z user={e} displayProfile={v} themeType={p.lY.POPOUT} className={h.profilePreviewContainer}>{<header>{<u.Z user={e} displayProfile={v} themeType={p.lY.POPOUT} />}{<div inert={true}><o.Z user={e} displayProfile={v} themeType={p.lY.POPOUT} previewStatus={S} className={h.avatar} /></div>}{<m.Z location={"CustomStatusUserProfilePreview"} user={e} themeType={p.lY.POPOUT} previewText={n} previewEmoji={b} placeholderText={g} hasEntered={j === a.Dvm.ENTERED} previewLabel={O} />}</header>}{(null == v ? true : v.profileEffectId) != null && <r.Z profileEffectId={v.profileEffectId} />}{<div className={h.usernameContainer} inert={true}><d.Z user={e} nickname={f.ZP.getName(null, null, e)} pronouns={null == v ? true : v.pronouns} tags={(0, l.jsx)(s.Z, {
          displayProfile: v,
          themeType: p.lY.POPOUT
        })} /></div>}</c.Z>
}