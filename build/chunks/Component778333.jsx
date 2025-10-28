/** Chunk was on web.js **/
/** chunk id: 778333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk493683 = require("./493683.js"),
  Chunk447543 = require("./447543.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105341 = require("./105341.js");

function b(e) {
  var t;
  let {
    invite: n,
    message: b,
    getAcceptInviteContext: y
  } = e, O = (0, a.e7)([f.default], () => f.default.getId()), v = (null == (t = n.inviter) ? true : t.id) === O, I = n.state === m.r2o.ACCEPTING, {
    analyticsLocations: T
  } = (0, c.ZP)(l.Z.INVITE_EMBED), S = (0, a.e7)([p.Z], () => {
    var e;
    return null != n.inviter && p.Z.isFriend(null == (e = n.inviter) ? true : e.id)
  }), A = i.useCallback(() => {
    let e = "noop";
    null != n.inviter && null != _.Z.getDMFromUserId(n.inviter.id) && (e = "transition", o.Z.openPrivateChannel({
      recipientIds: [n.inviter.id]
    })), (0, s.r$)({
      invite: n,
      action: e,
      inviter_id: b.author.id,
      invite_message_id: b.id
    }, T)
  }, [n, b, T]), C = i.useCallback(() => {
    (0, s.r$)({
      invite: n,
      action: "accept",
      inviter_id: b.author.id,
      invite_message_id: b.id
    }, T);
    let e = y("Invite Button Embed");
    s.ZP.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n, b, T, y]);
  if (null == n.inviter) return null;
  let N = S ? A : C,
    R = g.intl.string(g.t.ib7Ng1),
    P = u.Z.Button.Colors.GREEN;
  S ? (R = g.intl.string(g.t.xhxnPn), P = u.Z.Button.Colors.PRIMARY) : v && (R = g.intl.string(g.t.ib7Ng1), P = u.Z.Button.Colors.PRIMARY);
  let w = v ? g.intl.string(g.t.eQyu1F) : g.intl.string(g.t.PYJHW6),
    D = null != n.inviter ? "".concat(n.inviter.username) : "",
    L = null != n.inviter ? h.ZP.getUserTag(n.inviter) : "";
  return (0, r.jsxs)(u.Z, {
    children: [(0, r.jsx)(u.Z.Header, {
      text: w
    }), (0, r.jsxs)(u.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: E.headerLine,
        children: [(0, r.jsx)(u.Z.Icon, {
          user: new d.Z(n.inviter),
          onClick: S ? N : true
        }), (0, r.jsx)(u.Z.Info, {
          title: D,
          onClick: S ? N : true,
          children: L
        })]
      }), (0, r.jsx)(u.Z.Button, {
        onClick: N,
        submitting: I,
        isDisabled: v,
        color: P,
        children: R
      })]
    })]
  })
}