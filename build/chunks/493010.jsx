/** Chunk was on web.js **/
/** chunk id: 493010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk561472 = require("./561472.js"),
  Chunk287746 = require("./287746.jsx"),
  Chunk325708 = require("./325708.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk266454 = require("./266454.js"),
  Chunk665149 = require("./665149.js"),
  Chunk703558 = require("./703558.js"),
  Chunk585483 = require("./585483.js"),
  Chunk909820 = require("./909820.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk591837 = require("./591837.js");
let O = function(e) {
  let {
    channel: t,
    guild: n,
    maxWidth: O
  } = e;
  i.useEffect(() => {
    (0, f.Q3)(o.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
      dismissAction: E.L.AUTO
    })
  }, []);
  let v = i.useCallback(() => {
      s.Z.updateChatOpen(t.id, false), h.S.safeDispatch(g.CkL.FOCUS_CHAT_BUTTON)
    }, [t.id]),
    I = <_.ZP.Icon icon={a.Dio} tooltip={b.intl.string(b.t.cpT0Cg)} onClick={v} />;
  return <u.Z sidebarType={u.y.CallChatSidebar} maxWidth={O} floatingLayer={m.ZP}>{<l.Z channel={t} draftType={p.d.ChannelMessage} />}{<_.ZP toolbar={I} aria-label={b.intl.string(b.t.BIYAqa)}>{<_.ZP.ChannelIcon icon={a.kBi} aria-label={b.intl.string(b.t.Kx5kCA)} />}{<_.ZP.Title>{t.name}</_.ZP.Title>}</_.ZP>}{<div className={y.chat}><c.Z channel={t} guild={n} chatInputType={d.Ie.SIDEBAR} /></div>}</u.Z>
}