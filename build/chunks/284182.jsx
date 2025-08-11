/** Chunk was on 71879 **/
/** chunk id: 284182, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk859235 = require("./859235.js"),
  Chunk898463 = require("./898463.js"),
  Chunk76451 = require("./76451.jsx"),
  Chunk117530 = require("./117530.js"),
  Chunk388032 = require("./388032.js"),
  Chunk805313 = require("./805313.js");

function h(e) {
  let {
    parentChannel: t
  } = e, n = (0, i.Wu)([d.Z], () => {
    let e = d.Z.getUploads(t.id, l.Ie.CREATE_FORUM_POST.drafts.type);
    return null == e ? true : e.filter(e => true !== e.isThumbnail)
  });
  return <div className={m.container}>{<a.Text variant={"text-md/semibold"} color={"text-muted"}>{u.intl.string(u.t.omKGKi)}</a.Text>}{<a.Text variant={"text-sm/normal"} color={"text-muted"}>{u.intl.string(u.t.zUjLl5)}</a.Text>}{<div><a.zJl className={m.uploadsContainer} orientation={"horizontal"} paddingFix={false} fade={true}><div className={m.uploads}>{n.map(e => <o.Z channelId={t.id} draftType={l.Ie.CREATE_FORUM_POST.drafts.type} upload={e} keyboardModeEnabled={true} hideFileName={true} size={s.q.SMALL} />)}{<c._ channelId={t.id} />}</div></a.zJl></div>}</div>
}