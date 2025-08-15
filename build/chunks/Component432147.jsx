/** Chunk was on 66866 **/
/** chunk id: 432147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk901461 = require("./901461.js"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js"),
  Chunk723774 = require("./723774.js"),
  Chunk144140 = require("./144140.js"),
  Chunk91159 = require("./91159.js"),
  Chunk576799 = require("./576799.jsx"),
  Chunk488131 = require("./488131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740810 = require("./740810.js");

function C(e) {
  let {
    message: t,
    compact: n
  } = e, i = (0, a.e7)([u.Z], () => u.Z.getChannel(d.default.castMessageIdAsChannelId(t.id)));
  return null == i ? null : (0, r.jsx)(v, {
    channel: i,
    compact: n,
    isSystemMessage: (0, c.Z)(t)
  })
}

function v(e) {
  let {
    channel: t,
    compact: i,
    isSystemMessage: c
  } = e, u = (0, a.e7)([m.Z], () => m.Z.getCount(t.id)), d = function(e) {
    var t;
    let n = (0, a.e7)([m.Z], () => m.Z.getMostRecentMessage(e.id)),
      i = (0, a.e7)([m.Z], () => m.Z.getCount(e.id)),
      l = (0, f.Ok)(e);
    return (null == (t = e.threadMetadata) ? true : t.archived) ? b.intl.string(b.t.ZTo4HR) : null == i || 0 === i ? b.intl.string(b.t.HYtNyM) : null == n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("span", {
        children: b.intl.string(b.t.ZTo4HR)
      }), (0, r.jsx)("span", {
        className: E.timestamp,
        children: (0, f.Ye)(l)
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.Z, {
        message: n,
        channel: e
      }), (0, r.jsx)("span", {
        className: E.timestamp,
        children: (0, f.Ye)(l)
      })]
    })
  }(t), C = null != u && u > 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l()(E.spine, {
        [E.cozy]: !i,
        [E.systemMessageSpine]: c
      })
    }), (0, r.jsx)(o.P3F, {
      onClick: function(e) {
        e.stopPropagation(), (0, g.ok)(t, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          r = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === h.yXg.SPACE || e.which === h.yXg.ENTER) && (e.preventDefault(), (n || r) && (0, g.ok)(t, r))
      },
      onContextMenu: function(e) {
        (0, s.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("90508"), n.e("11300")]).then(n.bind(n, 422200));
          return n => (0, r.jsx)(e, function(e) {
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
            channel: t
          }, n))
        })
      },
      "aria-roledescription": b.intl.string(b.t["8ipxiY"]),
      className: l()(E.container, {
        [E.systemMessageContainer]: c
      }),
      children: (0, r.jsxs)(o.nuw, {
        children: [(0, r.jsxs)("div", {
          className: E.topLine,
          children: [(0, r.jsx)(o.nn4, {
            children: b.intl.string(b.t["7Xm5QE"])
          }), (0, r.jsx)("span", {
            className: E.name,
            children: t.name
          }), (0, r.jsx)("span", {
            className: E.cta,
            "aria-hidden": !C,
            children: (0, p.WE)(u, t.id)
          })]
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          "aria-hidden": true,
          lineClamp: 1,
          color: "header-secondary",
          className: E.bottomLine,
          children: d
        })]
      })
    })]
  })
}