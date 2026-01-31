/** Chunk was on 64935 **/
/** chunk id: 58262, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  var t;
  let {
    invite: n,
    message: A,
    getAcceptInviteContext: v
  } = e, O = (0, a.bG)([m.default], () => m.default.getId()), x = (null == (t = n.inviter) ? true : t.id) === O, E = n.state === h.elq.ACCEPTING, {
    analyticsLocations: j
  } = (0, u.Ay)(c.A.INVITE_EMBED), C = (0, a.bG)([g.A], () => {
    var e;
    return null != n.inviter && g.A.isFriend(null == (e = n.inviter) ? true : e.id)
  }), I = i.useCallback(() => {
    let e = "noop";
    null != n.inviter && null != f.A.getDMFromUserId(n.inviter.id) && (e = "transition", s.A.openPrivateChannel({
      recipientIds: [n.inviter.id]
    })), (0, o.he)({
      invite: n,
      action: e,
      inviter_id: A.author.id,
      invite_message_id: A.id
    }, j)
  }, [n, A, j]), S = i.useCallback(() => {
    (0, o.he)({
      invite: n,
      action: "accept",
      inviter_id: A.author.id,
      invite_message_id: A.id
    }, j);
    let e = v("Invite Button Embed");
    o.Ay.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n, A, j, v]);
  if (null == n.inviter) return null;
  let T = C ? I : S,
    N = b.intl.string(b.t.ib7Ng1),
    P = "active";
  C ? (N = b.intl.string(b.t.xhxnPn), P = "secondary") : x && (N = b.intl.string(b.t.ib7Ng1), P = "secondary");
  let w = x ? b.intl.string(b.t.eQyu1F) : b.intl.string(b.t.PYJHW6),
    R = null != n.inviter ? "".concat(n.inviter.username) : "",
    D = null != n.inviter ? _.Ay.getUserTag(n.inviter) : "";
  return (0, r.jsxs)(d.A, {
    children: [(0, r.jsx)(d.A.Header, {
      text: w
    }), (0, r.jsxs)(d.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: y.iH,
        children: [(0, r.jsx)(d.A.Icon, {
          user: new p.A(n.inviter),
          onClick: C ? T : true
        }), (0, r.jsx)(d.A.Info, {
          title: R,
          onClick: C ? T : true,
          children: D
        })]
      }), (0, r.jsx)(l.$nd, {
        onClick: T,
        text: N,
        loading: E,
        disabled: x,
        variant: P
      })]
    })]
  })
}