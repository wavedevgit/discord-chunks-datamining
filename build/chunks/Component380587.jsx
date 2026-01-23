/** Chunk was on web.js **/
/** chunk id: 380587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ev: () => E,
  Ow: () => y,
  aK: () => b,
  m3: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk444802 = require("./444802.js"),
  Chunk207560 = require("./207560.js"),
  Chunk558001 = require("./558001.js"),
  Chunk866945 = require("./866945.jsx"),
  Chunk840387 = require("./840387.js"),
  Chunk933297 = require("./933297.js"),
  Chunk975571 = require("./975571.js"),
  Chunk64313 = require("./64313.js"),
  Chunk835002 = require("./835002.js"),
  Chunk985018 = require("./985018.jsx");

function E() {
  let e = (0, l.WX)(),
    t = () => {
      window.open(_.A.getArticleURL(e), "_blank")
    };
  return (0, r.jsx)(d.e, {
    label: g.t.EUo0yj,
    labelHook: t,
    noticeType: m.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  })
}

function y() {
  let e = () => {
    s.A.showAgeVerificationGetStartedModal({
      entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE
    })
  };
  return (0, r.jsx)(d.e, {
    label: g.t.OX4ybh,
    labelHook: e,
    noticeType: m.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  })
}

function b() {
  let e = (0, f.Z)(),
    t = (0, l.WX)(),
    n = i.useCallback(() => {
      window.open(_.A.getArticleURL(t), "_blank"), (0, u.N)(m.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, m.YX.LEARN_MORE)
    }, [t]),
    s = i.useCallback(() => {
      (0, u.N)(m.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, m.YX.VIEWED)
    }, []);
  return i.useMemo(() => {
    if (e) return {
      type: p.W.INLINE_NOTICE,
      noticeType: "info",
      trackView: s,
      useText: () => g.intl.format(g.t.EUo0yj, {
        hook: (e, t) => (0, r.jsx)(a.MzZ, {
          onClick: n,
          children: e
        }, t)
      })
    }
  }, [n, e, s])
}

function O() {
  let e = (0, c.SJ)(),
    t = (0, h.j)("useContentAndSocialAgeVerificationInlineNotice"),
    n = e || t,
    l = i.useCallback(() => {
      s.A.showAgeVerificationGetStartedModal({
        entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE
      }), (0, u.N)(m.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, m.YX.LEARN_MORE)
    }, []),
    d = i.useCallback(() => {
      (0, u.N)(m.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, m.YX.VIEWED)
    }, []);
  return i.useMemo(() => {
    if (n) return {
      type: p.W.INLINE_NOTICE,
      noticeType: "info",
      trackView: d,
      useText: () => g.intl.format(g.t.OX4ybh, {
        hook: (e, t) => (0, r.jsx)(a.MzZ, {
          onClick: l,
          children: e
        }, t)
      })
    }
  }, [l, n, d])
}