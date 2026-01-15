/** Chunk was on web.js **/
/** chunk id: 931461, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cs: () => g,
  dL: () => y,
  dZ: () => b,
  jF: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk925513 = require("./925513.js"),
  Chunk711703 = require("./711703.js"),
  Chunk907995 = require("./907995.jsx"),
  Chunk981312 = require("./981312.js"),
  Chunk970013 = require("./970013.js"),
  Chunk63063 = require("./63063.js"),
  Chunk128064 = require("./128064.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  let e = (0, l.v6)(),
    t = () => {
      window.open(p.Z.getArticleURL(e), "_blank")
    };
  return (0, r.jsx)(u.f, {
    label: m.t.EUo0yj,
    labelHook: t,
    noticeType: h.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  })
}

function E() {
  let e = () => {
    o.Z.showAgeVerificationGetStartedModal({
      entryPoint: s.cU.CONTENT_AND_SOCIAL_NOTICE
    })
  };
  return (0, r.jsx)(u.f, {
    label: m.t.OX4ybh,
    labelHook: e,
    noticeType: h.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  })
}

function b() {
  let e = (0, d.U)(),
    t = (0, l.v6)(),
    n = i.useCallback(() => {
      window.open(p.Z.getArticleURL(t), "_blank"), (0, c.l)(h.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, h.up.LEARN_MORE)
    }, [t]),
    o = i.useCallback(() => {
      (0, c.l)(h.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, h.up.VIEWED)
    }, []);
  return i.useMemo(() => {
    if (e) return {
      type: f.v.INLINE_NOTICE,
      noticeType: "info",
      trackView: o,
      useText: () => m.intl.format(m.t.EUo0yj, {
        hook: (e, t) => (0, r.jsx)(a.eee, {
          onClick: n,
          children: e
        }, t)
      })
    }
  }, [n, e, o])
}

function y() {
  let e = (0, _.pY)("useContentAndSocialAgeVerificationInlineNotice"),
    t = i.useCallback(() => {
      o.Z.showAgeVerificationGetStartedModal({
        entryPoint: s.cU.CONTENT_AND_SOCIAL_NOTICE
      }), (0, c.l)(h.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, h.up.LEARN_MORE)
    }, []),
    n = i.useCallback(() => {
      (0, c.l)(h.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, h.up.VIEWED)
    }, []);
  return i.useMemo(() => {
    if (e) return {
      type: f.v.INLINE_NOTICE,
      noticeType: "info",
      trackView: n,
      useText: () => m.intl.format(m.t.OX4ybh, {
        hook: (e, n) => (0, r.jsx)(a.eee, {
          onClick: t,
          children: e
        }, n)
      })
    }
  }, [t, e, n])
}