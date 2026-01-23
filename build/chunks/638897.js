/** Chunk was on web.js **/
/** chunk id: 638897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk27867 = require("./27867.js"),
  Chunk311907 = require("./311907.js"),
  Chunk258363 = require("./258363.js"),
  Chunk861382 = require("./861382.js"),
  Chunk355622 = require("./355622.js"),
  Chunk711371 = require("./711371.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk31498 = require("./31498.js"),
  Chunk986719 = require("./986719.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function b(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t, n) {
  var E, b, v, A, I, S, T, C, N, w, R;
  let {
    channel: P,
    type: D
  } = e, [x, L] = r.useState(() => (0, _.Ur)()), j = (0, i.A)(), M = (0, a.bG)([u.Ay, p.default], () => {
    var e, t;
    let n = p.default.getCurrentUser();
    return null != (e = null != P.guild_id && null != n ? null == (t = u.Ay.getMember(P.guild_id, n.id)) ? true : t.isPending : null) && e
  }), {
    canMentionEveryone: k,
    hidePersonalInformation: U
  } = (0, a.cf)([d.A, f.A], () => ({
    canMentionEveryone: P.isPrivate() || M || D === l.oU.RULES_INPUT || d.A.can(m.xBc.MENTION_EVERYONE, P),
    hidePersonalInformation: f.A.hidePersonalInformation
  }), [P, D, M]), {
    activeCommand: G,
    activeCommandOption: V
  } = (0, a.cf)([o.A], () => ({
    activeCommand: o.A.getActiveCommand(P.id),
    activeCommandOption: o.A.getActiveOption(P.id)
  })), F = (0, h.A)({
    navId: "channel-autocomplete",
    scrollerRef: n,
    state: x,
    onFocus: e => K.setSelectedIndex(e)
  }), B = null == (I = e.editorRef.current) ? true : I.getCurrentWord(), H = null == (S = e.editorRef.current) ? true : S.getSlateEditor(), Y = null;
  null != H && (Y = null != (w = null == (R = c.VW.getSelectedParentOfType(H, _.mk)) ? true : R[0]) ? w : null);
  let W = O(y({}, e), {
      navigator: F,
      activeCommand: G,
      activeCommandOption: V,
      activeInlineAutocompleteInput: Y,
      canMentionUsers: null != (E = null == (T = D.users) ? true : T.allowMentioning) && E,
      canMentionEveryone: k,
      hidePersonalInformation: U,
      hideMentionDescription: D === l.oU.RULES_INPUT,
      emojiIntention: D === l.oU.RULES_INPUT ? g.b_.COMMUNITY_CONTENT : g.b_.CHAT,
      currentWord: null != (b = null == B ? true : B.word) ? b : "",
      currentWordIsAtStart: (null == B ? true : B.isAtStart) === true,
      currentFullWord: null != (v = null == B ? true : B.fullWord) ? v : "",
      optionText: null != V ? (0, s.AA)({
        [V.name]: null != (A = null == (C = e.editorRef.current) ? true : C.getCurrentCommandOptionValue()) ? A : []
      }, V.name) : ""
    }),
    [K] = r.useState(() => new _.Ay(W));
  return r.useEffect(() => {
    K.updateProps(W)
  }), r.useImperativeHandle(t, () => K, [K]), r.useEffect(() => {
    let e = e => L(e);
    return K.on("change", e), K.on("update", j), () => {
      K.off("change", e), K.off("update", j)
    }
  }, [j, K]), r.useEffect(() => {
    var e;
    let t = null == (e = x.query) ? true : e.typeInfo.stores;
    if (null != t) {
      let e = () => K.queryResults();
      for (let n of t) n.addChangeListener(e);
      return () => {
        for (let n of t) n.removeChangeListener(e)
      }
    }
  }, [K, null == (N = x.query) ? true : N.typeInfo]), [x, K, F]
}