/** Chunk was on 47841 **/
/** chunk id: 754513, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk546457 = require("./546457.jsx"),
  Chunk897295 = require("./897295.js"),
  Chunk411335 = require("./411335.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk256893 = require("./256893.js");
let m = Chunk975571.A.getArticleURL(Chunk652215.MVz.GUILD_AUTOMOD_REGEX);

function p(e) {
  let {
    hasErrors: t,
    text: n,
    errorText: i
  } = e;
  return t ? (0, r.jsx)("div", {
    className: b.W$,
    children: (0, r.jsx)(a.Text, {
      className: b.F,
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: null != i ? i : g.intl.format(g.t.jKYAPu, {
        helpArticle: m
      })
    })
  }) : (0, r.jsx)(a.Text, {
    className: b.W$,
    variant: "text-xs/medium",
    color: "text-muted",
    children: n
  })
}

function x(e) {
  var t, n;
  let {
    rule: l,
    onChangeText: a,
    className: c
  } = e, {
    patterns: f,
    valueError: x,
    errors: h,
    validatePatternsChanged: j,
    validateEditingValueChanged: O
  } = (0, d.A)(l, a), [y] = i.useState(() => ({
    tags: f,
    value: "",
    selections: [],
    isSelecting: false
  })), v = i.useMemo(() => h.reduce((e, t) => {
    let {
      pattern: n,
      message: r,
      description: i,
      erroringCharacterLength: l = n.length,
      erroringCharacterOffset: s = 0
    } = t;
    return null == f.find(e => e === n) || (e[n] = {
      value: n,
      message: null != i ? i : r,
      erroringCharacterLength: l,
      erroringCharacterOffset: s
    }), e
  }, {}), [h, f]), A = i.useCallback(e => {
    j(e, f)
  }, [j, f]), E = i.useCallback(e => {
    O(e)
  }, [O]);
  return (0, r.jsxs)("div", {
    className: s()(b.Qn, c),
    children: [(0, r.jsx)(o.A, {
      placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
      initialValue: y,
      onChangeTags: A,
      onChangeNewTagValue: E,
      tagErrors: v,
      maxTags: u.qm
    }), (0, r.jsx)(p, {
      text: g.intl.format(g.t["PGC/AJ"], {
        helpArticle: m
      }),
      hasErrors: h.length > 0 || null != x,
      errorText: null != (t = null == (n = h.find(e => {
        let {
          pattern: t
        } = e;
        return t === d.B
      })) ? true : n.message) ? t : null == x ? true : x.message
    })]
  })
}