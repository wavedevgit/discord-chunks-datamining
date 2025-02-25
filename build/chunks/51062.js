/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => S
}), n(47120);
var r = n(192379),
  i = n(931609),
  o = n(442837),
  a = n(456007),
  s = n(998698),
  l = n(541716),
  c = n(927723),
  u = n(271383),
  d = n(496675),
  f = n(246946),
  _ = n(594174),
  p = n(106824),
  h = n(691841),
  g = n(981631),
  m = n(377668),
  E = n(185923);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t, n) {
  var v, y, S, I, T, N, A;
  let {
    channel: C,
    type: R
  } = e, [P, D] = r.useState(() => (0, p.P)()), w = (0, i.Z)(), L = (0, o.e7)([u.ZP], () => {
    if (null != e.guild) {
      var t;
      return null != u.ZP.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, m.fL)
    }
    return !1
  }), x = (0, c.Ib)(e.guild, e.channel) && !L && !(0, c.g0)(e.guild), M = (0, o.e7)([u.ZP, _.default], () => {
    var e, t;
    let n = _.default.getCurrentUser();
    return null !== (t = null != C.guild_id && null != n ? null === (e = u.ZP.getMember(C.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canMentionEveryone: j,
    hidePersonalInformation: k
  } = (0, o.cj)([d.Z, f.Z], () => ({
    canMentionEveryone: C.isPrivate() || M || R === l.Ie.RULES_INPUT || d.Z.can(g.Plq.MENTION_EVERYONE, C),
    hidePersonalInformation: f.Z.hidePersonalInformation
  }), [C, R, M]), {
    activeCommand: U,
    activeCommandOption: G
  } = (0, o.cj)([s.Z], () => ({
    activeCommand: s.Z.getActiveCommand(C.id),
    activeCommandOption: s.Z.getActiveOption(C.id)
  })), B = (0, h.Z)({
    navId: "channel-autocomplete",
    scrollerRef: n,
    state: P,
    onFocus: e => Z.setSelectedIndex(e)
  }), F = null === (v = e.editorRef.current) || void 0 === v ? void 0 : v.getCurrentWord(), V = O(b({}, e), {
    navigator: B,
    activeCommand: U,
    activeCommandOption: G,
    canMentionUsers: null !== (T = null === (y = R.users) || void 0 === y ? void 0 : y.allowMentioning) && void 0 !== T && T,
    canMentionEveryone: j,
    canMentionClyde: x,
    hidePersonalInformation: k,
    hideMentionDescription: R === l.Ie.RULES_INPUT,
    emojiIntention: R === l.Ie.RULES_INPUT ? E.Hz.COMMUNITY_CONTENT : E.Hz.CHAT,
    currentWord: null !== (N = null == F ? void 0 : F.word) && void 0 !== N ? N : "",
    currentWordIsAtStart: (null == F ? void 0 : F.isAtStart) === !0,
    optionText: null != G ? (0, a.KF)({
      [G.name]: null !== (A = null === (S = e.editorRef.current) || void 0 === S ? void 0 : S.getCurrentCommandOptionValue()) && void 0 !== A ? A : []
    }, G.name) : ""
  }), [Z] = r.useState(() => new p.Z(V));
  return r.useEffect(() => {
    Z.updateProps(V)
  }), r.useImperativeHandle(t, () => Z, [Z]), r.useEffect(() => {
    let e = e => D(e);
    return Z.on("change", e), Z.on("update", w), () => {
      Z.off("change", e), Z.off("update", w)
    }
  }, [w, Z]), r.useEffect(() => {
    var e;
    let t = null === (e = P.query) || void 0 === e ? void 0 : e.typeInfo.stores;
    if (null != t) {
      let e = () => Z.queryResults();
      for (let n of t) n.addChangeListener(e);
      return () => {
        for (let n of t) n.removeChangeListener(e)
      }
    }
  }, [Z, null === (I = P.query) || void 0 === I ? void 0 : I.typeInfo]), [P, Z, B]
}