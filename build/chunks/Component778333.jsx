/** Chunk was on 91173 **/
/** chunk id: 778333, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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

function E(e) {
  var t;
  let {
    invite: n,
    message: E,
    getAcceptInviteContext: C
  } = e, v = (0, l.e7)([p.default], () => p.default.getId()), O = (null == (t = n.inviter) ? true : t.id) === v, y = n.state === _.r2o.ACCEPTING, {
    analyticsLocations: x
  } = (0, c.ZP)(s.Z.INVITE_EMBED), j = (0, l.e7)([f.Z], () => {
    var e;
    return null != n.inviter && f.Z.isFriend(null == (e = n.inviter) ? true : e.id)
  }), I = i.useCallback(() => {
    let e = "noop";
    null != n.inviter && null != m.Z.getDMFromUserId(n.inviter.id) && (e = "transition", a.Z.openPrivateChannel({
      recipientIds: [n.inviter.id]
    })), (0, o.r$)({
      invite: n,
      action: e,
      inviter_id: E.author.id,
      invite_message_id: E.id
    }, x)
  }, [n, E, x]), S = i.useCallback(() => {
    (0, o.r$)({
      invite: n,
      action: "accept",
      inviter_id: E.author.id,
      invite_message_id: E.id
    }, x);
    let e = C("Invite Button Embed");
    o.ZP.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n, E, x, C]);
  if (null == n.inviter) return null;
  let T = j ? I : S,
    P = h.intl.string(h.t.ib7Ng4),
    N = u.Z.Button.Colors.GREEN;
  j ? (P = h.intl.string(h.t.xhxnPj), N = u.Z.Button.Colors.PRIMARY) : O && (P = h.intl.string(h.t.ib7Ng4), N = u.Z.Button.Colors.PRIMARY);
  let A = O ? h.intl.string(h.t.eQyu1N) : h.intl.string(h.t.PYJHW1),
    w = null != n.inviter ? "".concat(n.inviter.username) : "",
    Z = null != n.inviter ? g.ZP.getUserTag(n.inviter) : "";
  return (0, r.jsxs)(u.Z, {
    children: [(0, r.jsx)(u.Z.Header, {
      text: A
    }), (0, r.jsxs)(u.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: b.headerLine,
        children: [(0, r.jsx)(u.Z.Icon, {
          user: new d.Z(n.inviter),
          onClick: j ? T : true
        }), (0, r.jsx)(u.Z.Info, {
          title: w,
          onClick: j ? T : true,
          children: Z
        })]
      }), (0, r.jsx)(u.Z.Button, {
        onClick: T,
        submitting: y,
        isDisabled: O,
        color: N,
        children: P
      })]
    })]
  })
}