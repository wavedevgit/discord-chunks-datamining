/** Chunk was on web.js **/
/** chunk id: 309818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
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

function O(e) {
  let t, {
      invite: n,
      message: a,
      currentUserId: O,
      onTransitionToInviteChannel: v,
      onAcceptInstantInvite: A
    } = e,
    I = O === a.author.id,
    S = n.state === E.elq.ACCEPTING,
    T = (0, l.bG)([_.A], () => null != n.channel ? _.A.getChannel(n.channel.id) : null, [n]);
  s()(null == T || T.isPrivate(), "must be a private channel");
  let {
    analyticsLocations: C
  } = (0, d.Ay)(u.A.INVITE_EMBED), N = null != T, w = i.useCallback(() => {
    let e = "noop";
    N ? (v(), e = "transition") : (A(), e = "accept"), (0, c.he)({
      invite: n,
      action: e,
      inviter_id: a.author.id,
      invite_message_id: a.id
    }, C)
  }, [n, a, C, N, v, A]);
  if (null == T) {
    if (null == n.channel) return (0, r.jsx)(g.A, {});
    T = (0, p.OY)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
  } else {
    t = T.recipients.reduce((e, t) => {
      let n = h.default.getUser(t);
      return null != n && e.push(n), e
    }, []);
    let e = h.default.getCurrentUser();
    N && null != e && t.push(e)
  }
  let R = T.name;
  (null == R || "" === R) && (R = t.length > 0 ? t.filter(m.Vq).map(e => e.username).join(", ") : y.intl.string(y.t.LJpTRF));
  let P = y.intl.string(y.t.XpeFYr),
    D = "active";
  N && (P = y.intl.string(y.t.cEnaWx), D = "secondary");
  let x = y.intl.string(y.t["3p3/BK"]);
  return I && (x = y.intl.string(y.t.qmtuXE)), (0, r.jsxs)(f.A, {
    children: [(0, r.jsx)(f.A.Header, {
      text: x
    }), (0, r.jsxs)(f.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: b.iH,
        children: [(0, r.jsx)(f.A.Icon, {
          channel: T,
          onClick: N ? w : true
        }), (0, r.jsx)(f.A.Info, {
          title: R,
          onClick: N ? w : true,
          children: (0, r.jsx)(f.A.Data, {
            members: t.length
          })
        })]
      }), (0, r.jsx)(o.$nd, {
        onClick: w,
        loading: S,
        disabled: N,
        variant: D,
        text: P,
        fullWidth: true
      })]
    })]
  })
}