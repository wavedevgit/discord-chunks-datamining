/** Chunk was on web.js **/
"use strict";
n.d(t, {
  o_: () => _,
  sO: () => f,
  xo: () => d
}), n(47120), n(266796);
var r = n(345074),
  i = n(339085),
  o = n(633302),
  a = n(823379);

function s(e) {
  let {
    guildId: t,
    emojiId: n,
    emojiName: r
  } = e, a = i.De.get(t);
  return null == n && null == r ? null : null != n ? null != a ? a.getById(n) : null : null != r ? o.ZP.getByName(r) : null
}
let l = {
  label: ""
};

function c(e, t) {
  let n = Array(r.Sn).fill(l);
  for (let o of t) {
    var i;
    !(o.position < 0) && !(o.position >= r.Sn) && (n[o.position] = {
      label: o.label,
      emoji: null !== (i = s({
        guildId: e,
        emojiId: o.emoji_id,
        emojiName: o.emoji_name
      })) && void 0 !== i ? i : void 0
    })
  }
  return n
}

function u(e) {
  return null == e ? {} : Object.entries(e).reduce((e, t) => {
    let [n, r] = t;
    return e[n.toString()] = {
      level: r.activity_level,
      score: r.activity_score
    }, e
  }, {})
}

function d(e) {
  var t, n, r, i, o;
  return {
    id: e.id,
    name: e.name,
    description: null !== (t = e.description) && void 0 !== t ? t : "",
    icon: e.icon_hash,
    customBanner: e.custom_banner_hash,
    onlineCount: e.online_count,
    memberCount: e.member_count,
    brandColorPrimary: null !== (n = e.brand_color_primary) && void 0 !== n ? n : null,
    visibility: e.visibility,
    traits: c(e.id, null !== (r = e.traits) && void 0 !== r ? r : []),
    gameApplicationIds: null !== (i = e.game_application_ids) && void 0 !== i ? i : [],
    gameActivity: u(e.game_activity),
    features: null !== (o = e.features) && void 0 !== o ? o : []
  }
}

function f(e) {
  let t = {};
  return null != e.name && (t.name = e.name), null != e.description && (t.description = e.description), void 0 !== e.icon && (t.icon = e.icon), void 0 !== e.customBanner && (t.custom_banner = e.customBanner), null != e.visibility && (t.visibility = e.visibility), void 0 !== e.brandColorPrimary && (t.brand_color_primary = e.brandColorPrimary), null != e.traits && (t.traits = e.traits.map((e, t) => {
    var n, r, i;
    return (null == e ? void 0 : e.label) == null || e.label.length <= 0 ? null : {
      label: e.label,
      position: t,
      emoji_id: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
      emoji_name: null === (r = e.emoji) || void 0 === r ? void 0 : r.name,
      emoji_animated: null === (i = e.emoji) || void 0 === i ? void 0 : i.animated
    }
  }).filter(a.lm)), null != e.gameApplicationIds && (t.game_application_ids = e.gameApplicationIds), t
}

function _(e) {
  return e.reduce((e, t) => (e[t.game_application_id] = {
    level: t.activity_level,
    score: t.activity_score
  }, e), {})
}