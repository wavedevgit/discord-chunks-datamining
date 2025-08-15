/** Chunk was on web.js **/
/** chunk id: 51062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk338379 = require("./338379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk456007 = require("./456007.js"),
  Chunk998698 = require("./998698.js"),
  Chunk541716 = require("./541716.js"),
  Chunk887490 = require("./887490.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk106824 = require("./106824.js"),
  Chunk691841 = require("./691841.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
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

function v(e, t, n) {
  var E, y, v, I, T, S, A, N, C, R;
  let {
    channel: P,
    type: w
  } = e, [D, L] = r.useState(() => (0, p.PA)()), x = (0, i.Z)(), M = (0, a.e7)([u.ZP, _.default], () => {
    var e, t;
    let n = _.default.getCurrentUser();
    return null != (t = null != P.guild_id && null != n ? null == (e = u.ZP.getMember(P.guild_id, n.id)) ? true : e.isPending : null) && t
  }), {
    canMentionEveryone: k,
    hidePersonalInformation: j
  } = (0, a.cj)([d.Z, f.Z], () => ({
    canMentionEveryone: P.isPrivate() || M || w === l.Ie.RULES_INPUT || d.Z.can(m.Plq.MENTION_EVERYONE, P),
    hidePersonalInformation: f.Z.hidePersonalInformation
  }), [P, w, M]), {
    activeCommand: U,
    activeCommandOption: G
  } = (0, a.cj)([s.Z], () => ({
    activeCommand: s.Z.getActiveCommand(P.id),
    activeCommandOption: s.Z.getActiveOption(P.id)
  })), B = (0, h.Z)({
    navId: "channel-autocomplete",
    scrollerRef: n,
    state: D,
    onFocus: e => Y.setSelectedIndex(e)
  }), V = null == (E = e.editorRef.current) ? true : E.getCurrentWord(), F = null == (y = e.editorRef.current) ? true : y.getSlateEditor(), Z = null;
  null != F && (Z = null != (A = null == (S = c.bN.getSelectedParentOfType(F, p.un)) ? true : S[0]) ? A : null);
  let H = O(b({}, e), {
      navigator: B,
      activeCommand: U,
      activeCommandOption: G,
      activeInlineAutocompleteInput: Z,
      canMentionUsers: null != (N = null == (v = w.users) ? true : v.allowMentioning) && N,
      canMentionEveryone: k,
      hidePersonalInformation: j,
      hideMentionDescription: w === l.Ie.RULES_INPUT,
      emojiIntention: w === l.Ie.RULES_INPUT ? g.Hz.COMMUNITY_CONTENT : g.Hz.CHAT,
      currentWord: null != (C = null == V ? true : V.word) ? C : "",
      currentWordIsAtStart: (null == V ? true : V.isAtStart) === true,
      optionText: null != G ? (0, o.KF)({
        [G.name]: null != (R = null == (I = e.editorRef.current) ? true : I.getCurrentCommandOptionValue()) ? R : []
      }, G.name) : ""
    }),
    [Y] = r.useState(() => new p.ZP(H));
  return r.useEffect(() => {
    Y.updateProps(H)
  }), r.useImperativeHandle(t, () => Y, [Y]), r.useEffect(() => {
    let e = e => L(e);
    return Y.on("change", e), Y.on("update", x), () => {
      Y.off("change", e), Y.off("update", x)
    }
  }, [x, Y]), r.useEffect(() => {
    var e;
    let t = null == (e = D.query) ? true : e.typeInfo.stores;
    if (null != t) {
      let e = () => Y.queryResults();
      for (let n of t) n.addChangeListener(e);
      return () => {
        for (let n of t) n.removeChangeListener(e)
      }
    }
  }, [Y, null == (T = D.query) ? true : T.typeInfo]), [D, Y, B]
}