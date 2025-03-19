/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  S: () => c,
  w: () => p
});
var r = n(481060),
  i = n(925221),
  s = n(236413),
  a = n(85960),
  l = n(273504),
  o = n(388032);
let c = e => {
    switch (e) {
      case l.fX.KEYWORD:
      case l.fX.USER_PROFILE:
        return !0;
      default:
        return !1
    }
  },
  A = e => {
    switch (e) {
      case l.fX.KEYWORD:
      case l.fX.ML_SPAM:
      case l.fX.DEFAULT_KEYWORD_LIST:
      case l.fX.MENTION_SPAM:
      case l.fX.SERVER_POLICY:
      case l.fX.USER_PROFILE:
        return !0;
      default:
        return !1
    }
  },
  d = (e, t) => {
    var n;
    return null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : a.I6[e].getDefaultRuleName()
  },
  u = (e, t) => {
    if ((0, s.Vb)(t) && (0, s.DO)(t)) return t.triggerMetadata.regexPatterns.length > 0 ? o.NW.formatToPlainString(o.t.xZUvxc, {
      keywordCount: t.triggerMetadata.keywordFilter.length,
      regexPatternCount: t.triggerMetadata.regexPatterns.length
    }) : o.NW.formatToPlainString(o.t.dJN7Li, {
      keywordCount: t.triggerMetadata.keywordFilter.length
    })
  },
  g = e => {
    switch (e) {
      case l.fX.KEYWORD:
        return o.NW.string(o.t.TzvaeH);
      case l.fX.ML_SPAM:
        return o.NW.string(o.t.jBZSQk);
      case l.fX.DEFAULT_KEYWORD_LIST:
        return o.NW.string(o.t.Drc8fn);
      case l.fX.MENTION_SPAM:
        return o.NW.string(o.t.flhXOz);
      case l.fX.USER_PROFILE:
        return o.NW.string(o.t.A35LyM);
      default:
        return null
    }
  },
  f = e => {
    if (e === l.fX.KEYWORD) return o.NW.formatToPlainString(o.t.yNec2t, {})
  },
  m = e => {
    switch (e) {
      case l.fX.MENTION_SPAM:
        return r.lOy;
      case l.fX.KEYWORD:
        return r.avL;
      case l.fX.ML_SPAM:
      case l.fX.USER_PROFILE:
        return (0, r.GSL)(i.Z);
      case l.fX.DEFAULT_KEYWORD_LIST:
        return r.Oqj
    }
  };

function p(e, t) {
  var n, i, s, a, l;
  return null != e && A(e) ? {
    headerText: null !== (n = d(e, t)) && void 0 !== n ? n : "",
    headerSubtext: null !== (i = u(e, t)) && void 0 !== i ? i : "",
    descriptionText: null !== (s = g(e)) && void 0 !== s ? s : "",
    descriptionSubtext: null !== (a = f(e)) && void 0 !== a ? a : "",
    icon: null !== (l = m(e)) && void 0 !== l ? l : r.xPt
  } : null
}