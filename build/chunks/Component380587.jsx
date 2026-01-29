/** Chunk was on 2827 **/
/** chunk id: 380587, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ev: () => b,
  Ow: () => h,
  aK: () => E,
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

function b() {
  let e = (0, o.WX)();
  return (0, r.jsx)(u.e, {
    label: f.t.EUo0yj,
    labelHook: () => {
      window.open(m.A.getArticleURL(e), "_blank")
    },
    noticeType: A.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  })
}

function h() {
  return (0, r.jsx)(u.e, {
    label: f.t.OX4ybh,
    labelHook: () => {
      s.A.showAgeVerificationGetStartedModal({
        entryPoint: a.q1.CONTENT_AND_SOCIAL_NOTICE
      })
    },
    noticeType: A.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  })
}

function E() {
  let e = (0, _.Z)(),
    t = (0, o.WX)(),
    n = i.useCallback(() => {
      window.open(m.A.getArticleURL(t), "_blank"), (0, d.N)(A.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, A.YX.LEARN_MORE)
    }, [t]),
    s = i.useCallback(() => {
      (0, d.N)(A.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, A.YX.VIEWED)
    }, []);
  return i.useMemo(() => {
    if (e) return {
      type: p.W.INLINE_NOTICE,
      noticeType: "info",
      trackView: s,
      useText: () => f.intl.format(f.t.EUo0yj, {
        hook: (e, t) => (0, r.jsx)(l.MzZ, {
          onClick: n,
          children: e
        }, t)
      })
    }
  }, [n, e, s])
}

function O() {
  let e = (0, c.SJ)(),
    t = (0, g.j)("useContentAndSocialAgeVerificationInlineNotice"),
    n = e || t,
    o = i.useCallback(() => {
      s.A.showAgeVerificationGetStartedModal({
        entryPoint: a.q1.CONTENT_AND_SOCIAL_NOTICE
      }), (0, d.N)(A.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, A.YX.LEARN_MORE)
    }, []),
    u = i.useCallback(() => {
      (0, d.N)(A.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, A.YX.VIEWED)
    }, []);
  return i.useMemo(() => {
    if (n) return {
      type: p.W.INLINE_NOTICE,
      noticeType: "info",
      trackView: u,
      useText: () => f.intl.format(f.t.OX4ybh, {
        hook: (e, t) => (0, r.jsx)(l.MzZ, {
          onClick: o,
          children: e
        }, t)
      })
    }
  }, [o, n, u])
}