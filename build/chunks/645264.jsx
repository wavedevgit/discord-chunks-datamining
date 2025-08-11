/** Chunk was on 77025 **/
/** chunk id: 645264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk215569 = require("./215569.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk257465 = require("./257465.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.js"),
  Chunk313201 = require("./313201.js"),
  Chunk944163 = require("./944163.js"),
  Chunk266395 = require("./266395.js"),
  Chunk187565 = require("./187565.js"),
  Chunk200305 = require("./200305.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk916199 = require("./916199.js");
let v = () => <Chunk852860.Z submitting={false} message={Chunk388032.intl.string(Chunk388032.t["8g514e"])} onReset={() => {
      (0, Chunk266395.PE)(false)
    }} onResetText={Chunk388032.intl.string(Chunk388032.t["ETE/oK"])} onSave={() => {
      (0, Chunk266395.PE)(false), (0, Chunk481060.Mr3)(Chunk592286.Pn)
    }} onSaveText={Chunk388032.intl.string(Chunk388032.t["Xt+UaW"])} onSaveButtonColor={Chunk755721.Tt.RED} />,
  j = e => {
    let {
      transitionState: t,
      guildId: n,
      onClose: o,
      onComplete: u,
      inviteKey: p,
      isPreview: g = false
    } = e, j = (0, f.rb)(e => e.shouldShowWarning), {
      verificationForm: C,
      hasFetched: _
    } = (0, h.ng)(n, g, p), O = (0, d.Dt)();
    return (i.useEffect(() => {
      _ && C === m.t && o()
    }, [_, o, C]), C === m.t) ? null : <r.Fragment>{<a.I transitionState={t} aria-labelledby={O} size={"xl"} onClose={o}>{<div className={b.closeButton}><s.P onClick={() => o(false)} /></div>}{<div className={b.container}><x.Z verificationForm={C} headerId={O} guildId={n} onClose={o} onComplete={u} isPreview={g} /></div>}</a.I>}{<l.W>{true === j && (0, r.jsx)(c.oXn, {
          className: b.notice,
          children: (0, r.jsx)(v, {})
        })}</l.W>}</r.Fragment>
  }