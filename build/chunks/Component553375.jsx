/** Chunk was on web.js **/
/** chunk id: 553375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => _,
  nK: () => d,
  uj: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk26033 = require("./26033.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk858042 = require("./858042.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    user: t,
    activity: n,
    entry: r
  } = e;
  return null != r ? {
    applicationId: (0, o.dX)(r) ? r.extra.application_id : true,
    sourceUserId: r.author_id
  } : null != n ? {
    applicationId: n.type === c.IIU.PLAYING && null != n.application_id ? n.application_id : true,
    sourceUserId: t.id
  } : {
    applicationId: true,
    sourceUserId: true
  }
}

function f(e) {
  let {
    user: t,
    activity: n,
    entry: r
  } = e, {
    applicationId: i
  } = d({
    activity: n,
    entry: r,
    user: t
  });
  return (0, l.M)({
    applicationId: i,
    showOutdatedInfoOption: false
  })
}

function _(e) {
  let {
    user: t,
    activity: n,
    entry: o,
    onAction: l,
    isMenuOpen: c,
    appContext: f
  } = e, {
    applicationId: _,
    sourceUserId: p
  } = d({
    activity: n,
    entry: o,
    user: t
  }), h = (0, s.Z)({
    location: "UserProfileActivityContextMenu",
    source: a.m1.UserProfileCardContextMenu,
    trackEntryPointImpression: c,
    applicationId: _,
    sourceUserId: p,
    appContext: f
  });
  return null == h ? null : (0, r.jsx)(i.sNh, {
    id: "game-profile",
    label: u.intl.string(u.t.ajHoOj),
    action: e => {
      null == l || l({
        action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM"
      }), h(e)
    }
  })
}