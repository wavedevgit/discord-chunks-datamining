/** Chunk was on web.js **/
/** chunk id: 237375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk965386 = require("./965386.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk987826 = require("./987826.jsx"),
  Chunk826298 = require("./826298.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685532 = require("./685532.js");
let g = 200;

function E(e, t, n) {
  return (0, r.jsx)(f.Z, {
    className: h.option,
    name: e.displayName,
    state: t,
    onClick: n
  }, e.name)
}

function b(e) {
  let {
    command: t,
    optionStates: n,
    onOptionClick: o
  } = e, {
    requiredOptions: a,
    setOptionalOptions: s,
    unsetOptionalOptions: u
  } = i.useMemo(() => {
    var e, r, i, o;
    let a = null != (i = null == (e = t.options) ? true : e.filter(e => e.required)) ? i : [],
      s = null != (o = null == (r = t.options) ? true : r.filter(e => !e.required)) ? o : [];
    return {
      requiredOptions: a,
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
    className: h.optionalNames,
    children: u.map(e => (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: e.displayName
    }, e.name))
  }), f = a.map(e => E(e, null == n ? true : n[e.name], o)), p = s.length > 0 ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Heading, {
      className: h.optionalHeader,
      variant: "heading-deprecated-12/semibold",
      children: m.intl.string(m.t["5C107K"])
    }), s.map(e => E(e, null == n ? true : n[e.name], o))]
  }) : null, _ = u.length > 0 ? (0, r.jsx)(l.u, {
    __unsupportedReactNodeAsText: d,
    "aria-label": false,
    delay: g,
    children: (0, r.jsx)(c.Text, {
      className: h.optionalCount,
      color: "text-muted",
      variant: "text-sm/normal",
      children: 0 === s.length ? m.intl.formatToPlainString(m.t["0mI72g"], {
        count: u.length
      }) : m.intl.formatToPlainString(m.t.BP8N0K, {
        count: u.length
      })
    })
  }) : null;
  return (0, r.jsxs)(r.Fragment, {
    children: [f, null != p || null != _ ? (0, r.jsxs)("div", {
      className: h.optionals,
      children: [p, _]
    }) : null]
  })
}

function y(e) {
  var t, n, o;
  let l, {
      command: c,
      activeOptionName: f,
      channel: m,
      showOptions: g,
      showImage: E,
      optionStates: y,
      onOptionClick: O,
      section: v,
      isSelectable: S = true
    } = e,
    I = i.useMemo(() => {
      var e;
      return null == c || null == (e = c.options) ? true : e.find(e => e.name === f)
    }, [f, c]),
    T = null != f ? null == y ? true : y[f] : null;
  l = null != T && (null == (t = T.lastValidationResult) ? true : t.success) === false ? null != (n = T.lastValidationResult.error) ? n : "" : null;
  let C = E && null != v ? (0, p.ky)(v) : null,
    A = (0, s.e7)([d.ZP], () => {
      if (null != m.guild_id && (null == v ? true : v.botId) != null) {
        var e;
        return null == (e = d.ZP.getMember(m.guild_id, v.botId)) ? true : e.nick
      }
    });
  return (0, r.jsxs)("div", {
    className: a()(h.wrapper, S ? null : h.disabled),
    children: [null != C ? (0, r.jsx)(C, {
      className: h.image,
      channel: m,
      section: v,
      width: 32,
      height: 32
    }) : null, (0, r.jsxs)("div", {
      className: h.infoWrapper,
      children: [(0, r.jsxs)("div", {
        className: h.usageWrapper,
        children: [(0, r.jsx)(u.BR, {
          className: h.title,
          children: _.GI + c.displayName
        }), g ? (0, r.jsx)(b, {
          command: c,
          optionStates: y,
          onOptionClick: O
        }) : null]
      }), (0, r.jsx)(u.wL, {
        className: a()(h.description, null != l ? h.error : null),
        children: null != (o = null != l ? l : null == I ? true : I.displayDescription) ? o : c.displayDescription
      })]
    }), (0, r.jsx)(u.dY, {
      className: h.source,
      children: null != A ? A : null == v ? true : v.name
    })]
  })
}