/** Chunk was on web.js **/
/** chunk id: 269203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.js"),
  Chunk246364 = require("./246364.js"),
  Chunk602606 = require("./602606.js"),
  Chunk705563 = require("./705563.js"),
  Chunk594174 = require("./594174.js"),
  Chunk967128 = require("./967128.js"),
  Chunk388032 = require("./388032.js"),
  Chunk156292 = require("./156292.js");

function p(e) {
  var t;
  let {
    joinRequest: n,
    guild: l
  } = e, c = (0, i.e7)([u.default], () => u.default.getUser(n.userId));
  return <div className={_.summaryContainer}>{<div className={_.summaryHeader}>{null != l && <div className={_.summaryHeaderClanInfo}>{<a.Z guild={l} active={true} size={a.Z.Sizes.SMOL} className={_.guildIcon} />}{<o.X6q variant={"heading-sm/semibold"} color={"header-primary"}>{l.name}</o.X6q>}</div>}{null != c && <o.X6q variant={"heading-xl/semibold"} color={"header-primary"}>{f.intl.format(f.t.jDV3i4, {
          username: c.globalName
        })}</o.X6q>}</div>}{null == (t = n.formResponses) ? true : t.filter(e => e.field_type !== s.QJ.TERMS).map(e => {
      let t = e.field_type === s.QJ.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
      return <r.Fragment>{<hr className={_.summarySeparator} />}{<div className={_.formResponseContainer}>{<o.Text variant={"text-xs/semibold"} color={"text-muted"}>{e.label}</o.Text>}{<o.Text variant={"text-md/medium"} color={"text-primary"}>{t}</o.Text>}</div>}</r.Fragment>
    })}</div>
}

function h(e) {
  let {
    channel: t
  } = e, {
    loading: n,
    joinRequest: i,
    joinRequestGuild: a
  } = (0, l.Z)(t.id);
  return <d.ZP channelId={t.id} className={_.container}>{null != i && null != i.formResponses ? (0, r.jsxs)("div", {
      className: _.formContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(p, {
          guild: a,
          joinRequest: i
        })
      }), (0, r.jsx)(c.Z, {
        channelId: t.id,
        showProfile: true
      })]
    }) : n ? (0, r.jsx)(o.$jN, {}) : null}</d.ZP>
}