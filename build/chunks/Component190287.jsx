/** Chunk was on 5533 **/
/** chunk id: 190287, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk456268 = require("./456268.js"),
  Chunk999382 = require("./999382.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk213018 = require("./213018.js");
let f = e => {
    var t;
    let {
      reason: n = "",
      emoji_name: u,
      onSetReason: p,
      onSelectEmoji: f,
      onClearPressed: b,
      reasonMinLength: x,
      reasonMaxLength: j,
      placeholder: v,
      position: _
    } = e, O = i.useRef(null), [y, C] = i.useState(false), N = (0, l.e7)([m.Z], () => m.Z.isGuildMetadataLoaded());
    return (0, r.jsxs)("div", {
      className: h.reasonContainer,
      children: [(0, r.jsx)(s.yRy, {
        targetElementRef: O,
        onRequestClose: () => {
          C(false)
        },
        shouldShow: y,
        position: "right",
        align: "top",
        animation: s.yRy.Animation.NONE,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(d.Z, {
            pickerIntention: g.Hz.COMMUNITY_CONTENT,
            closePopout: t,
            onSelectEmoji: e => {
              let {
                emoji: n,
                willClose: r
              } = e;
              null != n && f(n), r && t()
            }
          })
        },
        children: () => (0, r.jsx)("div", {
          className: h.background,
          ref: O,
          children: (0, r.jsx)(c.Z, {
            active: false,
            onClick: () => {
              C(true)
            },
            tabIndex: 0,
            renderButtonContents: null != u ? () => (0, r.jsx)(o.Z, {
              emojiName: u,
              animated: false
            }) : null
          })
        })
      }), (0, r.jsxs)("div", {
        className: h.inputContainer,
        children: [(0, r.jsx)(a.Is, {
          inputClassName: h.reason,
          placeholder: v,
          value: n,
          minLength: x,
          maxLength: j,
          onChange: e => {
            p(e)
          },
          defaultDirty: (null == n ? true : n.length) > 0
        }, "text-input-".concat(_, "-").concat(N)), (null != (t = null == n ? true : n.length) ? t : 0) > 0 || null != u ? (0, r.jsx)(a.zx, {
          className: h.clearStatusButton,
          onClick: b,
          look: a.zx.Looks.BLANK,
          size: a.zx.Sizes.NONE,
          tabIndex: false,
          "aria-hidden": true,
          children: (0, r.jsx)(s.k$p, {
            size: "md",
            color: "currentColor",
            className: h.clearStatusIcon
          })
        }) : null]
      })]
    })
  },
  b = e => {
    let {
      reasonMinLength: t,
      reasonMaxLength: n,
      guildId: i,
      reasons: l
    } = e, a = [p.intl.string(p.t["9dhBGh"]), p.intl.string(p.t["8RmhKC"]), p.intl.string(p.t["2t0V8/"]), p.intl.string(p.t.l8WqCQ)], s = [];
    for (let e = 0; e < 4; e++) s.push((0, r.jsx)(f, function(e, t) {
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
    }(function(e) {
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
      position: e,
      placeholder: a[e]
    }, l[e]), {
      onSetReason: t => {
        let n = [...l],
          r = Object.assign({}, l[e], {
            reason: t
          });
        n[e] = r, (0, u.P$)(i, n)
      },
      onSelectEmoji: t => {
        let n = [...l],
          r = Object.assign({}, l[e], {
            emoji_name: t.optionallyDiverseSequence
          });
        n[e] = r, (0, u.P$)(i, n)
      },
      onClearPressed: () => {
        let t = [...l],
          n = {
            reason: "",
            emoji_name: null
          };
        t[e] = n, (0, u.P$)(i, t)
      },
      reasonMinLength: t,
      reasonMaxLength: n
    }), "reasonListItem-" + e));
    return (0, r.jsx)("div", {
      children: s
    })
  }