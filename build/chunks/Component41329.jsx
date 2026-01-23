/** Chunk was on web.js **/
/** chunk id: 41329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk557158 = require("./557158.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk963146 = require("./963146.jsx"),
  Chunk664929 = require("./664929.js");
require("./827669.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk27101 = require("./27101.js");
let m = 200;

function g(e, t, n) {
  return (0, r.jsx)(f.A, {
    className: h.uK,
    name: e.displayName,
    state: t,
    onClick: n
  }, e.name)
}

function E(e) {
  let {
    command: t,
    optionStates: n,
    onOptionClick: a
  } = e, {
    requiredOptions: s,
    setOptionalOptions: o,
    unsetOptionalOptions: u
  } = i.useMemo(() => {
    var e, r, i, a;
    let s = null != (e = null == (i = t.options) ? true : i.filter(e => e.required)) ? e : [],
      o = null != (r = null == (a = t.options) ? true : a.filter(e => !e.required)) ? r : [];
    return {
      requiredOptions: s,
      setOptionalOptions: o.filter(e => {
        var t;
        return null == n || null == (t = n[e.name]) ? true : t.hasValue
      }),
      unsetOptionalOptions: o.filter(e => {
        var t;
        return !(null == n || null == (t = n[e.name]) ? true : t.hasValue)
      })
    }
  }, [t.options, n]), d = (0, r.jsx)("div", {
    className: h.$2,
    children: u.map(e => (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: e.displayName
    }, e.name))
  }), f = s.map(e => g(e, null == n ? true : n[e.name], a)), p = o.length > 0 ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Heading, {
      className: h.Ki,
      variant: "heading-deprecated-12/semibold",
      children: _.intl.string(_.t["5C107K"])
    }), o.map(e => g(e, null == n ? true : n[e.name], a))]
  }) : null, E = u.length > 0 ? (0, r.jsx)(l.m, {
    __unsupportedReactNodeAsText: d,
    "aria-label": false,
    delay: m,
    children: (0, r.jsx)(c.Text, {
      className: h.kP,
      color: "text-muted",
      variant: "text-sm/normal",
      children: 0 === o.length ? _.intl.formatToPlainString(_.t["0mI72g"], {
        count: u.length
      }) : _.intl.formatToPlainString(_.t.BP8N0K, {
        count: u.length
      })
    })
  }) : null;
  return (0, r.jsxs)(r.Fragment, {
    children: [f, null != p || null != E ? (0, r.jsxs)("div", {
      className: h.gM,
      children: [p, E]
    }) : null]
  })
}

function y(e) {
  var t, n, a;
  let l, {
      command: c,
      activeOptionName: f,
      channel: _,
      showOptions: m,
      showImage: g,
      optionStates: y,
      onOptionClick: b,
      section: O,
      isSelectable: v = true
    } = e,
    A = i.useMemo(() => {
      var e;
      return null == c || null == (e = c.options) ? true : e.find(e => e.name === f)
    }, [f, c]),
    I = null != f ? null == y ? true : y[f] : null;
  l = null != I && (null == (n = I.lastValidationResult) ? true : n.success) === false ? null != (a = I.lastValidationResult.error) ? a : "" : null;
  let S = g && null != O ? (0, p.Rg)(O) : null,
    T = (0, o.bG)([d.Ay], () => {
      if (null != _.guild_id && (null == O ? true : O.botId) != null) {
        var e;
        return null == (e = d.Ay.getMember(_.guild_id, O.botId)) ? true : e.nick
      }
    });
  return (0, r.jsxs)("div", {
    className: s()(h.iE, v ? null : h.r9),
    children: [null != S ? (0, r.jsx)(S, {
      className: h.Sl,
      channel: _,
      section: O,
      width: 32,
      height: 32
    }) : null, (0, r.jsxs)("div", {
      className: h.QR,
      children: [(0, r.jsxs)("div", {
        className: h.nY,
        children: [(0, r.jsx)(u.dB, {
          className: h.DD,
          children: "/" + c.displayName
        }), m ? (0, r.jsx)(E, {
          command: c,
          optionStates: y,
          onOptionClick: b
        }) : null]
      }), (0, r.jsx)(u.Nd, {
        className: s()(h.h_, null != l ? h.z3 : null),
        children: null != (t = null != l ? l : null == A ? true : A.displayDescription) ? t : c.displayDescription
      })]
    }), (0, r.jsx)(u.Aq, {
      className: h.sP,
      children: null != T ? T : null == O ? true : O.name
    })]
  })
}