/** Chunk was on 91173 **/
/** chunk id: 949981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk447543 = require("./447543.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105341 = require("./105341.js");

function C(e) {
  let t, {
      invite: n,
      message: l,
      currentUserId: C,
      onTransitionToInviteChannel: v,
      onAcceptInstantInvite: O
    } = e,
    y = C === l.author.id,
    x = n.state === h.r2o.ACCEPTING,
    j = (0, o.e7)([m.Z], () => null != n.channel ? m.Z.getChannel(n.channel.id) : null, [n]);
  a()(null == j || j.isPrivate(), "must be a private channel");
  let {
    analyticsLocations: I
  } = (0, u.ZP)(c.Z.INVITE_EMBED), S = null != j, T = i.useCallback(() => {
    let e = "noop";
    S ? (v(), e = "transition") : (O(), e = "accept"), (0, s.r$)({
      invite: n,
      action: e,
      inviter_id: l.author.id,
      invite_message_id: l.id
    }, I)
  }, [n, l, I, S, v, O]);
  if (null == j) {
    if (null == n.channel) return (0, r.jsx)(g.Z, {});
    j = (0, p.jD)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
  } else {
    t = j.recipients.reduce((e, t) => {
      let n = f.default.getUser(t);
      return null != n && e.push(n), e
    }, []);
    let e = f.default.getCurrentUser();
    S && null != e && t.push(e)
  }
  let P = j.name;
  (null == P || "" === P) && (P = t.length > 0 ? t.filter(_.lm).map(e => e.username).join(", ") : b.intl.string(b.t.LJpTRE));
  let N = b.intl.string(b.t.XpeFYm),
    A = d.Z.Button.Colors.GREEN;
  S && (N = b.intl.string(b.t.cEnaW1), A = d.Z.Button.Colors.PRIMARY);
  let w = b.intl.string(b.t["3p3/BA"]);
  return y && (w = b.intl.string(b.t.qmtuXF)), (0, r.jsxs)(d.Z, {
    children: [(0, r.jsx)(d.Z.Header, {
      text: w
    }), (0, r.jsxs)(d.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: E.headerLine,
        children: [(0, r.jsx)(d.Z.Icon, {
          channel: j,
          onClick: S ? T : true
        }), (0, r.jsx)(d.Z.Info, {
          title: P,
          onClick: S ? T : true,
          children: (0, r.jsx)(d.Z.Data, {
            members: t.length
          })
        })]
      }), (0, r.jsx)(d.Z.Button, {
        onClick: T,
        submitting: x,
        isDisabled: S,
        color: A,
        children: N
      })]
    })]
  })
}