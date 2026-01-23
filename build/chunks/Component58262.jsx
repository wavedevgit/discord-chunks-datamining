/** Chunk was on web.js **/
/** chunk id: 58262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk308528 = require("./308528.js"),
  Chunk846293 = require("./846293.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk529200 = require("./529200.jsx"),
  Chunk427157 = require("./427157.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk563111 = require("./563111.js");

function b(e) {
  var t;
  let {
    invite: n,
    message: b,
    getAcceptInviteContext: O
  } = e, v = (0, s.bG)([p.default], () => p.default.getId()), A = (null == (t = n.inviter) ? true : t.id) === v, I = n.state === g.elq.ACCEPTING, {
    analyticsLocations: S
  } = (0, u.Ay)(c.A.INVITE_EMBED), T = (0, s.bG)([h.A], () => {
    var e;
    return null != n.inviter && h.A.isFriend(null == (e = n.inviter) ? true : e.id)
  }), C = i.useCallback(() => {
    let e = "noop";
    null != n.inviter && null != _.A.getDMFromUserId(n.inviter.id) && (e = "transition", o.A.openPrivateChannel({
      recipientIds: [n.inviter.id]
    })), (0, l.he)({
      invite: n,
      action: e,
      inviter_id: b.author.id,
      invite_message_id: b.id
    }, S)
  }, [n, b, S]), N = i.useCallback(() => {
    (0, l.he)({
      invite: n,
      action: "accept",
      inviter_id: b.author.id,
      invite_message_id: b.id
    }, S);
    let e = O("Invite Button Embed");
    l.Ay.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n, b, S, O]);
  if (null == n.inviter) return null;
  let w = T ? C : N,
    R = E.intl.string(E.t.ib7Ng1),
    P = "active";
  T ? (R = E.intl.string(E.t.xhxnPn), P = "secondary") : A && (R = E.intl.string(E.t.ib7Ng1), P = "secondary");
  let D = A ? E.intl.string(E.t.eQyu1F) : E.intl.string(E.t.PYJHW6),
    x = null != n.inviter ? "".concat(n.inviter.username) : "",
    L = null != n.inviter ? m.Ay.getUserTag(n.inviter) : "";
  return (0, r.jsxs)(d.A, {
    children: [(0, r.jsx)(d.A.Header, {
      text: D
    }), (0, r.jsxs)(d.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: y.iH,
        children: [(0, r.jsx)(d.A.Icon, {
          user: new f.A(n.inviter),
          onClick: T ? w : true
        }), (0, r.jsx)(d.A.Info, {
          title: x,
          onClick: T ? w : true,
          children: L
        })]
      }), (0, r.jsx)(a.$nd, {
        onClick: w,
        text: R,
        loading: I,
        disabled: A,
        variant: P
      })]
    })]
  })
}