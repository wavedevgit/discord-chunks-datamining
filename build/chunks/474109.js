/** Chunk was on 53494 **/
n.d(t, {
  Z: () => O
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  l = n(18998),
  a = n(664915),
  s = n(888369),
  c = n(358652),
  u = n(771845),
  d = n(613060),
  p = n(451478),
  h = n(251625),
  f = n(981631),
  g = n(388032);
let m = "app-download-item",
  b = "add-server-item";

function v() {
  return !1
}

function y(e) {
  var t;
  let n = s.default.getMutableGuildStates();
  return e === f.x8Z.SERVER_DISCOVERY_BADGE && !d.Z.hasViewed(f.x8Z.SERVER_DISCOVERY_BADGE) || e !== m && e !== b && (null === (t = n[null != e ? e : "null"]) || void 0 === t ? void 0 : t.highImportanceMentionCount) > 0
}
let _ = (0, h.oH)((e, t, n) => ["null", ...t, ...e, b, f.x8Z.E3_SERVER_DISCOVERY_BADGE, m]),
  O = i.forwardRef(function(e, t) {
    var n, i;
    let d = (0, o.Wu)([u.ZP, c.Z, s.default], () => _(u.ZP.getGuildFolders(), c.Z.getUnreadPrivateChannelIds(), s.default.getStoreChangeSentinel())),
      h = (0, o.e7)([p.Z], () => p.Z.isFocused()),
      f = (0, o.e7)([a.Z], () => a.Z.getExpandedFolders());
    return (0, r.jsx)(l.Z, (n = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({}, e), i = i = {
      ref: t,
      items: d,
      isUnread: v,
      textUnread: g.NW.string(g.t.y2b7CA),
      textMention: g.NW.string(g.t.y2b7CA),
      isMentioned: y,
      animate: h,
      expandedFolders: f
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n))
  })