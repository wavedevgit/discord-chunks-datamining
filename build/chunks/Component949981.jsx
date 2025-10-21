/** Chunk was on web.js **/
/** chunk id: 949981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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

function y(e) {
  let t, {
      invite: n,
      message: a,
      currentUserId: y,
      onTransitionToInviteChannel: O,
      onAcceptInstantInvite: v
    } = e,
    I = y === a.author.id,
    T = n.state === g.r2o.ACCEPTING,
    S = (0, s.e7)([_.Z], () => null != n.channel ? _.Z.getChannel(n.channel.id) : null, [n]);
  o()(null == S || S.isPrivate(), "must be a private channel");
  let {
    analyticsLocations: A
  } = (0, u.ZP)(c.Z.INVITE_EMBED), C = null != S, N = i.useCallback(() => {
    let e = "noop";
    C ? (O(), e = "transition") : (v(), e = "accept"), (0, l.r$)({
      invite: n,
      action: e,
      inviter_id: a.author.id,
      invite_message_id: a.id
    }, A)
  }, [n, a, A, C, O, v]);
  if (null == S) {
    if (null == n.channel) return (0, r.jsx)(m.Z, {});
    S = (0, f.jD)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
  } else {
    t = S.recipients.reduce((e, t) => {
      let n = p.default.getUser(t);
      return null != n && e.push(n), e
    }, []);
    let e = p.default.getCurrentUser();
    C && null != e && t.push(e)
  }
  let R = S.name;
  (null == R || "" === R) && (R = t.length > 0 ? t.filter(h.lm).map(e => e.username).join(", ") : E.intl.string(E.t.LJpTRF));
  let P = E.intl.string(E.t.XpeFYr),
    w = d.Z.Button.Colors.GREEN;
  C && (P = E.intl.string(E.t.cEnaWx), w = d.Z.Button.Colors.PRIMARY);
  let D = E.intl.string(E.t["3p3/BK"]);
  return I && (D = E.intl.string(E.t.qmtuXE)), (0, r.jsxs)(d.Z, {
    children: [(0, r.jsx)(d.Z.Header, {
      text: D
    }), (0, r.jsxs)(d.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: b.headerLine,
        children: [(0, r.jsx)(d.Z.Icon, {
          channel: S,
          onClick: C ? N : true
        }), (0, r.jsx)(d.Z.Info, {
          title: R,
          onClick: C ? N : true,
          children: (0, r.jsx)(d.Z.Data, {
            members: t.length
          })
        })]
      }), (0, r.jsx)(d.Z.Button, {
        onClick: N,
        submitting: T,
        isDisabled: C,
        color: w,
        children: P
      })]
    })]
  })
}