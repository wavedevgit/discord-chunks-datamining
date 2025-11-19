/** Chunk was on web.js **/
/** chunk id: 51062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk110660 = require("./110660.js"),
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
  var E, y, v, I, T, S, A, C, N, R, P;
  let {
    channel: D,
    type: w
  } = e, [L, x] = r.useState(() => (0, p.PA)()), M = (0, i.Z)(), k = (0, a.e7)([u.ZP, _.default], () => {
    var e, t;
    let n = _.default.getCurrentUser();
    return null != (t = null != D.guild_id && null != n ? null == (e = u.ZP.getMember(D.guild_id, n.id)) ? true : e.isPending : null) && t
  }), {
    canMentionEveryone: j,
    hidePersonalInformation: U
  } = (0, a.cj)([d.Z, f.Z], () => ({
    canMentionEveryone: D.isPrivate() || k || w === l.Ie.RULES_INPUT || d.Z.can(m.Plq.MENTION_EVERYONE, D),
    hidePersonalInformation: f.Z.hidePersonalInformation
  }), [D, w, k]), {
    activeCommand: G,
    activeCommandOption: B
  } = (0, a.cj)([s.Z], () => ({
    activeCommand: s.Z.getActiveCommand(D.id),
    activeCommandOption: s.Z.getActiveOption(D.id)
  })), Z = (0, h.Z)({
    navId: "channel-autocomplete",
    scrollerRef: n,
    state: L,
    onFocus: e => W.setSelectedIndex(e)
  }), F = null == (E = e.editorRef.current) ? true : E.getCurrentWord(), V = null == (y = e.editorRef.current) ? true : y.getSlateEditor(), H = null;
  null != V && (H = null != (A = null == (S = c.bN.getSelectedParentOfType(V, p.un)) ? true : S[0]) ? A : null);
  let Y = O(b({}, e), {
      navigator: Z,
      activeCommand: G,
      activeCommandOption: B,
      activeInlineAutocompleteInput: H,
      canMentionUsers: null != (C = null == (v = w.users) ? true : v.allowMentioning) && C,
      canMentionEveryone: j,
      hidePersonalInformation: U,
      hideMentionDescription: w === l.Ie.RULES_INPUT,
      emojiIntention: w === l.Ie.RULES_INPUT ? g.Hz.COMMUNITY_CONTENT : g.Hz.CHAT,
      currentWord: null != (N = null == F ? true : F.word) ? N : "",
      currentWordIsAtStart: (null == F ? true : F.isAtStart) === true,
      currentFullWord: null != (R = null == F ? true : F.fullWord) ? R : "",
      optionText: null != B ? (0, o.KF)({
        [B.name]: null != (P = null == (I = e.editorRef.current) ? true : I.getCurrentCommandOptionValue()) ? P : []
      }, B.name) : ""
    }),
    [W] = r.useState(() => new p.ZP(Y));
  return r.useEffect(() => {
    W.updateProps(Y)
  }), r.useImperativeHandle(t, () => W, [W]), r.useEffect(() => {
    let e = e => x(e);
    return W.on("change", e), W.on("update", M), () => {
      W.off("change", e), W.off("update", M)
    }
  }, [M, W]), r.useEffect(() => {
    var e;
    let t = null == (e = L.query) ? true : e.typeInfo.stores;
    if (null != t) {
      let e = () => W.queryResults();
      for (let n of t) n.addChangeListener(e);
      return () => {
        for (let n of t) n.removeChangeListener(e)
      }
    }
  }, [W, null == (T = L.query) ? true : T.typeInfo]), [L, W, Z]
}