/** Chunk was on 384 **/
/** chunk id: 311173, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk256569 = require("./256569.jsx"),
  Chunk858457 = require("./858457.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk140876 = require("./140876.js");
let f = Chunk63063.Z.getArticleURL(Chunk981631.BhN.GUILD_AUTOMOD_REGEX);

function h(e) {
  let {
    hasErrors: t,
    text: n,
    errorText: i
  } = e;
  return t ? (0, r.jsx)("div", {
    className: p.subtext,
    children: (0, r.jsx)(s.Text, {
      className: p.errorSpan,
      variant: "text-xs/medium",
      color: "text-danger",
      children: null != i ? i : m.intl.format(m.t.jKYAPu, {
        helpArticle: f
      })
    })
  }) : (0, r.jsx)(s.Text, {
    className: p.subtext,
    variant: "text-xs/medium",
    color: "text-muted",
    children: n
  })
}

function b(e) {
  var t, n;
  let {
    rule: l,
    onChangeText: s,
    className: o
  } = e, {
    patterns: g,
    valueError: b,
    errors: x,
    validatePatternsChanged: j,
    validateEditingValueChanged: _
  } = (0, d.Z)(l, s), [v] = i.useState(() => ({
    tags: g,
    value: "",
    selections: [],
    isSelecting: false
  })), O = i.useMemo(() => x.reduce((e, t) => {
    let {
      pattern: n,
      message: r,
      description: i,
      erroringCharacterLength: l = n.length,
      erroringCharacterOffset: a = 0
    } = t;
    return null == g.find(e => e === n) || (e[n] = {
      value: n,
      message: null != i ? i : r,
      erroringCharacterLength: l,
      erroringCharacterOffset: a
    }), e
  }, {}), [x, g]), C = i.useCallback(e => {
    j(e, g)
  }, [j, g]), y = i.useCallback(e => {
    _(e)
  }, [_]);
  return (0, r.jsxs)("div", {
    className: a()(p.keywordsContainer, o),
    children: [(0, r.jsx)(c.Z, {
      placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
      initialValue: v,
      onChangeTags: C,
      onChangeNewTagValue: y,
      tagErrors: O,
      maxTags: u.VW
    }), (0, r.jsx)(h, {
      text: m.intl.format(m.t["PGC/AJ"], {
        helpArticle: f
      }),
      hasErrors: x.length > 0 || null != b,
      errorText: null != (n = null == (t = x.find(e => {
        let {
          pattern: t
        } = e;
        return t === d.r
      })) ? true : t.message) ? n : null == b ? true : b.message
    })]
  })
}