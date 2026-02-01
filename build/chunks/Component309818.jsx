/** Chunk was on 9753 **/
/** chunk id: 309818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk846293 = require("./846293.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk529200 = require("./529200.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk168428 = require("./168428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk563111 = require("./563111.js");

function v(e) {
  let t, {
      invite: n,
      message: l,
      currentUserId: v,
      onTransitionToInviteChannel: O,
      onAcceptInstantInvite: x
    } = e,
    E = v === l.author.id,
    j = n.state === b.elq.ACCEPTING,
    C = (0, o.bG)([f.A], () => null != n.channel ? f.A.getChannel(n.channel.id) : null, [n]);
  a()(null == C || C.isPrivate(), "must be a private channel");
  let {
    analyticsLocations: I
  } = (0, d.Ay)(u.A.INVITE_EMBED), S = null != C, T = i.useCallback(() => {
    let e = "noop";
    S ? (O(), e = "transition") : (x(), e = "accept"), (0, c.he)({
      invite: n,
      action: e,
      inviter_id: l.author.id,
      invite_message_id: l.id
    }, I)
  }, [n, l, I, S, O, x]);
  if (null == C) {
    if (null == n.channel) return (0, r.jsx)(h.A, {});
    C = (0, m.OY)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
  } else {
    t = C.recipients.reduce((e, t) => {
      let n = g.default.getUser(t);
      return null != n && e.push(n), e
    }, []);
    let e = g.default.getCurrentUser();
    S && null != e && t.push(e)
  }
  let N = C.name;
  (null == N || "" === N) && (N = t.length > 0 ? t.filter(_.Vq).map(e => e.username).join(", ") : y.intl.string(y.t.LJpTRF));
  let P = y.intl.string(y.t.XpeFYr),
    w = "active";
  S && (P = y.intl.string(y.t.cEnaWx), w = "secondary");
  let R = y.intl.string(y.t["3p3/BK"]);
  return E && (R = y.intl.string(y.t.qmtuXE)), (0, r.jsxs)(p.A, {
    children: [(0, r.jsx)(p.A.Header, {
      text: R
    }), (0, r.jsxs)(p.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: A.iH,
        children: [(0, r.jsx)(p.A.Icon, {
          channel: C,
          onClick: S ? T : true
        }), (0, r.jsx)(p.A.Info, {
          title: N,
          onClick: S ? T : true,
          children: (0, r.jsx)(p.A.Data, {
            members: t.length
          })
        })]
      }), (0, r.jsx)(s.$nd, {
        onClick: T,
        loading: j,
        disabled: S,
        variant: w,
        text: P,
        fullWidth: true
      })]
    })]
  })
}