/** Chunk was on web.js **/
/** chunk id: 576799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk616780 = require("./616780.js"),
  Chunk905405 = require("./905405.js"),
  Chunk937889 = require("./937889.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk123145 = require("./123145.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk217702 = require("./217702.js"),
  Chunk848697 = require("./848697.js");

function p(e) {
  let {
    message: t,
    channel: n
  } = e, {
    isBlocked: c,
    isIgnored: f
  } = (0, o.cj)([d.Z], () => ({
    isBlocked: d.Z.isBlockedForMessage(t),
    isIgnored: d.Z.isIgnoredForMessage(t)
  }), [t]), p = (0, s.p)(), m = i.useMemo(() => ({
    [n.guild_id]: [t.author.id]
  }), [n.guild_id, t.author.id]);
  (0, a.$)(m);
  let g = i.useMemo(() => null != t.content && "" !== t.content ? (0, l.ZP)(t, {
    formatInline: true,
    shouldFilterKeywords: p
  }).content : null, [t, p]);
  return <div className={_.threadMessageAccessory}>{<img alt={""} src={t.author.getAvatarURL(n.guild_id, 16)} className={_.threadMessageAccessoryAvatar} />}{<u.Z message={t} channel={n} compact={true} />}{<div className={_.threadMessageAccessoryPreview}>{h(t, g, c, f)}</div>}</div>
}

function h(e, t, n, i) {
  let {
    contentPlaceholder: o,
    renderedContent: a,
    leadingIcon: s,
    trailingIcon: l
  } = (0, c.f)(e, t, n, i, _.threadMessageAccessoryContent, {
    trailingIconClass: _.threadMessageAccessoryContentTrailingIcon,
    leadingIconClass: _.threadMessageAccessoryContentLeadingIcon,
    iconSize: f.WW
  });
  return <r.Fragment>{s}{null != a ? a : <span className={_.threadMessageAccessoryPlaceholder}>{o}</span>}{l}</r.Fragment>
}