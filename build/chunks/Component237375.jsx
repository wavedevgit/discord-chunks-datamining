/** Chunk was on web.js **/
/** chunk id: 237375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk965386 = require("./965386.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk987826 = require("./987826.jsx"),
  Chunk826298 = require("./826298.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167512 = require("./167512.js");
let g = 200;

function E(e, t, n) {
  return (0, r.jsx)(f.Z, {
    className: m.option,
    name: e.displayName,
    state: t,
    onClick: n
  }, e.name)
}

function b(e) {
  let {
    command: t,
    optionStates: n,
    onOptionClick: a
  } = e, {
    requiredOptions: o,
    setOptionalOptions: s,
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
    className: m.optionalNames,
    children: u.map(e => (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: e.displayName
    }, e.name))
  }), f = o.map(e => E(e, null == n ? true : n[e.name], a)), _ = s.length > 0 ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Heading, {
      className: m.optionalHeader,
      variant: "heading-deprecated-12/semibold",
      children: h.intl.string(h.t["5C107K"])
    }), s.map(e => E(e, null == n ? true : n[e.name], a))]
  }) : null, p = u.length > 0 ? (0, r.jsx)(l.u, {
    __unsupportedReactNodeAsText: d,
    "aria-label": false,
    delay: g,
    children: (0, r.jsx)(c.Text, {
      className: m.optionalCount,
      color: "text-muted",
      variant: "text-sm/normal",
      children: 0 === s.length ? h.intl.formatToPlainString(h.t["0mI72g"], {
        count: u.length
      }) : h.intl.formatToPlainString(h.t.BP8N0K, {
        count: u.length
      })
    })
  }) : null;
  return (0, r.jsxs)(r.Fragment, {
    children: [f, null != _ || null != p ? (0, r.jsxs)("div", {
      className: m.optionals,
      children: [_, p]
    }) : null]
  })
}

function y(e) {
  var t, n, a;
  let l, {
      command: c,
      activeOptionName: f,
      channel: h,
      showOptions: g,
      showImage: E,
      optionStates: y,
      onOptionClick: O,
      section: v,
      isSelectable: I = true
    } = e,
    T = i.useMemo(() => {
      var e;
      return null == c || null == (e = c.options) ? true : e.find(e => e.name === f)
    }, [f, c]),
    S = null != f ? null == y ? true : y[f] : null;
  l = null != S && (null == (t = S.lastValidationResult) ? true : t.success) === false ? null != (n = S.lastValidationResult.error) ? n : "" : null;
  let A = E && null != v ? (0, _.ky)(v) : null,
    C = (0, s.e7)([d.ZP], () => {
      if (null != h.guild_id && (null == v ? true : v.botId) != null) {
        var e;
        return null == (e = d.ZP.getMember(h.guild_id, v.botId)) ? true : e.nick
      }
    });
  return (0, r.jsxs)("div", {
    className: o()(m.wrapper, I ? null : m.disabled),
    children: [null != A ? (0, r.jsx)(A, {
      className: m.image,
      channel: h,
      section: v,
      width: 32,
      height: 32
    }) : null, (0, r.jsxs)("div", {
      className: m.infoWrapper,
      children: [(0, r.jsxs)("div", {
        className: m.usageWrapper,
        children: [(0, r.jsx)(u.BR, {
          className: m.title,
          children: p.GI + c.displayName
        }), g ? (0, r.jsx)(b, {
          command: c,
          optionStates: y,
          onOptionClick: O
        }) : null]
      }), (0, r.jsx)(u.wL, {
        className: o()(m.description, null != l ? m.error : null),
        children: null != (a = null != l ? l : null == T ? true : T.displayDescription) ? a : c.displayDescription
      })]
    }), (0, r.jsx)(u.dY, {
      className: m.source,
      children: null != C ? C : null == v ? true : v.name
    })]
  })
}