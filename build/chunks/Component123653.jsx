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
  } = (0, d.R)(t.id), _ = (0, d.p)(), y = (0, s.bG)([c.A], () => c.A.keyboardModeEnabled), A = l.useCallback(e => {
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
  }, [t, v, _]), C = l.useCallback(() => {
    _.getState().setTagFilter(t.id, new Set), y || n()
  }, [_, t.id, y, n]), O = (0, i.Ay)({
    id: "".concat(t.id, "-all-tags-dropdown-navigator"),
    isEnabled: true,
    wrap: true,
    scrollToStart: p,
    scrollToEnd: p
  }), T = l.useRef(null);
  return l.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != T.current) {
        let e = T.current.querySelector(".".concat(x.Tc));
        null != e && e.focus()
      }
    })
  }, []), (0, r.jsxs)(o.lGe, {
    ref: e => {
      null == b || b(e)
    },
    "aria-label": f.intl.string(f.t.TdqRTh),
    className: x.kL,
    children: [(0, r.jsx)("div", {
      className: x.wx,
      children: (0, r.jsxs)("div", {
        className: x.LD,
        children: [(0, r.jsx)(o.Heading, {
          color: "interactive-text-default",
          variant: "heading-md/semibold",
          className: x.TK,
          children: f.intl.string(f.t.HPu3kq)
        }), (0, r.jsx)("div", {
          className: x.d1,
          children: (0, r.jsx)(o.Text, {
            className: x.lT,
            color: "none",
            variant: "text-xs/medium",
            tabularNumbers: true,
            children: v.size
          })
        })]
      })
    }), (0, r.jsx)(a.hD, {
      navigator: O,
      children: (0, r.jsx)(a.PR, {
        children: e => {
          var t, n;
          let {
            ref: l
          } = e, i = function(e, t) {
            if (null == e) return {};
            var n, r, l, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
              return i
            }
            if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                  i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
              }(e, t), Object.getOwnPropertySymbols)
              for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }(e, ["ref"]);
          return (0, r.jsx)("div", (t = function(e) {
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
          }({
            ref: e => {
              l.current = e, T.current = e
            }
          }, i), n = n = {
            className: x.I8,
            children: j.map(e => (0, r.jsx)(h.A, {
              className: x.Tc,
              tag: e,
              selected: v.has(e.id),
              onClick: () => A(e.id)
            }, e.id))
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })
    }), (0, r.jsx)("div", {
      className: x.me
    }), (0, r.jsx)(o.QWc, {
      "aria-label": f.intl.string(f.t["98EPQP"]),
      onClick: C,
      text: f.intl.string(f.t["98EPQP"])
    })]
  })
}