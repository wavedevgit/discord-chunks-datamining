/** Chunk was on web.js **/
/** chunk id: 778333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
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

function y(e) {
  var t;
  let {
    invite: n,
    message: y,
    getAcceptInviteContext: O
  } = e, v = (0, o.e7)([_.default], () => _.default.getId()), I = (null == (t = n.inviter) ? true : t.id) === v, T = n.state === g.r2o.ACCEPTING, {
    analyticsLocations: S
  } = (0, u.ZP)(c.Z.INVITE_EMBED), A = (0, o.e7)([h.Z], () => {
    var e;
    return null != n.inviter && h.Z.isFriend(null == (e = n.inviter) ? true : e.id)
  }), C = i.useCallback(() => {
    let e = "noop";
    null != n.inviter && null != p.Z.getDMFromUserId(n.inviter.id) && (e = "transition", s.Z.openPrivateChannel({
      recipientIds: [n.inviter.id]
    })), (0, l.r$)({
      invite: n,
      action: e,
      inviter_id: y.author.id,
      invite_message_id: y.id
    }, S)
  }, [n, y, S]), N = i.useCallback(() => {
    (0, l.r$)({
      invite: n,
      action: "accept",
      inviter_id: y.author.id,
      invite_message_id: y.id
    }, S);
    let e = O("Invite Button Embed");
    l.ZP.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n, y, S, O]);
  if (null == n.inviter) return null;
  let R = A ? C : N,
    P = E.intl.string(E.t.ib7Ng1),
    w = "active";
  A ? (P = E.intl.string(E.t.xhxnPn), w = "secondary") : I && (P = E.intl.string(E.t.ib7Ng1), w = "secondary");
  let D = I ? E.intl.string(E.t.eQyu1F) : E.intl.string(E.t.PYJHW6),
    L = null != n.inviter ? "".concat(n.inviter.username) : "",
    x = null != n.inviter ? m.ZP.getUserTag(n.inviter) : "";
  return (0, r.jsxs)(d.Z, {
    children: [(0, r.jsx)(d.Z.Header, {
      text: D
    }), (0, r.jsxs)(d.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: b.headerLine,
        children: [(0, r.jsx)(d.Z.Icon, {
          user: new f.Z(n.inviter),
          onClick: A ? R : true
        }), (0, r.jsx)(d.Z.Info, {
          title: L,
          onClick: A ? R : true,
          children: x
        })]
      }), (0, r.jsx)(a.zxk, {
        onClick: R,
        text: P,
        loading: T,
        disabled: I,
        variant: w
      })]
    })]
  })
}