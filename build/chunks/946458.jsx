/** Chunk was on 86915 **/
/** chunk id: 946458, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk939790 = require("./939790.js");

function c(e) {
  let {
    reactionEmoji: t
  } = e, n = (0, l.e7)([a.ZP], () => (null == t ? true : t.emojiId) != null ? a.ZP.getUsableCustomEmojiById(t.emojiId) : null);
  return <div className={o.container}>{<div className={o.body}>{<div className={o.placeholderLines}>{<d width={"100%"} marginBottom={8} />}{<d width={"80%"} marginBottom={16} />}{<d width={"50%"} marginBottom={8} />}{<d width={"60%"} marginBottom={16} />}</div>}{<div className={o.placeholderMedia} />}</div>}{<div className={o.footer}>{<div className={o.reaction}>{null != t ? <s.Z className={o.reactionEmote} emojiId={t.emojiId} emojiName={t.emojiName} animated={!!(null == n ? true : n.animated)} /> : <r.EO4 size={"sm"} color={"currentColor"} className={o.reactionEmote} />}{<r.Text variant={"text-sm/semibold"} color={"interactive-normal"}>{17}</r.Text>}</div>}{<d width={"24px"} marginBottom={0} />}{<div className={o.dot} />}{<d width={"24px"} marginBottom={0} />}</div>}</div>
}

function d(e) {
  let {
    width: t,
    marginBottom: n
  } = e;
  return <div className={o.placeholderLine} style={{
      width: t,
      marginBottom: n
    }} />
}