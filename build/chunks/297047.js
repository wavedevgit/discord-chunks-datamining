/** Chunk was on 50963 **/
"use strict";
n.d(t, {
  Z: () => f,
  q: () => m
}), n(47120);
var r = n(200651);
n(192379);
var o = n(442837),
  a = n(481060),
  i = n(144144),
  s = n(592125),
  c = n(496675),
  l = n(944486),
  u = n(585483),
  d = n(51144),
  p = n(981631),
  g = n(388032);

function m(e, t) {
  let {
    id: n
  } = e, r = "@".concat(d.ZP.getUserTag(e, {
    decoration: "never"
  }));
  u.S.dispatchToLastSubscribed(p.CkL.INSERT_TEXT, {
    plainText: r,
    rawText: "<@".concat(n, ">")
  }), null != t && i.Z.startTyping(t)
}

function f(e, t, n) {
  let [i, u] = (0, o.Wu)([l.Z, s.Z, c.Z], () => {
    let e = l.Z.getChannelId(t),
      n = s.Z.getChannel(e);
    return [e, null != n && (n.isMultiUserDM() || c.Z.can(p.Plq.SEND_MESSAGES, n))]
  }, [t]), d = n === p.IlC.POPOUT;
  return !u || d ? null : (0, r.jsx)(a.sNh, {
    id: "mention",
    label: g.NW.string(g.t.P8tvKC),
    action: function() {
      m(e, i)
    }
  })
}