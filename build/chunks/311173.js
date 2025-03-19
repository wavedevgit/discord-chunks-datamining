/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => h
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(63063),
  c = n(256569),
  A = n(858457),
  d = n(273504),
  u = n(981631),
  g = n(388032),
  f = n(978082);
let m = o.Z.getArticleURL(u.BhN.GUILD_AUTOMOD_REGEX);

function p(e) {
  let {
    hasErrors: t,
    text: n,
    errorText: i
  } = e;
  return t ? (0, r.jsx)("div", {
    className: f.subtext,
    children: (0, r.jsx)(l.Text, {
      className: f.errorSpan,
      variant: "text-xs/medium",
      color: "text-danger",
      children: null != i ? i : g.NW.format(g.t.jKYAPj, {
        helpArticle: m
      })
    })
  }) : (0, r.jsx)(l.Text, {
    className: f.subtext,
    variant: "text-xs/medium",
    color: "text-muted",
    children: n
  })
}

function h(e) {
  var t, n;
  let {
    rule: s,
    onChangeText: l,
    className: o
  } = e, {
    patterns: u,
    valueError: h,
    errors: C,
    validatePatternsChanged: b,
    validateEditingValueChanged: v
  } = (0, A.Z)(s, l), [x] = i.useState(() => ({
    tags: u,
    value: "",
    selections: [],
    isSelecting: !1
  })), N = i.useMemo(() => C.reduce((e, t) => {
    let {
      pattern: n,
      message: r,
      description: i,
      erroringCharacterLength: s = n.length,
      erroringCharacterOffset: a = 0
    } = t;
    return null == u.find(e => e === n) || (e[n] = {
      value: n,
      message: null != i ? i : r,
      erroringCharacterLength: s,
      erroringCharacterOffset: a
    }), e
  }, {}), [C, u]), j = i.useCallback(e => {
    b(e, u)
  }, [b, u]), E = i.useCallback(e => {
    v(e)
  }, [v]);
  return (0, r.jsxs)("div", {
    className: a()(f.keywordsContainer, o),
    children: [(0, r.jsx)(c.Z, {
      placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
      initialValue: x,
      onChangeTags: j,
      onChangeNewTagValue: E,
      tagErrors: N,
      maxTags: d.VW
    }), (0, r.jsx)(p, {
      text: g.NW.format(g.t["PGC/AA"], {
        helpArticle: m
      }),
      hasErrors: C.length > 0 || null != h,
      errorText: null !== (n = null === (t = C.find(e => {
        let {
          pattern: t
        } = e;
        return t === A.r
      })) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : null == h ? void 0 : h.message
    })]
  })
}