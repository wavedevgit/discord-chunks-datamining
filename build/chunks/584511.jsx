/** Chunk was on web.js **/
/** chunk id: 584511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.js"),
  Chunk131951 = require("./131951.js"),
  Chunk138821 = require("./138821.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
var _ = function(e) {
  return e[e.OUTGOING = 0] = "OUTGOING", e[e.INCOMING = 1] = "INCOMING", e
}(_ || {});

function p(e) {
  let {
    userId: t,
    size: n,
    speaking: i = false,
    muted: d = false,
    deafen: _ = false,
    src: p,
    disabled: h = false,
    ringing: m,
    ringingType: g = 0,
    avatarClassName: E,
    renderIcon: b,
    style: y,
    onClick: O,
    onContextMenu: v,
    className: I
  } = e, T = (0, a.e7)([c.Z], () => null != t && c.Z.isLocalMute(t)), S = () => {
    let e = T ? s.v0G : _ ? s.wE8 : s.nRN;
    return d || _ || T ? <div className={u.statusContainer}><e className={u.status} color={s.TVs.colors.WHITE.css} /></div> : null
  }, A = () => <div className={o()(u.border, {
      [u.speaking]: i
    })} />, N = () => d && i ? <r.Fragment>{A()}{S()}</r.Fragment> : d || _ || T ? <r.Fragment>{S()}</r.Fragment> : <r.Fragment>{A()}</r.Fragment>, C = () => {
    let e = (0, s.pxk)(n),
      t = <img src={p} alt={" "} className={o()(u.voiceAvatar, E, {
          [u.ringingOutgoing]: m && 0 === g
        })} />;
    if (h) return t;
    let i = l.QS.AVATAR_DEFAULT;
    return null != b ? i = n === s.EFr.SIZE_32 ? l.QS.AVATAR_CALL_ICON_32 : l.QS.AVATAR_CALL_ICON : (d || _ || T) && (i = l.QS.AVATAR_VOICE_CALL_80), <div className={u.callAvatarMaskContainer}>{<l.ZP className={u.callAvatarMask} width={e} height={e} mask={i}>{null == b ? true : b()}{t}</l.ZP>}{N()}</div>
  }, R = o()(u.wrapper, {
    [u.clickable]: null != O,
    [u.ringingOutgoing]: m && 0 === g,
    [u.ringingIncoming]: m && 1 === g
  }, I), P = (0, s.pxk)(n), w = f({
    height: P,
    width: P
  }, y);
  return <div style={w} onContextMenu={v} className={R}>{C()}</div>
}
p.RingingType = _;
let h = p