/** Chunk was on 88479 **/
/** chunk id: 2348, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk977258 = require("./977258.js"),
  Chunk637853 = require("./637853.js"),
  Chunk473403 = require("./473403.jsx"),
  Chunk216306 = require("./216306.js"),
  Chunk743475 = require("./743475.js"),
  Chunk827907 = require("./827907.js"),
  Chunk868814 = require("./868814.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk813878 = require("./813878.js");

function v(e) {
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

function O(e, t) {
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

function y(e) {
  let {
    guild: t,
    channel: i
  } = e, l = (0, f.Mf)(i.id);
  return "null" === i.id ? (0, r.jsx)("div", {
    className: a()(_.categoryRow, _.uncategorized),
    children: (0, r.jsx)(o.Text, {
      className: _.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    })
  }) : (0, r.jsxs)(o.P3F, {
    className: a()(_.categoryRow, {
      [_.uncategorized]: "null" === i.id
    }),
    onContextMenu: e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("90508"), n.e("68294"), n.e("8965")]).then(n.bind(n, 139035));
        return n => (0, r.jsx)(e, O(v({}, n), {
          channel: i,
          guild: t
        }))
      })
    },
    onClick: e => (e.stopPropagation(), (0, u.s)(t.id, i.id) ? (0, h.pt)(i.id) : (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("35641").then(n.bind(n, 89216));
      return n => (0, r.jsx)(e, O(v({}, n), {
        guildId: t.id,
        startingChannelId: i.id
      }))
    }), true),
    children: [(0, r.jsx)(o.Text, {
      className: _.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    }), (0, r.jsx)(o.XZJ, {
      "aria-checked": l,
      value: l,
      type: o.XZJ.Types.INVERTED,
      className: _.checkbox,
      displayOnly: true
    })]
  })
}
let C = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk813878.separator
    })
  }),
  N = Chunk647438.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: _.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  E = Chunk647438.memo(function(e) {
    let {
      channel: t,
      category: i,
      guild: l,
      isFirstChannel: p,
      isLastChannel: y,
      tooltipDirection: E = "right"
    } = e, I = (0, f.Mf)(t.id, i.id), S = (0, f.t4)(t.id, i.id), T = (0, f.EH)(t.id, i.id), P = (0, f.lL)(l.id, i.id), w = null != (0, b.Z)(l).find(e => e.id === t.id), R = (0, m.mn)(t.id), Z = e => {
      if (!S) return e.stopPropagation(), (0, u.s)(l.id, t.id) ? (0, h.pt)(t.id) : (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("35641").then(n.bind(n, 89216));
        return n => (0, r.jsx)(e, O(v({}, n), {
          guildId: l.id,
          startingChannelId: t.id
        }))
      }), true
    }, D = e => {
      t.isGuildVocal() ? (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("90508"), n.e("68294"), n.e("18320"), n.e("97755"), n.e("83331"), n.e("76168")]).then(n.bind(n, 213202));
        return n => (0, r.jsx)(e, O(v({}, n), {
          channel: t,
          guild: l
        }))
      }) : (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("5410"), n.e("79695"), n.e("90508"), n.e("33285"), n.e("68294"), n.e("99534"), n.e("76676"), n.e("35755"), n.e("69634"), n.e("37220"), n.e("46653"), n.e("91315"), n.e("18320"), n.e("97755"), n.e("1268"), n.e("36745"), n.e("68197"), n.e("93077"), n.e("55196"), n.e("14350")]).then(n.bind(n, 373651));
        return n => (0, r.jsx)(e, O(v({}, n), {
          channel: t,
          guild: l
        }))
      })
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.ua7, {
        text: null != T ? T : P,
        delay: 500,
        position: E,
        children: e => (0, r.jsxs)(o.P3F, O(v({
          className: a()(_.channelRow, {
            [_.firstChannel]: p,
            [_.lastChannel]: y,
            [_.disabled]: S
          })
        }, e), {
          onClick: Z,
          onContextMenu: D,
          children: [(0, r.jsx)("div", {
            className: _.channelInfo,
            children: (0, r.jsxs)("div", {
              className: _.channelName,
              children: [(0, r.jsx)(g._W, {
                channel: t,
                guild: l
              }), (0, r.jsx)(d.Z, {
                className: _.__invalid_name,
                children: (0, r.jsx)(o.Text, {
                  className: _.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: S ? "text-muted" : "text-default",
                  children: t.name
                })
              }), w ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(N, {
                  index: 0
                }), (0, r.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  className: _.channelSubtitle,
                  color: "text-brand",
                  children: j.intl.string(j.t.mPxmeH)
                })]
              }) : null]
            })
          }), (0, r.jsx)("div", {
            className: _.channelActions,
            children: (0, u.s)(t.guild_id, t.id) ? (0, r.jsx)(o.XZJ, {
              "aria-checked": I,
              value: I,
              type: o.XZJ.Types.INVERTED,
              disabled: S,
              color: R ? s.Z.colors.BG_BRAND.css : s.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
              innerClassName: _.checkboxInner,
              displayOnly: true
            }) : (0, r.jsx)(o.zxk, {
              size: "sm",
              variant: "secondary",
              text: j.intl.string(j.t.zA9d1N),
              icon: o.mBM,
              onClick: x.dG4
            })
          })]
        }))
      }), !y && (0, r.jsx)(C, {})]
    })
  });

function I(e) {
  let {
    categories: t,
    guild: n,
    className: l,
    hasSidebar: a
  } = e, s = i.useCallback(e => {
    let i = t._categories[e];
    return (0, r.jsx)(y, {
      channel: i.channel,
      guild: n
    }, i.channel.id)
  }, [t, n]), o = i.useCallback((e, i) => {
    let l = t._categories[e],
      s = t[l.channel.id][i];
    return null == s ? null : (0, r.jsx)(E, {
      category: l.channel,
      channel: s.channel,
      guild: n,
      isFirstChannel: 0 === i,
      isLastChannel: t[l.channel.id].length - 1 === i,
      tooltipDirection: a ? "right" : "top"
    }, s.channel.id)
  }, [t, n, a]), c = (0, p.tn)(n.id, t, 64);
  return (0, r.jsx)("div", {
    className: l,
    children: c.map((e, t) => {
      let n = s(t),
        i = [],
        l = e.rowCount;
      if (0 === l) return null;
      for (let e = 0; e < l; e++) i.push(o(t, e));
      return (0, r.jsxs)(r.Fragment, {
        children: [n, i]
      })
    })
  })
}