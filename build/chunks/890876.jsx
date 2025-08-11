/** Chunk was on web.js **/
/** chunk id: 890876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk892001 = require("./892001.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk955418 = require("./955418.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk200669 = require("./200669.js");

function c(e) {
  let {
    user: t,
    hideMessageInput: n,
    hideViewFullProfileButton: c
  } = e;
  return n ? c ? null : <div className={l.footer}><o.O1 variant={"primary"} text={s.intl.string(s.t["+Xp3ho"])} onClick={() => (0, i.openUserProfileModal)({
        userId: t.id,
        disableActionsForPreview: true
      })} fullWidth={true} /></div> : <div className={l.footer} inert={true}><a.Z user={t} /></div>
}