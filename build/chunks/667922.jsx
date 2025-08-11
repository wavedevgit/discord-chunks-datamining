/** Chunk was on web.js **/
/** chunk id: 667922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk543241 = require("./543241.js"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk585483 = require("./585483.js"),
  Chunk176354 = require("./176354.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = 12;

function T(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(a.Sfi), _ = (0, u.$R)(t), b = (0, o.e7)([f.Z], () => (t.isPrivate() || f.Z.can(m.Plq.ADD_REACTIONS, t)) && _, [t, _]), O = (0, s.MZ)(t.getGuildId());
  if (!d.nc.getSetting() || !b) return null;
  let T = O.filter(e => !h.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: g.Hz.REACTION
  })).slice(0, I).map((i, o) => {
    var s, u;
    return <a.sNh color={"default"} id={null != (u = null != (s = i.id) ? s : i.optionallyDiverseSequence) ? u : i.name} label={":".concat(i.name, ":")} icon={e => (0, r.jsx)(S, v(y({}, e), {
        reducedMotionEnabled: n.enabled,
        emoji: i
      }))} action={() => {
        (0, l.rU)(t.id, e.id, (0, c.g1)(i), l.TW.MESSAGE_CONTEXT_MENU)
      }} dontCloseOnActionIfHoldingShiftKey={true} />
  });
  return <a.sNh id={"add-reaction"} label={E.intl.string(E.t.lfIHs7)} action={() => {
      p.S.dispatchKeyed(m.LPv.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: true
      })
    }} color={"default"}><r.Fragment>{T}{<a.Clw />}{<a.sNh color={"default"} id={"other-reactions"} label={E.intl.string(E.t["OBCR+v"])} icon={a.EO4} action={() => {
          p.S.dispatchKeyed(m.LPv.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: true
          })
        }} />}</r.Fragment></a.sNh>
}

function S(e) {
  var t;
  let {
    emoji: n,
    reducedMotionEnabled: i,
    className: o = "",
    isFocused: a = false
  } = e;
  return <img className={o} src={null != n.id ? _.ZP.getEmojiURL({
      id: n.id,
      animated: n.animated && (!i || a),
      size: 18
    }) : h.ZP.getURL(null != (t = n.optionallyDiverseSequence) ? t : "")} alt={""} />
}