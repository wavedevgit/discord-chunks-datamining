/** Chunk was on 47841 **/
/** chunk id: 754513, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
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
let f = Chunk975571.A.getArticleURL(Chunk652215.MVz.GUILD_AUTOMOD_REGEX);

function b(e) {
  let {
    hasErrors: t,
    text: n,
    errorText: i
  } = e;
  return t ? (0, r.jsx)("div", {
    className: p.W$,
    children: (0, r.jsx)(a.Text, {
      className: p.F,
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: null != i ? i : m.intl.format(m.t.jKYAPu, {
        helpArticle: f
      })
    })
  }) : (0, r.jsx)(a.Text, {
    className: p.W$,
    variant: "text-xs/medium",
    color: "text-muted",
    children: n
  })
}

function h(e) {
  var t, n;
  let {
    rule: l,
    onChangeText: a,
    className: o
  } = e, {
    patterns: g,
    valueError: h,
    errors: x,
    validatePatternsChanged: j,
    validateEditingValueChanged: _
  } = (0, d.A)(l, a), [O] = i.useState(() => ({
    tags: g,
    value: "",
    selections: [],
    isSelecting: false
  })), v = i.useMemo(() => x.reduce((e, t) => {
    let {
      pattern: n,
      message: r,
      description: i,
      erroringCharacterLength: l = n.length,
      erroringCharacterOffset: s = 0
    } = t;
    return null == g.find(e => e === n) || (e[n] = {
      value: n,
      message: null != i ? i : r,
      erroringCharacterLength: l,
      erroringCharacterOffset: s
    }), e
  }, {}), [x, g]), y = i.useCallback(e => {
    j(e, g)
  }, [j, g]), A = i.useCallback(e => {
    _(e)
  }, [_]);
  return (0, r.jsxs)("div", {
    className: s()(p.Qn, o),
    children: [(0, r.jsx)(c.A, {
      placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
      initialValue: O,
      onChangeTags: y,
      onChangeNewTagValue: A,
      tagErrors: v,
      maxTags: u.qm
    }), (0, r.jsx)(b, {
      text: m.intl.format(m.t["PGC/AJ"], {
        helpArticle: f
      }),
      hasErrors: x.length > 0 || null != h,
      errorText: null != (t = null == (n = x.find(e => {
        let {
          pattern: t
        } = e;
        return t === d.B
      })) ? true : n.message) ? t : null == h ? true : h.message
    })]
  })
}