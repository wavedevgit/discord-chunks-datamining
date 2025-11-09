/** Chunk was on web.js **/
/** chunk id: 949981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
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
  Chunk739236 = require("./739236.js");

function O(e) {
  let t, {
      invite: n,
      message: a,
      currentUserId: O,
      onTransitionToInviteChannel: v,
      onAcceptInstantInvite: I
    } = e,
    S = O === a.author.id,
    T = n.state === E.r2o.ACCEPTING,
    A = (0, l.e7)([p.Z], () => null != n.channel ? p.Z.getChannel(n.channel.id) : null, [n]);
  o()(null == A || A.isPrivate(), "must be a private channel");
  let {
    analyticsLocations: C
  } = (0, d.ZP)(u.Z.INVITE_EMBED), N = null != A, R = i.useCallback(() => {
    let e = "noop";
    N ? (v(), e = "transition") : (I(), e = "accept"), (0, c.r$)({
      invite: n,
      action: e,
      inviter_id: a.author.id,
      invite_message_id: a.id
    }, C)
  }, [n, a, C, N, v, I]);
  if (null == A) {
    if (null == n.channel) return (0, r.jsx)(g.Z, {});
    A = (0, _.jD)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
  } else {
    t = A.recipients.reduce((e, t) => {
      let n = h.default.getUser(t);
      return null != n && e.push(n), e
    }, []);
    let e = h.default.getCurrentUser();
    N && null != e && t.push(e)
  }
  let P = A.name;
  (null == P || "" === P) && (P = t.length > 0 ? t.filter(m.lm).map(e => e.username).join(", ") : b.intl.string(b.t.LJpTRF));
  let w = b.intl.string(b.t.XpeFYr),
    D = "active";
  N && (w = b.intl.string(b.t.cEnaWx), D = "secondary");
  let x = b.intl.string(b.t["3p3/BK"]);
  return S && (x = b.intl.string(b.t.qmtuXE)), (0, r.jsxs)(f.Z, {
    children: [(0, r.jsx)(f.Z.Header, {
      text: x
    }), (0, r.jsxs)(f.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: y.headerLine,
        children: [(0, r.jsx)(f.Z.Icon, {
          channel: A,
          onClick: N ? R : true
        }), (0, r.jsx)(f.Z.Info, {
          title: P,
          onClick: N ? R : true,
          children: (0, r.jsx)(f.Z.Data, {
            members: t.length
          })
        })]
      }), (0, r.jsx)(s.zxk, {
        onClick: R,
        loading: T,
        disabled: N,
        variant: D,
        text: w,
        fullWidth: true
      })]
    })]
  })
}