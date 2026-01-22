/** Chunk was on web.js **/
/** chunk id: 534465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => E,
  UE: () => m,
  gA: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk672979 = require("./672979.js"),
  Chunk20805 = require("./20805.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk67518 = require("./67518.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    user: t,
    activity: n,
    entry: r
  } = e;
  return null != r ? {
    applicationId: (0, s.zD)(r) ? r.extra.application_id : true,
    sourceUserId: r.author_id
  } : null != n ? {
    applicationId: n.type === u.$pd.PLAYING && null != n.application_id ? n.application_id : true,
    sourceUserId: t.id
  } : {
    applicationId: true,
    sourceUserId: true
  }
}

function g(e) {
  let {
    user: t,
    activity: o,
    entry: l
  } = e, {
    applicationId: u
  } = m({
    activity: o,
    entry: l,
    user: t
  }), f = (0, c.n)(u), _ = null != o && (0, a.A)(o), g = null != l && (0, s.zD)(l);
  if (_ || g) {
    let e = () => (0, i.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("27495"), n.e("79692")]).then(n.bind(n, 651930));
      if (null != o) return t => (0, r.jsx)(e, h(p({}, t), {
        detectedActivity: o,
        onSubmitted: () => {}
      }));
      if (null != l && (0, s.zD)(l)) {
        let t = {
          name: l.extra.game_name,
          application_id: l.extra.application_id
        };
        return n => (0, r.jsx)(e, h(p({}, n), {
          detectedActivity: t,
          onSubmitted: () => {}
        }))
      }
      return t => (0, r.jsx)(e, h(p({}, t), {
        onSubmitted: () => {}
      }))
    });
    return (0, r.jsx)(i.Drp, {
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
    onAction: s,
    isMenuOpen: c,
    appContext: u
  } = e, {
    applicationId: f,
    sourceUserId: p
  } = m({
    activity: n,
    entry: a,
    user: t
  }), _ = (0, l.A)({
    location: "UserProfileActivityContextMenu",
    source: o.Ob.UserProfileCardContextMenu,
    trackEntryPointImpression: c,
    applicationId: f,
    sourceUserId: p,
    appContext: u
  });
  return null == _ ? null : (0, r.jsx)(i.Drp, {
    id: "game-profile",
    label: d.intl.string(d.t.ajHoOr),
    action: e => {
      null == s || s({
        action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM"
      }), _(e)
    }
  })
}