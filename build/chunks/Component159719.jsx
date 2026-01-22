/** Chunk was on 47841 **/
/** chunk id: 159719, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk885617 = require("./885617.js"),
  Chunk314737 = require("./314737.jsx"),
  Chunk405810 = require("./405810.jsx"),
  Chunk11351 = require("./11351.js"),
  Chunk557300 = require("./557300.js"),
  Chunk534875 = require("./534875.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    guild: t
  } = e, m = (0, i.bG)([s.A], () => s.A.isUploadingEmoji()), p = (0, u.A)(t.id), x = (0, d.A)(t) - p.length, h = (0, o.gN)();
  return (0, r.jsxs)(l.D0$, {
    label: f.intl.string(f.t["LDT0Q/"]),
    disabled: h,
    description: f.intl.format(f.t.H9Jxp6, {
      maxSlots: (0, d.A)(t)
    }),
    children: [(0, r.jsx)(l.hKd, {
      size: 16
    }), (0, r.jsx)(c.A, {
      onChange: (e, i) => {
        null != e && null != i && (0, l.mMO)(async () => {
          let {
            CreateEmojiWithRolesModal: l
          } = await n.e("15224").then(n.bind(n, 429131));
          return n => (0, r.jsx)(l, b(g({}, n), {
            data: e,
            file: i,
            guildId: t.id
          }))
        })
      },
      disabled: h || m || 0 === x,
      size: "md",
      variant: "primary",
      text: f.intl.string(f.t.AuPtov),
      loading: m
    }), (0, r.jsx)(l.hKd, {
      size: 24
    }), (0, r.jsx)(a.Bt, {
      title: f.intl.string(f.t.lu1ZQ2),
      maxSlots: (0, d.A)(t),
      emojiCount: p.length,
      children: (0, r.jsx)(a.zI, {
        guild: t,
        emojis: p,
        onEdit: (e, t) => {
          (0, l.mMO)(async () => {
            let {
              UpdateEmojiRolesModal: i
            } = await n.e("15224").then(n.bind(n, 429131));
            return n => (0, r.jsx)(i, b(g({}, n), {
              emoji: e,
              guildId: t
            }))
          })
        },
        editingDisabled: h
      })
    })]
  })
}