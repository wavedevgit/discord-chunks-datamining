/** Chunk was on 46875 **/
/** chunk id: 123653, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk884362 = require("./884362.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk422844 = require("./422844.js"),
  Chunk435470 = require("./435470.js"),
  Chunk853742 = require("./853742.js"),
  Chunk376310 = require("./376310.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk553017 = require("./553017.js");

function p() {
  return Promise.resolve()
}

function b(e) {
  let {
    channel: t,
    closePopout: n,
    setPopoutRef: b
  } = e, j = (0, u.OT)(t), {
    tagFilter: v
  } = (0, d.R)(t.id), _ = (0, d.p)(), y = (0, s.bG)([c.A], () => c.A.keyboardModeEnabled), A = r.useCallback(e => {
    (0, m.UA)({
      guildId: t.guild_id,
      channelId: t.id,
      tagId: e,
      filterTagIds: Array.from(v),
      added: !v.has(e),
      location: {
        page: g.liQ.GUILD_CHANNEL,
        section: g.JJy.FORUM_CHANNEL_HEADER,
        object: g.ZSU.CHANNEL_TAG
      }
    }), _.getState().toggleTagFilter(t.id, e)
  }, [t, v, _]), C = r.useCallback(() => {
    _.getState().setTagFilter(t.id, new Set), y || n()
  }, [_, t.id, y, n]), T = (0, i.Ay)({
    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
    isEnabled: true,
    wrap: true,
    scrollToStart: p,
    scrollToEnd: p
  }), O = r.useRef(null);
  return r.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != O.current) {
        let e = O.current.querySelector(".".concat(f.Tc));
        null != e && e.focus()
      }
    })
  }, []), (0, l.jsxs)(o.lGe, {
    ref: e => {
      null == b || b(e)
    },
    "aria-label": x.intl.string(x.t.TdqRTh),
    className: f.kL,
    children: [(0, l.jsx)("div", {
      className: f.wx,
      children: (0, l.jsxs)("div", {
        className: f.LD,
        children: [(0, l.jsx)(o.Heading, {
          color: "interactive-text-default",
          variant: "heading-md/semibold",
          className: f.TK,
          children: x.intl.string(x.t.HPu3kq)
        }), (0, l.jsx)("div", {
          className: f.d1,
          children: (0, l.jsx)(o.Text, {
            className: f.lT,
            color: "none",
            variant: "text-xs/medium",
            tabularNumbers: true,
            children: v.size
          })
        })]
      })
    }), (0, l.jsx)(a.hD, {
      navigator: T,
      children: (0, l.jsx)(a.PR, {
        children: e => {
          var t, n;
          let {
            ref: r
          } = e, i = function(e, t) {
            if (null == e) return {};
            var n, l, r, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
              return i
            }
            if (i = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                  i = Object.getOwnPropertyNames(e);
                for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
              }(e, t), Object.getOwnPropertySymbols)
              for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
          }(e, ["ref"]);
          return (0, l.jsx)("div", (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({
            ref: e => {
              r.current = e, O.current = e
            }
          }, i), n = n = {
            className: f.I8,
            children: j.map(e => (0, l.jsx)(h.A, {
              className: f.Tc,
              tag: e,
              selected: v.has(e.id),
              onClick: () => A(e.id)
            }, e.id))
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })
    }), (0, l.jsx)("div", {
      className: f.me
    }), (0, l.jsx)(o.QWc, {
      "aria-label": x.intl.string(x.t["98EPQP"]),
      onClick: C,
      text: x.intl.string(x.t["98EPQP"])
    })]
  })
}