/** Chunk was on 14093 **/
n.d(t, {
  Z: () => o
});
var r = n(192379),
  l = n(442837),
  a = n(231757),
  i = n(553795);

function o(e) {
  let t = (0, l.e7)([i.Z], () => i.Z.getAccounts().some(t => t.type === e)),
    n = r.useCallback(() => {
      if (null == e) return null;
      (0, a.Z)({
        platformType: e,
        location: "Member List Content Popout"
      })
    }, [e]);
  if (null != e) return t ? void 0 : n
}