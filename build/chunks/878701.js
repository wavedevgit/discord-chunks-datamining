/** Chunk was on 39048 **/
/** chunk id: 878701, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => d,
  u: () => c
});
var Chunk397927 = require("./397927.js"),
  Chunk918160 = require("./918160.jsx"),
  Chunk627794 = require("./627794.js"),
  Chunk53594 = require("./53594.js"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx");
let c = e => {
  switch (e) {
    case a.uh.KEYWORD:
    case a.uh.USER_PROFILE:
      returntrue;
    default:
      returnfalse
  }
};

function d(e, t) {
  var n, c, d, u, g, m;
  return null != e && (e => {
    switch (e) {
      case a.uh.KEYWORD:
      case a.uh.ML_SPAM:
      case a.uh.DEFAULT_KEYWORD_LIST:
      case a.uh.MENTION_SPAM:
      case a.uh.SERVER_POLICY:
      case a.uh.USER_PROFILE:
        returntrue;
      default:
        returnfalse
    }
  })(e) ? {
    headerText: null !== (n = null != (m = null == t ? true : t.name) ? m : s.i$[e].getDefaultRuleName()) && true !== n ? n : "",
    headerSubtext: null != (c = ((e, t) => {
      if ((0, l.wC)(t) && (0, l.KU)(t)) return t.triggerMetadata.regexPatterns.length > 0 ? o.intl.formatToPlainString(o.t.xZUvxR, {
        keywordCount: t.triggerMetadata.keywordFilter.length,
        regexPatternCount: t.triggerMetadata.regexPatterns.length
      }) : o.intl.formatToPlainString(o.t.dJN7Lk, {
        keywordCount: t.triggerMetadata.keywordFilter.length
      })
    })(0, t)) ? c : "",
    descriptionText: null != (d = (e => {
      switch (e) {
        case a.uh.KEYWORD:
          return o.intl.string(o.t.TzvaeK);
        case a.uh.ML_SPAM:
          return o.intl.string(o.t.jBZSQl);
        case a.uh.DEFAULT_KEYWORD_LIST:
          return o.intl.string(o.t.Drc8ft);
        case a.uh.MENTION_SPAM:
          return o.intl.string(o.t.flhXO4);
        case a.uh.USER_PROFILE:
          return o.intl.string(o.t.A35LyL);
        default:
          return null
      }
    })(e)) ? d : "",
    descriptionSubtext: null != (u = (e => {
      if (e === a.uh.KEYWORD) return o.intl.formatToPlainString(o.t.yNec2m, {})
    })(e)) ? u : "",
    icon: null != (g = (e => {
      switch (e) {
        case a.uh.MENTION_SPAM:
          return r.XxR;
        case a.uh.KEYWORD:
          return r.fdC;
        case a.uh.ML_SPAM:
        case a.uh.USER_PROFILE:
          return (0, r.kHD)(i.A);
        case a.uh.DEFAULT_KEYWORD_LIST:
          return r.ZB$
      }
    })(e)) ? g : r.qYV
  } : null
}