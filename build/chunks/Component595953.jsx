/** Chunk was on 4670 **/
/** chunk id: 595953, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => C
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

function I(e) {
  let {
    onSelect: t
  } = e, [i, r] = l.useState(false), u = (0, s.bG)([o.default], () => o.default.getCurrentUser()), T = d.Ay.canUseCustomCallSounds(u), c = l.useRef(null);

  function I(e) {
    T && (r(false), null == t || t(e))
  }
  return (0, n.jsx)(a.YNO, {
    targetElementRef: c,
    shouldShow: i,
    position: "left",
    onRequestClose: () => r(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(a.lGe, {
        children: (0, n.jsx)(S.A, {
          suppressPlaySound: true,
          shouldShowUpsell: false,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: I,
          gridNotice: T ? null : (0, n.jsx)(A.m, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: e => {
      var t, l;
      return (0, n.jsx)(_.dT, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = i[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), l = l = {
        ref: c,
        onClick: () => {
          r(!i)
        },
        text: E.intl.string(E.t.uOe0Az),
        children: (0, n.jsx)(a.R2l, {
          size: "md",
          color: "currentColor",
          className: g.Wo
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          i.push.apply(i, n)
        }
        return i
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t))
    }
  })
}

function O(e) {
  let {
    sound: t
  } = e, {
    previewSound: i
  } = (0, c.A)(t, null), l = 0 === (0, T.wH)() ? E.intl.string(E.t.OASXjt) : E.intl.formatToPlainString(E.t["/8fYO5"], {
    emojiName: t.emojiName,
    soundName: t.name
  });
  return (0, n.jsx)(_.dT, {
    onClick: i,
    text: l,
    children: (0, n.jsx)(a.HKD, {
      size: "md",
      color: "currentColor",
      className: g.wg
    })
  })
}

function C(e) {
  let {
    sound: t,
    isGlobal: i,
    onSelect: l
  } = e, s = null != t, o = null == t ? true : t.emojiId, d = null == t ? true : t.emojiName, T = s && (null != d || null != o);
  return (0, n.jsxs)("div", {
    className: g.D6,
    children: [(0, n.jsxs)("div", {
      className: g.kL,
      children: [T && (0, n.jsx)(u.A, {
        emojiId: o,
        emojiName: d,
        className: g.Zg
      }), (0, n.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-strong",
        className: g.dj,
        children: null == t ? E.intl.string(E.t.PoWNfe) : i ? E.intl.format(E.t.B6HU6O, {
          soundName: t.name,
          subtextHook: e => (0, n.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            tag: "span",
            children: e
          })
        }) : t.name
      }), s ? (0, n.jsx)(O, {
        sound: t
      }) : (0, n.jsx)(a.HKD, {
        size: "md",
        color: "currentColor",
        className: g.Gk
      })]
    }), (0, n.jsxs)("div", {
      className: g.kL,
      children: [(0, n.jsx)(I, {
        onSelect: l
      }), s && !i && (0, n.jsx)(_.dT, {
        onClick: () => l(null),
        text: E.intl.string(E.t.jmtcGA),
        children: (0, n.jsx)(a.ucK, {
          size: "md",
          color: r.A.unsafe_rawColors.RED_400.css,
          className: g.Wo
        })
      })]
    })]
  })
}