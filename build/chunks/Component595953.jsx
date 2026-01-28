/** Chunk was on 5606 **/
/** chunk id: 595953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk536432 = require("./536432.js"),
  Chunk792348 = require("./792348.js"),
  Chunk674168 = require("./674168.jsx"),
  Chunk989799 = require("./989799.jsx"),
  Chunk69217 = require("./69217.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk443669 = require("./443669.js");

function h(e) {
  let {
    onSelect: t
  } = e, [n, s] = i.useState(false), o = (0, l.bG)([c.default], () => c.default.getCurrentUser()), u = d.Ay.canUseCustomCallSounds(o), p = i.useRef(null);

  function h(e) {
    u && (s(false), null == t || t(e))
  }
  return (0, r.jsx)(a.YNO, {
    targetElementRef: p,
    shouldShow: n,
    position: "left",
    onRequestClose: () => s(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.lGe, {
        children: (0, r.jsx)(m.A, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: h,
          gridNotice: u ? null : (0, r.jsx)(_.m, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: e => {
      var t, i;
      return (0, r.jsx)(g.dT, (t = function(e) {
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
      }({}, e), i = i = {
        ref: p,
        onClick: () => {
          s(!n)
        },
        text: f.intl.string(f.t.uOe0Az),
        children: (0, r.jsx)(a.R2l, {
          size: "md",
          color: "currentColor",
          className: b.Wo
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}

function A(e) {
  let {
    sound: t
  } = e, {
    previewSound: n
  } = (0, p.A)(t, null), i = 0 === (0, u.wH)() ? f.intl.string(f.t.OASXjt) : f.intl.formatToPlainString(f.t["/8fYO5"], {
    emojiName: t.emojiName,
    soundName: t.name
  });
  return (0, r.jsx)(g.dT, {
    onClick: n,
    text: i,
    children: (0, r.jsx)(a.HKD, {
      size: "md",
      color: "currentColor",
      className: b.wg
    })
  })
}

function E(e) {
  let {
    sound: t,
    isGlobal: n,
    onSelect: i
  } = e, l = null != t, c = null == t ? true : t.emojiId, d = null == t ? true : t.emojiName, u = l && (null != d || null != c);
  return (0, r.jsxs)("div", {
    className: b.D6,
    children: [(0, r.jsxs)("div", {
      className: b.kL,
      children: [u && (0, r.jsx)(o.A, {
        emojiId: c,
        emojiName: d,
        className: b.Zg
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-strong",
        className: b.dj,
        children: null == t ? f.intl.string(f.t.PoWNfe) : n ? f.intl.format(f.t.B6HU6O, {
          soundName: t.name,
          subtextHook: e => (0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            tag: "span",
            children: e
          })
        }) : t.name
      }), l ? (0, r.jsx)(A, {
        sound: t
      }) : (0, r.jsx)(a.HKD, {
        size: "md",
        color: "currentColor",
        className: b.Gk
      })]
    }), (0, r.jsxs)("div", {
      className: b.kL,
      children: [(0, r.jsx)(h, {
        onSelect: i
      }), l && !n && (0, r.jsx)(g.dT, {
        onClick: () => i(null),
        text: f.intl.string(f.t.jmtcGA),
        children: (0, r.jsx)(a.ucK, {
          size: "md",
          color: s.A.unsafe_rawColors.RED_400.css,
          className: b.Wo
        })
      })]
    })]
  })
}