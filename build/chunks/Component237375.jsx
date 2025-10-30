/** Chunk was on web.js **/
/** chunk id: 237375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk965386 = require("./965386.jsx"),
  Chunk987826 = require("./987826.jsx"),
  Chunk826298 = require("./826298.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167512 = require("./167512.js");
let h = 200;

function m(e, t, n) {
  return (0, r.jsx)(u.Z, {
    className: p.option,
    name: e.displayName,
    state: t,
    onClick: n
  }, e.name)
}

function g(e) {
  let {
    command: t,
    optionStates: n,
    onOptionClick: a
  } = e, {
    requiredOptions: o,
    setOptionalOptions: c,
    unsetOptionalOptions: u
  } = i.useMemo(() => {
    var e, r, i, a;
    let o = null != (i = null == (e = t.options) ? true : e.filter(e => e.required)) ? i : [],
      s = null != (a = null == (r = t.options) ? true : r.filter(e => !e.required)) ? a : [];
    return {
      requiredOptions: o,
      setOptionalOptions: s.filter(e => {
        var t;
        return null == n || null == (t = n[e.name]) ? true : t.hasValue
      }),
      unsetOptionalOptions: s.filter(e => {
        var t;
        return !(null == n || null == (t = n[e.name]) ? true : t.hasValue)
      })
    }
  }, [t.options, n]), d = (0, r.jsx)("div", {
    className: p.optionalNames,
    children: u.map(e => (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: e.displayName
    }, e.name))
  }), f = o.map(e => m(e, null == n ? true : n[e.name], a)), g = c.length > 0 ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Heading, {
      className: p.optionalHeader,
      variant: "heading-deprecated-12/semibold",
      children: _.intl.string(_.t["5C107K"])
    }), c.map(e => m(e, null == n ? true : n[e.name], a))]
  }) : null, E = u.length > 0 ? (0, r.jsx)(s.u, {
    __unsupportedReactNodeAsText: d,
    "aria-label": false,
    delay: h,
    children: (0, r.jsx)(l.Text, {
      className: p.optionalCount,
      color: "text-muted",
      variant: "text-sm/normal",
      children: 0 === c.length ? _.intl.formatToPlainString(_.t["0mI72g"], {
        count: u.length
      }) : _.intl.formatToPlainString(_.t.BP8N0K, {
        count: u.length
      })
    })
  }) : null;
  return (0, r.jsxs)(r.Fragment, {
    children: [f, null != g || null != E ? (0, r.jsxs)("div", {
      className: p.optionals,
      children: [g, E]
    }) : null]
  })
}

function E(e) {
  var t, n, a;
  let s, {
      command: l,
      activeOptionName: u,
      channel: _,
      showOptions: h,
      showImage: m,
      optionStates: E,
      onOptionClick: b,
      section: y,
      isSelectable: O = true
    } = e,
    v = i.useMemo(() => {
      var e;
      return null == l || null == (e = l.options) ? true : e.find(e => e.name === u)
    }, [u, l]),
    I = null != u ? null == E ? true : E[u] : null;
  s = null != I && (null == (t = I.lastValidationResult) ? true : t.success) === false ? null != (n = I.lastValidationResult.error) ? n : "" : null;
  let T = m && null != y ? (0, d.ky)(y) : null;
  return (0, r.jsxs)("div", {
    className: o()(p.wrapper, O ? null : p.disabled),
    children: [null != T ? (0, r.jsx)(T, {
      className: p.image,
      channel: _,
      section: y,
      width: 32,
      height: 32
    }) : null, (0, r.jsxs)("div", {
      className: p.infoWrapper,
      children: [(0, r.jsxs)("div", {
        className: p.usageWrapper,
        children: [(0, r.jsx)(c.BR, {
          className: p.title,
          children: f.GI + l.displayName
        }), h ? (0, r.jsx)(g, {
          command: l,
          optionStates: E,
          onOptionClick: b
        }) : null]
      }), (0, r.jsx)(c.wL, {
        className: o()(p.description, null != s ? p.error : null),
        children: null != (a = null != s ? s : null == v ? true : v.displayDescription) ? a : l.displayDescription
      })]
    }), (0, r.jsx)(c.dY, {
      className: p.source,
      children: null == y ? true : y.name
    })]
  })
}