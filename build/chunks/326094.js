/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(184242),
  i = n(349902),
  o = n(806729);

function a(e) {
  var t, n;
  let {
    user: a,
    currentUser: s,
    location: l
  } = e, {
    mutualFriends: c,
    mutualGuilds: u
  } = (0, o.Z)(a, a.id !== (null == s ? void 0 : s.id)), d = null !== (t = null == c ? void 0 : c.length) && void 0 !== t ? t : 0, f = null !== (n = null == u ? void 0 : u.length) && void 0 !== n ? n : 0, _ = (0, i.Z)(a);
  return !((0, r.Ac)({
    location: l
  }) && _ && 0 === d && 0 === f)
}