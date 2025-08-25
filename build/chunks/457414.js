/** Chunk was on 52721 **/
/** chunk id: 457414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => c,
  w: () => d
});
var Chunk481060 = require("./481060.js"),
  Chunk925221 = require("./925221.jsx"),
  Chunk236413 = require("./236413.js"),
  Chunk85960 = require("./85960.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx");
let c = e => {
  switch (e) {
    case s.fX.KEYWORD:
    case s.fX.USER_PROFILE:
      returntrue;
    default:
      returnfalse
  }
};

function d(e, t) {
  var n, c, d, u, m, g;
  return null != e && (e => {
    switch (e) {
      case s.fX.KEYWORD:
      case s.fX.ML_SPAM:
      case s.fX.DEFAULT_KEYWORD_LIST:
      case s.fX.MENTION_SPAM:
      case s.fX.SERVER_POLICY:
      case s.fX.USER_PROFILE:
        returntrue;
      default:
        returnfalse
    }
  })(e) ? {
    headerText: null !== (n = null != (g = null == t ? true : t.name) ? g : a.I6[e].getDefaultRuleName()) && true !== n ? n : "",
    headerSubtext: null != (c = ((e, t) => {
      if ((0, l.Vb)(t) && (0, l.DO)(t)) return t.triggerMetadata.regexPatterns.length > 0 ? o.intl.formatToPlainString(o.t.xZUvxc, {
        keywordCount: t.triggerMetadata.keywordFilter.length,
        regexPatternCount: t.triggerMetadata.regexPatterns.length
      }) : o.intl.formatToPlainString(o.t.dJN7Li, {
        keywordCount: t.triggerMetadata.keywordFilter.length
      })
    })(0, t)) ? c : "",
    descriptionText: null != (d = (e => {
      switch (e) {
        case s.fX.KEYWORD:
          return o.intl.string(o.t.TzvaeH);
        case s.fX.ML_SPAM:
          return o.intl.string(o.t.jBZSQk);
        case s.fX.DEFAULT_KEYWORD_LIST:
          return o.intl.string(o.t.Drc8fn);
        case s.fX.MENTION_SPAM:
          return o.intl.string(o.t.flhXOz);
        case s.fX.USER_PROFILE:
          return o.intl.string(o.t.A35LyM);
        default:
          return null
      }
    })(e)) ? d : "",
    descriptionSubtext: null != (u = (e => {
      if (e === s.fX.KEYWORD) return o.intl.formatToPlainString(o.t.yNec2t, {})
    })(e)) ? u : "",
    icon: null != (m = (e => {
      switch (e) {
        case s.fX.MENTION_SPAM:
          return r.lOy;
        case s.fX.KEYWORD:
          return r.avL;
        case s.fX.ML_SPAM:
        case s.fX.USER_PROFILE:
          return (0, r.GSL)(i.Z);
        case s.fX.DEFAULT_KEYWORD_LIST:
          return r.Oqj
      }
    })(e)) ? m : r.xPt
  } : null
}