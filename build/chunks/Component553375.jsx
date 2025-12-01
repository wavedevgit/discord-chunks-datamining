/** Chunk was on web.js **/
/** chunk id: 553375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => E,
  nK: () => h,
  uj: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk833664 = require("./833664.js"),
  Chunk26033 = require("./26033.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk858042 = require("./858042.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    user: t,
    activity: n,
    entry: r
  } = e;
  return null != r ? {
    applicationId: (0, o.dX)(r) ? r.extra.application_id : true,
    sourceUserId: r.author_id
  } : null != n ? {
    applicationId: n.type === u.IIU.PLAYING && null != n.application_id ? n.application_id : true,
    sourceUserId: t.id
  } : {
    applicationId: true,
    sourceUserId: true
  }
}

function g(e) {
  let {
    user: t,
    activity: s,
    entry: l
  } = e, {
    applicationId: u
  } = h({
    activity: s,
    entry: l,
    user: t
  }), f = (0, c.M)(u), _ = null != s && (0, a.Z)(s), g = null != l && (0, o.dX)(l);
  if (_ || g) {
    let e = () => (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("82077"), n.e("87087")]).then(n.bind(n, 953848));
      if (null != s) return t => (0, r.jsx)(e, m(p({}, t), {
        detectedActivity: s,
        onSubmitted: () => {}
      }));
      if (null != l && (0, o.dX)(l)) {
        let t = {
          name: l.extra.game_name,
          application_id: l.extra.application_id
        };
        return n => (0, r.jsx)(e, m(p({}, n), {
          detectedActivity: t,
          onSubmitted: () => {}
        }))
      }
      return t => (0, r.jsx)(e, m(p({}, t), {
        onSubmitted: () => {}
      }))
    });
    return (0, r.jsx)(i.sNh, {
      id: "game-detection-report-issue",
      label: d.intl.string(d.t.qP2cXd),
      action: e
    })
  }
  return f
}

function E(e) {
  let {
    user: t,
    activity: n,
    entry: a,
    onAction: o,
    isMenuOpen: c,
    appContext: u
  } = e, {
    applicationId: f,
    sourceUserId: p
  } = h({
    activity: n,
    entry: a,
    user: t
  }), _ = (0, l.Z)({
    location: "UserProfileActivityContextMenu",
    source: s.m1.UserProfileCardContextMenu,
    trackEntryPointImpression: c,
    applicationId: f,
    sourceUserId: p,
    appContext: u
  });
  return null == _ ? null : (0, r.jsx)(i.sNh, {
    id: "game-profile",
    label: d.intl.string(d.t.ajHoOr),
    action: e => {
      null == o || o({
        action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM"
      }), _(e)
    }
  })
}